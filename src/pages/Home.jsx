import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Divider() {
  return (
    <hr
      style={{
        border: 'none',
        borderTop: '1px solid var(--border)',
        maxWidth: 900,
        margin: '0 auto 0',
      }}
    />
  )
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Projects />
      <Divider />
      <Skills />
      <Divider />
      <Divider />
      <Contact />
      <Footer />
    </main>
  )
}
