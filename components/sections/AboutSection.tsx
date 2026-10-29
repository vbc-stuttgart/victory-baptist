import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function AboutSection() {
  return (
    <SectionWrapper id="about" bg="white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

        {/* Left: text */}
        <AnimatedSection>
          <span className="section-label block mb-3">Who We Are</span>
          <h2 className="mb-6 text-balance">
            A Church Built on the Word of God
          </h2>

          <div className="space-y-5 text-church-gray">
            <p className="font-sans text-base md:text-lg leading-relaxed">
              Our heartfelt mission is to preach the Gospel of Salvation in Jesus Christ; and our prayer is for people to know the Lord Jesus Christ as their personal Saviour. Our congregation is made up of military personnel, expats, foreign workers, students, and international families from all over the world — united by the Lord Jesus.
            </p>
            <p className="font-sans text-base md:text-lg leading-relaxed">
              Whether you are weak, discouraged, afraid, struggling, or unsure of yourself, we will love you as Christ has loved us.
            </p>
          </div>

          {/* Value chips */}
        </AnimatedSection>

        {/* Right: Bible verse card */}
        <AnimatedSection delay={0.2}>
          <div className="bg-church-cream rounded-2xl p-8 md:p-10 shadow-sm relative overflow-hidden">
            <span
              className="absolute -top-4 -left-2 font-serif text-8xl text-church-gold/20 leading-none select-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <blockquote className="bible-quote relative z-10 text-lg md:text-xl leading-relaxed" cite="John: ​Chapter 8, Verse 12">
              Then spake Jesus again unto them, saying, I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life.
            </blockquote>
            <footer className="mt-4 font-sans text-sm uppercase tracking-widest text-church-gold">
              <cite>John: ​Chapter 8, Verse 12</cite>
            </footer>

            <div className="mt-8 pt-8 border-t border-church-gold/20">
              <p className="font-sans text-sm text-church-gray italic">
                Sound doctrine. Faithful preaching. A warm, welcoming home for the military
                community in Stuttgart.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}
