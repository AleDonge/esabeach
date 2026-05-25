'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { events } from '@/data/site';

const ease = [0.22, 1, 0.36, 1] as const;

const experiences = [
  {
    title: 'Pranzo',
    description: 'Prenota il tuo posto per un pranzo indimenticabile.'
  },
  {
    title: 'Cena',
    description: 'Goditi la brezza serale in riva al mare.'
  },
  {
    title: 'Aperitivo',
    description: 'Musica rilassante, cocktails e un\'atmosfera indimenticabile al tramonto.'
  },
  {
    title: 'DJ Night',
    description: 'Vivi le serate più esclusive con i nostri DJ set.'
  }
];

const places = [
  {
    title: 'Fuori',
    description: 'Posto all\'aperto con vista sul mare.'
  },
  {
    title: 'Giardino',
    description: 'Giardino con vista sul mare.'
  },
  {
    title: 'Dentro',
    description: 'Posto all\'interno con vista sul mare.'
  }
];

type BookingData = {
  experience: string;
  event: string;
  place: string;
  date: string;
  time: string;
  people: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
  privacy: boolean;
};

const initialData: BookingData = {
  experience: '',
  event: '',
  place: '',
  date: '',
  time: '',
  people: '',
  name: '',
  phone: '',
  email: '',
  notes: '',
  privacy: false
};

export default function BookingWizard({
  open,
  onClose,
  initialEvent
}: {
  open: boolean;
  onClose: () => void;
  initialEvent?: (typeof events)[number] | null;
}) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<BookingData>(initialData);

  useEffect(() => {
  if (!open || !initialEvent) return;

  const eventValue = `${initialEvent.day} ${initialEvent.month} — ${initialEvent.artist}`;

  setStep(2);

  setData((current) => ({
    ...current,
    experience: 'DJ Night',
    event: eventValue,
    date: initialEvent.date,
    time: '',
    people: ''
  }));
}, [open, initialEvent]);

  const totalSteps = 5;

