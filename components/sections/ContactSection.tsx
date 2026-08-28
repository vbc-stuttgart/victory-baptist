'use client';

import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { RiMapPin2Line, RiTimeLine, RiMailLine, RiFacebookFill, RiInstagramLine, RiYoutubeFill, RiCarLine, RiBusLine, RiPhoneLine } from 'react-icons/ri';
import Button from '@/components/ui/Button';
import { useState, FormEvent } from 'react';

const inputClass =
  'w-full rounded-xl border border-gray-200 bg-white px-5 py-4 font-sans text-base text-church-navy placeholder-church-gray/60 ' +
  'focus:outline-none focus:border-church-navy focus:ring-2 focus:ring-church-gold/30 transition-all duration-200 min-h-[52px]';

const socialLinks = [
  { icon: RiFacebookFill, label: 'Facebook',  href: 'https://www.facebook.com/vbc.de/' },
  { icon: RiInstagramLine, label: 'Instagram', href: 'https://www.instagram.com/vbc.stuttgart/' },
  { icon: RiYoutubeFill,  label: 'YouTube',   href: 'https://www.youtube.com/@VbcStuttgart' },
];

// Formspree endpoint — replace XXXXXXXX with your form ID from formspree.io
const FORMSPREE_URL = 'https://formspree.io/f/XXXXXXXX';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [error,     setError]     = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method:  'POST',
        headers: { 'Accept': 'application/json' },
        body:    new FormData(e.currentTarget),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again or email us directly.');
      }
    } catch {
      setError('Could not send message. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <SectionWrapper id="contact" bg="cream">
      <AnimatedSection className="text-center mb-14">
        <span className="section-label block mb-3">We&apos;d Love to Hear from You</span>
        <h2 className="text-balance">Get in Touch</h2>
        <p className="font-sans text-church-gray mt-4 max-w-xl mx-auto text-base md:text-lg">
          Questions, prayer requests, or just a hello — reach out any time. Join us and experience victory as you grow closer to God!
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        {/* Left: Form */}
        <AnimatedSection>
          {submitted ? (
            <div className="card-base p-10 text-center">
              <div className="text-5xl mb-4">✉️</div>
              <h3 className="mb-3">Thank you for your message!</h3>
              <p className="font-sans text-church-gray">
                We will get back to you as soon as possible. God bless you!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card-base p-7 md:p-10 space-y-5" noValidate>
              <div>
                <label htmlFor="name" className="font-sans text-sm font-medium text-church-navy mb-2 block">
                  Name <span className="text-church-gold" aria-hidden="true">*</span>
                </label>
                <input
                  id="name" type="text" name="name" required autoComplete="name"
                  placeholder="Your full name"
                  className={inputClass} aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="email" className="font-sans text-sm font-medium text-church-navy mb-2 block">
                  Email <span className="text-church-gold" aria-hidden="true">*</span>
                </label>
                <input
                  id="email" type="email" name="email" required autoComplete="email"
                  placeholder="your@email.com"
                  className={inputClass} aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="subject" className="font-sans text-sm font-medium text-church-navy mb-2 block">
                  Subject
                </label>
                <select id="subject" name="subject" className={inputClass} defaultValue="">
                  <option value="" disabled>Please select…</option>
                  <option value="general">General Enquiry</option>
                  <option value="service">Service Times & Location</option>
                  <option value="prayer">Prayer Request</option>
                  <option value="events">Events & Registration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="font-sans text-sm font-medium text-church-navy mb-2 block">
                  Message <span className="text-church-gold" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message" name="message" required rows={4}
                  placeholder="Your message…"
                  className={`${inputClass} min-h-[120px] resize-y`}
                  aria-required="true"
                />
              </div>

              <p className="font-sans text-xs text-church-gray leading-relaxed">
                Please refer to our{' '}
                <a href="/datenschutz" className="text-church-gold underline underline-offset-2 hover:text-church-navy transition-colors">
                  Privacy Notice
                </a>
                {' '}for information on how your personal data is processed in connection with this contact form.
              </p>

              <Button type="submit" variant="primary" size="lg" fullWidth disabled={loading} aria-label="Send message">
                {loading ? 'Sending…' : 'Send Message'}
              </Button>

              {error && (
                <p className="font-sans text-xs text-red-600 text-center" role="alert">{error}</p>
              )}
              <p className="font-sans text-xs text-church-gray/60 text-center">
                Your information is kept private and will never be shared.
              </p>
            </form>
          )}
        </AnimatedSection>

        {/* Right: Info card */}
        <AnimatedSection delay={0.2}>
          <div className="bg-church-navy text-white rounded-2xl p-8 md:p-10 h-full flex flex-col">
            <h3 className="font-serif font-semibold text-xl text-white mb-8">Find Us</h3>

            <ul className="space-y-6 flex-1" role="list">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <RiMapPin2Line size={18} className="text-church-gold" aria-hidden="true" />
                </div>
                <div>
                  <span className="font-sans text-xs uppercase tracking-widest text-church-gold block mb-1">Address</span>
                  <address className="font-sans text-white/85 not-italic text-sm leading-relaxed">
                    Schulze-Delitzsch-Straße 30<br />70565 Stuttgart<br />(Vaihingen district)
                  </address>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <RiTimeLine size={18} className="text-church-gold" aria-hidden="true" />
                </div>
                <div>
                  <span className="font-sans text-xs uppercase tracking-widest text-church-gold block mb-1">Sunday Service</span>
                  <p className="font-sans text-white/85 text-sm">10:45 AM · Sunday School at 10:20 AM</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <RiCarLine size={18} className="text-church-gold" aria-hidden="true" />
                </div>
                <div>
                  <span className="font-sans text-xs uppercase tracking-widest text-church-gold block mb-1">Parking</span>
                  <p className="font-sans text-white/85 text-sm">Free parking available onsite</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <RiBusLine size={18} className="text-church-gold" aria-hidden="true" />
                </div>
                <div>
                  <span className="font-sans text-xs uppercase tracking-widest text-church-gold block mb-1">Public Transport</span>
                  <p className="font-sans text-white/85 text-sm">S-Bahn / U-Bahn: <strong>Lapp Kabel</strong></p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <RiPhoneLine size={18} className="text-church-gold" aria-hidden="true" />
                </div>
                <div>
                  <span className="font-sans text-xs uppercase tracking-widest text-church-gold block mb-1">Phone / WhatsApp</span>
                  <a
                    href="tel:+491773373200"
                    className="font-sans text-white/85 text-sm hover:text-church-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-church-gold rounded"
                  >
                    +49 177 3373200
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <RiMailLine size={18} className="text-church-gold" aria-hidden="true" />
                </div>
                <div>
                  <span className="font-sans text-xs uppercase tracking-widest text-church-gold block mb-1">Email</span>
                  <a
                    href="mailto:victory.stuttgart@gmail.com"
                    className="font-sans text-white/85 text-sm hover:text-church-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-church-gold rounded"
                  >
                    victory.stuttgart@gmail.com
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-white/15">
              <p className="font-sans text-xs text-white/50 mb-4 uppercase tracking-widest">Follow Us</p>
              <div className="flex gap-3" role="list" aria-label="Social Media">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label} href={href} aria-label={label}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-church-gold flex items-center justify-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-church-gold"
                  >
                    <Icon size={16} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}
