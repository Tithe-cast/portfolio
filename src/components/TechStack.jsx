'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ── SVG Logo Components ──────────────────────────────────────────────────────

const logos = {
  nextjs: (
    <svg viewBox="0 0 180 180" fill="none" className="w-7 h-7">
      <mask
        id="nextjs-mask"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="180"
        height="180"
      >
        <circle cx="90" cy="90" r="90" fill="#fff" />
      </mask>
      <g mask="url(#nextjs-mask)">
        <circle cx="90" cy="90" r="90" fill="#000" />
        <path
          d="M149 154.1L69.2 50H50v79.9h15.7V69.3l73.2 93.5a90.3 90.3 0 0010.1-8.7z"
          fill="url(#ng)"
        />
        <rect x="115" y="50" width="16" height="80" fill="#fff" />
        <defs>
          <linearGradient
            id="ng"
            x1="109"
            y1="116.5"
            x2="144.5"
            y2="160.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
      </g>
    </svg>
  ),
  react: (
    <svg viewBox="0 0 100 100" fill="none" className="w-7 h-7">
      <ellipse
        cx="50"
        cy="50"
        rx="40"
        ry="15.5"
        stroke="#61DAFB"
        strokeWidth="4"
      />
      <ellipse
        cx="50"
        cy="50"
        rx="40"
        ry="15.5"
        stroke="#61DAFB"
        strokeWidth="4"
        transform="rotate(60,50,50)"
      />
      <ellipse
        cx="50"
        cy="50"
        rx="40"
        ry="15.5"
        stroke="#61DAFB"
        strokeWidth="4"
        transform="rotate(120,50,50)"
      />
      <circle cx="50" cy="50" r="6" fill="#61DAFB" />
    </svg>
  ),
  typescript: (
    <svg viewBox="0 0 100 100" className="w-7 h-7">
      <rect width="100" height="100" rx="8" fill="#3178C6" />
      <path
        d="M57.7 77.4V86c1.4.7 3 1.2 4.9 1.6 1.9.4 3.9.6 6.1.6 2.1 0 4-.2 5.9-.7 1.8-.5 3.4-1.2 4.8-2.2 1.3-1 2.4-2.3 3.2-3.8.8-1.6 1.2-3.4 1.2-5.6 0-1.6-.2-3-.7-4.2-.5-1.2-1.2-2.3-2.1-3.2-.9-.9-2-1.7-3.2-2.4-1.2-.7-2.6-1.3-4.1-1.9-1.1-.4-2.1-.8-3-1.1-.9-.4-1.6-.8-2.2-1.2-.6-.4-1.1-.9-1.4-1.4-.3-.5-.5-1.1-.5-1.8 0-.6.1-1.2.4-1.7.3-.5.7-.9 1.2-1.3.5-.4 1.2-.6 1.9-.8.7-.2 1.5-.3 2.4-.3 2.6 0 5.1.7 7.5 2V49c-1.2-.5-2.5-.8-4-.9-1.4-.1-3-.2-4.6-.2-2.1 0-4 .3-5.8.8-1.8.5-3.3 1.3-4.6 2.4-1.3 1-2.4 2.3-3.1 3.9-.8 1.5-1.1 3.3-1.1 5.2 0 3.1.8 5.6 2.5 7.5 1.6 1.9 4.1 3.5 7.3 4.8 1.2.5 2.3.9 3.2 1.3.9.4 1.7.9 2.3 1.4.6.5 1.1 1 1.4 1.6.3.6.5 1.3.5 2.1 0 .6-.1 1.2-.4 1.7-.3.5-.6 1-1.1 1.3-.5.4-1.1.7-1.8.9-.7.2-1.6.3-2.5.3-1.6 0-3.2-.3-4.7-.9-1.5-.6-3-1.5-4.4-2.8zM31.2 51.1h14.4V44H10v7.1h14.4v39.8h6.8V51.1z"
        fill="white"
      />
    </svg>
  ),
  javascript: (
    <svg viewBox="0 0 100 100" className="w-7 h-7">
      <rect width="100" height="100" rx="8" fill="#F7DF1E" />
      <path
        d="M28 77.3l6.5-3.9c1.3 2.2 2.4 4.1 5.2 4.1 2.6 0 4.3-1 4.3-5V44.4h8v28.3c0 8.3-4.8 12-11.9 12-6.4 0-10-3.3-11.9-7.3l-.2-.1zm32.1.9l6.5-3.8c1.7 2.8 3.9 4.8 7.8 4.8 3.3 0 5.4-1.6 5.4-3.9 0-2.7-2.2-3.7-5.8-5.3l-2-.9c-5.7-2.4-9.5-5.5-9.5-11.9 0-5.9 4.5-10.4 11.6-10.4 5 0 8.7 1.8 11.2 6.3l-6.2 4c-1.4-2.4-2.8-3.4-5-3.4-2.3 0-3.7 1.4-3.7 3.4 0 2.3 1.5 3.3 4.9 4.8l2 .8c6.7 2.9 10.5 5.8 10.5 12.4 0 7.1-5.6 11-13.1 11-7.3 0-12-3.5-14.6-8.1l.1.1z"
        fill="#000"
      />
    </svg>
  ),
  html5: (
    <svg viewBox="0 0 100 100" className="w-7 h-7">
      <rect width="100" height="100" rx="8" fill="#E44D26" />
      <path
        d="M20 15l5.8 65.3 24.1 6.7 24.2-6.7L80 15H20zm41.5 22.5l-.4 4.7H41.4l.7 8h18.5l-1.5 17.4-9.1 2.5-9.2-2.5-1-11.4H48l.5 5.2 1.5.4 1.5-.4.7-8.4H31.7l-1.9-22H70l-.5 5.5z"
        fill="white"
      />
    </svg>
  ),
  tailwind: (
    <svg viewBox="0 0 100 100" fill="none" className="w-7 h-7">
      <rect width="100" height="100" rx="8" fill="#0ea5e9" />
      <path
        d="M25 37.5c2.5-10 8.8-15 18.8-15 15 0 16.9 11.3 24.4 13.1 5 1.3 9.4-.6 13.1-5.6-2.5 10-8.8 15-18.8 15-15 0-16.9-11.3-24.4-13.1-5-1.3-9.4.6-13.1 5.6zM12.5 62.5c2.5-10 8.8-15 18.8-15 15 0 16.9 11.3 24.4 13.1 5 1.3 9.4-.6 13.1-5.6-2.5 10-8.8 15-18.8 15-15 0-16.9-11.3-24.4-13.1-5-1.3-9.4.6-13.1 5.6z"
        fill="white"
      />
    </svg>
  ),
  framer: (
    <svg viewBox="0 0 100 100" fill="none" className="w-7 h-7">
      <rect width="100" height="100" rx="8" fill="#0D0D0D" />
      <path
        d="M25 20h50v30H50L25 20zM25 50h25l25 30H25V50zM25 80v-30"
        stroke="#FF4154"
        strokeWidth="7"
        strokeLinejoin="round"
      />
    </svg>
  ),
  nodejs: (
    <svg viewBox="0 0 100 100" fill="none" className="w-7 h-7">
      <rect width="100" height="100" rx="8" fill="#1a1a1a" />
      <path
        d="M50 12L18 30v40l32 18 32-18V30L50 12zm0 8.5l24 13.5v27L50 74.5 26 61V34L50 20.5z"
        fill="#68A063"
      />
    </svg>
  ),
  mongodb: (
    <svg viewBox="0 0 100 100" fill="none" className="w-7 h-7">
      <rect width="100" height="100" rx="8" fill="#1a1a1a" />
      <path
        d="M50 10c-2 14-18 25-18 42 0 10 8 18 18 21 10-3 18-11 18-21 0-17-16-28-18-42z"
        fill="#4DB33D"
      />
      <path
        d="M50 69v21"
        stroke="#4DB33D"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  ),
  postgresql: (
    <svg viewBox="0 0 100 100" fill="none" className="w-7 h-7">
      <rect width="100" height="100" rx="8" fill="#1a1a1a" />
      <circle cx="50" cy="45" r="22" stroke="#336791" strokeWidth="5" />
      <path
        d="M50 23v44M28 45h44"
        stroke="#336791"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="50" cy="45" r="9" fill="#336791" />
    </svg>
  ),
  redis: (
    <svg viewBox="0 0 100 100" fill="none" className="w-7 h-7">
      <rect width="100" height="100" rx="8" fill="#1a1a1a" />
      <path d="M50 22l35 17-35 17-35-17L50 22z" fill="#D82C20" />
      <path
        d="M15 55l35 17 35-17"
        stroke="#D82C20"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M15 68l35 17 35-17"
        stroke="#D82C20"
        strokeWidth="4"
        strokeLinejoin="round"
      />
    </svg>
  ),
  api: (
    <svg viewBox="0 0 100 100" fill="none" className="w-7 h-7">
      <rect width="100" height="100" rx="8" fill="#1a1a1a" />
      <circle cx="50" cy="50" r="28" stroke="#60a5fa" strokeWidth="4" />
      <path
        d="M50 22c0 0 15 12 15 28s-15 28-15 28M50 22c0 0-15 12-15 28s15 28 15 28M22 50h56"
        stroke="#60a5fa"
        strokeWidth="3"
      />
    </svg>
  ),
  git: (
    <svg viewBox="0 0 100 100" fill="none" className="w-7 h-7">
      <rect width="100" height="100" rx="8" fill="#F05033" />
      <path
        d="M85 47.5L52.5 15a5 5 0 00-7 0L38 22.5l9 9a6 6 0 017.5 7.5l8.5 8.5a6 6 0 11-4 3.8l-8-8V62a6 6 0 11-4 0V40.5a6 6 0 01-3.2-7.8L35 24 15 44a5 5 0 000 7L47.5 83.5a5 5 0 007 0L85 54.5a5 5 0 000-7z"
        fill="white"
      />
    </svg>
  ),
  vercel: (
    <svg viewBox="0 0 100 100" fill="none" className="w-7 h-7">
      <rect width="100" height="100" rx="8" fill="#1a1a1a" />
      <path d="M50 20L87 80H13L50 20z" fill="white" />
    </svg>
  ),
  docker: (
    <svg viewBox="0 0 100 100" fill="none" className="w-7 h-7">
      <rect width="100" height="100" rx="8" fill="#1a1a1a" />
      <path
        d="M17 52c0-5 4-9 9-9h50c5 0 9 4 9 9 0 8-7 14-15 14H17V52z"
        fill="#0db7ed"
      />
      <rect x="25" y="33" width="10" height="9" rx="1" fill="#0db7ed" />
      <rect x="37" y="33" width="10" height="9" rx="1" fill="#0db7ed" />
      <rect x="49" y="33" width="10" height="9" rx="1" fill="#0db7ed" />
      <rect x="37" y="22" width="10" height="9" rx="1" fill="#0db7ed" />
    </svg>
  ),
  aws: (
    <svg viewBox="0 0 100 100" fill="none" className="w-7 h-7">
      <rect width="100" height="100" rx="8" fill="#1a1a1a" />
      <path
        d="M22 62l8-30h4l8 30h-4l-2-8H28l-2 8h-4zm7-11h8l-4-15-4 15zM54 62V32h8c5 0 8 3 8 8v14c0 5-3 8-8 8h-8zm4-4h4c2 0 4-1 4-4V40c0-3-2-4-4-4h-4v22z"
        fill="#FF9900"
      />
      <path
        d="M20 74c16 8 44 8 60 0"
        stroke="#FF9900"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  ),
  gcloud: (
    <svg viewBox="0 0 100 100" fill="none" className="w-7 h-7">
      <rect width="100" height="100" rx="8" fill="#1a1a1a" />
      <path
        d="M62 38H50v4h8.5C57 47 53 50 50 50c-5.5 0-10-4.5-10-10s4.5-10 10-10c2.5 0 4.7.9 6.4 2.4l2.8-2.8C56.6 27.3 53.5 26 50 26c-7.7 0-14 6.3-14 14s6.3 14 14 14c8 0 13-5.5 13-13.5 0-.8-.1-1.7-.3-2.5H62z"
        fill="#4285F4"
      />
    </svg>
  ),
  figma: (
    <svg viewBox="0 0 100 100" fill="none" className="w-7 h-7">
      <rect width="100" height="100" rx="8" fill="#1a1a1a" />
      <rect x="30" y="20" width="20" height="20" rx="10" fill="#F24E1E" />
      <rect x="50" y="20" width="20" height="20" rx="10" fill="#FF7262" />
      <rect x="30" y="40" width="20" height="20" fill="#A259FF" />
      <rect x="30" y="60" width="20" height="20" rx="10" fill="#0ACF83" />
      <circle cx="60" cy="50" r="10" fill="#1ABCFE" />
    </svg>
  ),
  uisystems: (
    <svg viewBox="0 0 100 100" fill="none" className="w-7 h-7">
      <rect width="100" height="100" rx="8" fill="#1a1a1a" />
      <rect x="20" y="20" width="25" height="25" rx="4" fill="#f43f5e" />
      <rect x="55" y="20" width="25" height="25" rx="4" fill="#60a5fa" />
      <rect x="20" y="55" width="25" height="25" rx="4" fill="#a78bfa" />
      <rect x="55" y="55" width="25" height="25" rx="4" fill="#34d399" />
    </svg>
  ),
  heroui: (
    <svg viewBox="0 0 100 100" fill="none" className="w-7 h-7">
      <rect width="100" height="100" rx="8" fill="#18181B" />
      <rect
        x="18"
        y="18"
        width="64"
        height="64"
        rx="10"
        stroke="#06B6D4"
        strokeWidth="5"
      />
      <path
        d="M35 50h30M50 35v30"
        stroke="#06B6D4"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  ),
  daisyui: (
    <svg viewBox="0 0 100 100" fill="none" className="w-7 h-7">
      <rect width="100" height="100" rx="8" fill="#1a1a1a" />
      <circle cx="50" cy="42" r="14" fill="#FF9903" />
      <circle cx="50" cy="42" r="7" fill="#fff" />
      <circle cx="50" cy="22" r="5" fill="#FF9903" />
      <circle cx="68" cy="31" r="5" fill="#FF9903" />
      <circle cx="74" cy="51" r="5" fill="#FF9903" />
      <circle cx="68" cy="70" r="5" fill="#FF9903" />
      <circle cx="32" cy="31" r="5" fill="#FF9903" />
      <circle cx="26" cy="51" r="5" fill="#FF9903" />
      <circle cx="32" cy="70" r="5" fill="#FF9903" />
      <ellipse cx="50" cy="70" rx="16" ry="7" fill="#55D799" />
    </svg>
  ),
};

