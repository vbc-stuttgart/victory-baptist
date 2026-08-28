'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { RiArrowLeftSLine, RiArrowRightSLine, RiCloseLine } from 'react-icons/ri';

type MediaItem = {
  type: 'image' | 'video';
  src:  string;
  alt:  string;
};

const mediaItems: MediaItem[] = [
  { type: 'image', src: '/images/Sunday Morning Service.jpg', alt: 'Sunday Morning Service'   },
  { type: 'video', src: '/images/Prayer1.m4v',                alt: 'Prayer Meeting'           },
  { type: 'image', src: '/images/Children_Ministry.jpg',      alt: 'Children Ministry'        },
  { type: 'image', src: '/images/Sunday_School.jpg',          alt: 'Sunday School'            },
  { type: 'video', src: '/images/Singing_1.m4v',              alt: 'Congregational Singing'   },
  { type: 'image', src: '/images/Thanks_Giving_1.jpg',        alt: 'Church Fellowship'        },
  { type: 'image', src: '/images/Child_Care.jpg',             alt: 'Childcare'                },
  { type: 'image', src: '/images/Craftings.jpg',              alt: 'Church Activities'        },
  { type: 'video', src: '/images/Prayer2.m4v',                alt: 'Prayer'                   },
];

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close  = useCallback(() => setLightbox(null), []);
  const prev   = useCallback(() => setLightbox(i => i !== null ? (i - 1 + mediaItems.length) % mediaItems.length : null), []);
  const next   = useCallback(() => setLightbox(i => i !== null ? (i + 1) % mediaItems.length : null), []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape')     close();
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, close, prev, next]);

  const current = lightbox !== null ? mediaItems[lightbox] : null;

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {mediaItems.map((item, i) => (
          <button
            key={item.src}
            onClick={() => setLightbox(i)}
            className="aspect-[4/3] rounded-2xl overflow-hidden relative w-full block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-church-gold"
            aria-label={`Open ${item.alt}`}
          >
            {item.type === 'image' ? (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width:768px) 50vw, 33vw"
              />
            ) : (
              <video
                src={item.src}
                autoPlay muted loop playsInline
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                aria-label={item.alt}
              />
            )}
            <div className="absolute inset-0 bg-church-navy/0 group-hover:bg-church-navy/30 transition-colors duration-300 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-sans text-xs uppercase tracking-widest bg-black/40 px-3 py-1 rounded-full">
                {item.alt}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {current && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={close}
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full p-2"
            aria-label="Close"
          >
            <RiCloseLine size={28} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full p-2"
            aria-label="Previous"
          >
            <RiArrowLeftSLine size={40} />
          </button>

          {/* Media */}
          <div
            className="max-w-4xl max-h-[85vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {current.type === 'image' ? (
              <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                <Image
                  src={current.src}
                  alt={current.alt}
                  fill
                  className="object-contain rounded-lg"
                  sizes="90vw"
                  priority
                />
              </div>
            ) : (
              <video
                key={current.src}
                src={current.src}
                controls
                autoPlay
                className="max-w-full max-h-[80vh] rounded-lg"
                aria-label={current.alt}
              />
            )}
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full p-2"
            aria-label="Next"
          >
            <RiArrowRightSLine size={40} />
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-sans text-xs text-white/50 tracking-widest">
            {(lightbox ?? 0) + 1} / {mediaItems.length}
          </div>
        </div>
      )}
    </>
  );
}
