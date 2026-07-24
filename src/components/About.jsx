'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState('journey');

  const tabData = {
    journey: {
      title: "My Journey",
      content: "My programming journey began with learning the fundamentals of C and C++, where I developed a solid understanding of programming logic, algorithms, and data structures. As my interest in software engineering grew, I transitioned into web technologies, specializing in the MERN stack (React, Node.js, Express.js, MongoDB) along with TypeScript and Tailwind CSS to build production-grade applications.",
      highlight: "Logical foundations in C/C++ to full-stack MERN & TypeScript structures"
    },
    interests: {
      title: "Focus Areas",
      content: "I enjoy developing full-stack web applications, AI-powered tools, and modern software solutions that solve practical problems. I am especially interested in designing responsive interfaces, building efficient backend systems, API integration, Cloud-based systems, and exploring Blockchain technology.",
      highlight: "Full-stack development, AI integrations, Cloud, and Blockchain"
    },
    mindset: {
      title: "Mindset & Goals",
      content: "I consider myself a curious, dedicated, and lifelong learner. I believe consistency, patience, and continuous learning are the keys to becoming a better software engineer. Outside of coding, I read technical blogs, watch tech content, listen to music, and spend time with family to recharge my creativity.",
      highlight: "Consistent problem-solving, clean code, and continuous learning"
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-heading', {
        opacity: 0,
        x: -50,
        filter: 'blur(10px)',
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      });

      gsap.from('.about-content-item', {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      });

      gsap.fromTo(
        '.bento-item',
        {
          opacity: 0,
          scale: 0.8,
          y: 40,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: 0.15,
          duration: 1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-w-[1200px] mx-auto px-4 sm:px-6 py-[80px] sm:py-[120px] lg:py-[140px] relative overflow-hidden"
      id="about"
    >
      {/* Background Cinematic Glows */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-rose-500/10 rounded-full blur-[120px] -z-10" />

      {/* Main Grid */}
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-24 items-center relative z-10">
        {/* Left Side: Content & Interactive Tabs */}
        <div className="lg:col-span-6 space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="about-heading space-y-4">
            <span className="bg-gradient-to-r from-blue-400 to-rose-400 bg-clip-text text-transparent font-bold tracking-[0.4em] uppercase text-[10px]">
              The Architect
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-h2 text-on-background font-bold">
              About Me
            </h2>
          </div>

          <div className="space-y-6 w-full">
            <div className="about-content-item">
              <p className="text-base sm:text-lg lg:text-xl font-medium text-on-background leading-relaxed">
                I&apos;m{' '}
                <span className="text-blue-400 font-bold">
                  Syeda Sima
                </span>
                , a Computer Science & Engineering student and dedicated{' '}
                <span className="text-rose-400 font-bold">
                  Full-Stack Web Developer
                </span>{' '}
                based in Dhaka, Bangladesh, passionate about building user-centric, scalable, and intelligent software.
              </p>
            </div>

            {/* Interactive Tabs */}
            <div className="about-content-item w-full space-y-6 pt-2">
              <div className="flex border-b border-outline-variant/10 pb-2 gap-6 justify-center lg:justify-start">
                {Object.keys(tabData).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`text-sm sm:text-base font-bold pb-2 relative transition-all duration-300 cursor-pointer ${
                      activeTab === key
                        ? 'text-blue-400'
                        : 'text-on-surface-variant hover:text-on-background'
                    }`}
                  >
                    {tabData[key].title}
                    {activeTab === key && (
                      <motion.div
                        layoutId="activeAboutTab"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-rose-500"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              <div className="min-h-[160px] text-left">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <p className="text-on-surface-variant leading-relaxed text-sm sm:text-base">
                      {tabData[activeTab].content}
                    </p>
                    <div className="flex items-center gap-2 text-xs font-bold text-rose-400 uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                      {tabData[activeTab].highlight}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="about-content-item pt-2 flex justify-center lg:justify-start">
              <a
                href="#"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-blue-600 to-rose-500 text-white font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20"
              >
                {/* Hover overlay animation */}
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>

                {/* Button content */}
                <span className="relative flex items-center gap-2">
                  Download Resume
                  <Download
                    size={20}
                    className="group-hover:translate-y-1 transition-transform duration-300"
                  />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Professional Bento Grid */}
        <div className="lg:col-span-6 w-full h-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full h-full">
            {/* Top Wide Card */}
            <div className="bento-item sm:col-span-2 glass-card p-8 rounded-4xl border border-white/5 hover:border-blue-500/30 transition-all duration-500 flex items-center justify-between group overflow-hidden relative min-h-40 bg-surface-container-low/40 backdrop-blur-xl">
              <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10 text-left">
                <h4 className="text-2xl sm:text-3xl font-black text-on-background mb-2 group-hover:text-blue-400 transition-colors">
                  Logic & Structures
                </h4>
                <p className="text-on-surface-variant/70 text-sm sm:text-base">
                  Strong algorithm skills built on C/C++ and databases.
                </p>
              </div>
              <span className="material-symbols-outlined text-6xl sm:text-7xl text-on-surface-variant/10 group-hover:text-rose-400/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 relative z-10">
                extension
              </span>
            </div>

            {/* Bottom Cards */}
            <div className="bento-item glass-card p-6 rounded-4xl border border-white/5 hover:border-blue-500/30 transition-all duration-500 flex flex-col justify-center items-center text-center group min-h-[180px] relative overflow-hidden bg-surface-container-low/40 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 border border-blue-500/20">
                <span className="material-symbols-outlined text-3xl text-blue-400">
                  code_blocks
                </span>
              </div>
              <h4 className="text-xl font-bold text-on-background">
                MERN Stack
              </h4>
              <p className="text-[10px] text-blue-400/60 mt-2 tracking-widest uppercase font-black">
                Full-Stack
              </p>
            </div>

            <div className="bento-item glass-card p-6 rounded-4xl border border-white/5 hover:border-rose-500/30 transition-all duration-500 flex flex-col justify-center items-center text-center group min-h-[180px] relative overflow-hidden bg-surface-container-low/40 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-b from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-16 h-16 rounded-2xl bg-rose-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 border border-rose-500/20">
                <span className="material-symbols-outlined text-3xl text-rose-400">
                  rocket_launch
                </span>
              </div>
              <h4 className="text-xl font-bold text-on-background">
                Intelligent UI
              </h4>
              <p className="text-[10px] text-rose-400/60 mt-2 tracking-widest uppercase font-black">
                AI & UX
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
