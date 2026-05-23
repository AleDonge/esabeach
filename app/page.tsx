import CTASection from '@/components/CTASection';
import CustomCursor from '@/components/CustomCursor';
import ExperienceSection from '@/components/ExperienceSection';
import EventsSection from '@/components/EventsSection';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <ExperienceSection />
        <EventsSection />
        <CTASection />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
