'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import devPilotAI from '@/assets/devpilot_ai.png';
import hireForge from '@/assets/hireforge.png';
import ticketBari from '@/assets/ticketbari.png';
import digiTools from '@/assets/digitools.png';
import docAppoint from '@/assets/docappoint.png';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  const brandGradient = 'from-[#2563eb] via-[#a855f7] to-[#f43f5e]';
  const categories = ['All', 'Next.js', 'React', 'Full-Stack'];

  const allProjects = [
    {
      title: 'DevPilot AI v1.0',
      subtitle: 'AI-Powered Software Engineering Workspace',
      description:
        'DevPilot AI is a professional, AI-powered software engineering workspace designed to assist developers throughout the software development lifecycle. The platform provides automated code review, bug fixing, documentation generation, smart project recommendations, analytics, and a context-aware chat assistant.',
      tags: [
        'React',
        'TypeScript',
        'Vite',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Mongoose',
        'TanStack Query',
        'Tailwind CSS',
        'JWT',
        'Google OAuth',
        'REST API',
        'Recharts',
      ],
      categories: ['React', 'Full-Stack'],
      image: devPilotAI,
      liveLink: 'https://dev-pilot-ai-v1-0.vercel.app',
      repoLink: 'https://github.com/Tithe-cast/DevPilot-AI-v1.0.',
    },
    {
      title: 'HireForge',
      subtitle: 'Full-Stack Developer Job Portal',
      description:
        'Full-stack developer job portal with mandatory salary transparency and real tech-stack filtering. Built with Next.js 14, TypeScript, MongoDB and JWT auth.',
      tags: [
        'Next.js',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Recharts',
        'Node.js',
        'MongoDB',
        'Mongoose',
        'JWT',
        'Zod',
      ],
      categories: ['Next.js', 'Full-Stack'],
      image: hireForge,
      liveLink: 'https://hire-forge-gilt.vercel.app',
      repoLink: 'https://github.com/Tithe-cast/HireForge',
    },
    {
      title: 'TicketBari',
      subtitle: 'Online Ticket Booking Platform',
      description:
        'Built a scalable REST API for an online ticket booking platform, enabling secure authentication, ticket management, bookings, Stripe payments, and role-based access for users, vendors, and administrators.',
      tags: [
        'Next.js',
        'React',
        'TypeScript',
        'Node.js',
        'Express.js',
        'MongoDB',
        'BetterAuth',
        'JWT',
        'Stripe',
        'Tailwind CSS',
        'DaisyUI',
        'TanStack Query',
        'Framer Motion',
      ],
      categories: ['Next.js', 'Full-Stack'],
      image: ticketBari,
      liveLink: 'https://ticket-bari-client-green.vercel.app/',
      repoLink: 'https://github.com/Tithe-cast/TicketBari_client',
    },
    {
      title: 'DigiTools',
      subtitle: 'Premium Digital Tools Marketplace',
      description:
        'A modern, fully responsive digital tools marketplace built with React, Tailwind CSS and DaisyUI. Users can explore, add and manage premium digital products with a shopping cart, enhanced UI interactions and real-time toast notifications.',
      tags: ['React.js', 'Vite', 'JavaScript', 'Tailwind CSS', 'React-Toastify', 'JSON'],
      categories: ['React'],
      image: digiTools,
      liveLink: 'https://classy-blini-87d8e8.netlify.app',
      repoLink: 'https://github.com/Tithe-cast/DigiTools-Platform',
    },
    {
      title: 'DocAppoint',
      subtitle: 'Doctor Appointment Manager',
      description:
        'A modern doctor appointment booking platform that enables users to find doctors, book appointments, manage bookings, and securely access their accounts through an intuitive, responsive interface.',
      tags: [
        'React',
        'Tailwind CSS',
        'Node.js',
        'Express.js',
        'MongoDB',
        'JWT',
        'BetterAuth',
        'REST API',
      ],
      categories: ['React', 'Full-Stack'],
      image: docAppoint,
      liveLink: 'https://docappoint-client-virid.vercel.app',
      repoLink: 'https://github.com/Tithe-cast/docappoint-client',
    },
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? allProjects
      : allProjects.filter((project) =>
          project.categories.includes(activeCategory),
        );

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.projects-title', {
        opacity: 0,
        y: 40,
        filter: 'blur(10px)',
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisible = 5;
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pageNumbers.push(i);
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) pageNumbers.push(i);
      } else {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++)
          pageNumbers.push(i);
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }
    return pageNumbers;
  };

  return (
    <section
      ref={sectionRef}
      className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 py-20 sm:py-24 relative overflow-hidden"
      id="projects"
    >
      {/* ── Background Effects ── */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-blue-600/5 blur-[120px]" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-rose-500/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/3 blur-[150px]" />
      </div>

      {/* ── Section Header ── */}
      <div className="text-center mb-12 projects-title">
        <span
          className={`bg-linear-to-r ${brandGradient} bg-clip-text text-transparent font-bold tracking-[0.4em] uppercase text-[11px] sm:text-[13px]`}
        >
          Portfolio
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-3 text-white tracking-tight leading-none font-heading">
          Featured{' '}
          <span
            className={`bg-linear-to-r ${brandGradient} bg-clip-text text-transparent`}
          >
            Projects
          </span>
        </h2>
        <p className="text-white/25 text-sm mt-3 max-w-2xl mx-auto font-light tracking-wide">
          Each project represents a unique challenge solved with precision and
          creativity
        </p>
      </div>

      {/* ── Category Filter ── */}
      <div className="flex justify-center flex-wrap gap-2.5 mb-12 relative z-30">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'text-white border-transparent'
                  : 'text-white/40 border border-white/5 bg-white/5 hover:text-white/70 hover:bg-white/10'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className={`absolute inset-0 bg-linear-to-r ${brandGradient} rounded-full -z-10 shadow-lg shadow-blue-500/25`}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </motion.button>
          );
        })}
      </div>

      {/* ── Projects Grid ── */}
      <div className="max-w-[1280px] mx-auto w-full relative z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${currentPage}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7 w-full"
          >
            {currentProjects.map((project, index) => {
              const isFeatured =
                currentProjects.length % 2 !== 0 && index === 0;
              const delay = index * 0.08;

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`h-full ${isFeatured ? 'col-span-1 md:col-span-2' : 'col-span-1'}`}
                >
                  <div className="group h-full relative">
                    {/* ── Glow Behind ── */}
                    <div
                      className={`absolute -inset-0.5 bg-linear-to-r ${brandGradient} rounded-xl opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-700 -z-10`}
                    />

                    {/* ── Card ── */}
                    <div
                      className={`flex h-full rounded-xl overflow-hidden relative bg-[#0d121f]/80 backdrop-blur-xl border border-white/5 transition-all duration-500 group-hover:border-white/10 group-hover:shadow-xl ${
                        isFeatured ? 'flex-col lg:flex-row' : 'flex-col'
                      }`}
                    >
                      {/* ── Image Container - FIXED ── */}
                      <div
                        className={`relative w-full overflow-hidden bg-[#0a0e1a] flex-shrink-0 ${
                          isFeatured
                            ? 'lg:w-2/5 lg:min-h-[280px] aspect-[16/10] lg:aspect-auto'
                            : 'aspect-[16/10]'
                        }`}
                      >
                        {/* Image Wrapper with proper containment */}
                        <div className="relative w-full h-full">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-contain object-center"
                            sizes={
                              isFeatured
                                ? '(max-width: 1024px) 100vw, 40vw'
                                : '(max-width: 768px) 100vw, 45vw'
                            }
                            priority={index < 2}
                            style={{
                              objectFit: 'contain',
                              objectPosition: 'center',
                            }}
                          />

                          {/* Overlay Gradient - for better visibility */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0d121f] via-[#0d121f]/5 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                        </div>

                        {/* ── Badges ── */}
                        <div className="absolute top-3 left-3 right-3 flex justify-between items-start z-20">
                          <span className="px-2.5 py-0.5 bg-[#090d16]/70 backdrop-blur-md rounded-full text-[8px] font-bold uppercase tracking-wider text-white/50 border border-white/5">
                            {project.categories[0]}
                          </span>
                          <span className="flex items-center gap-1 px-2.5 py-0.5 bg-[#090d16]/70 backdrop-blur-md rounded-full text-[8px] font-bold uppercase tracking-wider text-emerald-400 border border-emerald-500/20">
                            <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                            Live
                          </span>
                        </div>

                        {/* ── Mobile Title ── */}
                        <div className="absolute bottom-3 left-3 right-3 z-20 lg:hidden">
                          <h3 className="text-white font-bold text-sm tracking-tight drop-shadow-lg">
                            {project.title}
                          </h3>
                          <p className="text-white/30 text-[8px] font-medium uppercase tracking-wider drop-shadow-lg">
                            {project.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* ── Content ── */}
                      <div
                        className={`flex flex-col justify-between flex-1 p-5 sm:p-6 ${
                          isFeatured ? 'lg:w-3/5' : 'w-full'
                        }`}
                      >
                        <div>
                          {/* ── Tags ── */}
                          <div
                            className={`flex flex-wrap gap-1.5 mb-3 ${
                              isFeatured ? 'hidden lg:flex' : 'flex'
                            }`}
                          >
                            {project.tags.slice(0, 3).map((tag, tIndex) => (
                              <span
                                key={tIndex}
                                className="px-2.5 py-0.5 bg-white/[0.03] text-white/30 hover:text-white/60 hover:bg-white/[0.06] rounded-full text-[8px] font-semibold uppercase tracking-wider border border-white/5 transition-all duration-300"
                              >
                                {tag}
                              </span>
                            ))}
                            {project.tags.length > 3 && (
                              <span className="px-2.5 py-0.5 bg-white/[0.03] text-white/20 rounded-full text-[8px] font-semibold uppercase tracking-wider border border-white/5">
                                +{project.tags.length - 3}
                              </span>
                            )}
                          </div>

                          {/* ── Title ── */}
                          <div
                            className={`mb-2.5 ${
                              isFeatured ? 'hidden lg:block' : 'block'
                            }`}
                          >
                            <h4 className="text-base sm:text-lg font-extrabold text-white tracking-tight transition-all duration-500 font-heading group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-[#2563eb] group-hover:to-[#f43f5e] group-hover:bg-clip-text">
                              {project.title}
                            </h4>
                            <p className="text-[#fb7185]/40 text-[8px] font-semibold uppercase tracking-widest mt-1">
                              {project.subtitle}
                            </p>
                          </div>

                          {/* ── Description ── */}
                          <p className="text-white/35 text-xs leading-relaxed mb-4 group-hover:text-white/50 transition-colors duration-500 line-clamp-2">
                            {project.description}
                          </p>
                        </div>

                        {/* ── Buttons ── */}
                        <div className="flex gap-2 pt-1">
                          <Link
                            href={project.liveLink}
                            target="_blank"
                            className={`flex-1 flex items-center justify-center gap-1.5 bg-linear-to-r ${brandGradient} text-white px-4 py-2.5 rounded-lg font-bold text-[9px] uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.25)] active:scale-[0.97] relative overflow-hidden group/btn`}
                          >
                            <span className="relative z-10 flex items-center gap-1.5">
                              <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover/btn:rotate-[-45deg]">
                                play_arrow
                              </span>
                              Live Demo
                            </span>
                            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 -skew-x-12" />
                          </Link>

                          <Link
                            href={project.repoLink}
                            target="_blank"
                            className="flex items-center justify-center gap-1.5 bg-white/[0.03] backdrop-blur-md text-white/40 px-4 py-2.5 rounded-lg font-bold text-[9px] uppercase tracking-wider border border-white/5 hover:bg-white/[0.06] hover:text-white hover:border-white/10 transition-all duration-300 active:scale-[0.97] group/btn"
                          >
                            <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover/btn:scale-110">
                              code
                            </span>
                            Source
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* ── Pagination ── */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-3 mt-12"
          >
            <div className="flex justify-center items-center gap-1.5 flex-wrap">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`p-2 rounded-lg transition-all duration-300 flex items-center justify-center ${
                  currentPage === 1
                    ? 'text-white/10 cursor-not-allowed'
                    : 'text-white/30 hover:text-white hover:bg-white/5 hover:border-white/10'
                } border border-white/5`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <div className="flex gap-1">
                {getPageNumbers().map((page, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      typeof page === 'number' && setCurrentPage(page)
                    }
                    disabled={page === '...'}
                    className={`min-w-[36px] h-9 px-3 rounded-lg font-medium text-xs transition-all duration-300 ${
                      page === currentPage
                        ? `bg-linear-to-r ${brandGradient} text-white shadow-lg shadow-blue-500/25`
                        : page === '...'
                          ? 'text-white/20 cursor-default'
                          : 'text-white/35 hover:text-white hover:bg-white/5 border border-white/5'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className={`p-2 rounded-lg transition-all duration-300 flex items-center justify-center ${
                  currentPage === totalPages
                    ? 'text-white/10 cursor-not-allowed'
                    : 'text-white/30 hover:text-white hover:bg-white/5 hover:border-white/10'
                } border border-white/5`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            <div className="text-center text-white/10 text-[10px] font-mono tracking-widest">
              {filteredProjects.length > 0 ? (
                <>
                  Showing {startIndex + 1}–
                  {Math.min(endIndex, filteredProjects.length)} of{' '}
                  {filteredProjects.length}
                </>
              ) : (
                'No projects found'
              )}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
