import { lazy, Suspense } from 'react';
import { LiquidButton } from './ui/liquid-glass-button.jsx';
import { WA_TEXT } from '../data.js';

// Loaded only in the browser. During the server prerender, `window` is
// undefined so the import never resolves and <Suspense> renders the static
// gradient fallback instead — keeping WebGL/Three.js out of the SSR build.
const WarpShader = lazy(() =>
  typeof window === 'undefined'
    ? new Promise(() => {})
    : import('./ui/warp-shader.jsx')
);

const ShaderFallback = () => (
  <div
    className="h-full w-full"
    style={{
      background:
        'linear-gradient(135deg, hsl(200,100%,12%), hsl(180,90%,25%), hsl(160,100%,30%))',
    }}
  />
);

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Suspense fallback={<ShaderFallback />}>
          <WarpShader />
        </Suspense>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60 pointer-events-none" />

      <div className="relative z-10 min-h-screen flex items-center px-6 md:px-12 lg:px-20 pt-24 pb-16">
        <div className="max-w-5xl w-full space-y-8">
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight">
            Site-uri care <span className="instrument italic font-normal">aduc clienți</span>,
            <br />
            nu doar arată bine.
          </h1>

          <p className="text-white/85 text-lg md:text-xl max-w-2xl leading-relaxed">
            Sunt George, web designer freelance. Construiesc site-uri rapide, mobile-first, optimizate
            pentru Google — livrate în 7–14 zile. Tarife clare de la 600 lei.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2 items-start sm:items-center">
            <a
              href={WA_TEXT('Salut George, vreau un site nou.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-white rounded-full text-black text-sm font-semibold hover:bg-white/90 transition-all hover:scale-[1.02] inline-flex items-center justify-center gap-2"
            >
              Scrie-mi pe WhatsApp
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375a9.869 9.869 0 0 1-1.516-5.26c.002-5.45 4.437-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a11.882 11.882 0 0 0 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411" />
              </svg>
            </a>

            <LiquidButton
              size="xl"
              className="text-white border border-white/20 rounded-full"
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Vezi proiectele
              <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </LiquidButton>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-8 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <span>Demo gratuit în 48h</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <span>Cod propriu, nu WordPress</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <span>SEO inclus în orice pachet</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/55 text-xs uppercase tracking-widest pointer-events-none">
        <span>Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/55 to-transparent" />
      </div>
    </section>
  );
}
