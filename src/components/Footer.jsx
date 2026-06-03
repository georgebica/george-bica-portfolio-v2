import { EMAIL, WA } from '../data.js';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-5 h-5">
                <span className="absolute w-1.5 h-1.5 rounded-full bg-emerald-300 top-0 left-1/2 -translate-x-1/2" />
                <span className="absolute w-1.5 h-1.5 rounded-full bg-white/80 left-0 top-1/2 -translate-y-1/2" />
                <span className="absolute w-1.5 h-1.5 rounded-full bg-white/80 right-0 top-1/2 -translate-y-1/2" />
                <span className="absolute w-1.5 h-1.5 rounded-full bg-white/80 bottom-0 left-1/2 -translate-x-1/2" />
              </div>
              <span className="text-white font-semibold tracking-tight">George Bica</span>
            </div>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs">
              Web designer freelance. Site-uri rapide, mobile-first, optimizate SEO pentru afaceri mici din România.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 md:col-span-2">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40 mb-4">Navighează</p>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#projects" className="text-white/75 hover:text-white transition-colors">Proiecte</a></li>
                <li><a href="#process" className="text-white/75 hover:text-white transition-colors">Proces</a></li>
                <li><a href="#pricing" className="text-white/75 hover:text-white transition-colors">Prețuri</a></li>
                <li><a href="#faq" className="text-white/75 hover:text-white transition-colors">Întrebări</a></li>
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40 mb-4">Contact</p>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href={WA} target="_blank" rel="noopener noreferrer" className="text-white/75 hover:text-white transition-colors">
                    WhatsApp · 0768 486 096
                  </a>
                </li>
                <li>
                  <a href={`mailto:${EMAIL}`} className="text-white/75 hover:text-white transition-colors break-all">
                    {EMAIL}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-white/45">
          <p>© {year} George Bica. Toate drepturile rezervate.</p>
          <p>Construit cu React, Tailwind și un shader de la Paper Design.</p>
        </div>
      </div>
    </footer>
  );
}
