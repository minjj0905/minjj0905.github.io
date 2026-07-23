import type { Metadata, Viewport } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';

import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import ThemeProvider from '@/components/common/ThemeProvider';
import { siteConfig } from '@/lib/site';
import '@/styles/fonts.css';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: '/',
    types: { 'application/rss+xml': '/rss.xml' },
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fcfcfd' },
    { media: '(prefers-color-scheme: dark)', color: '#111113' },
  ],
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="ko" suppressHydrationWarning>
    <body>
      <ThemeProvider>
        <div className="ambient relative flex min-h-dvh flex-col">
          <Header />
          <main className="relative z-10 mx-auto w-full max-w-3xl flex-1 px-5 pb-20 pt-10">{children}</main>
          <Footer />
        </div>
      </ThemeProvider>
      <GoogleAnalytics gaId={siteConfig.gaId} />
    </body>
  </html>
);

export default RootLayout;
