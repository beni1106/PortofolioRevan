import { Github, Linkedin, Instagram } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import type { SocialId } from '@/lib/site'

export default function SocialIcon({ id, size = 24, className }: { id: SocialId; size?: number; className?: string }) {
  const props = { size, className, 'aria-hidden': true as const }
  switch (id) {
    case 'github':
      return <Github {...props} />
    case 'linkedin':
      return <Linkedin {...props} />
    case 'instagram':
      return <Instagram {...props} />
    case 'whatsapp':
      return <FaWhatsapp {...props} />
  }
}
