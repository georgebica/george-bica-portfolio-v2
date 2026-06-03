import { projects, shot } from '../data.js';

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/80 mb-3">
              Proiecte selectate · 2025–2026
            </p>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white">
              Site-uri reale, <span className="instrument italic">cu clienți reali</span>.
            </h2>
          </div>
          <p className="max-w-md text-white/60 text-base leading-relaxed">
            Fără mockup-uri. Fiecare link de mai jos este un site live, cu trafic și mesaje primite zilnic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <a
              key={p.url}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/25 hover:bg-white/[0.04] transition-all duration-500"
            >
              <div className="aspect-[16/10] overflow-hidden border-b border-white/10">
                <img
                  src={shot(p.url)}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col gap-3">
                <span className="text-xs uppercase tracking-widest text-emerald-300/70">{p.tag}</span>
                <h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight group-hover:text-emerald-200 transition-colors">
                  {p.title}
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed">{p.desc}</p>
                <div className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-white/80 group-hover:text-white">
                  Vezi site-ul
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
