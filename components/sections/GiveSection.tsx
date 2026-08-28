import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';

export default function GiveSection() {
  return (
    <SectionWrapper bg="navy">
      <AnimatedSection className="max-w-3xl mx-auto text-center">
        <span className="section-label block mb-3 text-church-gold">Support the Ministry</span>
        <h2 className="text-white mb-6 text-balance">Offering to Victory Baptist Church</h2>
        <p className="font-sans text-white/75 text-base md:text-lg mb-10 max-w-xl mx-auto">
          Your generous offering enables us to preach the Gospel in Stuttgart and reach the
          international community with the message of salvation in Jesus Christ.
        </p>
        <blockquote className="font-lora italic text-white/55 text-sm mb-10">
          &ldquo;God loveth a cheerful giver.&rdquo; — 2 Corinthians 9:7
        </blockquote>
        <Button as="link" href="/giving" variant="gold" size="lg">
          How to Give
        </Button>
      </AnimatedSection>
    </SectionWrapper>
  );
}
