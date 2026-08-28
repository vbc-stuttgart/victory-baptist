'use client';

import { useState, useEffect, useCallback } from 'react';

const verses = [
  {
    text: 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.',
    ref:  'John: Chapter 3, Verse 16',
  },
  {
    text: 'Jesus answered, Verily, verily, I say unto thee, Except a man be born of water and of the Spirit, he cannot enter into the kingdom of God.',
    ref:  'John: Chapter 3, Verse 5',
  },
  {
    text: 'But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name.',
    ref:  'John: Chapter 1, Verse 12',
  },
  {
    text: 'But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.',
    ref:  'Romans: Chapter 5, Verse 8',
  },
];

export default function BibleVerseSection() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  const goTo = useCallback((index: number) => {
    setVisible(false);
    setTimeout(() => {
      setCurrent(index);
      setVisible(true);
    }, 400);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % verses.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  const verse = verses[current];

  return (
    <section className="bg-church-navy section-padding relative overflow-hidden">
      {/* Decorative shapes */}
      <svg className="absolute left-0 top-1/2 -translate-y-1/2 opacity-5 h-64 w-auto" viewBox="0 0 120 200" fill="none" aria-hidden="true">
        <path d="M60 200 C20 160 0 120 20 80 C40 40 80 20 60 0 C40 20 80 40 100 80 C120 120 100 160 60 200Z" fill="#C8A45D"/>
      </svg>
      <svg className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 h-64 w-auto rotate-180" viewBox="0 0 120 200" fill="none" aria-hidden="true">
        <path d="M60 200 C20 160 0 120 20 80 C40 40 80 20 60 0 C40 20 80 40 100 80 C120 120 100 160 60 200Z" fill="#C8A45D"/>
      </svg>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <div className="font-serif text-9xl text-church-gold/20 leading-none mb-4 select-none h-16 flex items-center justify-center" aria-hidden="true">
          &ldquo;
        </div>

        <div
          style={{ transition: 'opacity 0.4s ease, transform 0.4s ease', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(8px)' }}
        >
          <blockquote className="font-lora italic text-white text-2xl md:text-3xl leading-relaxed text-balance">
            {verse?.text}
          </blockquote>
          <footer className="mt-6">
            <cite className="font-sans text-sm uppercase tracking-widest text-church-gold not-italic">
              {verse?.ref}
            </cite>
          </footer>
        </div>

      </div>
    </section>
  );
}
