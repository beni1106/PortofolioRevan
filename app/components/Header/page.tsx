'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, Mail } from 'lucide-react'
import HeaderLayout from './layout'

export default function Header() {
  const [isFloating, setIsFloating] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsFloating(window.scrollY > 50)
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        toggleMenu(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleMenu = (forceClose = false) => {
    setIsMenuOpen(prev => forceClose ? false : !prev)
  }

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#certifications", label: "Certifications" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
  ]

  return (
    <HeaderLayout>
      <nav className={`container mx-auto px-6 py-4 nav-blur rounded-2xl ${isFloating ? 'shadow-lg' : ''}`}>
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white text-xl font-bold">
            Revan Novendri
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center space-x-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="nav-item text-white hover:text-gray-400 p-3 rounded-full transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <Link
            href="#contact"
            className="hidden md:flex items-center px-4 py-2 bg-white hover:bg-gray-700 hover:text-white text-[#354F52] rounded-full 
            font-semibold transform transition duration-500 hover:scale-105 hover:bg-opacity-90"
          >
            <Mail size={20} className="mr-2" />
            Contact
          </Link>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => toggleMenu()}
            className="md:hidden text-white focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div ref={menuRef} className="md:hidden absolute top-16 left-0 right-0 nav-blur p-8 shadow-lg">
            <div className="flex flex-col space-y-8 items-center">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="nav-item text-white hover:text-gray-400 transition-colors flex items-center"
                  onClick={() => toggleMenu(true)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="nav-item text-white hover:text-gray-400 transition-colors flex items-center"
                onClick={() => toggleMenu(true)}
              >
                <Mail size={20} className="mr-2" /> Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </HeaderLayout>
  )
}
