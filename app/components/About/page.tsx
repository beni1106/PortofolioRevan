'use client'

import { motion } from 'framer-motion'
import { Code, Lightbulb } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  const aboutSections = [
    {
      icon: <Code className="w-8 h-8 text-gray-400" />,
      title: "Technical Skills",
      content: "I proficient use MERN Stack or also called MongoDB, ExpressJS, ReactJS, NextJS and I also have an understanding of C# and Python and also know the OOP system.",
      skills: ['JavaScript', 'C#', "NextJS", 'React', 'HTML', 'CSS', 'NodeJS', 'Python', 'ExpressJS', 'RESTful API', 'MongoDB']
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-gray-400" />,
      title: "About Me",
      content: "My name is Revan Novendri, an Informatics Engineering student at Dinamika Bangsa University. I could also be called a tech enthusiast. I possess the skills needed in the IT world: adapting quickly to new technologies and never stopping learning to understand new and existing technologies.",
      extra: ""
    }
  ]

  return (
    <section id="about" className="py-28">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center text-center">
          {aboutSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-effect hover:shadow-[0_0_20px_3px_rgba(156,163,175,0.3)] h-full backdrop-blur-md transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex flex-col items-center mb-4 text-center">
                    {section.icon}
                    <h3 className="text-2xl font-semibold text-white mt-2">{section.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{section.content}</p>
                  {section.skills && (
                    <div className="flex flex-wrap gap-2">
                      {section.skills.map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-gray-600/20 rounded-full text-gray-300 text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                  {section.extra && (
                    <p className="text-gray-400 mt-4">{section.extra}</p>
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
