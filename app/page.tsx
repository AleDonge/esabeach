'use client';

import { useState } from 'react';
import BookingWizard from '@/components/BookingWizard';
import CTASection from '@/components/CTASection';
import ExperienceSection from '@/components/ExperienceSection';
import EventsSection from '@/components/EventsSection';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import SmoothScroll from '@/components/SmoothScroll';
import AboutSection from '@/components/AboutSection';
import { events } from '@/data/site';


type BookingEvent = (typeof events)[number];

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedBookingEvent, setSelectedBookingEvent] =
    useState<BookingEvent | null>(null);

  const openBooking = () => {
    setSelectedBookingEvent(null);
    setBookingOpen(true);
  };

  const openBookingWithEvent = (event: BookingEvent) => {
    setSelectedBookingEvent(event);
    setBookingOpen(true);
  };

  const closeBooking = () => {
    setBookingOpen(false);

    setTimeout(() => {
      setSelectedBookingEvent(null);
    }, 400);
  };


  return (
    <SmoothScroll>
      <ScrollProgress />

      <Navbar onReserveClick={openBooking} />

      <main>
        <Hero onReserveClick={openBooking} />
        <ExperienceSection />
        <EventsSection
          onReserveClick={openBooking}
          // @ts-ignore: allow passing event booking handler though EventsSection props may not be typed for it
          onEventBookingClick={openBookingWithEvent}
        />
        <AboutSection onReserveClick={openBooking} />
        <CTASection onReserveClick={openBooking} />
      </main>

      <Footer />

      <BookingWizard open={bookingOpen} onClose={closeBooking} initialEvent={selectedBookingEvent} />
    </SmoothScroll>
  );
}
