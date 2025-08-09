'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, ExternalLink, ChevronRight } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    { comingSoon: true },
    { comingSoon: true }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section id="projects" className="py-28">
      <div className="container mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-16"
        >
          <motion.div variants={item} className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Showcasing my journey through code, innovation, and problem-solving
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={item}
              >
                <Card className="glass-effect h-full flex items-center justify-center bg-gradient-to-br from-gray-800/30 to-gray-700/30 border-gray-600/20 min-h-[200px]">
                  <span className="text-2xl font-bold text-gray-300">Coming Soon</span>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={item}
            className="text-center"
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-sky-900 hover:bg-sky-900 hover:text-white transition-all duration-300"
            >
              <a
                href="https://github.com/Shashank5239"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                SmalllProjects
                <ChevronRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

