'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Download } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

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

      {/* Main Grid: Desktop-e ager layout (lg:grid-cols-12) */}
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-24 items-center relative z-10">
        {/* Left Side: Content (Desktop-e 6 column) */}
        <div className="lg:col-span-6 space-y-10 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="about-heading space-y-4">
            <span className="bg-gradient-to-r from-blue-400 to-rose-400 bg-clip-text text-transparent font-bold tracking-[0.4em] uppercase text-[10px]">
              The Architect
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-h2 text-on-background font-bold">
              About Me
            </h2>
          </div>

          <div className="space-y-6 font-body-lg">
            <div className="about-content-item">
              <p className="text-base sm:text-lg lg:text-xl font-medium text-on-background leading-relaxed">
                I&apos;m{' '}
                <span className="text-blue-400 font-bold">
                  Syeda Sima
                </span>
                , a dedicated{' '}
                <span className="text-rose-400 font-bold">
                  Full-Stack Developer
                </span>{' '}
                based in Bangladesh, committed to engineering high-performance
                and scalable digital solutions.
              </p>
            </div>

            <div className="about-content-item">
              <p className="text-on-surface-variant/80 leading-relaxed text-sm sm:text-base lg:text-lg">
                Specializing in the{' '}
                <span className="text-blue-400 font-semibold">MERN Stack</span>,
                I bridge the gap between complex backend logic and seamless user
                interfaces. My focus is on crafting{' '}
                <span className="text-rose-400 font-semibold">
                  pixel-perfect frontends
                </span>{' '}
                and robust architectures.
              </p>
            </div>

            <div className="about-content-item pt-4">
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

        {/* Right Side: Professional Bento Grid (Desktop-e 6 column) */}
        <div className="lg:col-span-6 w-full h-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full h-full">
            {/* Top Wide Card - Desktop layout logic untouched */}
            <div className="bento-item sm:col-span-2 glass-card p-8 rounded-4xl border border-white/5 hover:border-blue-500/30 transition-all duration-500 flex items-center justify-between group overflow-hidden relative min-h-40 bg-surface-container-low/40 backdrop-blur-xl">
              <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10 text-left">
                <h4 className="text-2xl sm:text-3xl font-black text-on-background mb-2 group-hover:text-blue-400 transition-colors">
                  Problem Solver
                </h4>
                <p className="text-on-surface-variant/70 text-sm sm:text-base">
                  Turning complex ideas into elegant solutions.
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
                Clean Code
              </h4>
              <p className="text-[10px] text-blue-400/60 mt-2 tracking-widest uppercase font-black">
                Architecture
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
                Lightning Fast
              </h4>
              <p className="text-[10px] text-rose-400/60 mt-2 tracking-widest uppercase font-black">
                Performance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;












