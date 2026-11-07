'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, ExternalLink, ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

type Project = {
  title: string
  description: string
  tech: string[]
  image: string
  github?: string
  live?: string
}

const projects: Project[] = [
  {
    title: 'AutoSukses ( PT. BASS )',
    description:
      'Corporate website for PT. Berkah Auto Sukses Sejahtera, my first real client project. I built the responsive front end with Next.js (App Router) and Tailwind CSS, added smooth Framer Motion animations, and connected it to REST APIs so company, product, and contact content loads dynamically instead of being hardcoded. Developed in a two-person team, where I handled the front end.',
    tech: ['NextJS', 'JavaScript', 'TailwindCSS', 'Framer Motion', 'PHP', 'CodeIgniter', 'MySQL'],
    image: '/images/1.webp',
    github: 'https://github.com/beni1106/autoSuk-frontend.git',
    live: 'https://basspreneur.com/',
  },
  {
    title: 'News Portal AI Website',
    description:
      'AI-powered news portal built with Next.js, focused on performance, SEO, and a clean reading experience. It merges three news APIs into one unified feed with a consistent structure, and uses the OpenAI API to automatically generate descriptions for articles that arrive without one.',
    tech: ['NextJS', 'JavaScript', 'TailwindCSS', 'Axios', 'React', 'OpenAI API'],
    image: '/images/2.webp',
    github: 'https://github.com/beni1106/news-portal-ai.git',
    live: 'https://news-portal-ai.vercel.app/',
  },
  {
    title: 'PT. Media Asia Batam',
    description:
      'Responsive company profile website for PT. Media Asia Batam, presenting its property, legal documentation, architecture, and construction services. Built with HTML, Tailwind CSS, and JavaScript, organized into separate Controller and View layers for easier maintenance, with consistent layouts across desktop, tablet, and mobile.',
    tech: ['HTML', 'TailwindCSS', 'JavaScript'],
    image: '/images/asia-batam.png',
    github: 'https://github.com/beni1106/compro-mediaAsiabatam.git',
    live: 'https://www.mediaasiabatam.com/',
  },
  {
    title: 'Sattafa Business',
    description:
      'Four-page bilingual (ID/EN) corporate website built with Vite, Tailwind CSS v4, and vanilla JavaScript. It uses a client-side translation dictionary with localStorage to remember each visitor\'s language, a custom Vite plugin that shares navbar and footer partials across pages, and native IntersectionObserver animations in place of a third-party library.',
    tech: ['Vite', 'TailwindCSS', 'JavaScript'],
    image: '/images/sattafa.png',
    github: 'https://github.com/beni1106/saTtaBusiness.git',
    live: 'https://sattafa.com/',
  },
  {
    title: 'PT. Delapan Sisi Utama',
    description:
      'Mobile-first corporate website for PT. Delapan Sisi Utama, presenting its services, products, and business information. Enhanced with GSAP, AOS, and Swiper.js for animations and sliders, and built with Vite and reusable UI components for fast performance and easy maintenance.',
    tech: ['Vite', 'TailwindCSS', 'JavaScript', 'GSAP', 'AOS', 'Swiper.js'],
    image: '/images/delapansisi.png',
    github: 'https://github.com/beni1106/PT-Delapan-Sisi-Utama.git',
    live: 'https://delapansisiutama.com/',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Projects() {
  return (
    <section id="projects" className="py-28">
      <div className="container mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-16"
        >
          <motion.div variants={item} className="space-y-4 text-center">
            <h2 className="text-4xl font-bold text-white">Projects</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-300">
              These are the projects I have worked on independently or collaboratively. Each project showcases my skills
              and expertise in web development.
            </p>
          </motion.div>

          <motion.div variants={container} className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={item}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="w-full"
              >
                <Card className="glass-effect h-full overflow-hidden border-[#4C3957]/20">
                  <div className="group relative h-48">
                    <Image
                      src={project.image}
                      alt={`Screenshot of ${project.title}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Tombol selalu terlihat di layar sentuh; muncul saat hover/fokus di desktop */}
                    <div className="absolute inset-0 flex items-end bg-gradient-to-b from-transparent to-black/60 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-focus-within:opacity-100 md:group-hover:opacity-100">
                      <div className="flex w-full gap-4 p-4">
                        {project.github && (
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="flex-1 rounded-full border-none bg-black/50 text-white backdrop-blur-sm hover:bg-sky-900 hover:text-white"
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" aria-hidden />
                              Code
                            </a>
                          </Button>
                        )}
                        {project.live && (
                          <Button
                            asChild
                            size="sm"
                            className="flex-1 rounded-full bg-sky-900 text-white backdrop-blur-sm hover:bg-white/40"
                          >
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" aria-hidden />
                              Live
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                  <CardContent className="space-y-4 p-6">
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
                      <p className="line-clamp-3 text-sm text-gray-300 transition-all duration-300 hover:line-clamp-none">
                        {project.description}
                      </p>
                    </div>

                    <ul className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech) => (
                        <li key={tech}>
                          <Badge variant="secondary" className="bg-sky-500/20 text-sky-300 transition-all duration-300">
                            {tech}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={item} className="text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-sky-900 bg-transparent text-white transition-all duration-300 hover:bg-sky-900 hover:text-white"
            >
              <a
                href="https://github.com/beni1106"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                View More Projects in Github
                <ChevronRight className="ml-2 h-4 w-4" aria-hidden />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
