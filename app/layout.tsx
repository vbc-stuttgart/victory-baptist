import type { Metadata } from 'next';
import { Playfair_Display, Inter, Lora } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});


export const metadata: Metadata = {
  metadataBase: new URL('https://www.victorybaptist-stuttgart.de'),
  title: {
    default: 'Victory Baptist Church Stuttgart, English-Speaking Church for the Military Community',
    template: '%s | Victory Baptist Church Stuttgart',
  },
  description:
    'An English-speaking independent Baptist church in Stuttgart, welcoming military families from Patch, Kelley, Panzer Kaserne and Robinson Barracks. Sundays at 10:30 AM.',
  keywords: ['Baptist', 'English church Stuttgart', 'Vaihingen', 'KJV Bible church', 'military church Stuttgart', 'church near Patch Barracks', 'church near Kelley Barracks', 'church near Panzer Kaserne', 'church near Robinson Barracks', 'USAG Stuttgart church', 'AFRICOM', 'EUCOM', 'American church Stuttgart', 'Böblingen', 'Möhringen'],
  authors: [{ name: 'Victory Baptist Church Stuttgart' }],
  creator: 'Victory Baptist Church Stuttgart',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.victorybaptist-stuttgart.de',
    siteName: 'Victory Baptist Church Stuttgart',
    title: 'Victory Baptist Church Stuttgart, English-Speaking Church for the Military Community',
    description:
      'An English-speaking Baptist church in Stuttgart for military families at Patch, Kelley, Panzer and Robinson Barracks. Sundays at 10:30 AM.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Victory Baptist Church Stuttgart',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Victory Baptist Church Stuttgart, English-Speaking Church for the Military Community',
    description: 'An English-speaking Baptist church in Stuttgart for military families at Patch, Kelley, Panzer and Robinson Barracks. Sundays at 10:30 AM.',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.victorybaptist-stuttgart.de',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${lora.variable}`}>
      <body className="antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