// ── Data ─────────────────────────────────────────────────────────────────────

const techs = [
  // Frontend
  {
    name: 'Next.js',
    category: 'Frontend',
    logo: logos.nextjs,
    desc: 'Production-focused implementation with polish, speed, and clarity.',
  },
  {
    name: 'React',
    category: 'Frontend',
    logo: logos.react,
    desc: 'Component-based architecture and state management with Hooks.',
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    logo: logos.typescript,
    desc: 'Type safety system and scalable code structure.',
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    logo: logos.javascript,
    desc: 'ES6+ modern syntax, DOM manipulation, and API handling.',
  },
  {
    name: 'HTML5 & Semantic UI',
    category: 'Frontend',
    logo: logos.html5,
    desc: 'Structure, accessibility, and SEO-friendly markup.',
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    logo: logos.tailwind,
    desc: 'Utility-first styling with responsive and adaptive design.',
  },
  {
    name: 'Framer Motion',
    category: 'Frontend',
    logo: logos.framer,
    desc: 'Production-ready animations and gesture interactions.',
  },

  // Backend
  {
    name: 'Node.js & Express',
    category: 'Backend',
    logo: logos.nodejs,
    desc: 'Backend API development with RESTful API design.',
  },
  {
    name: 'MongoDB',
    category: 'Backend',
    logo: logos.mongodb,
    desc: 'NoSQL database design, data modeling, and querying.',
  },
  {
    name: 'Redis',
    category: 'Backend',
    logo: logos.redis,
    desc: 'In-memory caching and high-performance optimization.',
  },
  {
    name: 'REST APIs',
    category: 'Backend',
    logo: logos.api,
    desc: 'JWT authentication, API security, and rate limiting.',
  },

  // Tools
  {
    name: 'Git',
    category: 'Tools',
    logo: logos.git,
    desc: 'Version control with branching and merging strategy.',
  },
  {
    name: 'Vercel',
    category: 'Tools',
    logo: logos.vercel,
    desc: 'Frontend deployment with CI/CD pipeline.',
  },
  {
    name: 'Google Cloud',
    category: 'Tools',
    logo: logos.gcloud,
    desc: 'Cloud platform with AI and data services.',
  },

  // Design
  {
    name: 'Figma',
    category: 'Design',
    logo: logos.figma,
    desc: 'UI/UX design with components and variants.',
  },
  {
    name: 'UI Systems',
    category: 'Design',
    logo: logos.uisystems,
    desc: 'Design system architecture and design tokens.',
  },

  // UI Library
  {
    name: 'Hero UI',
    category: 'UI Library',
    logo: logos.heroui,
    desc: 'React component library with dark mode support.',
  },
  {
    name: 'DaisyUI',
    category: 'UI Library',
    logo: logos.daisyui,
    desc: 'Tailwind components with deep theme customization.',
  },
];

