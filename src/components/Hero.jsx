import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const TAGLINES = [
  'I build scalable full-stack systems.',
  'APIs. Docker. Real products.',
  'Django + React + AI.',
]

export default function Hero() {
  const [taglineIdx, setTaglineIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const target = TAGLINES[taglineIdx]
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 45)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 2000)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 25)
        return () => clearTimeout(t)
      } else {
        setTaglineIdx((i) => (i + 1) % TAGLINES.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, taglineIdx])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  }

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section
      id="hero"
      style={{
        minHeight: 'calc(100vh - 56px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '4rem 1.5rem',
        maxWidth: 900,
        margin: '0 auto',
        position: 'relative',
      }}
    >
      <motion.div variants={container} initial="hidden" animate="show">
        {/* Badge */}
        <motion.div variants={item}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(59,130,246,0.1)',
              border: '1px solid rgba(59,130,246,0.25)',
              color: 'var(--accent)',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              padding: '5px 14px',
              borderRadius: 100,
              marginBottom: '2rem',
              letterSpacing: '0.05em',
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                background: 'var(--green)',
                borderRadius: '50%',
                display: 'block',
                boxShadow: '0 0 8px var(--green)',
              }}
            />
            available for internship &amp; developer roles
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={item}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(2.2rem, 6vw, 3.8rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '1.25rem',
            color: 'var(--text)',
          }}
        >
          Full Stack Python
           Developer
          Focused on AI  
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, var(--accent), var(--accent-cyan))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            &amp;  Scalable Systems
          </span>
        </motion.h1>

        {/* Typewriter */}
        <motion.p
          variants={item}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 17,
            color: 'var(--muted)',
            marginBottom: '2.5rem',
            fontWeight: 300,
            minHeight: 28,
          }}
        >
          {displayed}
          <span
            style={{
              display: 'inline-block',
              width: 2,
              height: '1em',
              background: 'var(--accent)',
              marginLeft: 2,
              verticalAlign: 'text-bottom',
              animation: 'blink 1s step-end infinite',
            }}
          />
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: '4rem' }}
        >
          <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
            → View Projects
          </button>
          <button className="btn btn-secondary" onClick={() => scrollTo('contact')}>
            Contact Me
          </button>
          <a
  className="btn btn-ghost"
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  style={{ textDecoration: 'none' }}
>
  📄 View Resume
</a>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          variants={item}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 1,
            border: '1px solid var(--border)',
            borderRadius: 12,
            overflow: 'hidden',
            background: 'var(--border)',
          }}
        >
          {[
            { num: '2', label: 'real-world systems' },
            { num: 'AI', label: 'powered applications' },
            { num: 'Docker', label: 'production deploys' },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{ background: 'var(--bg2)', padding: '1.25rem 1.5rem' }}
            >
              <span
                style={{
                  fontSize: '1.75rem',
                  fontWeight: 800,
                  color: 'var(--text)',
                  display: 'block',
                  letterSpacing: '-0.02em',
                }}
              >
                {stat.num}
              </span>
              <span
                style={{
                  fontSize: 12,
                  color: 'var(--muted)',
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
