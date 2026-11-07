import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Certifications from '@/components/sections/Certifications'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import ContactForm from '@/components/sections/ContactForm'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Certifications />
      <Projects />
      <Skills />
      <ContactForm />
    </>
  )
}