const tabs = ['All', 'Frontend', 'Backend', 'Tools', 'Design', 'UI Library'];

const catBadgeStyle = {
  Frontend: 'bg-blue-500/10 text-blue-400/70 border border-blue-500/20',
  Backend: 'bg-rose-500/10 text-rose-400/70 border border-rose-500/20',
  Tools: 'bg-purple-500/10 text-purple-400/70 border border-purple-500/20',
  Design: 'bg-emerald-500/10 text-emerald-400/70 border border-emerald-500/20',
  'UI Library': 'bg-amber-500/10 text-amber-400/70 border border-amber-500/20',
};

// ── Component ─────────────────────────────────────────────────────────────────

const TechStack = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filtered =
    activeTab === 'All' ? techs : techs.filter((t) => t.category === activeTab);

  return (
    <section
      className="max-w-[1200px] mx-auto px-4 sm:px-6 py-[100px] lg:py-[140px] relative overflow-hidden"
      id="skills"
    >
      {/* Background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="mb-12">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-400 to-rose-400 bg-clip-text text-transparent font-bold tracking-[0.4em] uppercase text-[10px] block mb-4"
        >
          Technical Expertise
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
        >
          Modern{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-400 to-rose-400">
            Tech Stack
          </span>
        </motion.h2>
      </div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="flex flex-wrap gap-2 mb-10"
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full text-[13px] font-medium border transition-all duration-200 cursor-pointer
              ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-blue-500 to-rose-500 border-transparent text-white shadow-lg shadow-blue-500/20'
                  : 'bg-white/5 border-white/10 text-white/50 hover:border-blue-400/30 hover:text-white/80'
              }`}
          >
            {tab}
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((tech, i) => (
            <motion.div
              key={tech.name}
              layout
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -8 }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="group relative bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 flex flex-col gap-4 hover:border-white/[0.14] hover:bg-white/[0.055] transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Hover tint */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-600/5 to-transparent rounded-2xl pointer-events-none" />

              {/* Top row — logo + badge */}
              <div className="flex items-start justify-between gap-2 relative z-10">
                {/* Logo box */}
                <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center shrink-0">
                  {tech.logo}
                </div>

                {/* Category badge */}
                <span
                  className={`text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full whitespace-nowrap ${catBadgeStyle[tech.category]}`}
                >
                  {tech.category}
                </span>
              </div>

              {/* Name */}
              <p className="text-[15px] font-bold text-white leading-snug relative z-10">
                {tech.name}
              </p>

              {/* Description */}
              <p className="text-[12px] text-white/40 leading-relaxed relative z-10 flex-1">
                {tech.desc}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default TechStack;
