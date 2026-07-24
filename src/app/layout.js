import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Providers } from './providers';
import SmoothScroll from '@/components/SmoothScroll';
import ScrollButtons from '@/components/ScrollButtons';
import PageLoader from '@/components/PageLoader';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';

// ──────────────────────────────────────────────
// 📝 FONTS OPTIMIZATION
// ──────────────────────────────────────────────
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
  weight: ['500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

// ──────────────────────────────────────────────
// 📋 PERSONAL INFORMATION
// ──────────────────────────────────────────────
const personalDetails = {
  name: 'Syeda Sima',
  alternateName: ['Syeda Sima', 'Sima'],
  jobTitle: 'Full-Stack Web Developer',
  url: 'https://syeda-sima-portfolio.vercel.app',
  email: 'syeda.sima.ss@gmail.com',
  phone: '+88013088....',
  location: 'Dhaka, Bangladesh',
  sameAs: [
    'https://www.linkedin.com/in/syeda-sima/',
    'https://github.com/Tithe-cast',
  ],
};

// ──────────────────────────────────────────────
// 🎯 METADATA CONFIGURATION
// ──────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL(personalDetails.url),

  title: {
    default: 'Syeda Sima | Full-Stack Developer',
    template: '%s | Syeda Sima',
  },

  description:
    'Syeda Sima is a Full-Stack Web Developer based in Dhaka, Bangladesh, building modern and scalable web applications with React, Next.js, and MongoDB.',

  keywords: [
    'Syeda Sima',
    'Sima Developer',
    'Syeda Sima Developer',
    'Full Stack Developer Bangladesh',
    'MERN Stack Developer Dhaka',
    'React Developer Dhaka',
    'Software Engineer Bangladesh',
    'Next.js Expert Dhaka',
    'Web Developer Bangladesh',
    'JavaScript Developer',
  ],

  authors: [{ name: 'Syeda Sima', url: personalDetails.url }],
  creator: 'Syeda Sima',
  publisher: 'Syeda Sima',

  // Next.js Viewport & Theme Configuration
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },

  // Note: For themeColor array/object format changes in newer Next.js versions, 
  // keeping it explicitly structured or handled gracefully.
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0b0e14' },
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' }
  ],

  // ── Favicon & Icons ──
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon.png',
        color: '#3b82f6',
      },
    ],
  },

  // ── Open Graph ──
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: personalDetails.url,
    title: 'Syeda Sima | Full-Stack Developer',
    description:
      'Professional Full-Stack web solutions and high-performance applications by Syeda Sima.',
    siteName: 'Sima Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Syeda Sima - Full-Stack Developer Portfolio',
        type: 'image/png',
      },
    ],
    emails: [personalDetails.email],
  },

  // ── Twitter Card ──
  twitter: {
    card: 'summary_large_image',
    title: 'Syeda Sima | Software Engineer',
    description: 'Building modern web experiences with the MERN stack.',
    images: ['/og-image.png'],
    creator: '@syeda-sima',
    site: '@syeda-sima',
  },

  // ── SEO & Crawlers ──
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

  // ── Verification ──
  verification: {
    google: '3xTfRXUs6iW9698yGww7p4GRMFnWWqcvUKyTpjR-3mw',
  },

  // ── Other Meta ──
  alternates: {
    canonical: personalDetails.url,
  },

  category: 'technology',

  appLinks: {
    web: {
      url: personalDetails.url,
      should_fallback: true,
    },
  },
};

// ──────────────────────────────────────────────
// 🧩 ROOT LAYOUT
// ──────────────────────────────────────────────
export default function RootLayout({ children }) {
  // ── JSON-LD Schema (Structured Data) ──
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personalDetails.name,
    alternateName: personalDetails.alternateName,
    jobTitle: [
      'Full-Stack Developer',
      'Frontend Developer',
      'MERN Stack Developer',
      'Software Engineer',
      'Web Developer',
    ],
    url: personalDetails.url,
    image: `${personalDetails.url}/profile.png`,
    email: personalDetails.email,
    telephone: personalDetails.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hazaribagh, Dhaka',
      addressCountry: 'Bangladesh',
      addressRegion: 'Dhaka',
      postalCode: '1206',
    },
    sameAs: personalDetails.sameAs,
    description: metadata.description,
    knowsAbout: [
      'React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL',
      'TypeScript', 'Tailwind CSS', 'JavaScript', 'RESTful APIs', 'GraphQL',
      'JWT', 'OAuth', 'Docker', 'AWS', 'Vercel', 'Netlify', 'Git', 'CI/CD',
      'Responsive Design', 'UI/UX Design', 'Web Performance', 'SEO', 'Accessibility',
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Full-Stack Developer',
      description: 'Building high-performance, scalable web applications with modern technologies.',
      occupationalCategory: '15-1255.00',
    },
  };

  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        {/* ── Material Icons ── */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />

        {/* ── Preconnect for Performance ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* ── DNS Prefetch ── */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* ── Apple Web App Meta ── */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />

        {/* ── Feed Links ── */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Syeda Sima Portfolio Feed"
          href="/feed.xml"
        />
      </head>

      <body
        suppressHydrationWarning
        className={`${plusJakartaSans.variable} ${inter.variable} bg-background text-on-background font-body-md overflow-x-hidden antialiased`}
      >
        {/* ── Microsoft Clarity (Optimized with Next.js Script) ── */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "xp01cg3gue");
            `,
          }}
        />

        <Providers>
          {/* ── UI Components ── */}
          <PageLoader />
          <CustomCursor />
          <ScrollProgress />
          <SmoothScroll>
            {children}
            <ScrollButtons />
          </SmoothScroll>
        </Providers>

        {/* ── JSON-LD Structured Data ── */}
        <Script
          id="person-schema"
          strategy="afterInteractive"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* ── Google Analytics (Production Only) ── */}
        {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}