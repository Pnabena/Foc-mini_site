// Approved editorial content can later be supplied through a CMS adapter.
// Empty media paths and null funding figures are intentional, not missing defaults.
export const campaign = {
  preview: true, // Hides preview labels/device media picker when false. Complete launch review first.
  completionTarget: 215000,
  received: null,
  usabilityTarget: null,
  verifiedDate: '',
  donationUrl: '', // Approved HTTPS payment destination only.
  email: 'info@fellowshipofchristians.org.uk',
};
export const story = {
  intro: 'Fellowship of Christians is an independent, interdenominational Christian charity based in Portsmouth, bringing together people from different cultures, backgrounds and generations.',
  mission: 'Through biblical teaching, prayer, worship, discipleship and practical Christian care, we seek to lead people to faith in Jesus Christ and help believers become rooted in Him.',
  paragraphs: [
    'Our story began in 1997, when a doctoral student newly arrived in the UK founded the International Fellowship of Christian Students (IFCS) at the University of Portsmouth, within the University’s Students’ Union.',
    'What began as a student fellowship gradually developed into a wider Christian community. Graduates remained involved, some settling in Portsmouth and others maintaining connections after moving elsewhere. People beyond the university joined, members married and started families, and children grew up within the fellowship.',
    'Through these relationships and a deliberate broadening of its ministry, the fellowship came to serve people across different generations and stages of life.',
    'In 2026, Fellowship of Christians became a separately registered charity. IFCS continued its independent activities within the University’s Students’ Union, maintaining its relationship with the wider fellowship.',
  ],
};
export const timeline = [
  ['1997', 'Where the story began', 'IFCS was founded by a newly arrived doctoral student, within the University of Portsmouth’s Students’ Union.'],
  ['Through the years', 'Beyond university life', 'Graduates stayed connected, families grew and people beyond the university joined a widening community.'],
  ['2026', 'A new chapter', 'Fellowship of Christians became a separate registered charity. IFCS continues independently within the Students’ Union, connected to the wider fellowship.'],
];
export const impact = [
  ['01', 'Faith that shapes everyday life', 'People have come to faith in Jesus Christ, deepened their understanding of Scripture and grown in Christian maturity. Members have developed gifts in teaching, worship and leadership, with some serving beyond the fellowship.'],
  ['02', 'Belonging, wherever life leads', 'Students arriving in Portsmouth have found friendship, practical assistance and a sense of belonging. Friendships and support networks connect current members with alumni across the UK and overseas.'],
  ['03', 'Care across generations', 'Members support one another through personal, financial and family difficulties. Children and young people receive Christian teaching, mentoring and opportunities to participate.'],
];
export const activities = [
  ['Sunday worship', 'Gathering in faith and fellowship.'],
  ['Morning prayer', 'Online, three days a week.'],
  ['Bible studies', 'Fortnightly, in members’ homes.'],
  ['Life together', 'Retreats, seminars and group gatherings.'],
];
export const challenges = [
  ['Access & space', 'Restricted access and available space limit what can take place beyond Sunday gatherings, including activities for children and young people. Technical and audiovisual limitations also affect gatherings.'],
  ['Setup & storage', 'Volunteers prepare the venue, set up equipment and pack everything away. Limited storage makes it difficult to keep materials conveniently on site.'],
  ['Extra venues & costs', 'Choir rehearsals, seminars, conferences, retreats and celebrations often need additional venue hire, with further logistical and setup demands.'],
  ['Continuity & planning', 'Some activities have been changed, postponed or unable to take place. Uncertain availability makes pastoral support, outreach and longer-term planning harder.'],
];
export const benefits = [
  ['More dependable access', 'Greater flexibility for worship, teaching, prayer, fellowship and activities involving different age groups.'],
  ['Time to serve people', 'Less dependence on separately hired facilities and fewer recurring demands to set up and dismantle meeting spaces.'],
  ['A place to welcome', 'A stronger base for welcoming people, supporting families and nurturing children and young people.'],
  ['Room to plan ahead', 'Better arrangements for equipment and storage, and a more stable foundation for organising ministry and planning for the future.'],
];
export const faqs = [
  ['What is the campaign for?', 'The proposed acquisition of 3a Powerscourt Road in Portsmouth offers an opportunity to establish a more stable and flexible home for the fellowship’s continuing ministry. The campaign includes completion and enabling the property to become usable.'],
  ['What does the £215,000 represent?', '£215,000 is specifically the completion requirement. The additional amount needed to make the property usable and the current reconciled funding position are awaiting confirmation.'],
  ['How are Fellowship of Christians and IFCS connected?', 'Fellowship of Christians became a separately registered charity in 2026. IFCS continues its independent activities within the University of Portsmouth’s Students’ Union, maintaining its relationship with the wider fellowship.'],
  ['Can I help without making a donation?', 'Yes. You can introduce the campaign to someone you genuinely know who may welcome it, direct them to the information here, or contact the team with a question. Giving is according to personal circumstances.'],
  ['Can a church or organisation find out more?', 'Yes. Explore the information here and contact the team if a conversation or further evidence would help. There is no need to make an immediate commitment.'],
  ['What happens if circumstances change?', 'Arrangements for shortfall, excess funds, transaction failure and designated gifts are awaiting approved wording. Please contact the team for clarification before making a commitment.'],
];
export const updates = []; // [{date:'YYYY-MM-DD', title:'Approved heading', body:'Approved text'}]
export const introduction = 'I thought you might be interested in the Fellowship of Christians campaign for a permanent home at 3a Powerscourt Road in Portsmouth. Would you be happy for me to share more information? There is no pressure to contribute.';

