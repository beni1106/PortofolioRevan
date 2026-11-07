'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, Mail } from 'lucide-react'
import { navItems } from '@/lib/site'

export default function Header() {
  const [isFloating, setIsFloating] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Ref dipasang di <nav> (termasuk tombol toggle). Sebelumnya hanya di panel menu,
  // sehingga klik tombol X dianggap "klik di luar" lalu menu langsung terbuka lagi.
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsFloating(window.scrollY > 50)

    const handlePointerDown = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="fixed z-50 mt-2 w-full transition-all duration-300">
      <nav
        ref={navRef}
        aria-label="Main navigation"
        className={`nav-blur container relative mx-auto rounded-2xl px-6 py-4 ${isFloating ? 'shadow-lg' : ''}`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-white">
            Revan Novendri
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center justify-center space-x-4 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-item rounded-full p-3 text-white transition-colors hover:text-gray-400"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <Link
            href="#contact"
            className="hidden transform items-center rounded-full bg-white px-4 py-2 font-semibold text-[#354F52] transition duration-500 hover:scale-105 hover:bg-gray-700 hover:text-white md:flex"
          >
            <Mail size={20} className="mr-2" aria-hidden />
            Contact
          </Link>

          {/* Mobile Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white md:hidden"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="nav-blur absolute left-0 right-0 top-full mt-2 rounded-2xl p-8 shadow-lg md:hidden"
          >
            <div className="flex flex-col items-center space-y-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-item flex items-center text-white transition-colors hover:text-gray-400"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="nav-item flex items-center text-white transition-colors hover:text-gray-400"
                onClick={closeMenu}
              >
                <Mail size={20} className="mr-2" aria-hidden /> Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
