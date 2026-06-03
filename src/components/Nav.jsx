import { useState, useEffect } from 'react';
import { WA_TEXT } from '../data.js';

const links = [
  { label: 'Proiecte', href: '#projects' },
  { label: 'Proces', href: '#process' },
  { label: 'Prețuri', href: '#pricing' },
  { label: 'Întrebări', href: '#faq' },
];

function HoverLink({ href, children }) {
  return (
    <a
      href={href}
      className="group relative inline-block overflow-hidden h-5 leading-5 text-sm align-middle"
    >
      <div className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
        <span className="block h-5 leading-5 text-white/70">{children}</span>
        <span className="block h-5 leading-5 text-white">{children}</span>
      </div>
    </a>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50
        flex flex-col items-center
        px-5 py-2.5
        backdrop-blur-md
        ${open ? 'rounded-2xl' : 'rounded-full'}
        border border-white/15
        ${scrolled ? 'bg-black/60' : 'bg-white/[0.06]'}
        w-[calc(100%-1.5rem)] sm:w-auto
        transition-[background-color,border-radius] duration-300`}
    >
      <div className="flex items-center justify-between w-full gap-x-6 sm:gap-x-8">
        <a href="#top" className="flex items-center gap-2">
          <div className="relative w-5 h-5">
            <span className="absolute w-1.5 h-1.5 rounded-full bg-emerald-300 top-0 left-1/2 -translate-x-1/2" />
            <span className="absolute w-1.5 h-1.5 rounded-full bg-white/80 left-0 top-1/2 -translate-y-1/2" />
            <span className="absolute w-1.5 h-1.5 rounded-full bg-white/80 right-0 top-1/2 -translate-y-1/2" />
            <span className="absolute w-1.5 h-1.5 rounded-full bg-white/80 bottom-0 left-1/2 -translate-x-1/2" />
          </div>
          <span className="text-white font-semibold text-sm tracking-tight">George Bica</span>
        </a>

        <nav className="hidden sm:flex items-center space-x-5">
          {links.map((l) => (
            <HoverLink key={l.href} href={l.href}>{l.label}</HoverLink>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-2">
          <a
            href={WA_TEXT('Salut George, vreau o discuție rapidă.')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 text-xs font-semibold text-black bg-white rounded-full hover:bg-white/90 transition-colors"
          >
            Discutăm
          </a>
        </div>

        <button
          className="sm:hidden flex items-center justify-center w-8 h-8 text-white/90"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Închide meniul' : 'Deschide meniul'}
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      <div
        className={`sm:hidden flex flex-col items-center w-full transition-all ease-in-out duration-300 overflow-hidden
          ${open ? 'max-h-96 opacity-100 pt-4' : 'max-h-0 opacity-0 pt-0 pointer-events-none'}`}
      >
        <nav className="flex flex-col items-center space-y-3 text-base w-full">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-white/80 hover:text-white w-full text-center py-1">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={WA_TEXT('Salut George, vreau o discuție rapidă.')}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 px-4 py-2 text-sm font-semibold text-black bg-white rounded-full w-full text-center"
        >
          Discutăm pe WhatsApp
        </a>
      </div>
    </header>
  );
}
