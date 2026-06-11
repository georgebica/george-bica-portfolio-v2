import { tiers, WA_TEXT } from '../data.js';

function Check() {
  return (
    <svg className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-14 mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/80 mb-3">
            Tarife clare · în lei
          </p>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white">
            Alegi pachetul.
            <br />
            <span className="instrument italic">Eu duc restul.</span>
          </h2>
          <p className="mt-5 text-white/60 text-base md:text-lg">
            Fără surprize, fără „de la” mic scris cu litere mărunte. Prețul de mai jos e ce plătești.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:items-stretch">
          {tiers.map((t) => (
            <div
              key={t.title}
              className={`relative flex flex-col rounded-2xl border p-8 md:p-9 transition-all
                ${t.featured
                  ? 'border-emerald-300/50 bg-gradient-to-b from-emerald-400/[0.07] via-cyan-500/[0.04] to-transparent md:scale-[1.04] md:-mt-2 md:mb-2 shadow-[0_0_60px_-15px_rgba(110,231,183,0.25)]'
                  : 'border-white/10 bg-white/[0.02] hover:border-white/20'
                }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-300 text-black">
                  Recomandat
                </span>
              )}

              <p className="text-xs uppercase tracking-[0.25em] text-white/50 mb-4">{t.eyebrow}</p>
              <h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight">
                {t.title}{' '}
                <span className="instrument italic font-normal text-white/90">{t.titleAccent}</span>
              </h3>
              <p className="mt-3 text-white/60 text-sm leading-relaxed min-h-[3rem]">{t.blurb}</p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-xs text-white/50">de la</span>
                <span className="text-5xl font-light text-white tracking-tighter">{t.from}</span>
                <span className="text-white/60 text-base">{t.to ? `–${t.to} lei` : 'lei'}</span>
              </div>

              <a
                href={WA_TEXT(t.waMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all
                  ${t.featured
                    ? 'bg-emerald-300 text-black hover:bg-emerald-200'
                    : 'bg-white/10 text-white border border-white/15 hover:bg-white/15'
                  }`}
              >
                {t.cta}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              <div className="mt-7 pt-7 border-t border-white/10 flex-1">
                <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/40 mb-4">
                  Ce primești
                </p>
                <ul className="flex flex-col gap-3 text-sm">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-white/80">
                      <Check />
                      <span className="leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
                {t.idealFor && (
                  <p className="mt-6 pt-5 border-t border-white/10 text-xs text-white/45 leading-relaxed">
                    <span className="text-white/60">Ideal pentru:</span> {t.idealFor}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-white/45 text-sm">
          Domeniu + hosting: ~150 lei/an. TVA inclus în prețuri.
        </p>
      </div>
    </section>
  );
}
