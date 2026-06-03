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
    blurb: 'Pentru cei care vor să arate profesionist mâine, nu peste 3 luni.',
    features: [
      'O pagină lungă, structurată pentru conversie',
      'Design unic, nu șablon de WordPress',
      'Buton WhatsApp + formular contact',
      'SEO de bază + Google Maps',
      'Livrare în 5–7 zile',
    ],
    cta: 'Cere ofertă',
    waMsg: 'Vreau Pagina de Prezentare Premium.',
    featured: false,
  },
  {
    eyebrow: 'Pachetul recomandat',
    title: 'Website',
    titleAccent: 'de Business',
    from: 950,
    to: 1250,
    blurb: 'Site complet de 4–6 pagini, gata să primească clienți din Google.',
    features: [
      '4–6 pagini (Acasă, Servicii, Despre, Contact + extras)',
      'SEO on-page complet pe cuvinte cheie locale',
      'Galerie / portofoliu lucrări',
      'Formulare avansate + integrare WhatsApp',
      'Schema markup pentru rich results',
      'Livrare în 10–14 zile',
    ],
    cta: 'Începem astăzi',
    waMsg: 'Vreau Website-ul de Business.',
    featured: true,
  },
  {
    eyebrow: 'Soluție completă',
    title: 'Premium',
    titleAccent: 'Business+',
    from: 1800,
    to: 3500,
    blurb: 'Pentru afaceri serioase care vor un site cu funcții reale, nu doar o broșură.',
    features: [
      'Site multi-pagină + zonă admin pentru editare',
      'Programări online / calendar integrat',
      'Blog + pagini SEO programatic (opțional)',
      'Multilingv (RO + EN) la cerere',
      'Integrare CRM / email marketing',
      'Mentenanță 3 luni inclusă',
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
  { q: 'Fac și magazine online?', a: 'Da, dar doar la pachetul Premium Business+. Pentru produse simple (<50) lucrez direct, pentru cataloage mari folosesc Shopify sau WooCommerce.' },
];

export const verticals = ['Auto · Service', 'Stomatologie', 'Atelier creativ', 'Vulcanizare', 'Restaurante', 'Saloane', 'Cabinete', 'Construcții'];
