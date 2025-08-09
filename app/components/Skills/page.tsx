'use client'

import { motion } from 'framer-motion'
import { Code, Layout, Brain, MessageSquare, PanelTopClose } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const skillCategories = [
  {
    icon: <Brain className="w-8 h-8 text-gray-400" />,
    title: "Soft Skills",
    skills: ["Problem Solving", "Critical Thinking", "Adaptability"]
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-gray-400" />,
    title: "Communication",
    skills: ["Public Speaking", "Team Collaboration"]
  },
  {
    icon: <Code className="w-8 h-8 text-gray-400" />,
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "ReactJS", "NextJS"]
  },
  {
    icon: <Layout className="w-8 h-8 text-gray-400" />,
    title: "Backend",
    skills: ["NodeJS", "ExpressJS", "MongoDB", "RESTful API"]
  },
  {
    icon: <PanelTopClose className="w-8 h-8 text-gray-400" />,
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "Vercel", "Postman API"]
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function Skills() {
  const softSkills = skillCategories.slice(0, 2)
  const technicalSkills = skillCategories.slice(2)
  const isOdd = technicalSkills.length % 2 !== 0

  return (
    <section id="skills" className="py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
          className="space-y-12"
        >
          {/* Judul Utama */}
          <motion.div variants={item} className="text-center space-y-2">
            <h2 className="text-4xl font-bold text-white">Skills & Expertise</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A combination of communication, and technical skills to deliver results effectively.
            </p>
          </motion.div>

          {/* Soft Skills */}
          <motion.div variants={item}>
            <h3 className="text-2xl font-semibold text-white mb-4 text-center">Soft Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {softSkills.map((category, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card className="glass-effect hover-glow h-full bg-gradient-to-br from-gray-500/10 to-gray-600/10 border border-gray-500/20">
                    <CardContent className="flex flex-col items-center justify-center text-center h-full p-6 space-y-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-gray-400 bg-opacity-10">
                          {category.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                      </div>
                      <div className="flex flex-wrap justify-center gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 rounded-full text-sm text-gray-300 bg-gray-400 bg-opacity-10 border border-gray-500/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div variants={item}>
            <h3 className="text-2xl font-semibold text-white mb-4 text-center">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technicalSkills.map((category, index) => {
                const isLast = isOdd && index === technicalSkills.length - 1
                return (
                  <motion.div
                    key={index}
                    variants={item}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={isLast ? "md:col-span-2 md:w-1/2 md:mx-auto" : ""}
                  >
                    <Card className="glass-effect hover-glow h-full bg-gradient-to-br from-gray-500/10 to-gray-600/10 border border-gray-500/20">
                      <CardContent className="flex flex-col items-center justify-center text-center h-full p-6 space-y-4">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 rounded-lg bg-gray-400 bg-opacity-10">
                            {category.icon}
                          </div>
                          <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                        </div>
                        <div className="flex flex-wrap justify-center gap-2">
                          {category.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 rounded-full text-sm text-gray-300 bg-gray-400 bg-opacity-10 border border-gray-500/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
