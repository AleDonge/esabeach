'use client';

import { navLinks } from '@/data/site';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({
    onReserveClick
  }: {
    onReserveClick: () => void;
  }) {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 90], ['rgba(7, 24, 38, 0)', 'rgba(7, 24, 38, 0.72)']);
  const border = useTransform(scrollY, [0, 90], ['rgba(255,255,255,0)', 'rgba(255,255,255,0.08)']);

  return (
    <>
      <motion.header
        style={{ backgroundColor: bg, borderBottomColor: border }}
        className="fixed left-0 top-0 z-50 h-[88px] w-full border-b backdrop-blur-2xl"
      >
        <nav className="mx-auto flex h-full w-[calc(100%-48px)] max-w-content items-center justify-between lg:w-[calc(100%-160px)]">
          <a href="#hero" className="text-[17px] font-bold uppercase tracking-[.55em] text-white transition-transform duration-700 ease-ios hover:scale-[1.015]">
            ESABEACH
          </a>

          <div className="hidden items-center gap-16 lg:flex">
            {navLinks.map((item) => (
              <a
                href={`#${item.toLowerCase()}`}
                key={item}
                className="group relative text-[11px] font-bold uppercase tracking-[.12em] text-white/70 transition-opacity duration-500 hover:text-white"
              >
                {item}
                <span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-white transition-all duration-500 ease-ios group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={onReserveClick}
              className="hidden rounded-full border border-white/55 px-9 py-3 text-[11px] font-bold uppercase tracking-cta text-white transition-all duration-500 ease-ios hover:border-white hover:bg-white hover:text-navy md:inline-flex"
            >
              Vienici a scoprire
            </button>
            <button aria-label="Open navigation menu" onClick={() => setOpen(true)} className="grid h-11 w-11 place-items-center text-white">
              <Menu size={34} strokeWidth={1.4} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, filter: 'blur(16px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(16px)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[90] bg-navy/92 backdrop-blur-3xl"
          >
            <button aria-label="Close navigation menu" onClick={() => setOpen(false)} className="absolute right-6 top-6 grid h-14 w-14 place-items-center text-white">
              <X size={34} strokeWidth={1.2} />
            </button>
            <div className="flex h-full flex-col items-center justify-center gap-8">
              {navLinks.map((item, index) => (
                <motion.a
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  href={`#${item.toLowerCase()}`}
                  key={item}
                  onClick={() => setOpen(false)}
                  className="text-4xl font-bold uppercase tracking-tight text-white"
                >
                  {item}
                </motion.a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  onReserveClick();
                }}
                className="mt-8 rounded-full bg-sand px-10 py-4 text-xs font-bold uppercase tracking-cta text-navy"
              >
                Vienici a scoprire
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
