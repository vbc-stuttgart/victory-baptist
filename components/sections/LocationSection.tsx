import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import { RiMapPin2Line, RiCarLine, RiBusLine } from 'react-icons/ri';

export default function LocationSection() {
  return (
    <SectionWrapper id="location" bg="white">

      {/* Section header */}
      <AnimatedSection className="text-center mb-14">
        <span className="section-label block mb-3">Where We Meet</span>
        <h2 className="text-balance">Our Location</h2>
        <p className="font-sans text-church-gray mt-4 max-w-xl mx-auto text-base md:text-lg">
          We are located in Stuttgart Vaihingen — free parking available and easy to reach by public transport.
        </p>
      </AnimatedSection>

      {/* Address card */}
      <AnimatedSection delay={0.2}>
        <div className="bg-church-cream rounded-2xl shadow-sm p-7 md:p-10">
          <div className="flex flex-col lg:flex-row gap-10 items-start">

            {/* Left: address + info */}
            <div className="lg:w-80 shrink-0 space-y-5">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <RiMapPin2Line size={18} className="text-church-gold" aria-hidden="true" />
                  <span className="font-serif font-semibold text-church-navy">Address</span>
                </div>
                <address className="font-sans text-church-gray not-italic text-sm leading-relaxed pl-6">
                  Schulze-Delitzsch-Straße 30<br />
                  70565 Stuttgart<br />
                  (Vaihingen district)
                </address>
              </div>

              <div className="flex items-start gap-2">
                <RiCarLine size={18} className="text-church-gold shrink-0 mt-0.5" aria-hidden="true" />
                <p className="font-sans text-church-gray text-sm">Free parking available onsite</p>
              </div>

              <div className="flex items-start gap-2">
                <RiBusLine size={18} className="text-church-gold shrink-0 mt-0.5" aria-hidden="true" />
                <p className="font-sans text-church-gray text-sm">
                  Nearest S-Bahn / U-Bahn stop:<br />
                  <strong className="text-church-navy">Lapp Kabel</strong>
                </p>
              </div>

              <Button as="link" href="/contact" variant="outline" size="sm">
                Get Directions
              </Button>
            </div>

            {/* Right: map placeholder */}
            <div className="flex-1 w-full">
              <a
                href="https://maps.google.com/?q=Schulze-Delitzsch-Straße+30,+70565+Stuttgart"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl overflow-hidden h-64 bg-church-navy/5 border border-gray-100 flex items-center justify-center hover:bg-church-navy/8 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-church-gold"
                aria-label="Open location in Google Maps"
              >
                <div className="text-center">
                  <RiMapPin2Line size={40} className="mx-auto mb-3 text-church-gold/60" aria-hidden="true" />
                  <p className="font-sans text-sm font-medium text-church-navy">Schulze-Delitzsch-Straße 30</p>
                  <p className="font-sans text-xs text-church-gray/60 mt-1">70565 Stuttgart · Vaihingen</p>
                  <p className="font-sans text-xs text-church-gold mt-3 underline underline-offset-2">Open in Google Maps →</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* German service note */}
      <AnimatedSection delay={0.3} className="mt-6">
        <div className="bg-church-navy/5 border border-church-navy/10 rounded-xl px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <span className="font-sans text-xs uppercase tracking-widest text-church-navy/50 shrink-0">Auf Deutsch</span>
          <p className="font-sans text-church-gray text-sm">
            We also hold a German-language service at <strong>10:00 AM</strong> on Sundays.
            German-speaking visitors are also warmly referred to our sister church{' '}
            <a
              href="https://www.wgg-baptisten.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-church-navy underline underline-offset-2 hover:text-church-gold transition-colors"
            >
              Wort Gottes Gemeinde
            </a>.
          </p>
        </div>
      </AnimatedSection>

    </SectionWrapper>
  );
}
