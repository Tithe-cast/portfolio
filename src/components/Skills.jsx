'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.skill-card-wrap', {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 1.2,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-w-[1200px] mx-auto px-4 sm:px-6 py-[80px] sm:py-[100px] relative overflow-hidden"
      id="skills"
    >
      {/* Subtle Background Glows for Theme Depth */}
      <div className="absolute top-0 -left-20 w-64 h-64 bg-blue-600/5 blur-[100px] -z-10" />
      <div className="absolute bottom-0 -right-20 w-64 h-64 bg-rose-500/5 blur-[100px] -z-10" />

      <div className="grid md:grid-cols-2 gap-6 sm:gap-10 lg:gap-12">
        {/* Frontend Card */}
        <div className="skill-card-wrap h-full">
          <TiltCard className="h-full">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="glass-card p-6 sm:p-10 lg:p-12 h-full transition-all duration-500 border border-white/5 hover:border-blue-500/30 group bg-surface-container-low/40 backdrop-blur-md relative overflow-hidden"
            >
              {/* Card Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex justify-between items-start mb-10 relative z-10">
                <div className="p-4 bg-blue-500/10 rounded-2xl group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500 shadow-lg shadow-blue-500/5">
                  <span className="material-symbols-outlined text-blue-400 text-4xl">
                    web
                  </span>
                </div>
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent text-[10px] font-black tracking-[0.3em] uppercase py-1 border-b border-blue-500/20">
                  Expertise
                </span>
              </div>

              <h3 className="font-h2 text-2xl sm:text-3xl mb-8 tracking-tight text-on-background relative z-10">
                Frontend <span className="text-blue-400">Engineering</span>
              </h3>

              <ul className="space-y-5 relative z-10">
                {[
                  'Architecting complex SPAs with React & Next.js',
                  'Design System implementation with Tailwind CSS',
                  'Performance profiling & Core Web Vitals optimization',
                ].map((skill, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 text-on-surface-variant/80 font-medium text-sm sm:text-base group/item"
                  >
                    <span className="material-symbols-outlined text-blue-500/60 text-xl group-hover/item:text-blue-400 transition-colors">
                      check_circle
                    </span>
                    <span className="group-hover/item:text-on-background transition-colors">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </TiltCard>
        </div>

        {/* Backend Card */}
        <div className="skill-card-wrap h-full">
          <TiltCard className="h-full">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="glass-card p-6 sm:p-10 lg:p-12 h-full transition-all duration-500 border border-white/5 hover:border-rose-500/30 group bg-surface-container-low/40 backdrop-blur-md relative overflow-hidden"
            >
              {/* Card Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex justify-between items-start mb-10 relative z-10">
                <div className="p-4 bg-rose-500/10 rounded-2xl group-hover:scale-110 group-hover:bg-rose-500/20 transition-all duration-500 shadow-lg shadow-rose-500/5">
                  <span className="material-symbols-outlined text-rose-400 text-4xl">
                    database
                  </span>
                </div>
                <span className="bg-gradient-to-r from-rose-400 to-rose-600 bg-clip-text text-transparent text-[10px] font-black tracking-[0.3em] uppercase py-1 border-b border-rose-500/20">
                  Infrastructure
                </span>
              </div>

              <h3 className="font-h2 text-2xl sm:text-3xl mb-8 tracking-tight text-on-background relative z-10">
                Backend <span className="text-rose-400">Architecture</span>
              </h3>

              <ul className="space-y-5 relative z-10">
                {[
                  'Microservices with Node.js & Go',
                  'Database design (PostgreSQL, MongoDB, Redis)',
                  'Cloud integration (AWS, Docker, Kubernetes)',
                ].map((skill, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 text-on-surface-variant/80 font-medium text-sm sm:text-base group/item"
                  >
                    <span className="material-symbols-outlined text-rose-500/60 text-xl group-hover/item:text-rose-400 transition-colors">
                      check_circle
                    </span>
                    <span className="group-hover/item:text-on-background transition-colors">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
};

export default Skills;
