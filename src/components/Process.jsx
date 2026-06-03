import { steps } from '../data.js';

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 bg-black overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(40% 70% at 0% 50%, hsl(170 80% 30% / 0.25) 0%, transparent 60%), radial-gradient(40% 70% at 100% 50%, hsl(195 80% 25% / 0.25) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/80 mb-3">
            Cum lucrăm
          </p>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white">
            Un proces <span className="instrument italic">simplu</span>,
            <br />
            de la mesaj la lansare.
          </h2>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {steps.map((s) => (
            <li
              key={s.n}
              className={`relative rounded-2xl border p-7 md:p-9 backdrop-blur-sm overflow-hidden
                ${s.accent
                  ? 'border-emerald-300/40 bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-transparent'
                  : 'border-white/10 bg-white/[0.02]'
                }`}
            >
              <div className="flex items-start gap-5">
                <span
                  className={`shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full text-sm font-semibold
                    ${s.accent ? 'bg-emerald-300 text-black' : 'bg-white/10 text-white border border-white/15'}`}
                >
                  {s.n}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl md:text-2xl font-medium text-white tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-white/65 text-sm md:text-base leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
