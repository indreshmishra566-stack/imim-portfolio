export const projects = [
  {
    id: 'aiu',
    num: 'P-01',
    name: 'AIU',
    fullName: 'AIU — Adaptive Intelligence Unit',
    status: 'live',
    tagline: 'AI system that builds persistent memory and learns user behavior over time.',
    description:
      'An AI system that builds persistent memory from user interactions, learns behavioral patterns over time, and surfaces context-aware decisions. Not a chatbot — a behavioral memory engine that understands context across sessions.',
    problem:
      'Most AI systems treat every conversation as isolated. Users repeat themselves constantly, context is lost, and the AI never actually learns. AIU solves this by maintaining a semantic memory layer that persists across all interactions.',
    solution:
      'A Django backend that ingests user events, embeds them via OpenAI, and stores vectors in PostgreSQL using pgvector. On every new query, semantically similar past interactions are retrieved and injected into context, enabling truly personalized, memory-aware responses.',
    tags: ['Django', 'React', 'OpenAI API', 'PostgreSQL', 'pgvector', 'Docker', 'Celery', 'Redis'],
    highlights: [
      { icon: '🧠', title: 'Memory Engine', desc: 'Persistent context across sessions' },
      { icon: '📊', title: 'Behavior Learning', desc: 'Pattern detection over time' },
      { icon: '⚡', title: 'Decision Assist', desc: 'Context-aware AI responses' },
    ],
    architecture: [
      { title: 'Ingestion Layer', desc: 'Django REST API receives user events, classifies intent type, and queues embedding jobs via Celery.' },
      { title: 'Memory Engine', desc: 'OpenAI embeddings stored in PostgreSQL via pgvector extension. Each interaction is embedded and indexed for fast retrieval.' },
      { title: 'Retrieval System', desc: 'Semantic similarity search pulls the N most relevant past interactions using cosine distance, weighted by recency decay.' },
      { title: 'Decision Layer', desc: 'Retrieved context is injected into the LLM prompt window alongside the current query for grounded, personalized responses.' },
    ],
    challenges:
      'The core challenge was latency — embedding + retrieval adds ~400ms per request. Solved with async Celery tasks for background embedding and a Redis cache layer for frequently-accessed memory clusters. The second challenge was relevance drift over long histories; solved with a recency decay scoring function that weights recent interactions more heavily.',
    tradeoffs: [
      {
        label: 'pgvector vs Pinecone',
        text: 'Chose pgvector to keep everything in PostgreSQL, reducing infra complexity. Trade-off: lower query speed at massive scale — acceptable for current volume, with Pinecone as a future migration path.',
      },
      {
        label: 'Celery vs Threads',
        text: 'Celery for async embedding jobs gives full task monitoring, retry logic, and visibility. Trade-off: adds Redis as a dependency, but Redis is already used for caching so the overhead is minimal.',
      },
      {
        label: 'OpenAI vs Local',
        text: 'OpenAI API for embeddings and generation. Trade-off: API cost and latency vs. running open-source models locally. Planned for v2 using sentence-transformers for embeddings.',
      },
    ],
    future: [
      'Local embedding model (sentence-transformers) to remove OpenAI dependency and cut costs',
      'Hierarchical memory: short-term session memory + long-term persistent memory with consolidation',
      'User-facing memory audit UI to view, edit, and delete stored memories',
      'Multi-user memory isolation with strict tenant separation',
    ],
    github: 'https://github.com/indreshmishra566-stack/AIU.git',
    live: 'https://aiu-pi.vercel.app/',
  },

{
  id: 'vida',
  num: 'P-02',
  name: 'VIDA',
  fullName: 'VIDA — AI Video-to-Study Material Generator',
  status: 'live',
  tagline: 'Turn any YouTube video into structured notes, summaries, and quizzes using AI.',
  description:
    'A full-stack AI application that converts long-form video content into structured study material. Users can paste a YouTube link, and the system automatically extracts transcripts, generates summaries, key points, glossary terms, and quiz questions. Built with Django REST Framework, React, and Docker, with a scalable API-driven architecture.',
  
  problem:
    'Students spend hours watching long videos but struggle to extract structured knowledge efficiently. Existing tools either provide raw transcripts or generic summaries without proper organization, making revision difficult.',
  
  solution:
    'VIDA processes video content through a pipeline that extracts transcripts, segments content, and generates structured outputs including summaries, outlines, key points, glossary, and quizzes. The system transforms passive video consumption into active learning material.',
  
  tags: ['Django DRF', 'React', 'Tailwind', 'Docker', 'NLP', 'YouTube Processing', 'REST APIs'],
  
  highlights: [
    { icon: '🎥', title: 'Video → Notes', desc: 'Convert any YouTube video into structured study material' },
    { icon: '🧠', title: 'AI Processing', desc: 'Automated summarization, key points, and glossary generation' },
    { icon: '📚', title: 'Study Ready', desc: 'Outputs formatted for revision, not raw transcripts' },
  ],
  
  architecture: [
    { 
      title: 'Processing Pipeline', 
      desc: 'Backend service fetches video transcripts, cleans text, segments content, and passes it through AI models for structured output generation (summary, outline, quiz).' 
    },
    { 
      title: 'API Layer', 
      desc: 'Django REST Framework exposes endpoints for video processing, history tracking, and result retrieval. Stateless API design ensures scalability.' 
    },
    { 
      title: 'Frontend Interface', 
      desc: 'React + Tailwind UI for input, result visualization, and history management. Clean UX focused on fast input → output workflow.' 
    },
    { 
      title: 'Deployment Stack', 
      desc: 'Dockerized services deployed across Vercel (frontend) and Render (backend), ensuring environment consistency and easy scaling.' 
    },
  ],
  
  challenges:
    'Handling different types of YouTube transcripts (manual vs auto-generated) required normalization and cleaning before AI processing. Long video inputs created latency challenges, requiring efficient text chunking and asynchronous processing. Ensuring meaningful summaries instead of generic outputs required prompt tuning and structured formatting logic.',
  
  tradeoffs: [
    {
      label: 'Speed vs Accuracy',
      text: 'Faster summarization pipelines reduce latency but can lose contextual depth. Chose balanced chunking + structured prompts to maintain quality while keeping response time reasonable.',
    },
    {
      label: 'REST vs Async Jobs',
      text: 'Used synchronous API calls for simplicity in MVP. Background jobs (Celery) would improve scalability but add system complexity early on.',
    },
    {
      label: 'Transcript Dependency',
      text: 'Relies on available captions for best results. Videos without captions reduce accuracy, but fallback strategies can be added later.',
    },
  ],
  
  future: [
    'Time-synced notes with clickable timestamps linked to video playback',
    'Multiple study modes (quick summary, deep dive, exam prep)',
    'Flashcard and spaced repetition integration',
    'Export options (PDF, Notion, Markdown)',
  ],
  
  github: 'https://github.com/indreshmishra566-stack/VIDA.git',
  live: 'https://vida-ttp8.vercel.app/',
},
];
export const skills = [
  {
    category: 'Backend',
    icon: '⚙️',
    items: [
      'Django',
      'Django REST Framework',
      'API Design (REST)',
      'Async Workflows (Celery)',
      'Service Layer Architecture',
      'Data Flow Design',
    ],
  },

  {
    category: 'Frontend',
    icon: '🎨',
    items: [
      'React',
      'Vite',
      'Tailwind CSS',
      'Component Architecture',
      'State Management',
      'API Integration',
    ],
  },

  {
    category: 'DevOps',
    icon: '🐳',
    items: [
      'Docker',
      'Docker Compose',
      'Multi-Service Architecture',
      'Vercel + Render Deployments',
      'Environment Configuration',
      'Production Debugging',
    ],
  },

  {
    category: 'Database',
    icon: '🗄️',
    items: [
      'PostgreSQL',
      'Redis',
      'pgvector',
      'Schema Design',
      'Caching Strategies',
      'Vector Storage & Retrieval',
    ],
  },

  {
    category: 'AI Systems',
    icon: '🤖',
    items: [
      'LLM Integration (OpenAI)',
      'Prompt Engineering',
      'Embedding Pipelines',
      'Semantic Retrieval',
      'Text Processing Pipelines',
      'Context-Aware Systems',
    ],
    wide: true,
  },
];