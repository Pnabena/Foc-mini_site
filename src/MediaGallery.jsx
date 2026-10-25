import React, {useEffect, useRef, useState} from 'react';
import {campaign, moments} from './content';
export const mediaUrl = path => !path ? '' : /^(https?:|blob:|data:)/.test(path) ? path : `${import.meta.env.BASE_URL}${path.replace(/^\//,'')}`;

function BrandArt({item}) {
  return <div className="brand-art" aria-hidden="true">{item.artwork ? <img src={mediaUrl(item.artwork)} alt=""/> : <><img className="pattern-art" src={mediaUrl('assets/pattern-purple.svg')} alt=""/><span>{item.type==='video'?'▶':'✦'}</span></>}</div>;
}
function MomentCard({item,index,onOpen,motionPaused,onFocus}) {
  const video=useRef(null); const [failed,setFailed]=useState(false);
  useEffect(()=>{setFailed(false)},[item.src,item.previewSrc]);
  useEffect(()=>{if(motionPaused)video.current?.pause()},[motionPaused]);
  const preview=item.type==='video'&&(item.previewSrc||item.src);
  function play(){if(video.current){video.current.muted=true;video.current.play().catch(()=>{})}}
  function stop(){video.current?.pause()}
  return <div className="moment-wrap" style={{'--card-angle':`${-index*360/moments.length}deg`}}>
    <button className={`moment-card ${item.tone} ${item.src?'has-media':''}`} onClick={()=>{stop();onOpen(item)}} onMouseEnter={()=>{if(!motionPaused)play()}} onMouseLeave={stop} onFocus={e=>{if(e.currentTarget.matches(':focus-visible')){onFocus(index);if(!motionPaused)play()}}} onBlur={stop} aria-label={`Open ${item.type==='story'?'story':item.type}: ${item.title}${item.type==='video'&&!item.src?' (film to come)':''}`}>
      {item.type==='photo'&&item.src&&!failed&&<img src={mediaUrl(item.src)} alt={item.alt||item.title} onError={()=>setFailed(true)}/>}
      {preview&&!failed&&<video ref={video} src={mediaUrl(preview)} poster={mediaUrl(item.poster)||undefined} muted loop playsInline preload="none" aria-hidden="true" onError={()=>setFailed(true)}/>}
      {(!item.src||failed)&&<BrandArt item={item}/>}
      {item.type==='video'&&!preview&&item.poster&&<img src={mediaUrl(item.poster)} alt=""/>}
      <span className="moment-category">{item.category}</span>
      <span className="moment-bottom"><span className="moment-title">{item.title}</span><span className="moment-action" aria-hidden="true">{item.type==='video'?'▶':'↗'}</span></span>
      {(item.type==='video'&&!item.src||failed)&&<span className="media-status">{failed?'MEDIA UNAVAILABLE':'FILM TO COME'}</span>}
    </button>
  </div>;
}

