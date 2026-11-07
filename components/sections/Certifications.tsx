'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const certificateData = [
  {
    title: 'Belajar Dasar Pemrograman Web Certification',
    issuer: 'Dicoding',
    year: '2025',
    description: 'This class thoroughly discusses the basics of HTML and CSS...',
    link: 'https://www.dicoding.com/certificates/1OP829QOVPQK',
  },
  {
    title: 'Belajar Membuat Front-End Web untuk Pemula',
    issuer: 'Dicoding',
    year: '2025',
    description: 'This class is aimed at front-end web developers...',
    link: 'https://www.dicoding.com/certificates/ERZREQGR2XYV',
  },
  {
    title: 'Belajar Dasar Pemrograman JavaScript',
    issuer: 'Dicoding',
    year: '2025',
    description: 'This class is intended for individuals who want to become a web developer...',
    link: 'https://www.dicoding.com/certificates/MEPJQ48JWX3V',
  },
  {
    title: 'Belajar Back-End Pemula dengan JavaScript',
    issuer: 'Dicoding',
    year: '2025',
    description: 'This class is intended for individuals who want to become Back-End Developers...',
    link: 'https://www.dicoding.com/certificates/RVZKG4JKQXD5',
  },
]

export default function Certifications() {
  const [showAll, setShowAll] = useState(false)
  const displayedCertificates = showAll ? certificateData : certificateData.slice(0, 2)

  return (
    <section id="certifications" className="py-28">
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-4xl font-bold text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {displayedCertificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-effect h-full transition duration-300 hover:-translate-y-1 hover:bg-gray-800">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <h3 className="mb-1 text-2xl font-semibold text-white">{cert.title}</h3>
                  <p className="mb-2 text-gray-400">
                    {cert.issuer} — {cert.year}
                  </p>
                  <p className="mb-4 text-gray-300">{cert.description}</p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 transition hover:text-gray-300"
                  >
                    <ExternalLink className="mr-1 h-4 w-4 text-gray-400" aria-hidden />
                    View Certificate
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            aria-expanded={showAll}
            className="font-medium text-gray-400 transition hover:text-gray-300"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </section>
  )
}
