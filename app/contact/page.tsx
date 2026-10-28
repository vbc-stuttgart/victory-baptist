import type { Metadata } from 'next';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ContactSection from '@/components/sections/ContactSection';
import BibleVerseSection from '@/components/sections/BibleVerseSection';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Victory Baptist Church Stuttgart — Schulze-Delitzsch-Straße 30, 70565 Stuttgart. Sunday services at 10:30 AM.',
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-church-navy section-padding pt-40">
        <div className="container-base text-center">
          <AnimatedSection>
            <span className="section-label block mb-4 text-church-gold">We&apos;d Love to Hear from You</span>
            <h1 className="text-white text-5xl md:text-6xl mb-6">Contact Us</h1>
            <p className="font-lora italic text-white/80 text-xl max-w-2xl mx-auto">
              Questions, prayer requests, or just a hello — we are here for you.
            </p>
          </AnimatedSection>
        </div>
      </section>
      <ContactSection />
      <BibleVerseSection />
    </>
  );
}
