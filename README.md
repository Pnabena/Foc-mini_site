# Fellowship of Christians mini-site · Version 3

React front end, 25 October 2026. A single-page campaign site built around the fellowship’s story, impact and proposed permanent home.

## Run it

Use Node.js 22.12+ or a compatible newer LTS. Extract this folder, open a terminal here and run:

```sh
npm ci
npm run dev
```

Open the local URL printed in the terminal. For a production build:

```sh
npm run build
npm run preview
```

The ZIP includes a ready-built `dist/` folder. Serve it over HTTP rather than double-clicking `index.html`. Relative asset paths support subfolder hosting. No hosting account is required to develop locally.

## What changed in version 3

- A rotating, inward-facing 3D media ring creates the curved perspective seen in the Bending Spoons reference. The introduction fades, rises and sharpens into view. This is an independent implementation, not the reference site’s source or assets.
- Ten media/story cards: three real Fellowship photographs, three film spaces and four branded story cards.
- Actual Marcellus and Manrope typefaces, self-hosted in the build.
- The supplied palette, hand-cut “Rooted in Christ” artwork, patterns and halftone texture.
- Oversized editorial storytelling, photo-led ministry panels, a textured brand section, varied section layouts and a clearer funding panel.
- Responsive layouts, one-page anchor navigation, a mobile menu, pause/resume controls, manual gallery navigation, keyboard access and reduced-motion support.

## Try your own media

Open a photo or film card and choose a matching file from your device. Photo cards accept images; film cards accept videos. Selections update the hero and larger viewer during that browser session. Remove a selection to restore the supplied asset.

This is a **temporary local preview**. Nothing is uploaded, no server receives the selected file, and refreshing clears selections. Branded story cards have no media picker.

Once a video is supplied, mouse hover or keyboard focus can play a muted preview. Opening the viewer pauses the hero videos. The full video starts with sound only when the visitor presses its play control. Closing the viewer stops playback. There is no page-wide soundtrack.

The ring pauses on hover, keyboard focus, an open viewer or the pause control. Manual arrows also pause rotation. Reduced-motion preferences switch to a static, horizontally browsable strip.

## Add permanent content

Put approved images and films in `public/assets/`, then edit the matching record in `src/content.js`:

```js
{
  id: 'worship', type: 'video', title: 'Together in worship',
  category: 'WORSHIP', tone: 'lilac',
  description: 'Approved description of this film.',
  src: 'assets/worship.mp4',
  previewSrc: 'assets/worship-preview.mp4',
  poster: 'assets/worship-poster.webp',
  captions: 'assets/worship-en.vtt',
  transcript: 'Approved plain-text transcript.'
}
```

`src` is the full video, `previewSrc` an optional short loop, `poster` its cover and `captions` an optional WebVTT file. With no preview clip, the full video is used for muted previews. Use browser-supported files such as H.264/AAC MP4. HTTPS file URLs work; YouTube/Vimeo watch-page URLs need a separate embed integration.

Photo records use `src` and an accurate `alt`. Hero cards crop to fill; the viewer shows the full image. Prefer compressed WebP/JPEG images and short preview clips.

Add confirmed campaign updates to `updates` using `{date: 'YYYY-MM-DD', title: 'Heading', body: 'Text'}`.

| File | Purpose |
| --- | --- |
| `src/content.js` | Story, timeline, ministry, media, campaign facts, FAQs and updates |
| `src/MediaGallery.jsx` | 3D gallery, local preview selection and accessible media viewer |
| `src/main.jsx` | Page composition, headings, navigation and giving information |
| `src/styles.css` | Brand styles, responsive layouts and motion |
| `public/assets/` | Fellowship assets, extracted photographs and future films |
| `licenses/` | Bundled font licence notices |

## CMS and payments

This remains the requested front-end development package. No CMS, database, persistent media upload or payment processor is connected. The content module and media fields can feed a future CMS adapter. A real CMS must provide authenticated editing, stored assets and publishing controls. Do not put secret keys into this front end.

`campaign.donationUrl` is blank. Giving buttons open information and a contact link; they do not collect money. Add an approved HTTPS destination when ready.

`campaign.preview` controls the preview banner and local file picker. Set it to `false` after the public-launch review. Resolve or remove unfinished film slots first.

## Campaign decisions still open

- £215,000 is the completion requirement from the revised governing brief. The earlier postcard’s £250,000 figure remains a conflict to resolve. No £35,000 estimate is inferred.
- Current reconciled funding, additional costs to make the property usable and verification date remain unconfirmed. No artificial progress bar or deadline is shown.
- Approved wording for shortfall, excess funds, transaction failure and designated gifts is still needed.
- Final films, captions, transcripts, media permissions, charity/property details and the giving route require confirmation before public launch.
- The latest supplied narrative governs the story: Fellowship of Christians became a separately registered charity in 2026; IFCS continues independently within the University’s Students’ Union and remains connected to the wider fellowship.

## Asset sources

- Fellowship SVG logos: supplied purple and white logo files.
- `rooted-lilac.svg` / `rooted-white.svg`: supplied `headline.svg` / `headline-1.svg`.
- `pattern-purple.svg` / `pattern-white.svg`: supplied `Pattern.svg` / `Pattern 2.svg`.
- `texture.webp`: optimised from supplied `Texture Pattern.png`.
- `together.webp`, `community.webp`, `gathering.webp`: real photographs extracted from the supplied September 2026 newsletter, `Back.pdf`. Captions identify this source; ministry descriptions are not testimony attributed to people pictured.
- `property.webp`: campaign artwork extracted from the V3 donation postcard. Illustrative signage is labelled on the page.
- Palette values: purple #260080, violet #694CD0, lilac #E1C3FF, cream #FFF9EF, yellow #F4CE45, charcoal #1C1C1C. Newsletter-inspired pink/peach and a dark purple support the web layouts.
- Marcellus and Manrope: Fontsource packages with SIL Open Font License notices included. Fonts are served locally, with no Google Fonts request at runtime.

No reference-site media, stock people, fabricated testimonials or generated Fellowship photographs are included. Dates and event schedules from the newsletter have not been presented as current site schedules.

See `QA.md` for validation and remaining limits. `node_modules` and temporary QA files are excluded from the ZIP.
