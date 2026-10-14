import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import Tag from '@/components/ui/Tag';
import Link from 'next/link';
import Image from 'next/image';
import { RiArrowRightLine } from 'react-icons/ri';

const events = [
  {
    day:         '3rd Sat',
    month:       'Monthly',
    title:       'School of the Bible',
    description: 'Online Bible institute meeting on the third Saturday of each month. Open to all — registration required.',
    tag:         'Online · Register',
    tagColor:    'gold' as const,
    image:       '/images/Sunday School — Children.jpg',
  },
  {
    day:         'Nov 26th',
    month:       '2026',
    title:       'Thanksgiving Day Celebration',
    description: 'Join us as we gather to give thanks to the Lord for His goodness and faithfulness. A special service of praise, prayer, and the Word.',
    tag:         'Special Service',
    tagColor:    'gold' as const,
    image:       '/images/Thanksgiving_Meal.avif',
  },
  {
    day:         'Dec 24',
    month:       '2026',
    title:       "Christmas Eve Candlelight Service",
    description: "A beautiful evening service of carols, candlelight, and the proclamation of Christ's birth.",
    tag:         'Special Service',
    tagColor:    'gold' as const,
    image:       '/images/Christmas2.png',
  },
];

export default function EventsSection() {
  return (
    <SectionWrapper id="events" bg="white">
      <AnimatedSection className="text-center mb-14">
        <span className="section-label block mb-3">Coming Up</span>
        <h2 className="text-balance">Events & Special Services</h2>
        <p className="font-sans text-church-gray mt-4 max-w-xl mx-auto text-base md:text-lg">
          From special services to family events — there is always something to look forward to.
        </p>
      </AnimatedSection>

      <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {events.map((event) => (
          <AnimatedItem key={event.title}>
            <article className="card-base h-full flex flex-col group hover:shadow-md transition-shadow duration-200 overflow-hidden">

              {/* Image area with ghost title overlay */}
              <div className="relative h-44 overflow-hidden shrink-0">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-church-navy/85 via-church-navy/30 to-transparent" />

                {/* Date badge */}
                <div className="absolute top-4 left-4 inline-flex items-baseline gap-1.5 bg-church-gold text-white rounded-full px-3 py-1.5 shadow-md">
                  <span className="font-serif font-bold text-sm leading-none">{event.day}</span>
                  <span className="font-sans text-xs uppercase tracking-wide">{event.month}</span>
                </div>

                {/* Ghost title */}
                <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
                  <h3 className="font-serif text-white/60 text-2xl leading-tight">{event.title}</h3>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5 flex flex-col flex-1">
                <p className="font-sans text-church-gray text-sm leading-relaxed flex-1 line-clamp-3">
                  {event.description}
                </p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <Tag color={event.tagColor}>{event.tag}</Tag>
                  <Link
                    href="/contact"
                    className="font-sans text-sm text-church-gold hover:text-church-navy inline-flex items-center gap-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-church-gold rounded"
                    aria-label={`Learn more about: ${event.title}`}
                  >
                    Info <RiArrowRightLine size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>

            </article>
          </AnimatedItem>
        ))}
      </AnimatedSection>

      <AnimatedSection delay={0.4} className="text-center mt-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 font-sans font-medium text-church-gold hover:text-church-navy transition-colors duration-200 text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-church-gold rounded"
        >
          View Special Services & Events in Detail
          <RiArrowRightLine size={20} aria-hidden="true" />
        </Link>
      </AnimatedSection>
    </SectionWrapper>
  );
}
