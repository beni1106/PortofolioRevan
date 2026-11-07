import SocialIcon from '@/components/SocialIcon'
import { socials } from '@/lib/site'

const hoverBg: Record<string, string> = {
  github: 'hover:bg-gray-900',
  linkedin: 'hover:bg-blue-500',
  instagram: 'hover:bg-pink-500',
  whatsapp: 'hover:bg-green-500',
}

// Disembunyikan di layar kecil agar tidak menutupi konten (ikon yang sama sudah ada di Hero & Footer).
export default function SocialMedia() {
  return (
    <div className="fixed bottom-4 left-4 z-50 hidden flex-col space-y-5 lg:flex">
      {socials.map((s) => (
        <a
          key={s.id}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className={`transform rounded-full bg-white p-2 text-[#0E131F] transition-all duration-300 hover:scale-125 hover:text-white ${hoverBg[s.id]}`}
        >
          <SocialIcon id={s.id} size={24} />
        </a>
      ))}
    </div>
  )
}
