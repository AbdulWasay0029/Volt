import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://volt-energy.com'), // Replace with actual domain
  title: {
    default: 'VOLT | High Voltage Energy',
    template: '%s | VOLT Energy',
  },
  description:
    'Ignite your senses with VOLT. A futuristic energy drink series engineered for instant focus, raw power, and peak performance.',
  keywords: ['Energy Drink', 'Focus', 'Performance', 'Caffeine', 'Sports Drink', 'Gaming'],
  authors: [{ name: 'VOLT Energy' }],
  openGraph: {
    title: 'VOLT | High Voltage Energy',
    description: 'Ignite your senses with VOLT. Engineered for instant focus and raw power.',
    url: 'https://volt-energy.com',
    siteName: 'VOLT Energy',
    images: [
      {
        url: '/og-image.jpg', // Ensure this graphic exists in public folder or remove if not ready
        width: 1200,
        height: 630,
        alt: 'VOLT Energy Drink Collection',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VOLT | High Voltage Energy',
    description: 'Ignite your senses with VOLT. Engineered for instant focus and raw power.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          'font-body antialiased',
          inter.variable,
          spaceGrotesk.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
