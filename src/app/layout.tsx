import type { Metadata, Viewport } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'KukuHub | Fresh From Our Farm, Straight to Your Home',
    template: '%s | KukuHub',
  },
  description:
    'Your trusted source for fresh eggs, quality poultry meat, healthy hens and roosters, organic manure and custom poultry feeds. Everything poultry, all in one place.',
  applicationName: 'KukuHub',
  keywords: [
    'KukuHub',
    'poultry products',
    'fresh eggs',
    'poultry meat',
    'hens and roosters',
    'organic poultry manure',
    'custom poultry feeds',
    'poultry farming',
  ],
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'KukuHub | Fresh From Our Farm, Straight to Your Home',
    description:
      'Discover quality poultry products, fresh eggs, healthy birds, manure, and custom feeds at KukuHub.',
    siteName: 'KukuHub',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#FFFBF5',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
