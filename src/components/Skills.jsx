import { motion } from 'framer-motion'
import { skills } from '../data/projects'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Skills() {
  const ref = useScrollReveal()

  return (
    <section id="skills" className="section-wrapper" ref={ref}>
      <div className="section-label">03 / tech stack</div>
      <h2 className="section-title"></h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 12,
        }}
      >
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.5 }}
            style={{
              background: 'var(--bg2)',
              border: '1px solid var(--border)',
              borderRadius: 12,
              padding: '1.25rem',
              gridColumn: group.wide ? '1 / -1' : undefined,
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                color: 'var(--accent)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              {group.icon} {group.category}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {group.items.map((item) => (
                <span
                  key={item}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 12,
                    color: 'var(--text)',
                    background: 'var(--bg3)',
                    border: '1px solid var(--border2)',
                    padding: '4px 12px',
                    borderRadius: 6,
                    transition: 'border-color 0.2s, color 0.2s',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)'
                    e.currentTarget.style.color = 'var(--accent)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border2)'
                    e.currentTarget.style.color = 'var(--text)'
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
