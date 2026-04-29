import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/projects'
import { useScrollReveal } from '../hooks/useScrollReveal'

function ProjectCard({ project, onDetails }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{
        background: 'var(--bg2)',
        padding: '2rem',
        cursor: 'default',
        transition: 'background 0.2s',
        position: 'relative',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg3)')}
      onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--bg2)')}
    >
      {/* Meta */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            color: 'var(--accent)',
            background: 'rgba(59,130,246,0.1)',
            border: '1px solid rgba(59,130,246,0.2)',
            padding: '2px 8px',
            borderRadius: 4,
          }}
        >
          {project.num}
        </span>
        <span className={project.status === 'live' ? 'status-live' : 'status-wip'}>
          {project.status}
        </span>
      </div>

      <h3
        style={{
          fontSize: '1.3rem',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          marginBottom: '0.5rem',
        }}
      >
        {project.fullName}
      </h3>

      <p
        style={{
          color: 'var(--muted)',
          fontSize: 14,
          lineHeight: 1.75,
          marginBottom: '1.25rem',
          maxWidth: 600,
        }}
      >
        {project.description}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: '1.5rem' }}>
        {project.tags.slice(0, 6).map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>

      {/* Highlights */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 8,
          marginBottom: '1.5rem',
        }}
      >
        {project.highlights.map((h) => (
          <div
            key={h.title}
            style={{
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: 8,
              padding: '10px 12px',
            }}
          >
            <div style={{ fontSize: 14, marginBottom: 4 }}>{h.icon}</div>
            <h5 style={{ fontSize: 12, fontWeight: 600, marginBottom: 2 }}>{h.title}</h5>
            <p style={{ fontSize: 11, color: 'var(--muted)', fontFamily: "'JetBrains Mono', monospace" }}>
              {h.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <button
          onClick={() => onDetails(project)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '7px 14px',
            borderRadius: 7,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            cursor: 'pointer',
            background: 'var(--bg3)',
            border: '1px solid var(--border2)',
            color: 'var(--text)',
            transition: 'all 0.2s',
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
          ↗ View Details
        </button>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '7px 14px',
            borderRadius: 7,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            cursor: 'pointer',
            background: 'var(--bg3)',
            border: '1px solid var(--border2)',
            color: 'var(--muted)',
            textDecoration: 'none',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text)' }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--muted)' }}
        >
          ⌥ GitHub
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '7px 14px',
              borderRadius: 7,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              cursor: 'pointer',
              background: 'rgba(16,185,129,0.1)',
              border: '1px solid rgba(16,185,129,0.2)',
              color: 'var(--green)',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
          >
            ▶ Live Demo
          </a>
        )}
      </div>
    </motion.div>
  )
}

function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => e.target === e.currentTarget && onClose()}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(12px)',
          zIndex: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
        }}
        role="dialog"
        aria-modal="true"
        aria-label={project.fullName}
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
          style={{
            background: 'var(--bg2)',
            border: '1px solid var(--border2)',
            borderRadius: 16,
            width: '100%',
            maxWidth: 700,
            maxHeight: '85vh',
            overflowY: 'auto',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '1.5rem 2rem',
              borderBottom: '1px solid var(--border)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              position: 'sticky',
              top: 0,
              background: 'var(--bg2)',
              zIndex: 1,
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    color: 'var(--accent)',
                    background: 'rgba(59,130,246,0.1)',
                    border: '1px solid rgba(59,130,246,0.2)',
                    padding: '2px 8px',
                    borderRadius: 4,
                  }}
                >
                  {project.num}
                </span>
                <span className={project.status === 'live' ? 'status-live' : 'status-wip'}>
                  {project.status}
                </span>
              </div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
                {project.fullName}
              </h2>
            </div>
            <button
              onClick={onClose}
              style={{
                background: 'var(--bg3)',
                border: '1px solid var(--border)',
                color: 'var(--muted)',
                width: 32,
                height: 32,
                borderRadius: 8,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 18,
                flexShrink: 0,
                marginLeft: 12,
              }}
              aria-label="Close"
            >
              ×
            </button>
          </div>

          {/* Body */}
          <div style={{ padding: '2rem' }}>
            {/* Problem / Solution */}
            <div style={{ marginBottom: '2rem' }}>
              <h4
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: 'var(--accent)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                }}
              >
                Problem
              </h4>
              <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.8 }}>{project.problem}</p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h4
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: 'var(--accent)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                }}
              >
                Solution
              </h4>
              <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.8 }}>{project.solution}</p>
            </div>

            {/* Architecture */}
            <div style={{ marginBottom: '2rem' }}>
              <h4
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: 'var(--accent)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                }}
              >
                Architecture
              </h4>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: 10,
                }}
              >
                {project.architecture.map((a) => (
                  <div
                    key={a.title}
                    style={{
                      background: 'var(--bg3)',
                      border: '1px solid var(--border)',
                      borderRadius: 10,
                      padding: '12px 14px',
                    }}
                  >
                    <h5 style={{ fontSize: 12, fontWeight: 600, marginBottom: 4 }}>{a.title}</h5>
                    <p style={{ fontSize: 11, color: 'var(--muted)', fontFamily: "'JetBrains Mono', monospace", lineHeight: 1.6 }}>
                      {a.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div style={{ marginBottom: '2rem' }}>
              <h4
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: 'var(--accent)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                }}
              >
                Key Challenges Solved
              </h4>
              <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.8 }}>{project.challenges}</p>
            </div>

            {/* Trade-offs */}
            <div style={{ marginBottom: '2rem' }}>
              <h4
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: 'var(--accent)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                }}
              >
                Trade-offs &amp; Decisions
              </h4>
              <div>
                {project.tradeoffs.map((t, i) => (
                  <div
                    key={t.label}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '130px 1fr',
                      gap: 12,
                      padding: '10px 0',
                      borderBottom: i < project.tradeoffs.length - 1 ? '1px solid var(--border)' : 'none',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 11,
                        color: 'var(--accent)',
                        paddingTop: 1,
                      }}
                    >
                      {t.label}
                    </span>
                    <span style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7 }}>{t.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Future */}
            <div>
              <h4
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: 'var(--accent)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                }}
              >
                Future Improvements
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
                {project.future.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: 'flex',
                      gap: 10,
                      fontSize: 13,
                      color: 'var(--muted)',
                      fontFamily: "'JetBrains Mono', monospace",
                      lineHeight: 1.6,
                    }}
                  >
                    <span style={{ color: 'var(--accent)', flexShrink: 0 }}>→</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState(null)
  const ref = useScrollReveal()

  return (
    <section id="projects" className="section-wrapper" ref={ref}>
      <div className="section-label">02 / projects</div>
      <h2 className="section-title">Products I've shipped.</h2>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          border: '1px solid var(--border)',
          borderRadius: 14,
          overflow: 'hidden',
          background: 'var(--border)',
        }}
      >
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} onDetails={setSelected} />
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
