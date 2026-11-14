import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import Link from 'next/link';
import Image from 'next/image';
import { RiArrowRightLine, RiGlobalLine, RiExternalLinkLine } from 'react-icons/ri';

const posters = [
  { src: '/images/vbc_poster_1.jpg', alt: 'Sunday Morning Service, Sunday 10:30 AM. With the truth in his hands and the love of Christ in his heart.' },
  { src: '/images/vbc_poster_2.jpg', alt: 'Advanced Christianity, Sunday 6:00 PM, June to August 1:00 PM. We deepen our roots, so that we rise higher.' },
  { src: '/images/vbc_poster_3.jpg', alt: 'The Hour of Power, Wednesday 7:00 PM. Without Him, we can do nothing.' },
  { src: '/images/vbc_poster_4.jpg', alt: 'The Church of the Living God, 1 Timothy 3:15: the pillar and ground of the truth.' },
];

export default function ServicesSection() {
  return (
    <SectionWrapper id="services" bg="cream">
      <AnimatedSection className="text-center mb-14">
        <span className="section-label block mb-3">Times & Location</span>
        <h2 className="text-balance">Services & Times</h2>
        <p className="font-sans text-church-gray mt-4 max-w-xl mx-auto text-base md:text-lg">
          All services are in English. No registration needed — just come as you are.
        </p>
      </AnimatedSection>

      {/* Service cards */}
      <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
        {posters.map((poster) => (
          <AnimatedItem key={poster.src}>
            <article className="card-base overflow-hidden h-full">
              <Image
                src={poster.src}
                alt={poster.alt}
                width={800}
                height={1000}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="w-full h-auto block"
              />
            </article>
          </AnimatedItem>
        ))}
      </AnimatedSection>

   <AnimatedSection delay={0.4} className="text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 font-sans font-medium text-church-gold hover:text-church-navy transition-colors duration-200 text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-church-gold rounded"
        >
          View Services in detail
          <RiArrowRightLine size={20} aria-hidden="true" />
        </Link>
      </AnimatedSection>


            <div className="text-center mt-8 mb-8"/>
 
      {/* German Service — separate box */}
      <AnimatedSection delay={0.3} className="mb-10">
        <div className="rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-slate-100 border border-slate-200 max-w-2xl mx-auto">
          <div className="w-10 h-10 rounded-xl bg-slate-200 flex items-center justify-center shrink-0">
            <RiGlobalLine size={20} className="text-slate-500" aria-hidden="true" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="font-serif font-bold text-slate-700 text-base">Deutscher Gottesdienst</h3>
              <span className="font-sans text-xs uppercase tracking-widest bg-slate-200 text-slate-500 px-3 py-1 rounded-full">Sunday · 10:00 AM</span>
              <span className="font-sans text-xs text-slate-400 italic">Wort Gottes Gemeinde</span>
            </div>
            <p className="font-sans text-slate-500 text-sm leading-relaxed">
              Ein deutschsprachiger Gottesdienst für alle deutschsprachigen Freunde — herzlich willkommen!
            </p>
          </div>
          <a
            href="http://www.wgg-baptisten.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1.5 font-sans text-sm font-medium text-church-navy hover:text-church-navyLight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-church-navy rounded whitespace-nowrap"
          >
            Wort Gottes Gemeinde
            <RiExternalLinkLine size={14} aria-hidden="true" />
          </a>
        </div>
      </AnimatedSection>

   

    </SectionWrapper>
  );
}
