'use client';

import { experienceCards } from '@/data/site';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ease = [0.22, 1, 0.36, 1] as const;

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative overflow-hidden bg-navy py-[90px] md:py-[130px] lg:py-[180px]">
      <div className="absolute right-0 top-0 h-[720px] w-[720px] rounded-full bg-ocean/10 blur-[150px]" />
      <div className="luxury-container relative grid gap-16 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
        <motion.div
          initial={{ clipPath: 'inset(0 100% 0 0 round 18px)', opacity: 0 }}
          whileInView={{ clipPath: 'inset(0 0% 0 0 round 18px)', opacity: 1 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 1.25, ease }}
          className="relative min-h-[520px] overflow-hidden rounded-[18px] shadow-soft lg:min-h-[690px]"
        >
          <Image src="/media/experience.webp" alt="Cocktail during golden hour at ESABEACH" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/45 via-transparent to-transparent" />
        </motion.div>

        <div className="flex flex-col justify-center">
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="mb-5 text-[11px] font-bold uppercase tracking-luxury text-white/62"
          >
            Experience
          </motion.span>
          <motion.h2
            initial={{ y: 36, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.08, ease }}
            className="max-w-[720px] text-[42px] font-bold uppercase leading-[.98] tracking-[-.045em] text-white md:text-[52px]"
          >
            Vivi l'esperienza<br />Esabeach
          </motion.h2>

          <div className="mt-8 grid gap-4">
            {experienceCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.article
                  key={card.title}
                  initial={{ y: 34, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: '-70px' }}
                  transition={{ duration: 0.82, delay: 0.12 * index, ease }}
                  className="group grid grid-cols-[48px_1fr_138px] items-center gap-5 overflow-hidden rounded-luxury border border-white/[.08] bg-white/[.025] p-5 shadow-[0_20px_70px_rgba(0,0,0,.16)] backdrop-blur-xl transition-all duration-700 ease-ios hover:-translate-y-2 hover:border-ocean/30 hover:bg-white/[.04] hover:shadow-glow max-sm:grid-cols-[44px_1fr]"
                >
                  <span className="grid h-12 w-12 place-items-center text-white/86">
                    <Icon size={29} strokeWidth={1.25} />
                  </span>
                  <div>
                    <h3 className="text-[16px] font-bold uppercase tracking-[.08em] text-white md:text-[18px]">{card.title}</h3>
                    <p className="mt-2 max-w-[320px] text-[14px] leading-[1.45] text-white/70">{card.text}</p>
                  </div>
                  <div className="relative h-[96px] overflow-hidden rounded-2xl max-sm:col-span-2 max-sm:h-[170px]">
                    <Image src={card.image} alt="" fill className="object-cover transition-transform duration-[1400ms] ease-ios group-hover:scale-105" sizes="160px" />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
