import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from "next/script";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://kumbhnashikguide.com'),

  other: {
  "google-adsense-account": "ca-pub-1617134626103059",
},

  title: 'Nashik Kumbh Guide | Official Information & Travel Guide',
  description:
    'Comprehensive guide to Nashik-Trimbakeshwar Kumbh Mela. Temples, ghats, travel guide, important dates and updates for pilgrims visiting Nashik Kumbh.',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'Nashik Kumbh Guide',
    description:
      'Complete Nashik Kumbh Mela travel and information guide for pilgrims.',
    url: 'https://kumbhnashikguide.com',
    siteName: 'Nashik Kumbh Guide',
    images: [
      {
        url: 'https://kumbhnashikguide.com/og-image.jpg', 
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Nashik Kumbh Guide',
    description:
      'Official travel and info guide for Nashik Kumbh Mela pilgrims.',
    images: ['https://kumbhnashikguide.com/og-image.jpg'],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
{/* Google Analytics */}
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-NHG2VLRQ5Z"
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-NHG2VLRQ5Z');
  `}
</Script>

{/* Google AdSense */}
<Script
  id="google-adsense"
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1617134626103059"
  crossOrigin="anonymous"
  strategy="afterInteractive"
/>

          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
