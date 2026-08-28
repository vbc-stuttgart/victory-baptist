import type { Metadata } from 'next';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection from '@/components/ui/AnimatedSection';
import BibleVerseSection from '@/components/sections/BibleVerseSection';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Offering',
  description:
    'Support the ministry of Victory Baptist Church Stuttgart through your generous offering.',
};

export default function GivingPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-church-navy section-padding pt-40">
        <div className="container-base text-center">
          <AnimatedSection>
            <span className="section-label block mb-4 text-church-gold">Support the Ministry</span>
            <h1 className="text-white text-5xl md:text-6xl mb-6">Offering</h1>
            <p className="font-lora italic text-white/80 text-xl max-w-2xl mx-auto text-balance">
              Your generosity makes Victory ministry possible in Stuttgart and beyond.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why give */}
      <SectionWrapper bg="cream">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="section-label block mb-3">Why We Give</span>
            <h2 className="text-balance mb-6">Offering to the Lord</h2>
            <p className="font-sans text-church-gray text-base md:text-lg leading-relaxed">
              Giving is an act of worship and a privilege. Your financial support enables us to
              preach the Gospel to the international community of Stuttgart, care for our
              congregation, and reach the lost with the message of salvation in Jesus Christ.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <blockquote className="bible-quote text-lg md:text-xl leading-relaxed mb-3 text-center">
              Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver.
            </blockquote>
            <p className="font-sans text-sm uppercase tracking-widest text-church-gold text-center mb-12">
              2 Corinthians: Chapter 9, Verse 7
            </p>
          </AnimatedSection>

          {/* Bank details card */}
          <AnimatedSection delay={0.2}>
            <div className="bg-church-navy text-white rounded-2xl p-8 md:p-10">
              <h3 className="font-serif font-semibold text-xl text-white mb-2">Bank Transfer</h3>
              <p className="font-sans text-white/60 text-sm mb-8">
                Please use the details below to make a donation by bank transfer.
              </p>

              <div className="space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 border-b border-white/10 pb-5">
                  <span className="font-sans text-xs uppercase tracking-widest text-church-gold w-44 shrink-0">
                    Account Holder
                  </span>
                  <span className="font-sans text-white font-medium">Global Evangelism Ministry</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 border-b border-white/10 pb-5">
                  <span className="font-sans text-xs uppercase tracking-widest text-church-gold w-44 shrink-0">
                    IBAN
                  </span>
                  <span className="font-mono text-white font-medium tracking-wider">
                    DE09 6729 2200 0000 4553 18
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 border-b border-white/10 pb-5">
                  <span className="font-sans text-xs uppercase tracking-widest text-church-gold w-44 shrink-0">
                    Reference / Verwendungszweck
                  </span>
                  <span className="font-sans text-white font-medium">VBC</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 border-b border-white/10 pb-5">
                  <span className="font-sans text-xs uppercase tracking-widest text-church-gold w-44 shrink-0">
                    BIC
                  </span>
                  <span className="font-mono text-white font-medium tracking-wider">GENODE61WIE</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 pb-5">
                  <span className="font-sans text-xs uppercase tracking-widest text-church-gold w-44 shrink-0">
                    Bank
                  </span>
                  <span className="font-sans text-white font-medium">Volksbank Kraichgau</span>
                </div>
              </div>

              <p className="font-sans text-white/50 text-xs mt-8">
                Please always include <strong className="text-white/70">VBC</strong> as the payment
                reference so we can allocate your gift correctly. Thank you for your generosity!
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="mt-10 text-center">
            <p className="font-sans text-church-gray text-sm mb-4">
              Questions about giving? We are happy to help.
            </p>
            <Button as="link" href="/contact" variant="outline" size="md">
              Contact Us
            </Button>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      <BibleVerseSection />
    </>
  );
}
