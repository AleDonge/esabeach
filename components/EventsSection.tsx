'use client';

import { events } from '@/data/site';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const ease = [0.22, 1, 0.36, 1] as const;

export default function EventsSection({
  onReserveClick,
  onEventBookingClick
}: {
  onReserveClick: () => void;
  onEventBookingClick: (event: (typeof events)[number]) => void;
}) {
  const [selectedEvent, setSelectedEvent] = useState<(typeof events)[number] | null>(null);

  return (
    <>
      <section id="events" className="relative overflow-hidden bg-navy pb-[80px] md:pb-[120px]">
      <div className="luxury-container">
        <div className="mb-12 flex items-end justify-between gap-8">
          <div>
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="mb-5 block text-[11px] font-bold uppercase tracking-luxury text-white/62"
            >
              Events
            </motion.span>
            <motion.h2
              initial={{ y: 32, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.08, ease }}
              className="text-[42px] font-bold uppercase leading-[.98] tracking-[-.045em] text-white md:text-[52px]"
            >
              Summer Sessions
            </motion.h2>
          </div>
          <a href="#" className="group hidden items-center gap-7 text-[12px] font-bold uppercase tracking-cta text-white md:inline-flex">
            View all events
            <span className="grid h-10 w-10 place-items-center rounded-full border border-white/35 transition-all duration-500 group-hover:bg-white group-hover:text-navy">
              <ArrowRight size={16} />
            </span>
          </a>
        </div>

        <div className="relative">
          <button aria-label="Previous events" className="absolute -left-9 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/5 text-white backdrop-blur lg:grid">
            <ArrowLeft size={16} />
          </button>
          <button aria-label="Next events" className="absolute -right-9 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/5 text-white backdrop-blur lg:grid">
            <ArrowRight size={16} />
          </button>

          <div className="-mx-6 flex snap-x gap-5 overflow-x-auto px-6 pb-8 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden">
            {events.map((event, index) => (
              <motion.article
                key={event.artist}
                onClick={() => setSelectedEvent(event)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedEvent(event);
                  }
                }}
                initial={{ y: 38, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-70px' }}
                transition={{ duration: 0.82, delay: index * 0.1, ease }}
                className="group relative h-[360px] min-w-[82vw] cursor-pointer snap-center overflow-hidden rounded-[14px] border border-white/[.06] bg-white/[.03] shadow-soft transition-all duration-700 ease-ios hover:-translate-y-2 hover:border-ocean/35 hover:shadow-glow sm:min-w-[430px] md:min-w-0 lg:h-[410px]"
              >
                <Image src={event.image} alt={`${event.artist} event at ESABEACH`} fill className="object-cover transition-transform duration-[1700ms] ease-ios group-hover:scale-110" sizes="(max-width: 768px) 82vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-b from-navy/18 via-navy/24 to-navy/88" />
                <div className="absolute left-7 top-7">
                  <p className="text-[44px] font-bold leading-none tracking-[-.06em] text-white lg:text-[52px]">{event.day}</p>
                  <p className="mt-1 text-[18px] font-medium uppercase tracking-[.08em] text-white/82">{event.month}</p>
                </div>
                <div className="absolute inset-x-7 bottom-7">
                  <h3 className="text-[25px] font-bold uppercase leading-none tracking-[-.04em] text-white lg:text-[30px]">{event.artist}</h3>
                  <p className="mt-2 text-[13px] font-bold uppercase tracking-[.09em] text-white/82">{event.label}</p>
                  <div className="mt-9 flex items-center justify-between">
                    <a href="#reserve" className="group/link relative text-[12px] font-bold uppercase tracking-[.05em] text-white">
                      Scopri l'evento
                      <span className="absolute -bottom-1 left-0 h-px w-full origin-left bg-white transition-transform duration-500 group-hover/link:scale-x-75" />
                    </a>
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-white/55 transition-all duration-500 group-hover:bg-white group-hover:text-navy">
                      <ArrowUpRight size={17} />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>

      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[95] overflow-y-auto bg-navy/70 px-4 py-4 backdrop-blur-xl md:flex md:justify-center md:p-8"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ y: 80, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 60, opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="relative my-auto grid w-full max-w-[980px] overflow-hidden rounded-[28px] border border-white/10 bg-[#071826]/95 shadow-[0_40px_120px_rgba(0,0,0,.55)] backdrop-blur-2xl md:h-auto md:max-h-[calc(100vh-64px)] md:grid-cols-[0.9fr_1.1fr]"
            >
              <button
                aria-label="Close event details"
                onClick={() => setSelectedEvent(null)}
                className="absolute right-5 top-5 z-20 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-xl transition-all duration-500 hover:bg-white hover:text-navy"
              >
                <X size={18} />
              </button>

              <div className="relative min-h-[280px] md:min-h-[560px]">
                <Image
                  src={selectedEvent.image}
                  alt={`${selectedEvent.artist} at ESABEACH`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />

                <div className="absolute left-7 top-7">
                  <p className="text-[56px] font-bold leading-none tracking-[-.06em] text-white">
                    {selectedEvent.day}
                  </p>
                  <p className="mt-1 text-[18px] font-bold uppercase tracking-[.12em] text-white/80">
                    {selectedEvent.month}
                  </p>
                </div>
              </div>

              <div className="flex max-h-none flex-col p-6 md:max-h-[calc(100vh-64px)] md:overflow-y-auto md:p-10 lg:p-12">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-luxury text-ocean">
                    Event Details
                  </span>

                  <h3 className="mt-6 text-[42px] font-bold uppercase leading-[.95] tracking-[-.05em] text-white md:text-[58px]">
                    {selectedEvent.artist}
                  </h3>

                  <p className="mt-3 text-[13px] font-bold uppercase tracking-[.12em] text-white/65">
                    {selectedEvent.label}
                  </p>

                  <p className="mt-8 max-w-[460px] text-[17px] leading-[1.55] text-white/76">
                    {selectedEvent.description}
                  </p>

                  <div className="mt-10 grid gap-4 border-y border-white/10 py-7 text-sm text-white/78">
                    <div className="flex items-center justify-between gap-6">
                      <span className="uppercase tracking-[.18em] text-white/42">Time</span>
                      <span>{selectedEvent.time}</span>
                    </div>
                    <div className="flex items-center justify-between gap-6">
                      <span className="uppercase tracking-[.18em] text-white/42">Location</span>
                      <span>{selectedEvent.location}</span>
                    </div>
                    <div className="flex items-center justify-between gap-6">
                      <span className="uppercase tracking-[.18em] text-white/42">Access</span>
                      <span>{selectedEvent.price}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => {
                      if (!selectedEvent) return;

                      setSelectedEvent(null);
                      onEventBookingClick(selectedEvent);
                    }}
                    className="group inline-flex items-center justify-center gap-8 rounded-full bg-white px-8 py-5 text-[12px] font-bold uppercase tracking-cta text-navy transition-all duration-500 hover:scale-[1.03] hover:bg-sand"
                  >
                    Partecipa ora
                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </button>

                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="rounded-full border border-white/20 px-8 py-5 text-[12px] font-bold uppercase tracking-cta text-white transition-all duration-500 hover:border-white hover:bg-white hover:text-navy"
                  >
                    Chiudi
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

