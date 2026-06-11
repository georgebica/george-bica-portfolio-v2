export const WA = 'https://wa.me/40768486096';
export const WA_TEXT = (msg) => `${WA}?text=${encodeURIComponent(msg)}`;
export const EMAIL = 'george.bica@hotmail.com';

export const shot = (url) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1200`;

export const projects = [
  {
    url: 'https://auto-lcd.ro',
    tag: 'Service auto · 2026',
    title: 'AUTO LCD',
    desc: 'Programări online, listă servicii, hartă atelier. Mobile-first pentru clienții pe drum.',
    live: true,
  },
  {
    url: 'https://kreativartdesign.ro',
    tag: 'Atelier creativ · 2026',
    title: 'Kreativ Art Design',
    desc: 'Galerie lucrări, comenzi personalizate, formulare scurte care convertesc.',
  },
  {
    url: 'https://platinumdental.ro',
    tag: 'Stomatologie · 2025',
    title: 'Platinum Dental',
    desc: 'Pagini servicii clare, programări WhatsApp, dovezi sociale vizibile pe telefon.',
    live: true,
  },
  {
    url: 'https://tiresmobileslatina.ro',
    tag: 'Vulcanizare mobilă · 2026',
    title: 'Tires Mobile Slatina',
    desc: 'Buton sună-acum, zonă de acoperire, sezon vară/iarnă — totul pe mobil.',
  },
];

export const tiers = [
  {
    eyebrow: 'Pachet de start',
    title: 'Pagină de Prezentare',
    titleAccent: 'Premium',
    from: 600,
    to: 900,
    blurb: 'Pentru cei care au nevoie rapid de o prezență profesională online.',
    features: [
      'O pagină de prezentare optimizată pentru conversie',
      'Design personalizat (fără șabloane)',
      'Secțiuni: Hero, Servicii, Despre, Testimoniale, Contact',
      'Buton WhatsApp și contact rapid',
      'Formular de contact',
      'SEO de bază inclus',
      'Adaptare mobilă și tabletă',
      'Conectare Google Maps',
      'Viteză optimizată',
      'Livrare în 2–4 zile',
    ],
    idealFor: 'freelanceri, meșteri, consultanți, servicii locale.',
    cta: 'Cere ofertă',
    waMsg: 'Vreau Pagina de Prezentare Premium.',
    featured: false,
  },
  {
    eyebrow: 'Pachetul recomandat',
    title: 'Website',
    titleAccent: 'de Business',
    from: 950,
    to: 1400,
    blurb: 'Site complet pentru firme care vor să atragă clienți din Google.',
    features: [
      '4–6 pagini (Acasă, Servicii, Despre, Contact + extra)',
      'Design personalizat',
      'SEO + optimizare pentru Google și AI Search',
      'Formular contact / cerere ofertă',
      'Panou pentru editarea textelor și imaginilor',
      'Galerie lucrări / portofoliu',
      'Schema Markup pentru rezultate Google',
      'Integrare Google Analytics',
      'Integrare Google Search Console',
      'WhatsApp și CTA-uri optimizate',
      'Viteză și performanță optimizate',
      'Livrare în 4–7 zile',
    ],
    idealFor: 'firme de servicii, clinici, saloane, construcții, agenții.',
    cta: 'Începem astăzi',
    waMsg: 'Vreau Website-ul de Business.',
    featured: true,
  },
  {
    eyebrow: 'Soluție completă',
    title: 'Premium',
    titleAccent: 'Business+',
    from: 2500,
    to: null,
    blurb: 'Pentru afaceri care vor mai mult decât un site: automatizare și generare de lead-uri.',
    features: [
      'Tot ce este inclus în Website de Business',
      '8–15 pagini personalizate',
      'Sistem de programări online',
      'Dashboard administrare conținut',
      'Blog optimizat SEO',
      'Multilingv (RO + EN)',
      'Integrare CRM',
      'Automatizări email',
      'Tracking conversii și lead-uri',
      'Integrare Meta Pixel',
      'Integrare Google Ads Tracking',
      'Pagini dedicate pentru servicii și locații',
      'Prioritate la suport',
      'Mentenanță 3 luni inclusă',
      'Training video pentru utilizare',
      'Livrare în 7–14 zile',
    ],
    cta: 'Discutăm proiectul',
    waMsg: 'Vreau Premium Business+.',
    featured: false,
  },
];

export const steps = [
  { n: '01', title: 'Brief pe WhatsApp — 15 minute', desc: 'Îmi spui ce faci, cine sunt clienții, ce vrei să facă vizitatorii pe site. Atât.' },
  { n: '02', title: 'Demo gratuit în 48 de ore', desc: 'Vezi prima pagină reală, nu un mockup. Dacă nu-ți place, nu plătești nimic.' },
  { n: '03', title: 'Dezvoltare + două runde de revizii', desc: 'Construiesc restul site-ului și ajustăm până e exact cum vrei.' },
  { n: '04', title: 'Lansare + îți arăt cum să-l administrezi', desc: 'Domeniu configurat, Google Search Console, ghid scurt video. Site-ul e al tău.', accent: true },
];

export const faqs = [
  { q: 'Pot să-mi editez singur site-ul după?', a: 'Da. La pachetele de la 950 lei în sus primești zonă admin sau CMS prin care editezi text, imagini și pagini fără să mă suni.' },
  { q: 'Cât costă mentenanța după primul an?', a: 'Hostingul + domeniul costă ~150 lei/an. Mentenanță activă (modificări lunare, monitorizare) — opțional, 80 lei/lună. Nu e obligatoriu.' },
  { q: 'Ce înseamnă „mobile-first”?', a: 'Peste 70% din vizitatorii tăi vor intra de pe telefon. Eu construiesc site-ul mai întâi pentru telefon, apoi îl adaptez pentru desktop — invers față de majoritatea.' },
  { q: 'Cum apare site-ul pe Google?', a: 'Toate site-urile pleacă cu SEO on-page corect: titluri, descrieri, schema markup, sitemap, viteză. Apariția în primele rezultate locale durează 4–8 săptămâni, fără trucuri.' },
  { q: 'Fac și magazine online?', a: 'Da, dar doar la pachetul Premium Business+.' },
];

export const verticals = ['Auto · Service', 'Stomatologie', 'Atelier creativ', 'Vulcanizare', 'Restaurante', 'Saloane', 'Cabinete', 'Construcții'];
