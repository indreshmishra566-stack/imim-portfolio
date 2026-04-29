import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '8rem 1.5rem', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '1rem' }}>Project not found.</h2>
        <Link to="/" className="btn btn-secondary">← Back home</Link>
      </div>
    )
  }

  const Label = ({ children }) => (
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
      {children}
    </h4>
  )

  const Section = ({ label, children }) => (
    <div style={{ marginBottom: '2.5rem' }}>
      <Label>{label}</Label>
      {children}
    </div>
  )

  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ maxWidth: 860, margin: '0 auto', padding: '3rem 1.5rem 6rem' }}
    >
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="btn btn-ghost"
        style={{ marginBottom: '2.5rem', fontSize: 12 }}
      >
        ← Back
      </button>

      {/* Header */}
      <div style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
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
        <h1
          style={{
            fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            marginBottom: '1rem',
          }}
        >
          {project.fullName}
        </h1>
        <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.8, maxWidth: 620 }}>
          {project.tagline}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: '1.5rem' }}>
          {project.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: 10, marginTop: '1.5rem', flexWrap: 'wrap' }}>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
            style={{ fontSize: 12, textDecoration: 'none' }}
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
                padding: '7px 16px',
                borderRadius: 8,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                background: 'rgba(16,185,129,0.1)',
                border: '1px solid rgba(16,185,129,0.2)',
                color: 'var(--green)',
                textDecoration: 'none',
              }}
            >
              ▶ Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Divider */}
      <hr style={{ border: 'none', borderTop: '1px solid var(--border)', marginBottom: '2.5rem' }} />

      {/* Problem & Solution */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2rem',
          marginBottom: '2.5rem',
        }}
      >
        <Section label="The Problem">
          <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.85 }}>{project.problem}</p>
        </Section>
        <Section label="The Solution">
          <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.85 }}>{project.solution}</p>
        </Section>
      </div>

      {/* Architecture */}
      <Section label="Architecture">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 10,
          }}
        >
          {project.architecture.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              style={{
                background: 'var(--bg2)',
                border: '1px solid var(--border)',
                borderRadius: 10,
                padding: '14px 16px',
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  color: 'var(--accent)',
                  marginBottom: 6,
                }}
              >
                layer {String(i + 1).padStart(2, '0')}
              </div>
              <h5 style={{ fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{a.title}</h5>
              <p style={{ fontSize: 12, color: 'var(--muted)', fontFamily: "'JetBrains Mono', monospace", lineHeight: 1.65 }}>
                {a.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Challenges */}
      <Section label="Key Challenges Solved">
        <div
          style={{
            background: 'var(--bg2)',
            border: '1px solid var(--border)',
            borderRadius: 10,
            padding: '1.25rem 1.5rem',
          }}
        >
          <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.85 }}>{project.challenges}</p>
        </div>
      </Section>

      {/* Tradeoffs */}
      <Section label="Trade-offs & Decisions">
        <div
          style={{
            background: 'var(--bg2)',
            border: '1px solid var(--border)',
            borderRadius: 10,
            overflow: 'hidden',
          }}
        >
          {project.tradeoffs.map((t, i) => (
            <div
              key={t.label}
              style={{
                display: 'grid',
                gridTemplateColumns: '140px 1fr',
                gap: 16,
                padding: '14px 20px',
                borderBottom: i < project.tradeoffs.length - 1 ? '1px solid var(--border)' : 'none',
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: 'var(--accent)',
                  paddingTop: 2,
                  lineHeight: 1.5,
                }}
              >
                {t.label}
              </span>
              <span style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.75 }}>{t.text}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Future */}
      <Section label="Future Improvements">
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {project.future.map((f) => (
            <li
              key={f}
              style={{
                display: 'flex',
                gap: 12,
                fontSize: 14,
                color: 'var(--muted)',
                lineHeight: 1.7,
                padding: '10px 16px',
                background: 'var(--bg2)',
                border: '1px solid var(--border)',
                borderRadius: 8,
              }}
            >
              <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 1 }}>→</span>
              {f}
            </li>
          ))}
        </ul>
      </Section>

      {/* Other projects */}
      <hr style={{ border: 'none', borderTop: '1px solid var(--border)', marginBottom: '2.5rem' }} />
      <div>
        <Label>Other Projects</Label>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {projects
            .filter((p) => p.id !== project.id)
            .map((p) => (
              <Link
                key={p.id}
                to={`/projects/${p.id}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '10px 18px',
                  background: 'var(--bg2)',
                  border: '1px solid var(--border)',
                  borderRadius: 10,
                  textDecoration: 'none',
                  color: 'var(--text)',
                  fontSize: 14,
                  fontWeight: 600,
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
              >
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--accent)' }}>
                  {p.num}
                </span>
                {p.name} →
              </Link>
            ))}
        </div>
      </div>
    </motion.main>
  )
}
