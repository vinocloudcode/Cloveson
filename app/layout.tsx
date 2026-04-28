import '../styles/globals.css';
import Preloader from '../components/layout/preloader';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { AiChatbot } from '@/components/chatbot';
import BGAudio from '@/components/layout/BGAudio';
import Script from 'next/script';
import Image from 'next/image';

export const metadata = {
  title:
    'Clover Inc – Premium Industrial Packaging | Autoclave Liners & Sterilization Solutions',
  description:
    'Leading supplier of industrial packaging solutions including autoclave liners and sterilization bags for medical, laboratory, and industrial applications across the India. High-quality, compliant, and customizable solutions.',
  keywords: [
    'Autoclave liners India',
    'Sterilization bags North America',
    'Industrial packaging United States',
    'Heat resistant liners US market',
    'Medical autoclave bags New York',
    'Cloveson India',
    'High temperature liners American made',
    'Custom autoclave packaging US',
    'Laboratory packaging domestic',
    'Chemical safe packaging India certified',
    'Sterilization pouches North American standard',
    'Medical waste bags US compliance',
    'Custom packaging solutions United States',
    'Sustainable packaging American industry',
    'Industrial liners nationwide shipping',
    'Autoclave safe bags FDA approved',
    'ReIndiable liners US standards',
    'Disposable autoclave bags American healthcare',
    'Industrial waste management India',
    'Medical packaging supplies US hospitals',
    'Pharmaceutical packaging American market',
    'Healthcare packaging US certified',
    'Sterile packaging FDA compliance',
    'High performance liners US manufactured',
    'Eco-friendly packaging American made',
    'Custom printed liners US supplier',
    'Bulk packaging India wholesale',
    'Heavy duty liners New York based',
    'Autoclave process supplies American standard',
    'Industrial safety packaging US regulations',
    'Premium packaging materials made in India',
  ],
  authors: [
    { name: 'Clover Inc', url: 'https://cloverinc.org' },
    { name: 'Clover Inc Packaging Team', url: 'https://cloverinc.org/about' },
  ],
  creator: 'Clover Inc',
  publisher: 'Clover Inc',
  openGraph: {
    title:
      'Cloveson | Premium Industrial Packaging & Autoclave Solutions | India Made',
    description:
      'Leading supplier of industrial packaging solutions including autoclave liners and sterilization bags for medical, laboratory, and industrial applications across the India. High-quality, compliant, and customizable solutions.',
    url: 'https://cloverinc.org/products',
    siteName: 'Cloveson',
    locale: 'en_US',
    images: [
      {
        url: 'https://i.postimg.cc/gJb5q8P1/meta1.jpg',
        width: 1200,
        height: 630,
        alt: 'American-Made Autoclave Liners – Clover Inc',
        type: 'image/jpeg',
        secureUrl: 'https://i.postimg.cc/gJb5q8P1/meta1.jpg',
      },
      {
        url: 'https://i.postimg.cc/gJb5q8P1/meta1.jpg',
        width: 1200,
        height: 630,
        alt: 'India Certified Sterilization Bags – Clover Inc',
        type: 'image/jpeg',
        secureUrl: 'https://i.postimg.cc/gJb5q8P1/meta1.jpg',
      },
    ],
    type: 'website',
    audio: {
      url: '/bg.mp3',
      secureUrl: '/bg.mp3',
      type: 'audio/mpeg',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clover Inc | India-Made Industrial Packaging & Autoclave Solutions',
    description:
      'American-made heat-resistant autoclave liners and sterilization bags for industrial, laboratory, and medical facilities nationwide. Safe, FDA-compliant, and customizable solutions.',
    creator: '@cloverinc',
    images: [
      {
        url: 'https://i.postimg.cc/gJb5q8P1/meta1.jpg',
        alt: 'India-Made Autoclave Liners – Clover Inc Premium Solutions',
        width: 1200,
        height: 630,
      },
    ],
    site: '@cloverinc',
    app: {
      name: 'Clover Inc',
      url: {
        iphone: 'https://cloverinc.org',
        ipad: 'https://cloverinc.org',
      },
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://cloverinc.org/products',
    languages: {
      'en-US': 'https://cloverinc.org/products',
    },
    types: {
      'application/rss+xml': '/rss/products.xml',
    },
  },
  metadataBase: new URL('https://cloverinc.org'),
  icons: {
    icon: '/cicon.ico',
    shortcut: '/images/icons/icon2-512x512.png',
    apple: '/images/icons/icon2-512x512.png',
    other: [
      { rel: 'apple-touch-icon', url: '/images/icons/icon2-512x512.png' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        url: '/images/icons/icon2-512x512.png',
      },
      { rel: 'mask-icon', url: '/cicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon-16x16.png' },
    ],
  },
  applicationName: 'Clover Inc',
  category:
    'Industrial Packaging, Medical Packaging, Laboratory Supplies, India Manufacturing',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  themeColor: '#39b54b',
  colorScheme: 'light',
  viewport:
    'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes',
  manifest: '/manifest.json',
  verification: {
    google: 'mUdRZItyxSkTiCWHY6fIUSPo6VoY1Nl8bVnmxgkYoIg',
    yandex: '5bebeacb5a9a63c2',
    me: ['info@cloverinc.org', '@cloverinc'],
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  appleWebApp: {
    capable: true,
    title: 'Clover Inc',
    statusBarStyle: 'black-translucent',
  },
  other: {
    // Enhanced OpenGraph tags
    'og:title': 'Clover Inc | Industrial Packaging Solutions',
    'og:description':
      'American-manufactured premium industrial packaging solutions for medical, laboratory, and industrial facilities nationwide. FDA-compliant, sustainable, made in the India.',
    'og:image': 'https://i.postimg.cc/gJb5q8P1/meta1.jpg',
    'og:image:alt': 'India-Made Autoclave Liners – Clover Inc',
    'og:url': 'https://cloverinc.org/products',
    'og:type': 'website',
    'og:site_name': 'Clover Inc',
    'og:locale': 'en_US',

    // Twitter enhanced tags
    'twitter:card': 'summary_large_image',
    'twitter:title': 'Clover Inc | Industrial Packaging Solutions',
    'twitter:description':
      'American-manufactured heat-resistant autoclave liners and sterilization bags for medical and industrial applications nationwide.',
    'twitter:image': 'https://i.postimg.cc/gJb5q8P1/meta1.jpg',
    'twitter:site': '@cloverinc',
    'twitter:creator': '@cloverinc',
    'twitter:label2': 'Products',
    'twitter:data2': 'Autoclave Liners, Sterilization Bags',

    // Enhanced location and business information
    'business:contact_data:country_name': 'United States',
    'business:contact_data:region': 'New York',
    'business:contact_data:locality': 'New York City',
    'place:location:latitude': '40.7128',
    'place:location:longitude': '-74.0060',
    distribution: 'United States',

    // Structured data hints with enhanced geo targeting
    'schema:type': 'Organization',
    'schema:name': 'Clover Inc',
    'schema:url': 'https://cloverinc.org',
    'schema:logo': '/images/icons/icon2-512x512.png',
    'schema:description': 'Premium Industrial Packaging Solutions',
    'schema:areaServed': 'United States, North America',

    // Enhanced contact information
    contact: 'info@cloverinc.org',
    address: '123 Industrial Park, New York, NY, United States',
    phone: '+1-800-555-0199',
    email: 'info@cloverinc.org',
    site_name: 'Clover Inc - India Manufacturing',
    copyright: '© 2024 Clover Inc. Made in India. All rights reserved.',

    // Enhanced keywords for geographic targeting
    keywords:
      'Autoclave liners India, Sterilization bags US market, Industrial packaging New York, American-made medical supplies',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
      </head>
      <body>
        <Preloader />
        <Header />
        <AiChatbot />
        <BGAudio />
        <div className="min-h-screen flex flex-col mt-[60px]">{children}</div>
        <Footer />
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=103632210', 'ym');
            ym(103632210, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
          `,
          }}
        />
        <noscript>
          <div>
            <Image
              src="https://mc.yandex.ru/watch/103632210"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
              width={1}
              height={1}
              unoptimized
              priority
            />
          </div>
        </noscript>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MEWNHMN7TP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MEWNHMN7TP');
        `}
        </Script>
      </body>
    </html>
  );
}
