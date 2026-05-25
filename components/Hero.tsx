'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero({
    onReserveClick
  }: {
    onReserveClick: () => void;
  }) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.18]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section id="hero" ref={ref} className="noise relative min-h-[760px] overflow-hidden bg-navy h-screen">
      <motion.div style={{ scale: imageScale }} className="absolute inset-0">
        <Image src="/media/hero.webp" alt="Mediterranean sunset beach club atmosphere" fill priority className="object-cover object-center" sizes="100vw" />
        {/*
        <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline poster="/media/hero.webp">
          <source src="/media/hero-video.mp4" type="video/mp4" />
        </video>
        */}
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,24,38,.72)_0%,rgba(7,24,38,.20)_45%,rgba(7,24,38,.45)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,24,38,.20)_0%,rgba(7,24,38,.08)_42%,rgba(7,24,38,.92)_100%)]" />

      <motion.div style={{ y: textY }} className="luxury-container relative z-10 flex h-full items-end pb-28 pt-[88px] md:pb-36">
        <div className="max-w-[760px]">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.25, ease }}
              className="text-balance text-[54px] font-bold uppercase leading-[.95] tracking-[-.055em] text-white md:text-[96px]"
            >
              LA TUA ESTATE<br />INIZIA QUI
            </motion.h1>
          </div>

          <motion.p
            initial={{ y: 26, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.35, ease }}
            className="mt-8 max-w-[420px] text-lg leading-[1.45] text-white/86 md:text-[20px]"
          >
            Tramonti sul mare, cucina d'autore, dj set<br />e notti che ti restano dentro. 
          </motion.p>

          <motion.div
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.52, ease }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <button
              type="button"
              onClick={onReserveClick}
              className="group inline-flex items-center justify-center gap-8 rounded-full bg-white px-9 py-5 text-[12px] font-bold uppercase tracking-cta text-navy transition-all duration-500 ease-ios hover:scale-[1.03] hover:bg-sand"
            >
              Prenota la tua esperienza
              <ArrowUpRight size={17} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
            <a href="#events" className="group inline-flex items-center gap-5 text-[12px] font-bold uppercase tracking-cta text-white">
              Esplora l'estate
              <span className="grid h-9 w-9 place-items-center rounded-full border border-white/45 transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-navy">
                <ChevronRight size={15} />
              </span>
            </a>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-28 right-10 z-10 hidden items-center gap-6 lg:flex">
        <span className="rotate-[-90deg] text-[10px] font-bold uppercase tracking-[.35em] text-white/70">Scroll</span>
        <span className="h-24 w-px bg-white/70" />
      </div>
    </section>
  );
}
