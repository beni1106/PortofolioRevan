'use client'

import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Code, Server, Brain, MessageSquare, Wrench } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

type SkillCategory = { icon: ReactNode; title: string; skills: string[] }

const iconClass = 'h-8 w-8 text-gray-400'

const softSkills: SkillCategory[] = [
  {
    icon: <Brain className={iconClass} aria-hidden />,
    title: 'Soft Skills',
    skills: ['Problem Solving', 'Critical Thinking', 'Adaptability'],
  },
  {
    icon: <MessageSquare className={iconClass} aria-hidden />,
    title: 'Communication',
    skills: ['Public Speaking', 'Team Collaboration'],
  },
]

const technicalSkills: SkillCategory[] = [
  {
    icon: <Code className={iconClass} aria-hidden />,
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NextJS'],
  },
  {
    icon: <Server className={iconClass} aria-hidden />,
    title: 'Backend',
    skills: ['NodeJS', 'ExpressJS', 'MongoDB', 'RESTful API'],
  },
  {
    icon: <Wrench className={iconClass} aria-hidden />,
    title: 'Tools & DevOps',
    skills: ['Git', 'GitHub', 'Vercel', 'Postman API'],
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

function SkillCard({ category, className = '' }: { category: SkillCategory; className?: string }) {
  return (
    <motion.div
      variants={item}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={className}
    >
      <Card className="glass-effect hover-glow h-full border border-gray-500/20">
        <CardContent className="flex h-full flex-col items-center justify-center space-y-4 p-6 text-center">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-gray-400 bg-opacity-10 p-2">{category.icon}</div>
            <h4 className="text-xl font-semibold text-white">{category.title}</h4>
          </div>
          <ul className="flex flex-wrap justify-center gap-2">
            {category.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-gray-500/20 bg-gray-400 bg-opacity-10 px-3 py-1 text-sm text-gray-300"
              >
                {skill}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function Skills() {
  const isOdd = technicalSkills.length % 2 !== 0

  return (
    <section id="skills" className="py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={container}
          className="space-y-12"
        >
          <motion.div variants={item} className="space-y-2 text-center">
            <h2 className="text-4xl font-bold text-white">Skills & Expertise</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-300">
              A combination of communication and technical skills to deliver results effectively.
            </p>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="mb-4 text-center text-2xl font-semibold text-white">Soft Skills</h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {softSkills.map((category) => (
                <SkillCard key={category.title} category={category} />
              ))}
            </div>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="mb-4 text-center text-2xl font-semibold text-white">Technical Skills</h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {technicalSkills.map((category, index) => {
                const isLast = isOdd && index === technicalSkills.length - 1
                return (
                  <SkillCard
                    key={category.title}
                    category={category}
                    className={isLast ? 'md:col-span-2 md:mx-auto md:w-1/2' : ''}
                  />
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
