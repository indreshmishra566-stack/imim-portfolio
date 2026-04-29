import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

// Replace with your Formspree endpoint
const FORMSPREE_URL = "https://formspree.io/f/mqewqveb";
export default function Contact() {
  const ref = useScrollReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return

    setStatus('loading')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const socials = [
    {
      icon: '⌥',
      bg: 'rgba(255,255,255,0.06)',
      label: 'GitHub',
      handle: '',
      href: 'https://github.com/indreshmishra566-stack',
    },
    {
      icon: 'in',
      bg: 'rgba(59,130,246,0.1)',
      label: 'LinkedIn',
      handle: '',
      href: 'https://linkedin.com/in/imim05',
    },
    // {
    //   icon: '@',
    //   bg: 'rgba(16,185,129,0.1)',
    //   label: 'Email',
    //   handle: 'you@email.com',
    //   href: 'mailto:you@email.com',
    // },
  ]

  return (
    <section id="contact" className="section-wrapper" ref={ref}>
      <div className="section-label">04 / contact</div>
      <h2 className="section-title">Let's work together.</h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2.5rem',
        }}
      >
        {/* Form */}
        <div>
          <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.8, marginBottom: '1.5rem' }}>
            I'm open to internship opportunities & if you're building something real, I'd like to work together.
          </p>

          <form onSubmit={handleSubmit} noValidate>
            {[
              { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
              { id: 'email', label: 'Email', type: 'email', placeholder: 'you@company.com' },
            ].map((field) => (
              <div key={field.id} style={{ marginBottom: '1rem' }}>
                <label
                  htmlFor={field.id}
                  style={{
                    display: 'block',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    color: 'var(--muted)',
                    marginBottom: 6,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={form[field.id]}
                  onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                  className="input-field"
                  required
                />
              </div>
            ))}

            <div style={{ marginBottom: '1.25rem' }}>
              <label
                htmlFor="message"
                style={{
                  display: 'block',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: 'var(--muted)',
                  marginBottom: 6,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell me about the opportunity..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="input-field"
                style={{ resize: 'vertical' }}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === 'loading'}
              style={{ opacity: status === 'loading' ? 0.7 : 1 }}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message →'}
            </button>

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  marginTop: 12,
                  padding: '12px 16px',
                  background: 'rgba(16,185,129,0.1)',
                  border: '1px solid rgba(16,185,129,0.2)',
                  borderRadius: 8,
                  color: 'var(--green)',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 13,
                }}
              >
              Thanks for reaching out — I’ll review your message and get back to you soon.  
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  marginTop: 12,
                  padding: '12px 16px',
                  background: 'rgba(239,68,68,0.1)',
                  border: '1px solid rgba(239,68,68,0.2)',
                  borderRadius: 8,
                  color: 'var(--red)',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 13,
                }}
              >
                Something went wrong. Email me directly instead.
              </motion.div>
            )}
          </form>
        </div>

        {/* Socials */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingTop: '3rem' }}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '12px 16px',
                background: 'var(--bg2)',
                border: '1px solid var(--border)',
                borderRadius: 10,
                textDecoration: 'none',
                color: 'var(--text)',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: s.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 14,
                  fontWeight: 600,
                  flexShrink: 0,
                }}
              >
                {s.icon}
              </div>
              <div>
                <h4 style={{ fontSize: 14, fontWeight: 600 }}>{s.label}</h4>
                <p style={{ fontSize: 12, color: 'var(--muted)', fontFamily: "'JetBrains Mono', monospace" }}>
                  {s.handle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
