'use client'

import Image from 'next/image'
import { Github, Linkedin } from 'lucide-react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import HeroLayout from './layout'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <HeroLayout>
      <motion.div className="z-10 px-4 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">

        {/* Bagian Teks - Kiri */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-5xl font-bold text-white mb-4 animate-fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Revan Novendri
          </h1>
          <div className="h-16 mb-6 relative z-10">
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
          <div className="flex justify-center md:justify-start gap-6 mb-8">
            {/* GitHub */}
            <a
              href="https://github.com/beni1106/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="relative bg-white/10 p-3 rounded-full transform transition duration-500 group-hover:scale-110 group-hover:bg-white/20">
                <Github className="w-6 h-6" />
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/revan-novendri/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="relative bg-white/10 p-3 rounded-full transform transition duration-500 group-hover:scale-110 group-hover:bg-white/20">
                <Linkedin className="w-6 h-6" />
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/62895410240543" // Ganti dengan nomor WhatsApp kamu
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="relative bg-white/10 p-3 rounded-full transform transition duration-500 group-hover:scale-110 group-hover:bg-white/20">
                <FaWhatsapp className="w-6 h-6" />
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/rreppan/" // Ganti dengan username Instagram kamu
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="relative bg-white/10 p-3 rounded-full transform transition duration-500 group-hover:scale-110 group-hover:bg-white/20">
                <FaInstagram className="w-6 h-6" />
              </div>
            </a>
          </div>

          {/* Tombol Get in Touch */}
          <a
            href="/cv/Revan-Novendri-CV.pdf"
            download
            className="relative inline-flex group items-center justify-center"
          >
            <button className="relative hover-glow px-8 py-4 bg-white text-[#354F52] rounded-full font-semibold transform 
  transition duration-500 hover:scale-105 hover:bg-opacity-90">
              Download My CV
            </button>
          </a>

        </div>

        {/* Bagian Foto - Kanan */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative inline-block group">
            <div className="absolute -inset-1 hover-glow blur opacity-75 
            transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative">
              <Image
                src="/images/revan.png"
                alt="Revan Novendri"
                width={320}
                height={320}
                className="rounded-full border-4 border-white/10 shadow-lg backdrop-blur-sm transform transition duration-500 group-hover:scale-105 hover-glow grayscale hover:grayscale-0"
                priority
              />
            </div>
          </div>
        </div>

      </motion.div>
    </HeroLayout>
  )
}
