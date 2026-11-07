'use client'

import { motion } from 'framer-motion'
import { Code, Lightbulb } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const aboutSections = [
  {
    icon: <Code className="h-8 w-8 text-gray-400" aria-hidden />,
    title: 'Technical Skills',
    content:
      'I am proficient in the MERN Stack: MongoDB, ExpressJS, ReactJS, and NodeJS, and I also use NextJS. I have an understanding of C# and Python, and I know the OOP paradigm.',
    skills: ['JavaScript', 'C#', 'NextJS', 'React', 'HTML', 'CSS', 'NodeJS', 'Python', 'ExpressJS', 'RESTful API', 'MongoDB'],
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-gray-400" aria-hidden />,
    title: 'About Me',
    content:
      'My name is Revan Novendri, an Informatics Engineering student at Dinamika Bangsa University. I could also be called a tech enthusiast. I possess the skills needed in the IT world: adapting quickly to new technologies and never stopping learning to understand new and existing technologies.',
    skills: undefined,
  },
]

export default function About() {
  return (
    <section id="about" className="py-28">
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-4xl font-bold text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          About
        </motion.h2>
        <div className="grid grid-cols-1 justify-center gap-8 text-center md:grid-cols-2">
          {aboutSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-effect h-full backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_3px_rgba(156,163,175,0.3)]">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex flex-col items-center text-center">
                    {section.icon}
                    <h3 className="mt-2 text-2xl font-semibold text-white">{section.title}</h3>
                  </div>
                  <p className="mb-4 text-gray-300">{section.content}</p>
                  {section.skills && (
                    <ul className="flex flex-wrap gap-2">
                      {section.skills.map((skill) => (
                        <li key={skill} className="rounded-full bg-gray-600/20 px-3 py-1 text-sm text-gray-300">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
