
import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const items = [
  { icon: '⚙️', title: 'Systems Thinker', sub: 'Designing architecture before writing code' },
  { icon: '🧩', title: 'API Developer', sub: 'Django REST Framework, clean REST APIs' },
  { icon: '🐳', title: 'DevOps Aware', sub: 'Docker, deployment, basic CI/CD workflows' },
  { icon: '🤖', title: 'AI Integrator', sub: 'Embeddings, AI features, LLM integrations' },
]

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" className="section-wrapper" ref={ref}>
      
      {/* SECTION LABEL */}
      <div className="section-label">01 / ABOUT</div>

      {/* HEADING */}
      <h2 className="section-title">
        I build real-world systems — not just tutorial projects.
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}
      >
        
        {/* LEFT CONTENT */}
        <div>

          {/* INTRO */}
          <p style={{ color: 'var(--muted)', lineHeight: 1.85, marginBottom: '1rem' }}>
            I’m a full-stack developer focused on building scalable applications that solve real problems.
          </p>

          {/* STACK */}
          <p style={{ color: 'var(--muted)', lineHeight: 1.85, marginBottom: '1rem' }}>
            I build backend systems using <strong style={{ color: 'white' }}>Django & Django REST Framework</strong>, 
            designing clean APIs and managing data flow between services. 
            On the frontend, I use <strong style={{ color: 'white' }}>React</strong> to create responsive, user-focused interfaces.
          </p>

          {/* PROJECTS */}
          <div style={{ color: 'var(--muted)', lineHeight: 1.85, marginBottom: '1rem' }}>
            <strong style={{ color: 'white' }}>Projects I’ve worked on:</strong>

            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.2rem' }}>
              <li>
                <strong style={{ color: 'white' }}>AIU</strong> — adaptive AI system with memory and behavior learning
              </li>
              <li>
                <strong style={{ color: 'white' }}>VIDA</strong> — AI-powered YouTube video-to-study material system
              </li>
            </ul>
          </div>

          {/* DEVOPS + LEARNING */}
          <p style={{ color: 'var(--muted)', lineHeight: 1.85 }}>
            I use <strong style={{ color: 'white' }}>Docker</strong> to containerize applications and understand how to deploy 
            and scale systems in real environments. Currently exploring system design, embeddings, 
            and AI-powered architectures.
          </p>

        </div>

        {/* RIGHT SIDE CARDS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 12,
                padding: '14px 16px',
                background: 'var(--bg2)',
                border: '1px solid var(--border)',
                borderRadius: 10,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  background: 'rgba(59,130,246,0.12)',
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 16,
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>

              <div>
                <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>
                  {item.title}
                </h4>
                <p
                  style={{
                    fontSize: 12,
                    color: 'var(--muted)',
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {item.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}