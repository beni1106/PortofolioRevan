'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export default function Certificates() {
  const [showAll, setShowAll] = useState(false)

  const certificateData = [
    {
      title: "Belajar Dasar Pemrograman Web Certification",
      issuer: "Dicoding",
      year: "2025",
      description: "This class thoroughly discusses the basics of HTML and CSS...",
      link: "https://www.dicoding.com/certificates/1OP829QOVPQK"
    },
    {
      title: "Belajar Membuat Front-End Web untuk Pemula",
      issuer: "Dicoding",
      year: "2025",
      description: "This class is aimed at front-end web developers...",
      link: "https://www.dicoding.com/certificates/ERZREQGR2XYV"
    },
    {
      title: "Belajar Dasar Pemrograman JavaScript",
      issuer: "Dicoding",
      year: "2025",
      description: "This class is intended for individuals who want to become a web developer...",
      link: "https://www.dicoding.com/certificates/MEPJQ48JWX3V"
    },
    {
      title: "Belajar Back-End Pemula dengan JavaScript",
      issuer: "Dicoding",
      year: "2025",
      description: "This class is intended for individuals who want to become Back-End Developers...",
      link: "https://www.dicoding.com/certificates/RVZKG4JKQXD5"
    }
  ]

  const displayedCertificates = showAll ? certificateData : certificateData.slice(0, 2)

  return (
    <section id="certifications" className="py-28">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Certifications
        </motion.h2>

        {/* ✅ Inilah bagian yang diubah */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {displayedCertificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-effect hover:bg-gray-800 h-full transition">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <h3 className="text-2xl font-semibold text-white mb-1">{cert.title}</h3>
                  <p className="text-gray-400 mb-2">{cert.issuer} — {cert.year}</p>
                  <p className="text-gray-300 mb-4">{cert.description}</p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-300 transition flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-1 text-gray-400" />
                    View Certificate
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-gray-400 hover:text-gray-300 transition font-medium"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </section>
  )
}
