export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '2rem 1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: 900,
        margin: '0 auto',
        flexWrap: 'wrap',
        gap: 8,
      }}
    >
      <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'var(--muted)' }}>
        Built with Django + React + Docker.
      </p>
      <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'var(--muted)' }}>
        © {new Date().getFullYear()} — Indresh Mishra
      </p>
    </footer>
  )
}