export default function MediaGallery(){
  const [selected,setSelected]=useState(null),[overrides,setOverrides]=useState({}),[paused,setPaused]=useState(false),[reduced,setReduced]=useState(false),[hover,setHover]=useState(false),[focused,setFocused]=useState(false),[error,setError]=useState('');
  const dialog=useRef(null), player=useRef(null), scene=useRef(null), ring=useRef(null), blobs=useRef(new Set()), rotation=useRef(55), inView=useRef(true);
  useEffect(()=>{const query=window.matchMedia('(prefers-reduced-motion: reduce)');const sync=()=>setReduced(query.matches);sync();query.addEventListener('change',sync);return()=>query.removeEventListener('change',sync)},[]);
  useEffect(()=>{const observer=new IntersectionObserver(([entry])=>{inView.current=entry.isIntersecting});observer.observe(scene.current);return()=>observer.disconnect()},[]);
  useEffect(()=>()=>{blobs.current.forEach(url=>URL.revokeObjectURL(url))},[]);
  const current=selected?{...selected,...overrides[selected.id]}:null;
  useEffect(()=>{if(selected&&!dialog.current.open)dialog.current.showModal();document.body.classList.toggle('modal-open',!!selected);return()=>document.body.classList.remove('modal-open')},[selected]);
  const noMotion=paused||reduced||!!selected||hover||focused;
  useEffect(()=>{
    let frame,last=0;
    const tick=now=>{if(last&&!noMotion&&inView.current&&!document.hidden){rotation.current=(rotation.current+Math.min(now-last,50)*0.0035)%360;ring.current.style.transform=`rotateY(${rotation.current}deg)`}last=now;frame=requestAnimationFrame(tick)};
    if(!reduced)frame=requestAnimationFrame(tick);
    return()=>cancelAnimationFrame(frame);
  },[noMotion,reduced]);
  function turn(direction){setPaused(true);if(reduced){scene.current.scrollBy({left:direction*280,behavior:'instant'});return}rotation.current+=direction*360/moments.length;ring.current.style.transform=`rotateY(${rotation.current}deg)`}
  function focusCard(index){if(reduced)return;rotation.current=index*360/moments.length;ring.current.style.transform=`rotateY(${rotation.current}deg)`}
  function open(item){setError('');setSelected(item)}
  function close(){player.current?.pause();dialog.current.close()}
  function closed(){player.current?.pause();setSelected(null);setError('')}
  function addMedia(event){
    const file=event.target.files?.[0];if(!file)return;
    const expected=current.type==='video'?'video/':'image/';
    if(!file.type.startsWith(expected)){setError(`Choose a ${current.type==='video'?'video':'photo'} file.`);event.target.value='';return}
    const old=overrides[current.id]?.src;
    if(old){URL.revokeObjectURL(old);blobs.current.delete(old)}
    const url=URL.createObjectURL(file);blobs.current.add(url);
    setOverrides(prev=>({...prev,[current.id]:{src:url,previewSrc:'',alt:file.name}}));setError('');event.target.value='';
  }
  function clearMedia(){const old=overrides[current.id]?.src;if(old){URL.revokeObjectURL(old);blobs.current.delete(old)}setOverrides(prev=>{const copy={...prev};delete copy[current.id];return copy});setError('')}
  return <div className={`moments ${reduced?'reduced-motion':''} ${noMotion?'motion-paused':''}`}>
    <div className="cylinder-entrance"><div className="cylinder-scene" ref={scene} aria-label="Fellowship experiences" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} onFocusCapture={()=>setFocused(true)} onBlurCapture={e=>{if(!e.currentTarget.contains(e.relatedTarget))setFocused(false)}}>
      <div className="cylinder-ring" ref={ring} style={{transform:'rotateY(55deg)'}}>{moments.map((item,index)=><MomentCard key={item.id} item={{...item,...overrides[item.id]}} index={index} onOpen={open} motionPaused={paused||reduced||!!selected} onFocus={focusCard}/>)}</div>
    </div></div>
    <div className="moments-caption wrap"><p>A glimpse of our life together.<br/><span>Explore a moment. Discover the story.</span></p><div className="gallery-controls"><button className="motion-toggle" aria-pressed={paused||reduced} disabled={reduced} onClick={()=>setPaused(v=>!v)}>{reduced?'Reduced motion':paused?'▶ Resume':'Ⅱ Pause'}</button><button className="round-button" aria-label="Previous experiences" onClick={()=>turn(-1)}>←</button><button className="round-button" aria-label="Next experiences" onClick={()=>turn(1)}>→</button></div></div>
    <dialog className="experience-dialog" ref={dialog} aria-labelledby="experience-title" onClose={closed} onClick={e=>{if(e.target===dialog.current)close()}}>
      {current&&<><button className="close" aria-label="Close experience" onClick={close}>×</button><div className={`experience-stage ${current.tone}`}>
        {current.src?current.type==='video'?<video key={current.src} ref={player} src={mediaUrl(current.src)} poster={mediaUrl(current.poster)||undefined} controls playsInline preload="metadata" onError={()=>setError('This video could not be played. Try an MP4 with H.264 video and AAC audio.')}>
          {current.captions&&<track kind="captions" src={mediaUrl(current.captions)} srcLang="en" label="English" default/>}
        </video>:<img src={mediaUrl(current.src)} alt={current.alt||current.title} onError={()=>setError('This image could not be loaded. Try a JPEG, PNG or WebP file.')}/>:<div className="experience-empty"><BrandArt item={current}/>{current.type==='video'&&<span>FELLOWSHIP FILM TO COME</span>}</div>}
      </div><div className="experience-copy"><p className="eyebrow">{current.category}</p><h2 id="experience-title">{current.title}</h2><p>{current.description}</p>{current.type==='video'&&current.src&&<p className="micro">Press play to watch with sound. Use the player to pause or adjust the volume.</p>}{current.transcript&&<details><summary>Read the transcript <span>+</span></summary><p className="transcript">{current.transcript}</p></details>}
      {campaign.preview&&current.type!=='story'&&<div className="preview-picker"><label htmlFor="moment-file">Try a {current.type==='video'?'video':'photo'} from your device</label><input id="moment-file" type="file" accept={current.type==='video'?'video/*':'image/*'} onChange={addMedia}/><p className="micro">Local preview only. Nothing is uploaded. Refreshing clears your selections.</p>{overrides[current.id]&&<button className="text-link reset-media" onClick={clearMedia}>Remove local preview</button>}</div>}{error&&<p className="media-error" role="alert">{error}</p>}</div></>}
    </dialog>
  </div>;
}
