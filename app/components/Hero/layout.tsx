import ParticlesBackground from '../ParticleBackground/page'

export default function HeroLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden 
    bg-gradient-to-b from-zinc-800 via-zinc-900 to-black"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-700/20 via-transparent to-transparent"></div>
      <ParticlesBackground />
      {children}
    </section>
  )
}
