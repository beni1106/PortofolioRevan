// Satu sumber data untuk info pribadi, supaya tidak di-copy-paste di banyak komponen.
export const site = {
  name: 'Revan Novendri',
  role: 'Tech Enthusiast & FullStack Dev',
  email: 'revannofendri@gmail.com',
  phone: '+62 895410240543',
  location: 'Kota Jambi, Indonesia',
  cv: '/cv/RevanNovendri.pdf',
} as const

export type SocialId = 'github' | 'linkedin' | 'instagram' | 'whatsapp'

export const socials: { id: SocialId; label: string; href: string }[] = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/beni1106/' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/revan-novendri/' },
  { id: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/62895410240543' },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/rreppan/' },
]

export const navItems = [
  { href: '#about', label: 'About' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
]
