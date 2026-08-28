import Link from 'next/link';
import { RiFacebookFill, RiInstagramLine, RiYoutubeFill, RiMapPin2Line, RiTimeLine, RiMailLine } from 'react-icons/ri';

const quickLinks = [
  { label: 'Services',      href: '/services' },
  { label: 'Sermons',       href: '/sermons' },
  { label: 'Our Beliefs',   href: '/about' },
  { label: 'Way to Heaven', href: '/way-to-heaven' },
  { label: 'Offering',      href: '/giving' },
  { label: 'Contact',       href: '/contact' },
];

const socialLinks = [
  { icon: RiFacebookFill, label: 'Facebook',  href: 'https://www.facebook.com/vbc.de/' },
  { icon: RiInstagramLine, label: 'Instagram', href: 'https://www.instagram.com/vbc.stuttgart/' },
  { icon: RiYoutubeFill,  label: 'YouTube',   href: 'https://www.youtube.com/@VbcStuttgart' },
];

export default function Footer() {
  return (
    <footer className="bg-church-navy text-white" role="contentinfo">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* Col 1: Logo + tagline */}
          <div>
            <Link href="/" className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-church-gold rounded">
              <span className="font-serif font-bold text-xl text-white block">Victory <span className="text-church-gold font-sans font-normal">✝</span> Baptist Church</span>
              <span className="font-sans text-xs text-church-gold tracking-widest uppercase mt-1 block">Stuttgart, Germany</span>
            </Link>
            <p className="font-sans text-sm text-white/60 mt-4 leading-relaxed">
              An English-speaking, independent Baptist church.<br />
              Everyone is welcome.
            </p>
            <p className="font-lora italic text-church-gold/80 text-sm mt-5 tracking-wide">
              Bible-believing · International · Welcoming
            </p>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <h3 className="font-sans text-sm uppercase tracking-widest text-church-gold mb-5 not-italic text-base">
              Quick Links
            </h3>
            <ul className="space-y-3" role="list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-white/80 hover:text-church-gold transition-colors duration-200 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-church-gold rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://www.wgg-baptisten.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-white/50 hover:text-church-gold transition-colors duration-200 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-church-gold rounded"
                >
                  Deutscher Gottesdienst →
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Address + social */}
          <div>
            <h3 className="font-sans text-sm uppercase tracking-widest text-church-gold mb-5 not-italic text-base">
              Find Us
            </h3>
            <ul className="space-y-3 text-white/80 text-sm" role="list">
              <li className="flex items-start gap-3">
                <RiMapPin2Line className="shrink-0 mt-0.5 text-church-gold" size={16} aria-hidden="true" />
                <span>Schulze-Delitzsch-Straße 30<br />70565 Stuttgart (Vaihingen)</span>
              </li>
              <li className="flex items-start gap-3">
                <RiTimeLine className="shrink-0 mt-0.5 text-church-gold" size={16} aria-hidden="true" />
                <span>Sunday at 10:45 AM</span>
              </li>
              <li className="flex items-start gap-3">
                <RiMailLine className="shrink-0 mt-0.5 text-church-gold" size={16} aria-hidden="true" />
                <a
                  href="mailto:victory.stuttgart@gmail.com"
                  className="hover:text-church-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-church-gold rounded"
                >
                  victory.stuttgart@gmail.com
                </a>
              </li>
            </ul>

            <div className="flex gap-4 mt-6" role="list" aria-label="Social Media">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-church-gold flex items-center justify-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-church-gold"
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-white/40 text-xs">
            © {new Date().getFullYear()} Victory Baptist Church Stuttgart. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/impressum" className="font-sans text-white/40 hover:text-church-gold text-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-church-gold rounded">
              Legal Notice
            </Link>
            <span className="text-white/20 text-xs">·</span>
            <Link href="/datenschutz" className="font-sans text-white/40 hover:text-church-gold text-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-church-gold rounded">
              Privacy Notice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
