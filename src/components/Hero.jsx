'use client';

import Image from 'next/image';
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Magnetic from './Magnetic';
import profileImg from '@/assets/profile.png';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  const [roleIndex, setRoleIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const roles = [
    'Full Stack Developer',
    'Software Engineer',
    'Problem Solver',
    'Mern Stack Developer',
  ];

  const [sequenceIndex, setSequenceIndex] = useState(0);
  const sequence = ['Hi,', 'this is', 'Syeda Sima'];

  const bgY = useTransform(scrollY, [0, 800], [0, 200]);
  const textY = useTransform(scrollY, [0, 800], [0, -100]);
  const imageY = useTransform(scrollY, [0, 800], [0, -150]);

  useEffect(() => {
    gsap.from('.hero-badge', {
      opacity: 0,
      scale: 0.8,
      y: -20,
      duration: 1.2,
      ease: 'expo.out',
      delay: 0.5,
    });

    const seqInterval = setInterval(() => {
      setSequenceIndex((prev) => (prev + 1) % sequence.length);
    }, 2800);

    const roleInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setIsGlitching(false);
      }, 300);
    }, 3500);

    return () => {
      clearInterval(seqInterval);
      clearInterval(roleInterval);
    };
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="max-w-300 mx-auto px-4 sm:px-6 pt-[100px] lg:pt-[110px] pb-[60px] min-h-screen flex flex-col lg:grid lg:grid-cols-2 items-center gap-10 lg:gap-16 relative overflow-hidden lg:overflow-visible"
    >
      {/* Background Parallax Layer */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none -z-10"
      >
        <div className="absolute -top-[5%] -left-[5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px]"></div>
        <div className="absolute top-[15%] -right-[5%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-rose-500/10 rounded-full blur-[80px] md:blur-[120px]"></div>
      </motion.div>

      {/* Left Content - Text (Desktop: Left, Mobile: Bottom/Order-2) */}
      <motion.div
        style={{
          y:
            typeof window !== 'undefined' && window.innerWidth > 1024
              ? textY
              : 0,
        }}
        className="space-y-5 max-w-2xl flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
      >
        <div className="hero-badge inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-500/5 border border-blue-500/20 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em]">
            Available for new projects
          </span>
        </div>

        <div className="space-y-4 w-full">
          {/* Animated Heading */}
          <div className="h-[80px] xs:h-[100px] sm:h-[120px] md:h-[150px] flex items-center justify-center lg:justify-start overflow-visible">
            <AnimatePresence mode="wait">
              <motion.h1
                key={sequenceIndex}
                initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -30, filter: 'blur(12px)' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`text-[2.5rem] xs:text-[2.8rem] sm:text-[4rem] md:text-[5.5rem] leading-[1.1] tracking-tighter ${
                  sequenceIndex === 2
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-rose-400 font-black'
                    : 'text-on-background font-bold'
                }`}
              >
                {sequence[sequenceIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>

          <div className="flex flex-col gap-2.5">
            <span className="block text-sm sm:text-base md:text-lg font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] text-on-surface-variant/80">
              Full-Stack Developer from Bangladesh
            </span>

            {/* Role Switcher */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1 text-xl sm:text-3xl md:text-4xl font-heading font-bold text-on-surface-variant">
              <span className="shrink-0 opacity-60">I&apos;m a</span>
              <div className="relative h-10 sm:h-14 overflow-hidden min-w-[200px] xs:min-w-[250px] md:min-w-[450px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ y: 35, opacity: 0 }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      x: isGlitching ? [0, -3, 3, 0] : 0,
                      color: isGlitching ? '#f43f5e' : '#3b82f6',
                    }}
                    exit={{ y: -35, opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'circOut' }}
                    className="absolute left-0 right-0 lg:right-auto top-1/2 -translate-y-1/2 text-blue-500 font-black whitespace-nowrap"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
                <motion.div className="absolute bottom-1 left-0 h-[2px] md:h-[3px] w-full bg-gradient-to-r from-blue-600 to-rose-500 rounded-full" />
              </div>
            </div>
          </div>

          <motion.p className="text-base sm:text-lg text-on-surface-variant/70 max-w-lg leading-relaxed pt-1 mx-auto lg:mx-0">
            I build high-performance, scalable web applications with a focus on
            modern architectures and seamless user experiences.
          </motion.p>
        </div>

        {/* Buttons */}
        <motion.div className="flex flex-col sm:flex-row gap-4 sm:gap-5 pt-5 w-full sm:w-auto">
          <Magnetic strength={0.1}>
            <button
              onClick={() =>
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-rose-500 text-white px-8 md:px-10 py-3.5 md:py-4 rounded-2xl font-bold shadow-xl shadow-blue-500/20 hover:scale-[1.03] active:scale-95 transition-all duration-300 text-base md:text-lg"
            >
              View Projects
            </button>
          </Magnetic>
          <Magnetic strength={0.1}>
            <button
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="w-full sm:w-auto border-2 border-white/5 bg-white/5 backdrop-blur-xl text-on-surface px-8 md:px-10 py-3.5 md:py-4 rounded-2xl font-bold hover:bg-white/10 transition-all text-base md:text-lg"
            >
              Contact Me
            </button>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Right Content - Image (Desktop: Right, Mobile: Top/Order-1) */}
      <motion.div
        style={{
          y:
            typeof window !== 'undefined' && window.innerWidth > 1024
              ? imageY
              : 0,
        }}
        className="relative lg:justify-self-end flex flex-col items-center order-1 lg:order-2"
      >
        <div className="relative group p-6 sm:p-10">
          {/* Animated Orbiting Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 border-[2px] border-dashed border-blue-500/20 rounded-full scale-[1.05] sm:scale-110"
          />

          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 border border-rose-500/10 rounded-full"
          />

          {/* Image Container */}
          <div className="relative z-10 w-[220px] h-[220px] xs:w-[260px] xs:h-[260px] sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px] rounded-full p-2 border-2 border-white/5 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm shadow-2xl overflow-hidden">
            <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900 relative">
              <Image
                src={profileImg}
                alt="Syeda Sima"
                className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-[10px] font-black bg-gradient-to-r from-blue-500 to-rose-400 bg-clip-text text-transparent uppercase tracking-[0.4em] opacity-80">
              syedasima-dev
            </p>
          </div>

          {/* Floating Badges */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="absolute -left-2 xs:-left-5 lg:-left-10 top-1/4 glass-card p-3 sm:p-4 rounded-xl md:rounded-2xl border border-white/10 backdrop-blur-3xl shadow-2xl z-20"
          >
            <span className="text-xl sm:text-2xl font-black text-blue-400">
              1+
            </span>
            <p className="text-[7px] sm:text-[8px] font-bold text-on-surface-variant uppercase tracking-widest mt-1">
              Years Exp
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="absolute -right-2 xs:-right-5 lg:-right-10 bottom-1/4 glass-card p-3 sm:p-4 rounded-xl md:rounded-2xl border border-white/10 backdrop-blur-3xl shadow-2xl z-20"
          >
            <span className="text-xl sm:text-2xl font-black text-rose-500">
              10+
            </span>
            <p className="text-[7px] sm:text-[8px] font-bold text-on-surface-variant uppercase tracking-widest mt-1">
              Projects
            </p>
          </motion.div>
        </div>

        <div className="mt-4 text-center hidden xs:block">
          <p className="text-[9px] sm:text-[10px] font-black bg-gradient-to-r from-blue-500 to-rose-400 bg-clip-text text-transparent uppercase tracking-[0.3em] sm:tracking-[0.4em] opacity-80">
            syedasima-dev
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
