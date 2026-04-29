import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    if (!isHome) return
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        height: 56,
        background: scrolled ? 'rgba(8,12,16,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
        transition: 'all 0.3s ease',
        padding: '0 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Link
        to="/"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 13,
          color: 'var(--accent)',
          textDecoration: 'none',
          letterSpacing: '0.05em',
        }}
      >
        Indresh Mishra
      </Link>

      {/* Desktop links */}
      <ul
        style={{
          display: 'flex',
          gap: '2rem',
          listStyle: 'none',
          alignItems: 'center',
        }}
        className="hidden sm:flex"
      >
        {[
          { label: 'about', id: 'about' },
          { label: 'projects', id: 'projects' },
          { label: 'skills', id: 'skills' },
          { label: 'contact', id: 'contact' },
        ].map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollTo(item.id)}
              style={{
                background: 'none',
                border: 'none',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 13,
                color: 'var(--muted)',
                cursor: 'pointer',
                transition: 'color 0.2s',
                padding: '4px 0',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--text)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--muted)')}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className="sm:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--text)',
          cursor: 'pointer',
          fontSize: 20,
          padding: '4px',
        }}
        aria-label="Toggle menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 56,
            left: 0,
            right: 0,
            background: 'var(--bg2)',
            borderBottom: '1px solid var(--border)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            zIndex: 99,
          }}
        >
          {['about', 'projects', 'skills', 'contact'].map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                background: 'none',
                border: 'none',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 14,
                color: 'var(--muted)',
                cursor: 'pointer',
                textAlign: 'left',
                padding: '4px 0',
              }}
            >
              {id}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
