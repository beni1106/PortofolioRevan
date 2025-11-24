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
    {
      title: "PT. BERKAH AUTO SUKSES SEJAHTERA ( PT. BASS )",
      description: "A web-based doctor appointment booking platform developed using HTML, CSS, JavaScript (frontend), and PHP (backend). It includes features like user authentication, doctor listings, appointment scheduling, and a responsive UI/UX for a seamless experience. Additionally, it offers a HealthCare Blog and Health Tips section, providing valuable medical insights. The PHP backend manages form submissions, session handling, and MySQL database interactions, ensuring secure and efficient performance.",
      tech: ["NextJS", "JavaScript", "PHP", "CodeIgniter", "MySQL"],
      image: "/images/1.png",
      github: "https://github.com/beni1106/autoSuk-frontend.git",
      live: "https://basspreneur.com/",
    }

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
            <h2 className="text-4xl font-bold text-white"> Projects</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              This my project that I have worked on independently or collaboratively. Each project showcases my skills and expertise in web development.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex justify-center"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={item}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className='className="w-full max-w-2xl'
              >
                <Card className="glass-effect h-full bg-gradient-to-br from-[#4C3957]/10 to-[#6B5B7B]/10 border-[#4C3957]/20 overflow-hidden">
                  <div className="relative h-48 group">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition- transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="absolute bottom-4 left-4 right-4 flex gap-4">
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="rounded-full border-none bg-black/50 backdrop-blur-sm hover:bg-sky-900 flex-1"
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                        <Button
                          asChild
                          size="sm"
                          className="rounded-full bg-sky-900 backdrop-blur-sm hover:bg-white/40 flex-1"
                        >
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-300 text-sm line-clamp-3 hover:line-clamp-none transition-all duration-300">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-sky-500/20 text-sky-300
                           transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
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
                href="https://github.com/beni1106"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                View More Projects
                <ChevronRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}