import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Link from 'next/link';
import { RiArrowRightLine } from 'react-icons/ri';

const ARTWORK = 'https://pbcdn1.podbean.com/imglogo/image-logo/16882650/Logo_Podcast_01_bv9d9d.jpeg';

function between(xml: string, open: string, close: string): string {
  const i = xml.indexOf(open);
  if (i === -1) return '';
  const j = xml.indexOf(close, i + open.length);
  if (j === -1) return '';
  return xml.slice(i + open.length, j).trim();
}

async function getLatestEpisode() {
  try {
    const res = await fetch('https://feed.podbean.com/parole-de-vie/feed.xml', {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const xml = await res.text();
    const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];
    const item = items[0];
    if (!item) return null;
    const title    = between(item, '<title>', '</title>');
    const pubDate  = between(item, '<pubDate>', '</pubDate>');
    const enclosure = between(item, '<enclosure ', '/>');
    const audioUrl  = between(enclosure, 'url="', '"');
    const audioType = between(enclosure, 'type="', '"') || 'audio/mpeg';
    const durStr   = between(item, '<itunes:duration>', '</itunes:duration>');
    const descRaw  = between(between(item, '<description>', '</description>'), '<![CDATA[', ']]>');
    const preacher = descRaw.replace(/<[^>]+>/g, '').trim();
    const date = pubDate
      ? new Date(pubDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
      : '';
    const duration = durStr ? `${Math.floor(parseInt(durStr, 10) / 60)} min` : '';
    return { title, date, audioUrl, audioType, preacher, duration };
  } catch {
    return null;
  }
}

export default async function SermonsSection() {
  const latest = await getLatestEpisode();

  return (
    <SectionWrapper id="sermons" bg="cream">
      <AnimatedSection className="text-center mb-12">
        <span className="section-label block mb-3">Hear God&apos;s Word</span>
        <h2 className="text-balance">Sermons & Media</h2>
      </AnimatedSection>

      {latest && (
        <AnimatedSection className="max-w-3xl mx-auto mb-10">
          <div className="bg-church-navy rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row gap-5 items-start">

            {/* Artwork */}
            <div className="shrink-0 w-full sm:w-32 h-40 sm:h-32 rounded-xl overflow-hidden bg-church-navy/60">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ARTWORK}
                alt="The Bible Message podcast"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info + player */}
            <div className="flex-1 min-w-0 flex flex-col justify-between gap-3">
              <div>
                <p className="font-sans text-church-gold text-xs uppercase tracking-widest mb-1">
                  Latest Sermon
                </p>
                <h3 className="font-serif text-white text-lg sm:text-xl leading-tight">
                  {latest.title}
                </h3>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 mt-1">
                  {latest.preacher && (
                    <p className="font-sans text-white/50 text-xs">{latest.preacher}</p>
                  )}
                  {latest.date && (
                    <p className="font-sans text-white/40 text-xs">{latest.date}</p>
                  )}
                  {latest.duration && (
                    <p className="font-sans text-church-gold/70 text-xs">{latest.duration}</p>
                  )}
                </div>
              </div>
              <audio
                controls
                className="w-full"
                src={latest.audioUrl}
                preload="none"
                aria-label={latest.title}
              >
                <source src={latest.audioUrl} type={latest.audioType} />
              </audio>
            </div>
          </div>
        </AnimatedSection>
      )}

      <AnimatedSection delay={0.3} className="text-center">
        <Link
          href="/sermons"
          className="inline-flex items-center gap-2 font-sans font-medium text-church-gold hover:text-church-navy transition-colors duration-200 text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-church-gold rounded"
        >
          View All Sermons
          <RiArrowRightLine size={20} aria-hidden="true" />
        </Link>
      </AnimatedSection>
    </SectionWrapper>
  );
}
