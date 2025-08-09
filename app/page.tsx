export const metadata = {
  title: 'Revan Novendri',
  description: 'Portfolio of Revan Novendri',
}

import Hero from './components/Hero/page'
import About from './components/About/page'
import Education from './components/Education/page'
import Experience from './components/Experience/page'
import Projects from './components/Projects/page'
import Skills from './components/Skills/page'
// import Organizations from './components/Organizations/page'
// import Achievements from './components/Achievements/page'
// import Testimonials from './components/Testimonials/page'
import ContactForm from './components/ContactForm/page'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      {/* <Organizations /> */}
      {/* <Achievements /> */}
      {/* <Testimonials /> */}
      <ContactForm />
    </>
  )
}

