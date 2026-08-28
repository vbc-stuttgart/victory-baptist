import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import Link from 'next/link';
import { RiBookOpenLine, RiTeamLine, RiMoonLine, RiFireLine, RiArrowRightLine, RiGlobalLine, RiExternalLinkLine } from 'react-icons/ri';

const services = [
  {
    icon:        RiTeamLine,
    title:       'Sunday School',
    time:        'Sunday · 10:20 AM',
    description: 'Classes for our children meet before the main service for in-depth Bible study and fellowship.',
    tag:         "CHILDREN MINISTRY",
  },
  {
    icon:        RiBookOpenLine,
    title:       'Sunday Morning Service',
    time:        'Sunday · 10:45 AM',
    description: "With the truth in his hands and the love of Christ in his heart, our pastor preaches God's message to us every Sunday at 10:45 a.m.",
    tag:         'PREACHING',
  },
  {
    icon:        RiMoonLine,
    title:       'Sunday Evening',
    time:        'Sunday · Afternoon / Evening',
    description: 'Salvation is not the end. It is a wonderful beginning, but still just the beginning of the christian life. Every Sunday evening, we teach every man in all wisdom, so that we may present every man perfect in Christ Jesus.',
    tag:         'PERFECTING / DISCIPLESHIP',
  },
  {
    icon:        RiFireLine,
    title:       'Wednesday Prayer Meeting',
    time:        'Wednesday · 7:00 PM.',
    description: 'Every Wednesday we meet and fellowship in prayer with the Lord Jesus. Without Him, we can do nothing.',
    tag:         'POWER',
  },

  /*{
    icon:        RiHeartLine,
    title:       'Community Care',
    time:        'Everytime',
    description: 'Whether you are weak, discouraged, afraid, struggling, or unsure of yourself, we will love you.',
    tag:         'LOVE',
  },*/

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
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <AnimatedItem key={service.title}>
              <article className="card-base p-6 h-full flex flex-col">
                <div className="w-11 h-11 rounded-xl bg-church-navy/8 flex items-center justify-center mb-4 shrink-0">
                  <Icon size={22} className="text-church-navy" aria-hidden="true" />
                </div>
                <div className="inline-block bg-church-gold/15 text-church-gold font-sans text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-3 self-start">
                  {service.time}
                </div>
                <h3 className="text-base mb-2">{service.title}</h3>
                <p className="font-sans text-church-gray text-sm leading-relaxed flex-1">
                  {service.description}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="font-sans text-xs text-church-olive font-medium">{service.tag}</span>
                </div>
              </article>
            </AnimatedItem>
          );
        })}
      </AnimatedSection>

      {/* German Service — separate box */}
      <AnimatedSection delay={0.3} className="mb-10">
        <div className="border border-church-navy/20 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white max-w-2xl mx-auto">
          <div className="w-10 h-10 rounded-xl bg-church-navy/8 flex items-center justify-center shrink-0">
            <RiGlobalLine size={20} className="text-church-navy" aria-hidden="true" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="font-serif font-bold text-church-navy text-base">Deutscher Gottesdienst</h3>
              <span className="font-sans text-xs uppercase tracking-widest bg-church-gold/15 text-church-gold px-3 py-1 rounded-full">Sunday · 9:00 AM</span>
            </div>
            <p className="font-sans text-church-gray text-sm leading-relaxed">
              Ein deutschsprachiger Gottesdienst für alle deutschsprachigen Freunde — herzlich willkommen!
            </p>
          </div>
          <a
            href="http://www.wgg-baptisten.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1.5 font-sans text-sm font-medium text-church-gold hover:text-church-navy transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-church-gold rounded whitespace-nowrap"
          >
            Wort Gottes Gemeinde
            <RiExternalLinkLine size={14} aria-hidden="true" />
          </a>
        </div>
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

    </SectionWrapper>
  );
}
