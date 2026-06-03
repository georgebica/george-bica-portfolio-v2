# George Bica — Portfolio (React)

Vite + React 18 + Tailwind v3 version of the portfolio. Same design, copy, SEO meta
and JSON-LD schema as the single-file `george-bica-portfolio/index.html`, just
componentized.

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173.

## Build for production

```bash
npm run build
npm run preview
```

Static output lands in `dist/` — deploy anywhere (Vercel, Netlify, GitHub Pages, Cloudflare Pages, any static host).

## Where things live

- `index.html` — `<head>` meta, OG/Twitter cards, ProfessionalService JSON-LD schema, Google Fonts (Inter + Instrument Serif)
- `src/data.js` — projects, pricing tiers, process steps, FAQ, contact info — edit copy here
- `src/components/` — one file per section (Nav, Hero, Marquee, Projects, Pricing, Process, FAQ, Contact, Footer)
- `tailwind.config.js` — `ink` / `paper` / `accent` / `muted` color tokens and the marquee keyframe

## Editing contact info

WhatsApp number, email and offer prices are referenced from `src/data.js` **and**
from the JSON-LD block in `index.html`. Change both when updating.

## Notes

- Project screenshots come from WordPress mshots (`s.wordpress.com/mshots/v1/...`).
  First load per domain renders on-demand and may show a placeholder for a few seconds.
- No tracking, no cookies, no analytics by default.
