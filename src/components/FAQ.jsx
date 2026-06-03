import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '../data.js';

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-black">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/80 mb-3">
            Ce mă întreabă cei mai mulți
          </p>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white">
            Răspunsuri <span className="instrument italic">scurte</span> la întrebări reale.
          </h2>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md overflow-hidden">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={i > 0 ? 'border-t border-white/10' : ''}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex items-center justify-between w-full text-left px-6 py-5 md:px-8 md:py-6 hover:bg-white/[0.03] transition-colors group"
                >
                  <span className="text-white text-base md:text-lg font-medium pr-6 leading-snug">
                    {item.q}
                  </span>
                  <span className="relative w-5 h-5 shrink-0">
                    <span
                      className={`absolute inset-0 m-auto h-px w-4 bg-white/80 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                    <span
                      className={`absolute inset-0 m-auto h-4 w-px bg-white/80 transition-transform duration-300 ${isOpen ? 'rotate-90 scale-0' : ''}`}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-8 text-white/65 text-sm md:text-base leading-relaxed max-w-3xl">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
