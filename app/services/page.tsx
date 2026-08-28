import type { Metadata } from 'next';
import GallerySection from '@/components/sections/GallerySection';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import BibleVerseSection from '@/components/sections/BibleVerseSection';
import Button from '@/components/ui/Button';
import { RiMapPin2Line, RiArrowRightLine, RiCarLine, RiBusLine, RiInformationLine, RiMailLine } from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Join Victory Baptist Church Stuttgart — Sunday services at 10:45 AM, Sunday School at 10:20 AM, and Wednesday prayer meetings.',
};


const ministries = [
  { title: 'Nursery',                desc: 'Childcare for infants and toddlers ages 0–3, provided during all services.' },
  { title: 'Junior Church',          desc: 'A dedicated programme for children ages 4–12 running during the Sunday morning service at 10:45 AM.' },
  { title: 'Ladies Sunday School',   desc: "Women's Bible class every Sunday at 10:20 AM." },
  { title: "Men's Sunday School",    desc: "Men's Bible class every Sunday at 10:20 AM." },
  { title: 'Teens Sunday School',    desc: 'Teenage class every Sunday at 10:20 AM.' },
  { title: "Ladies' Fellowship",     desc: 'Regular fellowship gatherings for the women of the church.' },
  { title: "Men's Fellowship",       desc: 'Regular fellowship and discipleship for the men of the church.' },
  { title: 'School of the Bible',    desc: 'Online Bible institute meeting every 3rd Saturday of the month. Registration required.' },
  { title: 'Vacation Bible School',  desc: 'Summer VBS for children ages 4–12. Registration required.' },
];

