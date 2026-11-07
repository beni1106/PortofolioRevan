'use client'

import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import ParticlesBackground from '@/components/ParticlesBackground'
import SocialIcon from '@/components/SocialIcon'
import { site, socials } from '@/lib/site'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-zinc-800 via-zinc-900 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-700/20 via-transparent to-transparent" />
      <ParticlesBackground />

      <div className="z-10 flex w-full max-w-6xl flex-col items-center justify-between px-4 pt-24 md:flex-row md:pt-0">
        {/* Bagian Teks - Kiri */}
        <div className="mb-10 text-center md:mb-0 md:w-1/2 md:text-left">
          <h1 className="mb-4 animate-fade-in-up bg-gradient-to-r from-white to-white/80 bg-clip-text text-5xl font-bold text-transparent">
            {site.name}
          </h1>
          <div className="relative z-10 mb-6 h-16">
            <TypeAnimation
              sequence={[
                'Computer Science & Informatics Engineering',
                1000,
                '',
                250,
                'Web Developer',
                1000,
                '',
                250,
                'Tech Enthusiast',
                1000,
                '',
                250,
              ]}
              wrapper="p"
              speed={30}
              className="text-xl text-gray-300"
              repeat={Infinity}
            />
          </div>

          {/* Tombol Sosial Media */}
          <div className="mb-8 flex justify-center gap-6 md:justify-start">
            {socials.map((s) => (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="group relative"
              >
                <div className="relative transform rounded-full bg-white/10 p-3 transition duration-500 group-hover:scale-110 group-hover:bg-white/20">
                  <SocialIcon id={s.id} size={24} />
                </div>
              </a>
            ))}
          </div>

          {/* Tombol Download CV (sebelumnya <button> di dalam <a>, HTML tidak valid) */}
          <a
            href={site.cv}
            download
            className="hover-glow relative inline-flex transform items-center justify-center rounded-full bg-white px-8 py-4 font-semibold text-[#354F52] transition duration-500 hover:scale-105 hover:bg-opacity-90"
          >
            Download My CV
          </a>
        </div>

        {/* Bagian Foto - Kanan */}
        <div className="flex justify-center md:w-1/2">
          <div className="group relative inline-block">
            <div className="hover-glow absolute -inset-1 animate-tilt opacity-75 blur transition duration-1000 group-hover:duration-200" />
            <div className="relative">
              <Image
                src="/images/revan.webp"
                alt={site.name}
                width={320}
                height={395}
                sizes="320px"
                className="hover-glow transform rounded-full border-4 border-white/10 object-cover shadow-lg backdrop-blur-sm transition duration-500 grayscale group-hover:scale-105 hover:grayscale-0"
                style={{ width: 320, height: 320 }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
