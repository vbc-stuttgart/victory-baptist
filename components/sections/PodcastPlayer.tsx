'use client';

import { useState, useRef } from 'react';
import { RiPlayCircleLine } from 'react-icons/ri';

export type Episode = {
  title: string;
  date: string;
  link: string;
  audioUrl: string;
  audioType: string;
  duration: string;
  preacher: string;
};

const ARTWORK = 'https://pbcdn1.podbean.com/imglogo/image-logo/16882650/Logo_Podcast_01_bv9d9d.jpeg';

export default function PodcastPlayer({ episodes }: { episodes: Episode[] }) {
  const [current, setCurrent] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const featured = episodes[current];

  const handleSelect = (i: number) => {
    if (i === current) {
      if (audioRef.current?.paused) {
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current?.pause();
      }
      return;
    }
    setCurrent(i);
    if (audioRef.current) {
      audioRef.current.src = episodes[i].audioUrl;
      audioRef.current.load();
      audioRef.current.play().catch(() => {});
    }
  };

  return (
    <div className="max-w-3xl mx-auto">

      {/* Featured player */}
      <div className="bg-church-navy rounded-2xl overflow-hidden mb-3 p-5 sm:p-6 flex flex-col sm:flex-row gap-5 items-start">

        {/* Artwork */}
        <div className="shrink-0 w-full sm:w-32 h-40 sm:h-32 rounded-xl overflow-hidden bg-church-navy/60">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={ARTWORK}
            alt="The Bible Message podcast"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info + audio */}
        <div className="flex-1 min-w-0 flex flex-col justify-between gap-3">
          <div>
            <p className="font-sans text-church-gold text-xs uppercase tracking-widest mb-1">
              The Bible Message
            </p>
            <h3 className="font-serif text-white text-lg sm:text-xl leading-tight">
              {featured.title}
            </h3>
            {featured.preacher && (
              <p className="font-sans text-white/50 text-xs mt-1">{featured.preacher}</p>
            )}
          </div>
          <audio
            ref={audioRef}
            controls
            className="w-full"
            src={featured.audioUrl}
            preload="none"
            aria-label={featured.title}
          >
            <source src={featured.audioUrl} type={featured.audioType} />
          </audio>
        </div>
      </div>

      {/* Episode list */}
      <div className="rounded-2xl border border-gray-100 overflow-hidden divide-y divide-gray-100">
        {episodes.map((ep, i) => (
          <button
            key={ep.link || ep.title}
            onClick={() => handleSelect(i)}
            className={`w-full flex items-center gap-4 px-5 py-3.5 text-left transition-colors duration-150 group ${
              i === current ? 'bg-church-gold/8' : 'bg-white hover:bg-church-cream'
            }`}
          >
            <RiPlayCircleLine
              size={18}
              className={`shrink-0 transition-colors ${
                i === current
                  ? 'text-church-gold'
                  : 'text-church-navy/25 group-hover:text-church-navy/50'
              }`}
              aria-hidden="true"
            />
            <span
              className={`flex-1 font-sans text-sm font-medium leading-snug min-w-0 truncate ${
                i === current ? 'text-church-gold' : 'text-church-navy'
              }`}
            >
              {ep.title}
            </span>
            <span className="font-sans text-church-gray text-xs shrink-0 hidden sm:block">
              {ep.date}
            </span>
            {ep.duration && (
              <span
                className={`font-sans text-xs shrink-0 w-12 text-right ${
                  i === current ? 'text-church-gold' : 'text-church-gray'
                }`}
              >
                {ep.duration}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
