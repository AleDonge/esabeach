'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;

export default function CTASection({
  onReserveClick
}: {
  onReserveClick: () => void;
}) {
  return (
    <section id="reserve" className="bg-navy pb-[80px] md:pb-[110px]">
      <div className="luxury-container">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease }}
          className="noise relative overflow-hidden rounded-[14px] bg-sand px-6 py-20 text-center text-navy shadow-soft md:px-12 md:py-28"
        >
          <div className="absolute right-[-8%] top-0 h-full w-[50%] rotate-[-18deg] bg-[repeating-linear-gradient(90deg,rgba(7,24,38,.10)_0_10px,transparent_10px_36px)] opacity-35 blur-[1px]" />
          <div className="relative z-10 mx-auto max-w-[760px]">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="mx-auto mb-7 flex h-12 w-12 items-center justify-center"
            >
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none" aria-hidden="true">
                <path d="M9 25.5c3.2-3 6.4-3 9.6 0s6.4 3 9.6 0S34.6 22.5 38 25.5" stroke="currentColor" strokeWidth="1.4" />
                <path d="M12 31c3-2.4 6-2.4 9 0s6 2.4 9 0" stroke="currentColor" strokeWidth="1.4" />
                <path d="M21 7v7M12.5 10.5l5 5M29.5 10.5l-5 5M7 19h7M28 19h7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </motion.div>
            <motion.h2
              initial={{ y: 28, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.08, ease }}
              className="text-[42px] font-bold uppercase leading-[.98] tracking-[-.045em] md:text-[58px]"
            >
              Un esperienza da vivere,<br />Non da raccontare.
            </motion.h2>
            <motion.button
              type="button"
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, ease }}
              onClick={onReserveClick}
              className="group mt-10 inline-flex w-full items-center justify-center gap-12 rounded-full bg-navy px-9 py-5 text-[12px] font-bold uppercase tracking-cta text-white shadow-[0_22px_50px_rgba(7,24,38,.25)] transition-all duration-500 ease-ios hover:scale-[1.03] hover:bg-white hover:text-navy active:scale-[.97] sm:w-auto sm:min-w-[315px]"
            >
              Inizia la tua estate
              <ArrowUpRight size={17} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
