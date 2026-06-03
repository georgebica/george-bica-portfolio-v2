import { verticals } from '../data.js';

export default function Marquee() {
  const items = [...verticals, ...verticals, ...verticals, ...verticals];

  return (
    <section className="relative py-12 border-y border-white/5 bg-black overflow-hidden">
      <p className="text-center text-xs uppercase tracking-[0.3em] text-white/40 mb-8">
        Construiesc pentru
      </p>
      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}
      >
        <div className="flex animate-marquee whitespace-nowrap will-change-transform">
          {items.map((v, i) => (
            <div key={i} className="flex items-center mx-8 shrink-0">
              <span className="instrument italic text-4xl md:text-5xl text-white/90">{v}</span>
              <span className="mx-8 text-white/20 text-4xl">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
