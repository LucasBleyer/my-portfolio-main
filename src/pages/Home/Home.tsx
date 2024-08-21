import Skills from "./sections/Skills/Skills"
import About from "./sections/About/About"
import Hero from "./sections/Hero/Hero"
import Projects from "./sections/Projects/Projects"
import Resume from "./sections/Resume/Resume"
import Email from "./sections/Email/Email"


function Home() {

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Resume />
      <Projects />
      <Email />
    </>
  )
}

export default Home
