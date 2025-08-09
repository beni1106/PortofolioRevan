import { inter } from '@/app/layout'
import Header from '../Header/page'
import ScrollToTop from '../ScrollToTop/page'
import SocialMedia from '../SocialMedia/page'
import Footer from './page'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} text-white min-h-screen`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <footer className="bg-black/40 backdrop-blur-md py-8">
            <div className="container mx-auto px-6 text-center">
              <Footer />
            </div>
          </footer>
          <ScrollToTop />
          <SocialMedia />
        </div>
      </body>
    </html>
  )
}
