'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { RiArrowDownLine } from 'react-icons/ri';

const fadeUp = (delay = 0) => ({
  initial:  { opacity: 0, y: 40 },
  animate:  { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut' as const, delay },
});

const blurDataURL =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoH' +
  'BwYIDAoMCwsKCwsNCxAQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQU' +
  'FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAIAAoDASIAAhEBAxEB/8QAFg' +
  'ABAQEAAAAAAAAAAAAAAAAAAAYH/8QAHxAAAQQCAwEAAAAAAAAAAAAAAQIDBAUREiEx/8QAFAEBAAAAAAAAAAAAA' +
  'AAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCiwrKvLYhW9dVtLJC5klmSOSNhXF7e' +
  'YjWLVuoGwAAbPoAAP//Z';

export default function HeroSection() {
  return (
    <section className="relative min-h-[78vh] flex items-center justify-center overflow-hidden bg-church-navy" aria-label="Hero">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Victory Baptist Church Stuttgart — congregation in worship"
          fill
          priority
          className="object-cover"
          placeholder="blur"
          blurDataURL={blurDataURL}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-church-navy/80 via-church-navy/65 to-church-navy/55" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto flex flex-col items-center">
        <motion.span
          {...fadeUp(0.1)}
          className="font-sans text-sm uppercase tracking-widest text-church-gold mb-6 block"
        >
          Stuttgart, Germany
        </motion.span>

        <motion.h1
          {...fadeUp(0.25)}
          className="text-white text-balance"
        >
          Welcome
        </motion.h1>

        <motion.p
          {...fadeUp(0.4)}
          className="font-lora italic text-white/90 text-xl mt-6 max-w-xl text-balance"
        >
          We are an English-speaking, independent, Baptist church in Stuttgart — preaching the Gospel of Salvation in Jesus Christ to the international community.
        </motion.p>

        <motion.blockquote
          {...fadeUp(0.55)}
          className="font-lora italic text-white/65 text-sm mt-4"
          cite="Romans: Chapter 12, Verse 10"
        >
          &ldquo;Be kindly affectioned one to another with brotherly love; in honour preferring one another.&rdquo; — Romans: Chapter 12, Verse 10
        </motion.blockquote>

        <motion.div
          {...fadeUp(0.7)}
          className="flex flex-col sm:flex-row gap-4 mt-10 w-full justify-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 bg-church-gold text-white font-sans font-medium rounded-full px-8 py-4 min-h-[52px] hover:bg-church-goldLight transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Join Us Sunday at 10:45 AM
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-sans font-medium rounded-full px-8 py-4 min-h-[52px] hover:bg-white/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Learn More — Join Us
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-church-gold"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <RiArrowDownLine size={28} />
      </motion.div>
    </section>
  );
}
