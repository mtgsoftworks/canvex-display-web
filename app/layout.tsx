import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Canvex Display | Low-latency remote display for Windows',
  description: 'Turn your Android device into a low-latency remote display and control surface for Windows.',
  keywords: ['remote display', 'windows to android', 'screen mirroring', 'low latency', 'touch input', 'pen input'],
  authors: [{ name: 'MTG Softworks', url: 'https://mtgsoftworks.com' }],
  creator: 'MTG Softworks',
  publisher: 'MTG Softworks',
  openGraph: {
    title: 'Canvex Display | Low-latency remote display',
    description: 'Turn your Android device into a low-latency remote display and control surface for Windows. Support for touch, pen, and audio.',
    url: 'https://canvexdisplay.mtgsoftworks.com',
    siteName: 'Canvex Display',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Canvex Display - Remote Display for Windows',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Canvex Display | Low-latency remote display',
    description: 'Turn your Android device into a low-latency remote display and control surface for Windows. Support for touch, pen, and audio.',
    images: ['/og-image.jpg'],
    creator: '@mtgsoftworks',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark scroll-smooth`}>
      <body className="bg-slate-950 text-slate-50 font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200" suppressHydrationWarning>
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
