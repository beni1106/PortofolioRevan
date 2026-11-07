import Link from 'next/link'
import SocialIcon from '@/components/SocialIcon'
import { navItems, site, socials } from '@/lib/site'

const hoverColor: Record<string, string> = {
  github: 'hover:text-white',
  linkedin: 'hover:text-blue-500',
  instagram: 'hover:text-pink-500',
  whatsapp: 'hover:text-green-500',
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap items-center justify-between text-white">
          <div className="mb-6 w-full md:mb-0 md:w-1/4">
            <h3 className="mb-4 text-2xl font-bold transition-colors hover:text-sky-400">{site.name}</h3>
            <p className="text-gray-400">{site.role}</p>
          </div>

          <nav aria-label="Quick links" className="mb-6 w-full md:mb-0 md:w-1/4">
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 transition-colors hover:text-sky-400">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mb-6 w-full md:mb-0 md:w-1/4">
            <h4 className="mb-4 text-lg font-semibold">Contact</h4>
            <p className="text-gray-400">
              Email:{' '}
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-sky-400">
                {site.email}
              </a>
            </p>
            <p className="text-gray-400">
              Phone:{' '}
              <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="transition-colors hover:text-sky-400">
                {site.phone}
              </a>
            </p>
          </div>

          <div className="w-full md:w-1/4">
            <h4 className="mb-4 text-lg font-semibold">Follow Me</h4>
            <div className="flex flex-wrap justify-center gap-5 lg:gap-8">
              {socials.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`transform text-gray-400 transition duration-300 hover:scale-110 ${hoverColor[s.id]}`}
                >
                  <SocialIcon id={s.id} size={28} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">&copy; {currentYear} {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
