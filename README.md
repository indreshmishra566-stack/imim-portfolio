# Developer Portfolio

A modern, production-ready portfolio for a Full Stack Developer specializing in Django, React, AI systems, APIs, and Docker-based deployment.

## Tech Stack

- **React 18** + **Vite** — fast dev + optimized builds
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — smooth animations
- **React Router v6** — client-side routing
- **Formspree** — contact form (zero backend needed)

---

## Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx          ← typewriter effect + stats
│   │   ├── About.jsx
│   │   ├── Projects.jsx      ← cards + detail modal
│   │   ├── Skills.jsx
│   │   ├── HowIBuild.jsx
│   │   ├── Contact.jsx       ← Formspree form
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx          ← assembles all sections
│   │   └── ProjectDetail.jsx ← standalone project page
│   ├── data/
│   │   └── projects.js       ← all content lives here
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html                ← SEO meta tags
├── vite.config.js
├── tailwind.config.js
└── vercel.json
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Personalizing the Portfolio

### 1. Update your info

Edit **`src/data/projects.js`** — this is the single source of truth for all content:

- Project names, descriptions, tags, GitHub/live links
- Architecture, challenges, trade-offs, future improvements
- Skills list
- "How I build" section

### 2. Update personal details

- **`index.html`** — name, meta description, og:url
- **`src/components/Hero.jsx`** — name, badge text, taglines, stats
- **`src/components/Contact.jsx`** — GitHub, LinkedIn, email links
- **`src/components/Footer.jsx`** — your name

### 3. Connect the contact form

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form → copy your form ID
3. In `src/components/Contact.jsx`, replace:
   ```js
   const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID'
   ```

### 4. Add your resume

Drop your `resume.pdf` into the `public/` folder. The download button in the hero will work automatically.

### 5. Add project screenshots (optional)

Place screenshots in `public/screenshots/`. Reference them in `src/data/projects.js`:
```js
screenshot: '/screenshots/aiu-demo.png'
```
Then render them in `Projects.jsx` or `ProjectDetail.jsx`.

---

## Deployment

### Vercel (recommended — free)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts:
# - Framework: Vite
# - Build command: npm run build
# - Output dir: dist
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deployments on push.

The `vercel.json` file handles SPA routing so `/projects/aiu` works on refresh.

### Netlify (alternative)

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

Create a `public/_redirects` file for SPA routing:
```
/*  /index.html  200
```

---

## Optional: Django Backend

For a contact form backend, analytics, or API, deploy Django separately:

### Render (free tier)

1. Push your Django project to GitHub
2. Go to [render.com](https://render.com) → New Web Service
3. Connect your repo
4. Set environment variables:
   ```
   DJANGO_SECRET_KEY=...
   DATABASE_URL=...
   ALLOWED_HOSTS=yourapp.onrender.com
   CORS_ALLOWED_ORIGINS=https://yourportfolio.vercel.app
   ```
5. Build command: `pip install -r requirements.txt && python manage.py migrate`
6. Start command: `gunicorn config.wsgi`

### Update Contact form

Replace Formspree URL with your Django endpoint:
```js
const CONTACT_URL = 'https://yourapp.onrender.com/api/contact/'
```

---

## Performance

- Code splitting via Vite `manualChunks` (vendor + motion bundles)
- Framer Motion animations use `whileInView` + `viewport: { once: true }` — no re-animation
- Fonts loaded via Google Fonts with `preconnect`
- `useScrollReveal` hook uses IntersectionObserver — zero scroll listener overhead
- All images should be WebP format for optimal size

---

## SEO Checklist

- [x] Title + meta description in `index.html`
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Semantic HTML (main, section, nav, footer, h1-h4)
- [x] Readable URLs (`/projects/aiu`)
- [ ] Add sitemap.xml after deploying
- [ ] Submit to Google Search Console

---

## Lighthouse Targets

| Metric | Target |
|--------|--------|
| Performance | > 90 |
| Accessibility | > 95 |
| Best Practices | > 95 |
| SEO | > 95 |

---

## License

MIT — use freely for your own portfolio.
