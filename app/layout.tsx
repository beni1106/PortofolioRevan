import './styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header/page'
import Footer from './components/Footer/page'
import ScrollToTop from './components/ScrollToTop/page'
import SocialMedia from './components/SocialMedia/page'

export const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Revan Novendri',
  description: 'Computer Science & Engineering student',
  icons: {
    icon: [], // Hilangkan favicon
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <ScrollToTop />
          <SocialMedia />
        </div>
      </body>
    </html>
  )
}
