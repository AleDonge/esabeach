'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;

const values = [
  {
    number: '01',
    title: 'Relax sul mare',
    text: 'Una spiaggia curata dove rallentare, respirare e godersi davvero la giornata.'
  },
  {
    number: '02',
    title: 'Sapori d\'estate',
    text: 'Self service, pizza al taglio e al piatto per accompagnare ogni momento al mare.'
  },
  {
    number: '03',
    title: 'Musica e tramonti',
    text: 'Dj set ed eventi per trasformare il dopo spiaggia in qualcosa da ricordare.'
  }
];

const stats = [
  {
    value: '12H+',
    label: 'Di estate',
    text: 'Dal primo sole fino alla musica della sera.'
  },
  {
    value: '4',
    label: 'Esperienze',
    text: 'Spiaggia, food, pizza, eventi.'
  },
  {
    value: '1',
    label: 'Atmosfera',
    text: 'Quella che senti appena arrivi.'
  }
];

export default function AboutSection({
  onReserveClick
}: {
  onReserveClick?: () => void;
}) {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-navy py-[90px] md:py-[130px] lg:py-[180px]"
    >
      <div className="absolute left-[-18%] top-[8%] h-[620px] w-[620px] rounded-full bg-ocean/10 blur-[150px]" />
      <div className="absolute right-[-16%] bottom-[4%] h-[560px] w-[560px] rounded-full bg-sand/5 blur-[140px]" />

      <div className="luxury-container relative">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
          <div className="flex flex-col justify-center">
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="mb-5 text-[11px] font-bold uppercase tracking-luxury text-white/62"
            >
              About Esabeach
            </motion.span>

            <motion.h2
              initial={{ y: 36, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.08, ease }}
              className="max-w-[760px] text-[42px] font-bold uppercase leading-[.96] tracking-[-.052em] text-white md:text-[58px] lg:text-[68px]"
            >
              Non è solo spiaggia.
              <br />
              è il posto dove l'estate succede.
            </motion.h2>

            <motion.p
              initial={{ y: 28, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.16, ease }}
              className="mt-8 max-w-[610px] text-[17px] leading-[1.65] text-white/72 md:text-[18px]"
            >
              A Esabeach il mare è solo l’inizio. <br />
              Qui le giornate scorrono tra sole, relax, sapori mediterranei e musica che arriva fino al tramonto.
            </motion.p>

            <motion.p
              initial={{ y: 28, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.24, ease }}
              className="mt-5 max-w-[610px] text-[17px] leading-[1.65] text-white/72 md:text-[18px]"
            >
              Dalla spiaggia al dj set, da una pizza appena sfornata a un aperitivo vista mare: ogni momento ha il suo ritmo.
              Vivi Esabeach. Prima che te lo raccontino gli altri.
            </motion.p>

            <motion.div
              initial={{ y: 26, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.32, ease }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <button
                type="button"
                onClick={onReserveClick}
                className="group inline-flex items-center justify-center gap-8 rounded-full bg-white px-9 py-5 text-[12px] font-bold uppercase tracking-cta text-navy transition-all duration-500 ease-ios hover:scale-[1.03] hover:bg-sand"
              >
                Vieni a scoprirci
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

              <a
                href="#events"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-9 py-5 text-[12px] font-bold uppercase tracking-cta text-white transition-all duration-500 ease-ios hover:border-white hover:bg-white hover:text-navy"
              >
                Scopri gli eventi
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0 round 18px)', opacity: 0 }}
            whileInView={{ clipPath: 'inset(0 0 0% 0 round 18px)', opacity: 1 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 1.25, ease }}
            className="relative min-h-[520px] overflow-hidden rounded-[18px] border border-white/[.08] shadow-soft lg:min-h-[720px]"
          >
            <Image
              src="/media/about.webp"
              alt="Premium Mediterranean beach club atmosphere"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/12 to-transparent" />

            <div className="absolute bottom-7 left-7 right-7 rounded-[24px] border border-white/10 bg-navy/42 p-6 backdrop-blur-2xl">
              <p className="text-[11px] font-bold uppercase tracking-luxury text-ocean">
                The feeling
              </p>
              <p className="mt-4 max-w-[360px] text-[22px] font-bold uppercase leading-[1] tracking-[-.04em] text-white md:text-[28px]">
                Dove l'estate diventa un ricordo.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3 lg:mt-20">
          {values.map((value, index) => (
            <motion.article
              key={value.title}
              initial={{ y: 34, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.82, delay: index * 0.1, ease }}
              className="rounded-luxury border border-white/[.08] bg-white/[.025] p-7 backdrop-blur-xl transition-all duration-700 ease-ios hover:-translate-y-2 hover:border-ocean/30 hover:bg-white/[.04] hover:shadow-glow"
            >
              <span className="text-[11px] font-bold uppercase tracking-[.18em] text-ocean">
                {value.number}
              </span>
              <h3 className="mt-8 text-[19px] font-bold uppercase tracking-[.04em] text-white">
                {value.title}
              </h3>
              <p className="mt-4 text-[14px] leading-[1.55] text-white/62">
                {value.text}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ y: 34, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.9, ease }}
          className="mt-5 grid overflow-hidden rounded-[28px] border border-white/[.08] bg-white/[.025] backdrop-blur-xl md:grid-cols-3"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-b border-white/[.08] p-7 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <p className="text-[46px] font-bold uppercase leading-none tracking-[-.06em] text-white md:text-[58px]">
                {stat.value}
              </p>
              <p className="mt-4 text-[12px] font-bold uppercase tracking-[.14em] text-ocean">
                {stat.label}
              </p>
              <p className="mt-3 text-[14px] text-white/58">{stat.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}