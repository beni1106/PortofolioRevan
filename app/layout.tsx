import './styles/globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/layout/ScrollToTop'
import SocialMedia from '@/components/layout/SocialMedia'

const inter = Inter({ subsets: ['latin'] })

// Isi NEXT_PUBLIC_SITE_URL dengan domain asli saat deploy (mis. https://revan.vercel.app)
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
const description =
  'Portfolio Revan Novendri — mahasiswa Informatics Engineering & web developer (MERN Stack, Next.js).'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Revan Novendri | Web Developer',
    template: '%s | Revan Novendri',
  },
  description,
  openGraph: {
    type: 'website',
    title: 'Revan Novendri | Web Developer',
    description,
    images: [{ url: '/images/revan.webp', width: 640, height: 789, alt: 'Revan Novendri' }],
  },
  twitter: {
    card: 'summary',
    title: 'Revan Novendri | Web Developer',
    description,
    images: ['/images/revan.webp'],
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a14',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={inter.className}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main id="main" className="flex-grow">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
          <SocialMedia />
        </div>
      </body>
    </html>
  )
}