const canContinue = useMemo(() => {
  if (step === 0) return Boolean(data.experience);

  if (step === 1) {
    if (data.experience === 'DJ Night') {
      return Boolean(data.event);
    }

    return Boolean(data.place);
  }

  if (step === 2) {
  if (data.experience === 'DJ Night') {
    return Boolean(data.event && data.date && data.people);
  }

  return Boolean(data.date && data.people);
}
  if (step === 3) return Boolean(data.name && data.phone && data.privacy);

  return true;
}, [step, data]);

  const updateData = <K extends keyof BookingData>(key: K, value: BookingData[K]) => {
    setData((current) => ({
      ...current,
      [key]: value
    }));
  };

  const resetAndClose = () => {
    onClose();

    setTimeout(() => {
      setStep(0);
      setData(initialData);
    }, 400);
  };

  const sendToWhatsApp = () => {
    const phoneNumber = '393384274310';

    const message = `
Ciao ESABEACH, vorrei richiedere una prenotazione.

Esperienza: ${data.experience}
${data.experience === 'DJ Night' ? `Evento: ${data.event}` : `Posto: ${data.place}`}
Data: ${data.date}
Orario: ${data.time || 'Da definire'}
Persone: ${data.people}

Nome: ${data.name}
Telefono: ${data.phone}
Email: ${data.email || 'Non inserita'}

Note:
${data.notes || 'Nessuna nota'}
    `.trim();

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    resetAndClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-y-auto bg-navy/75 px-4 py-4 backdrop-blur-2xl md:flex md:items-center md:justify-center md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease }}
          onClick={resetAndClose}
        >
          <motion.div
            className="relative my-auto w-full max-w-[980px] overflow-hidden rounded-[30px] border border-white/10 bg-[#071826]/95 shadow-[0_40px_120px_rgba(0,0,0,.55)]"
            initial={{ y: 70, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.7, ease }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              aria-label="Close booking form"
              onClick={resetAndClose}
              className="absolute right-5 top-5 z-20 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-xl transition-all duration-500 hover:bg-white hover:text-navy"
            >
              <X size={18} />
            </button>

            <div className="grid md:min-h-[680px] md:grid-cols-[0.85fr_1.15fr]">
              <aside className="relative hidden overflow-hidden border-r border-white/10 bg-white/[.03] p-10 md:block">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(111,174,214,.22),transparent_34rem)]" />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-luxury text-ocean">
                      Reservation
                    </p>
                    <h2 className="mt-6 text-[45px] font-bold uppercase leading-[.92] tracking-[-.055em] text-white">
                      Prenota la tua
                      <br />
                      Esperienza da
                      <br />
                      Esabeach
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {['Experience', 'Luogo', 'Dettagli', 'Contatti', 'Riepilogo'].map((item, index) => (
                      <div
                        key={item}
                        className={`flex items-center gap-4 text-[12px] font-bold uppercase tracking-[.14em] transition-opacity ${
                          index <= step ? 'text-white opacity-100' : 'text-white/35'
                        }`}
                      >
                        <span
                          className={`grid h-8 w-8 place-items-center rounded-full border ${
                            index < step
                              ? 'border-ocean bg-ocean text-navy'
                              : index === step
                                ? 'border-white text-white'
                                : 'border-white/20 text-white/40'
                          }`}
                        >
                          {index < step ? <Check size={14} /> : index + 1}
                        </span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </aside>

              <div className="flex max-h-none flex-col p-6 md:max-h-[calc(100vh-64px)] md:overflow-y-auto md:p-10 lg:p-12">
                <div className="mb-8 pr-14">
                  <p className="text-[11px] font-bold uppercase tracking-luxury text-ocean">
                    Step {step + 1} / {totalSteps}
                  </p>

                  <div className="mt-5 h-px w-full bg-white/10">
                    <motion.div
                      className="h-px bg-ocean"
                      animate={{ width: `${((step + 1) / totalSteps) * 100}%` }}
                      transition={{ duration: 0.55, ease }}
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <AnimatePresence mode="wait">
                    {step === 0 && (
                      <StepPanel key="experience" title="Scegli la tua esperienza">
                        <OptionGrid
                          options={experiences}
                          selected={data.experience}
                          onSelect={(value) => updateData('experience', value)}
                        />
                      </StepPanel>
                    )}

                    {step === 1 && (
                        <StepPanel
                            key={data.experience === 'DJ Night' ? 'event' : 'place'}
                            title={data.experience === 'DJ Night' ? 'Scegli il tuo evento' : 'Scegli il tuo luogo'}
                        >
                            {data.experience === 'DJ Night' ? (
                            <EventGrid
                                selected={data.event}
                                onSelect={(event) => {
                                    const eventValue = `${event.day} ${event.month} — ${event.artist}`;

                                    setData((current) => ({
                                    ...current,
                                    event: eventValue,
                                    date: event.date
                                    }));
                                }}
                                />
                            ) : (
                            <OptionGrid
                                options={places}
                                selected={data.place}
                                onSelect={(value) => updateData('place', value)}
                            />
                            )}
                        </StepPanel>
                        )}

                    {step === 2 && (
                      <StepPanel key="details" title="Dettagli della prenotazione">
                        <div className="grid gap-4 sm:grid-cols-2">
                          {data.experience === 'DJ Night' ? (
                            <Field label="Data dell'evento">
                                <div className="form-input border-ocean/30 bg-ocean/10 text-white/85">
                                {data.event} · {data.date}
                                </div>
                            </Field>
                            ) : (
                            <Field label="Data">
                                <input
                                type="date"
                                value={data.date}
                                onChange={(event) => updateData('date', event.target.value)}
                                className="form-input"
                                />
                            </Field>
                            )}

                          <Field label="Preferred time">
                            <input
                              type="time"
                              value={data.time}
                              onChange={(event) => updateData('time', event.target.value)}
                              className="form-input"
                            />
                          </Field>

                          <Field label="People">
                            <select
                              value={data.people}
                              onChange={(event) => updateData('people', event.target.value)}
                              className="form-input"
                            >
                              <option value="">Select</option>
                              <option value="2">2 people</option>
                              <option value="3">3 people</option>
                              <option value="4">4 people</option>
                              <option value="5">5 people</option>
                              <option value="6">6 people</option>
                              <option value="7+">7+ people</option>
                            </select>
                          </Field>
                        </div>
                      </StepPanel>
                    )}

                    {step === 3 && (
                      <StepPanel key="contacts" title="I tuoi contatti">
                        <div className="grid gap-4">
                          <Field label="Nome">
                            <input
                              type="text"
                              value={data.name}
                              onChange={(event) => updateData('name', event.target.value)}
                              placeholder="Your name"
                              className="form-input"
                            />
                          </Field>

                          <Field label="Telefono">
                            <input
                              type="tel"
                              value={data.phone}
                              onChange={(event) => updateData('phone', event.target.value)}
                              placeholder="+39 ..."
                              className="form-input"
                            />
                          </Field>

                          <Field label="Email">
                            <input
                              type="email"
                              value={data.email}
                              onChange={(event) => updateData('email', event.target.value)}
                              placeholder="you@email.com"
                              className="form-input"
                            />
                          </Field>

                          <Field label="Note">
                            <textarea
                              value={data.notes}
                              onChange={(event) => updateData('notes', event.target.value)}
                              placeholder="Allergies, preferred area, special requests..."
                              className="form-input min-h-[118px] resize-none"
                            />
                          </Field>

                          <span>
                            Autorizzo il trattamento dei dati secondo la{' '}
                            <a
                                href="/privacy-policy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white underline underline-offset-4 transition-opacity hover:opacity-70"
                            >
                                Privacy Policy
                            </a>
                            .
                            </span>
                        </div>
                      </StepPanel>
                    )}

                    {step === 4 && (
                      <StepPanel key="summary" title="Confirm your request">
                        <div className="rounded-[24px] border border-white/10 bg-white/[.035] p-6">
                          <SummaryRow label="Experience" value={data.experience} />

                            {data.experience === 'DJ Night' ? (
                            <SummaryRow label="Event" value={data.event} />
                            ) : (
                            <SummaryRow label="Place" value={data.place} />
                            )}
                          <SummaryRow label="Date" value={data.date} />
                          <SummaryRow label="Time" value={data.time || 'Da definire'} />
                          <SummaryRow label="People" value={data.people} />
                          <SummaryRow label="Name" value={data.name} />
                          <SummaryRow label="Phone" value={data.phone} />
                          <SummaryRow label="Email" value={data.email || 'Non inserita'} />
                        </div>

                        <p className="mt-5 text-sm leading-[1.55] text-white/58">
                          La richiesta verrà inviata su WhatsApp con tutti i dettagli già compilati.
                        </p>
                      </StepPanel>
                    )}
                  </AnimatePresence>
                </div>

                <div className="mt-10 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setStep((current) => Math.max(0, current - 1))}
                    disabled={step === 0}
                    className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-4 text-[12px] font-bold uppercase tracking-cta text-white transition-all duration-500 hover:bg-white hover:text-navy disabled:pointer-events-none disabled:opacity-30"
                  >
                    <ArrowLeft size={15} />
                    Back
                  </button>

                  {step < totalSteps - 1 ? (
                    <button
                      type="button"
                      disabled={!canContinue}
                      onClick={() => setStep((current) => current + 1)}
                      className="inline-flex items-center gap-8 rounded-full bg-white px-7 py-4 text-[12px] font-bold uppercase tracking-cta text-navy transition-all duration-500 hover:scale-[1.03] hover:bg-sand disabled:pointer-events-none disabled:opacity-40"
                    >
                      Continue
                      <ArrowRight size={15} />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={sendToWhatsApp}
                      className="inline-flex items-center gap-8 rounded-full bg-sand px-7 py-4 text-[12px] font-bold uppercase tracking-cta text-navy transition-all duration-500 hover:scale-[1.03] hover:bg-white"
                    >
                      Send request
                      <ArrowRight size={15} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function StepPanel({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ y: 24, opacity: 0, filter: 'blur(8px)' }}
      animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
      exit={{ y: -20, opacity: 0, filter: 'blur(8px)' }}
      transition={{ duration: 0.5, ease }}
    >
      <h3 className="mb-8 text-[34px] font-bold uppercase leading-[.96] tracking-[-.045em] text-white md:text-[46px]">
        {title}
      </h3>
      {children}
    </motion.div>
  );
}

function OptionGrid({
  options,
  selected,
  onSelect
}: {
  options: { title: string; description: string }[];
  selected: string;
  onSelect: (value: string) => void;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {options.map((option) => {
        const active = selected === option.title;

        return (
          <button
            key={option.title}
            type="button"
            onClick={() => onSelect(option.title)}
            className={`rounded-[24px] border p-5 text-left transition-all duration-500 ${
              active
                ? 'border-ocean bg-ocean/10 shadow-glow'
                : 'border-white/10 bg-white/[.03] hover:-translate-y-1 hover:border-white/25'
            }`}
          >
            <span className="text-[15px] font-bold uppercase tracking-[.08em] text-white">
              {option.title}
            </span>
            <p className="mt-3 text-sm leading-[1.5] text-white/60">
              {option.description}
            </p>
          </button>
        );
      })}
    </div>
  );
}

function EventGrid({
  selected,
  onSelect
}: {
  selected: string;
  onSelect: (event: (typeof events)[number]) => void;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {events.map((event) => {
        const value = `${event.day} ${event.month} — ${event.artist}`;
        const active = selected === value;

        return (
          <button
            key={event.artist}
            type="button"
            onClick={() => onSelect(event)}
            className={`group rounded-[24px] border p-5 text-left transition-all duration-500 ${
              active
                ? 'border-ocean bg-ocean/10 shadow-glow'
                : 'border-white/10 bg-white/[.03] hover:-translate-y-1 hover:border-white/25'
            }`}
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[.16em] text-ocean">
                  {event.day} {event.month}
                </span>

                <h4 className="mt-4 text-[22px] font-bold uppercase leading-none tracking-[-.04em] text-white">
                  {event.artist}
                </h4>

                <p className="mt-2 text-[12px] font-bold uppercase tracking-[.1em] text-white/55">
                  {event.label}
                </p>
              </div>

              <span
                className={`mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-all ${
                  active
                    ? 'border-ocean bg-ocean text-navy'
                    : 'border-white/20 text-white/40 group-hover:border-white/50'
                }`}
              >
                {active ? <Check size={14} /> : null}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}

function Field({
  label,
  children
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-bold uppercase tracking-[.16em] text-white/48">
        {label}
      </span>
      {children}
    </label>
  );
}

function SummaryRow({
  label,
  value
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between gap-6 border-b border-white/10 py-3 last:border-b-0">
      <span className="text-[11px] font-bold uppercase tracking-[.16em] text-white/42">
        {label}
      </span>
      <span className="text-right text-sm text-white/82">{value}</span>
    </div>
  );
}