// Photographs are extracted from the supplied September 2026 newsletter (Back.pdf).
// Descriptions explain the ministry; they are not testimony attributed to people pictured.
// Set src/previewSrc on video records when approved films arrive.
export const moments = [
  {id:'together', type:'photo', title:'Life together', category:'OUR COMMUNITY', tone:'plum', description:'A moment from the fellowship’s life together, shared in the September 2026 newsletter.', src:'assets/together.webp', alt:'Fellowship participants standing in a large circle inside a hall'},
  {id:'worship', type:'video', title:'Together in worship', category:'WORSHIP', tone:'lilac', description:'Sunday worship brings the fellowship together. Volunteer teams support worship, prayer and the wider life of the community.', src:'', previewSrc:'', poster:'', captions:'', transcript:''},
  {id:'community', type:'photo', title:'A place to belong', category:'FRIENDSHIP', tone:'gold', description:'Friendship is part of fellowship life. This photograph was shared in the September 2026 newsletter.', src:'assets/community.webp', alt:'A group of Fellowship members standing together outdoors on grass'},
  {id:'rooted', type:'story', title:'Rooted in Christ', category:'AT OUR HEART', tone:'plum', artwork:'assets/rooted-lilac.svg', description:'Through biblical teaching, prayer, worship, discipleship and practical Christian care, the fellowship seeks to nurture a faith that shapes everyday life and service to others.'},
  {id:'gathering', type:'photo', title:'Room for connection', category:'FELLOWSHIP', tone:'clay', description:'A gathering shared in the September 2026 newsletter. Personal relationships and opportunities to gather are central to the fellowship’s ministry.', src:'assets/gathering.webp', alt:'Fellowship participants seated together in a meeting room'},
  {id:'scripture', type:'video', title:'Growing in faith', category:'DISCIPLESHIP', tone:'gold', description:'Biblical teaching, prayer and fortnightly Bible studies in members’ homes help nurture faith that shapes everyday life.', src:'', previewSrc:'', poster:'', captions:'', transcript:''},
  {id:'welcome', type:'story', title:'A warm welcome', category:'BELONGING', tone:'lilac', description:'For students arriving in Portsmouth, particularly those adapting to life in a new country, the fellowship has offered friendship, practical assistance and a sense of belonging.'},
  {id:'care', type:'video', title:'Love in action', category:'PRACTICAL CARE', tone:'plum', description:'Through donations, members purchased a van for pick-up and drop-off services. Volunteers contribute their time to help people take part in fellowship activities.', src:'', previewSrc:'', poster:'', captions:'', transcript:''},
  {id:'generations', type:'story', title:'Built up in love', category:'ACROSS GENERATIONS', tone:'clay', description:'Children and young people receive Christian teaching, mentoring and opportunities to take part. Families and friendships have grown with the fellowship.'},
  {id:'prayer', type:'story', title:'Faith in everyday life', category:'PRAYER & COMMUNITY', tone:'gold', description:'Alongside Sunday worship, the fellowship meets for online morning prayers three days a week, fortnightly Bible studies in members’ homes, retreats, seminars and group gatherings.'},
];
