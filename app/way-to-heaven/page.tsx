import type { Metadata } from 'next';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'The Way to TEST Heaven',
  description:
    'Can I be 100% sure today that I will go to heaven when I die? YES! Find out how.',
};

export default function WayToHeavenPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-church-navy section-padding pt-40">
        <div className="container-base text-center">
          <AnimatedSection>
            <span className="section-label block mb-4 text-church-gold">The Gospel</span>
            <h1 className="text-white text-5xl md:text-6xl mb-6">The Way to Heaven</h1>
            <p className="font-lora italic text-white/80 text-xl max-w-2xl mx-auto text-balance">
              The most important question you will ever answer.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* The Question */}
      <SectionWrapper bg="cream">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <span className="section-label block mb-4">The Question</span>
          <h2 className="mb-6 text-balance">
            Can I be 100% sure today that I will go to heaven when I die?
          </h2>
          <p className="font-sans text-church-gray text-lg md:text-xl mb-12">
            YES! You can. Watch the video!
          </p>

          {/* YouTube embed */}
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full rounded-2xl shadow-lg"
              src="https://www.youtube.com/embed/w4GD7lCXmwU"
              title="The Way to Heaven — Can I be 100% sure I will go to heaven?"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </AnimatedSection>
      </SectionWrapper>
    </>
  );
}