const faqs = [
  { q: 'Do I need to register for Sunday services?', a: 'No — regular Sunday services are open to everyone with no registration required. Just come!' },
  { q: 'Is there childcare available?', a: 'Yes. We provide a nursery for children ages 0–3 and Junior Church for ages 4–12 during the Sunday morning service.' },
  { q: 'Are services in English?', a: 'Yes. All services are conducted in English. We also hold a German-language service at 9:00 AM on Sundays.' },
  { q: 'Is there a dress code?', a: 'No dress code — come as you are. What matters is that you feel welcome and at home.' },
  { q: 'How long is the Sunday morning service?', a: 'Approximately 75–90 minutes, including worship and preaching.' },
  { q: 'Is there parking?', a: 'Yes — free parking is available onsite. The nearest public transport stop is Lapp Kabel (S-Bahn / U-Bahn).' },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-church-navy section-padding pt-40">
        <div className="container-base text-center">
          <AnimatedSection>
            <span className="section-label block mb-4 text-church-gold">Times & Location</span>
            <h1 className="text-white text-5xl md:text-6xl mb-6">Services</h1>
            <p className="font-lora italic text-white/80 text-xl max-w-2xl mx-auto">
              Join us for worship, Bible preaching, and fellowship. All services in English.
            </p>
            <p className="font-sans text-white/60 text-base mt-4 font-medium">
              Sunday Morning Service · 10:45 AM · Schulze-Delitzsch-Straße 30, 70565 Stuttgart
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Clustered overview */}
      <SectionWrapper bg="cream">
        <AnimatedSection className="text-center mb-14">
          <span className="section-label block mb-3">Everything We Offer</span>
          <h2 className="text-balance">Worship, Community & Events</h2>
          <p className="font-sans text-church-gray mt-4 max-w-xl mx-auto">
            All are welcome — whatever your age or background. Find your place at Victory Baptist Church.
          </p>
        </AnimatedSection>

        <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Column 1 — Worship & Grow */}
          <AnimatedItem>
            <div className="card-base h-full flex flex-col overflow-hidden">
              <div className="bg-church-navy px-6 py-4">
                <span className="font-sans text-xs uppercase tracking-widest text-church-gold block mb-1">Grow in Faith</span>
                <h3 className="font-serif text-white text-xl">Worship & Grow</h3>
              </div>
              <ul className="flex-1 divide-y divide-gray-100">
                {[
                  { label: 'German Service',           note: 'Sun · 9:00 AM',             desc: 'A German-language service for our German-speaking friends — all are welcome. Hosted together with Wort Gottes Gemeinde.' },
                  { label: 'Sunday Morning Service',  note: 'Sun · 10:45 AM',            desc: 'Our main worship service featuring congregational singing, prayer, and pastoral preaching from the King James Bible.' },
                  { label: 'Afternoon / Evening Service', note: null, desc: 'A deeper study of God\'s Word — teaching every man in all wisdom so that we may present every man perfect in Christ Jesus.', schedule: [{ period: 'Jan – May', time: 'Sun · 6:15 PM' }, { period: 'June – Aug', time: 'Sun · 1:00 PM' }, { period: 'Sept – Dec', time: 'Sun · 6:15 PM' }] },
                  { label: 'Wednesday Prayer Meeting',note: 'Wed · 7:00 PM',             desc: 'The prayer meeting is the powerhouse of the church. We gather mid-week for corporate prayer, Bible reading, and fellowship.' },
                  { label: 'Sunday School',           note: 'Sun · 10:20 AM',            desc: 'Bible classes for children and youth meeting before the main service for in-depth study and fellowship.' },
                  { label: 'School of the Bible',     note: '3rd Saturday · Monthly',    desc: 'Online Bible institute open to all. Deepen your understanding of God\'s Word. Registration required.' },
                  { label: 'Bible Conference',        note: 'Annual',                     desc: 'In-depth Bible preaching and teaching from guest speakers. A highlight of our church calendar each year.' },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3 px-6 py-3.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-church-gold shrink-0" aria-hidden="true" />
                    <div className="flex-1 min-w-0">
                      <p className="font-sans text-sm font-medium text-church-navy leading-snug">{item.label}</p>
                      {'note' in item && item.note && (
                        <p className="font-sans text-xs text-church-gold mt-0.5">{item.note}</p>
                      )}
                      {'schedule' in item && item.schedule && (
                        <div className="mt-1.5 space-y-1">
                          {item.schedule.map((s) => (
                            <div key={s.period} className="flex items-center justify-between gap-3">
                              <span className="font-sans text-xs text-church-gray">{s.period}</span>
                              <span className="font-sans text-xs font-medium text-church-gold">{s.time}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      <p className="font-sans text-xs text-church-gray mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedItem>

          {/* Column 2 — Connect & Belong */}
          <AnimatedItem>
            <div className="card-base h-full flex flex-col overflow-hidden">
              <div className="bg-church-navyLight px-6 py-4">
                <span className="font-sans text-xs uppercase tracking-widest text-church-gold block mb-1">Community</span>
                <h3 className="font-serif text-white text-xl">Connect & Belong</h3>
              </div>
              <ul className="flex-1 divide-y divide-gray-100">
                {[
                  { label: 'Nursery / Childcare', note: 'Ages 0–3 · All Services',  desc: 'Loving childcare provided during every service so parents can worship freely.' },
                  { label: 'Junior Church',        note: 'Ages 4–12 · Sun Morning',  desc: 'A dedicated programme for children running simultaneously with the morning service.' },
                  { label: "Ladies' Fellowship",   note: 'Regular gatherings',        desc: 'Regular fellowship gatherings for the women of the church — encouragement, prayer, and sisterhood.' },
                  { label: "Men's Fellowship",     note: 'Regular gatherings',        desc: 'Regular fellowship and discipleship for the men of the church.' },
                  { label: 'Summer VBS',           note: 'Children · Annual',         desc: 'Vacation Bible School for children ages 4–12: Bible lessons, songs, games, and fun. Registration required.' },
                  { label: 'Summer Church Picnic', note: 'Whole Family · Annual',     desc: 'The whole church family gathers for a summer picnic with food, fellowship, and fun for all ages.' },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3 px-6 py-3.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-church-navyLight shrink-0" aria-hidden="true" />
                    <div>
                      <p className="font-sans text-sm font-medium text-church-navy leading-snug">{item.label}</p>
                      <p className="font-sans text-xs text-church-gold mt-0.5">{item.note}</p>
                      <p className="font-sans text-xs text-church-gray mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedItem>

          {/* Column 3 — Special Events & Missions */}
          <AnimatedItem>
            <div className="card-base h-full flex flex-col overflow-hidden">
              <div className="bg-church-gold px-6 py-4">
                <span className="font-sans text-xs uppercase tracking-widest text-white/70 block mb-1">Throughout the Year</span>
                <h3 className="font-serif text-white text-xl">Special Events & Missions</h3>
              </div>
              <ul className="flex-1 divide-y divide-gray-100">
                {[
                  { label: 'Resurrection Sunday',            note: 'April · Special Service',  desc: 'A powerful celebration of the risen Lord Jesus Christ — praise, Gospel preaching, and joy. Registration required.' },
                  { label: 'International Musical Services', note: 'Seasonal',                  desc: 'Special services featuring music and worship reflecting the international diversity of our congregation. Registration required.' },
                  { label: 'Missions Sundays',               note: 'Throughout the year',       desc: 'Dedicated Sundays for prayer, giving, and support for missionaries and Gospel outreach worldwide. Registration required.' },
                  { label: 'Thanksgiving Celebration',       note: 'November',                  desc: 'Gathering together to give thanks to the Lord for His goodness, faithfulness, and grace. Registration required.' },
                  { label: 'Christmas Eve Candlelight',      note: 'Dec 24 · Special Service',  desc: 'A beautiful evening of carols, candlelight, and the proclamation of Christ\'s birth. Registration required.' },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3 px-6 py-3.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-church-gold shrink-0" aria-hidden="true" />
                    <div>
                      <p className="font-sans text-sm font-medium text-church-navy leading-snug">{item.label}</p>
                      <p className="font-sans text-xs text-church-gold mt-0.5">{item.note}</p>
                      <p className="font-sans text-xs text-church-gray mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedItem>

        </AnimatedSection>

        {/* Registration hint box */}
        <AnimatedSection delay={0.4} className="mt-10">
          <div className="rounded-2xl border border-church-navy/15 bg-white px-6 py-5 flex flex-col sm:flex-row items-start gap-4 max-w-3xl mx-auto">
            <div className="w-10 h-10 rounded-xl bg-church-navy/8 flex items-center justify-center shrink-0">
              <RiInformationLine size={20} className="text-church-navy" aria-hidden="true" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-sans text-sm font-semibold text-church-navy mb-1">Registration</p>
              <p className="font-sans text-sm text-church-gray leading-relaxed">
                Regular Sunday services are <span className="font-medium text-church-navy">walk-in — no registration needed</span>. Just come as you are.
                Some special events and programmes require prior registration. Please contact us if you would like to attend.
              </p>
            </div>
            <a
              href="/contact"
              className="shrink-0 inline-flex items-center gap-1.5 font-sans text-sm font-medium text-church-gold hover:text-church-navy transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-church-gold rounded whitespace-nowrap"
            >
              <RiMailLine size={15} aria-hidden="true" />
              Contact Us
            </a>
          </div>
        </AnimatedSection>

      </SectionWrapper>

      {/* Ministries — ausgeblendet, bei Bedarf false -> true */}
      {false && (
      <SectionWrapper bg="white">
        <AnimatedSection className="text-center mb-14">
          <span className="section-label block mb-3">Get Involved</span>
          <h2 className="text-balance">Ministries & Programmes</h2>
          <p className="font-sans text-church-gray mt-4 max-w-xl mx-auto">
            There is a place for everyone at Victory Baptist Church — whatever your age or background.
          </p>
        </AnimatedSection>

        <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ministries.map((m) => (
            <AnimatedItem key={m.title}>
              <div className="card-base p-6 h-full">
                <div className="w-7 h-1 bg-church-gold rounded-full mb-4" aria-hidden="true" />
                <h3 className="text-base mb-2">{m.title}</h3>
                <p className="font-sans text-church-gray text-sm leading-relaxed">{m.desc}</p>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </SectionWrapper>
      )}

      {/* Location */}
      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <AnimatedSection>
            <span className="section-label block mb-3">Where We Meet</span>
            <h2 className="mb-6">Our Location</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <RiMapPin2Line size={20} className="text-church-gold shrink-0 mt-1" aria-hidden="true" />
                <address className="font-sans text-church-gray not-italic text-lg leading-relaxed">
                  Schulze-Delitzsch-Straße 30<br />70565 Stuttgart (Vaihingen)
                </address>
              </div>
              <div className="flex items-start gap-3">
                <RiCarLine size={20} className="text-church-gold shrink-0 mt-1" aria-hidden="true" />
                <p className="font-sans text-church-gray">Free parking available onsite</p>
              </div>
              <div className="flex items-start gap-3">
                <RiBusLine size={20} className="text-church-gold shrink-0 mt-1" aria-hidden="true" />
                <p className="font-sans text-church-gray">Nearest stop: <strong className="text-church-navy">Lapp Kabel</strong> (S-Bahn / U-Bahn)</p>
              </div>
            </div>
            <Button as="link" href="/contact" variant="primary" size="md">
              Get in Touch <RiArrowRightLine className="ml-1" aria-hidden="true" />
            </Button>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl overflow-hidden h-80 border border-gray-100 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190.06953036183506!2d9.125642220455653!3d48.720888313487606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799dde4d94f19b9%3A0x285edf7730cde06b!2sVictory%20Baptist%20Church!5e0!3m2!1sde!2sde!4v1787648863858!5m2!1sde!2sde"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Victory Baptist Church Stuttgart — Karte"
              />
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      <BibleVerseSection />

      {/* Photo Gallery */}
      <SectionWrapper bg="white">
        <AnimatedSection className="text-center mb-14">
          <span className="section-label block mb-3">Life at Victory Baptist</span>
          <h2 className="text-balance">Our Church in Pictures</h2>
          <p className="font-sans text-church-gray mt-4 max-w-xl mx-auto">
            A glimpse into our Sunday services, events, and community life.
          </p>
        </AnimatedSection>

        <GallerySection />
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper bg="cream">
        <AnimatedSection className="text-center mb-14">
          <span className="section-label block mb-3">Common Questions</span>
          <h2 className="text-balance">FAQ</h2>
        </AnimatedSection>

        <AnimatedSection stagger className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <AnimatedItem key={faq.q}>
              <div className="card-base p-6 md:p-8">
                <h3 className="text-base font-semibold mb-2 flex items-start gap-2">
                  <span className="text-church-gold font-bold shrink-0">Q:</span>
                  {faq.q}
                </h3>
                <p className="font-sans text-church-gray text-sm leading-relaxed pl-5">{faq.a}</p>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>

        <AnimatedSection delay={0.4} className="text-center mt-12">
          <p className="font-sans text-church-gray mb-4">Still have questions?</p>
          <Button as="link" href="/contact" variant="outline">Contact Us</Button>
        </AnimatedSection>
      </SectionWrapper>
    </>
  );
}
