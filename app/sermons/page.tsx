import type { Metadata } from 'next';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection from '@/components/ui/AnimatedSection';
import BibleVerseSection from '@/components/sections/BibleVerseSection';
import PodcastPlayer from '@/components/sections/PodcastPlayer';
import type { Episode } from '@/components/sections/PodcastPlayer';
import { RiYoutubeFill, RiHeadphoneLine, RiLiveLine } from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Sermons',
  description:
    'Listen to sermons from Victory Baptist Church Stuttgart — available as audio podcast, video on YouTube, and live streamed every Sunday.',
};

export const revalidate = 3600;

// ── RSS helpers ──────────────────────────────────────────────────────────────

function between(xml: string, open: string, close: string): string {
  const i = xml.indexOf(open);
  if (i === -1) return '';
  const j = xml.indexOf(close, i + open.length);
  if (j === -1) return '';
  return xml.slice(i + open.length, j).trim();
}

function formatDuration(secs: number): string {
  if (!secs) return '';
  return `${Math.floor(secs / 60)} min`;
}

async function getPodcastEpisodes(): Promise<Episode[]> {
  try {
    const res = await fetch('https://feed.podbean.com/parole-de-vie/feed.xml', {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const xml = await res.text();
    const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];
    return items.map((item) => {
      const title     = between(item, '<title>', '</title>');
      const link      = between(item, '<link>', '</link>');
      const pubDate   = between(item, '<pubDate>', '</pubDate>');
      const durStr    = between(item, '<itunes:duration>', '</itunes:duration>');
      const descRaw   = between(between(item, '<description>', '</description>'), '<![CDATA[', ']]>');
      const preacher  = descRaw.replace(/<[^>]+>/g, '').trim();
      const enclosure = between(item, '<enclosure ', '/>');
      const audioUrl  = between(enclosure, 'url="', '"');
      const audioType = between(enclosure, 'type="', '"') || 'audio/mpeg';
      const date = pubDate
        ? new Date(pubDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
        : '';
      return { title, link, date, audioUrl, audioType, duration: formatDuration(parseInt(durStr || '0', 10)), preacher };
    });
  } catch {
    return [];
  }
}

// ── Static data ──────────────────────────────────────────────────────────────

const mediaChannels = [
  { icon: RiYoutubeFill,   label: 'YouTube',     desc: 'Video recordings of every sermon, available after each service.', href: 'https://www.youtube.com/@VbcStuttgart' },
  { icon: RiHeadphoneLine, label: 'Podcast',     desc: 'Audio sermons available on Podbean — listen anytime, anywhere.',  href: 'https://parole-de-vie.podbean.com/' },
  { icon: RiLiveLine,      label: 'Live Stream', desc: 'Watch our Sunday morning service live every week online.',         href: 'https://www.youtube.com/@VbcStuttgart/streams' },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default async function SermonsPage() {
  const episodes = (await getPodcastEpisodes()).slice(0, 10);

  return (
    <>
      {/* Hero */}
      <section className="bg-church-navy section-padding pt-40">
        <div className="container-base text-center">
          <AnimatedSection>
            <span className="section-label block mb-4 text-church-gold">Hear God&apos;s Word</span>
            <h1 className="text-white text-5xl md:text-6xl mb-6">Sermons</h1>
            <p className="font-lora italic text-white/80 text-xl max-w-2xl mx-auto">
              Faithful, expository preaching from the King James Bible — online and on-demand.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Media channels */}
      <SectionWrapper bg="cream">
        <AnimatedSection className="text-center mb-12">
          <span className="section-label block mb-3">Listen & Watch</span>
          <h2>How to Access Our Sermons</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mediaChannels.map((ch) => {
            const Icon = ch.icon;
            return (
              <a
                key={ch.label}
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-base p-7 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-200 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-church-navy/8 flex items-center justify-center mb-4 group-hover:bg-church-gold/10 transition-colors">
                  <Icon size={28} className="text-church-navy group-hover:text-church-gold transition-colors" aria-hidden="true" />
                </div>
                <h3 className="text-base mb-2">{ch.label}</h3>
                <p className="font-sans text-church-gray text-sm leading-relaxed">{ch.desc}</p>
              </a>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Podcast player */}
      {episodes.length > 0 && (
        <SectionWrapper bg="white">
          <AnimatedSection className="text-center mb-12">
            <span className="section-label block mb-3">Audio Sermons</span>
            <h2>Listen to Sermons</h2>
            <p className="font-lora italic text-church-gray text-base max-w-2xl mx-auto mt-3 leading-relaxed">
              How then shall they call on him in whom they have not believed? and how shall they
              believe in him of whom they have not heard? ...So then Faith cometh by hearing and
              hearing by the word of God.
            </p>
          </AnimatedSection>

          <PodcastPlayer episodes={episodes} />

          <div className="text-center mt-10">
            <a
              href="https://parole-de-vie.podbean.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-church-gold hover:text-church-navy transition-colors underline underline-offset-2"
            >
              View all sermons on Podbean →
            </a>
          </div>
        </SectionWrapper>
      )}

      <BibleVerseSection />
    </>
  );
}
