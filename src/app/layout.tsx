import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TechAutoGame Hub — Tech, Auto & Gaming Reviews',
  description: 'Your ultimate source for tech gadgets, car reviews, and gaming gear. Updated daily with AI-powered insights.',
  keywords: 'technology, cars, gaming, reviews, gadgets, automotive',
  openGraph: {
    type: 'website',
    siteName: 'TechAutoGame Hub',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#0a0b0f" />
      </head>
      <body>{children}</body>
    </html>
  );
}
