"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(lineRef.current, {
        scaleY: 0,
        transformOrigin: "top",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: true,
        },
      });

      gsap.from(".timeline-item", {
        opacity: 0,
        x: (i) => (i % 2 === 0 ? -50 : 50),
        stagger: 0.3,
        duration: 1,
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const milestones = [
    {
      period: "2023 — Present",
      icon: "🎓",
      role: "BSc in Computer Science and Engineering",
      company: "University of Liberal Arts Bangladesh",
      board: "Dhaka, Bangladesh",
      gpa: "CGPA: Ongoing",
      tags: ["Academic Excellence", "Research", "CS Fundamentals"],
      description:
        "Currently studying Computer Science and Engineering, with a strong interest in full-stack development, AI, and modern web technologies.",
      color: "bg-blue-600",
      accent: "text-blue-400",
      glow: "shadow-[0_0_20px_rgba(37,99,235,0.3)]",
    },
    {
      period: "2024 — Present",
      icon: "💻",
      role: "Full Stack Development",
      company: "Self-Led Intensive Learning",
      board: "10+ Real-world Projects",
      gpa: "MERN Stack Dev",
      tags: [
        "Self-Learning",
        "Problem Solving",
        "Clean Code",
        "Git & GitHub",
        "DSA",
        "Software Engineering",
        "Continuous Improvement",
      ],
      description:
        "Continuously expanding my skills through hands-on practice, technical documentation, and real-world development challenges. Committed to lifelong learning and staying up to date with modern software engineering practices.",
      color: "bg-rose-500",
      accent: "text-rose-400",
      glow: "shadow-[0_0_20px_rgba(244,63,94,0.3)]",
    },
    {
      period: "2025 — Present",
      icon: "💳",
      role: "React Dashboards & Stripe Integration",
      company: "Specialized Practice & Integration",
      board: "Secure Dashboards",
      gpa: "Dashboard Dev",
      tags: [
        "React",
        "Stripe",
        "Dashboard",
        "JWT Authentication",
        "Tailwind CSS",
        "React Query",
        "Node.js",
        "MongoDB",
      ],
      description:
        "Built a modern React dashboard featuring secure Stripe payment integration, user authentication, and interactive analytics. Designed with a responsive interface and scalable architecture for a smooth user experience.",
      color: "bg-blue-600",
      accent: "text-blue-400",
      glow: "shadow-[0_0_20px_rgba(37,99,235,0.3)]",
    },
  ];

  return (
    <section ref={sectionRef} className="max-w-[1200px] mx-auto px-4 sm:px-6 py-[80px] sm:py-[90px] lg:py-[110px] relative overflow-hidden" id="timeline">
      {/* Background Cinematic Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-500/5 blur-[120px] -z-10"></div>

      <div className="text-center mb-24">
        <span className="bg-gradient-to-r from-blue-500 to-rose-400 bg-clip-text text-transparent font-bold tracking-[0.3em] uppercase text-[10px]">
          Evolution
        </span>
        <h2 className="font-h2 text-4xl mt-2 text-on-background">
          Journey & <span className="bg-gradient-to-r from-blue-600 to-rose-500 bg-clip-text text-transparent">Milestones</span>
        </h2>
        <p className="text-on-surface-variant/60 mt-4 text-sm max-w-md mx-auto leading-relaxed">
          The path from CS studies to specialized Full-Stack and dashboard development.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto timeline-container">
        {/* Animated Gradient Line */}
        <div
          ref={lineRef}
          className="absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-blue-600 via-rose-500 to-transparent opacity-40 hidden md:block"
        />

        <div className="space-y-16">
          {milestones.map((m, i) => (
            <div
              key={i}
              className="timeline-item relative grid md:grid-cols-2 gap-8 md:gap-16 items-start"
            >
              <div className={`${i % 2 !== 0 ? "md:order-2" : ""}`}>
                {i % 2 === 0 ? (
                  <div className="md:text-right md:pr-12">
                    <span className={`text-[10px] font-black uppercase tracking-widest ${m.accent} opacity-80`}>
                      {m.period}
                    </span>
                    <h4 className="text-xl font-black text-on-background mt-1 leading-snug">
                      {m.icon} {m.role}
                    </h4>
                    <p className="text-sm font-semibold text-on-surface-variant mt-1">{m.company}</p>
                    <p className="text-[11px] text-on-surface-variant/50 mt-0.5">{m.board}</p>
                    <span className={`inline-block mt-3 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${m.accent} bg-blue-500/10 border border-blue-500/20`}>
                      {m.gpa}
                    </span>
                  </div>
                ) : (
                  <TimelineCard m={m} align="left" index={i} />
                )}
              </div>

              {/* Glowing Timeline Dot */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full ${m.color} ${m.glow} border-[3px] border-background z-10 hidden md:block top-1`}
              />

              <div className={`${i % 2 !== 0 ? "md:order-1" : ""}`}>
                {i % 2 === 0 ? (
                  <TimelineCard m={m} align="left" index={i} />
                ) : (
                  <div className="md:pl-12">
                    <span className={`text-[10px] font-black uppercase tracking-widest ${m.accent} opacity-80`}>
                      {m.period}
                    </span>
                    <h4 className="text-xl font-black text-on-background mt-1 leading-snug">
                      {m.icon} {m.role}
                    </h4>
                    <p className="text-sm font-semibold text-on-surface-variant mt-1">{m.company}</p>
                    <p className="text-[11px] text-on-surface-variant/50 mt-0.5">{m.board}</p>
                    <span className={`inline-block mt-3 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${m.accent} bg-rose-500/10 border border-rose-500/20`}>
                      {m.gpa}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineCard = ({ m, align = "left", index }) => (
  <div
    className={`glass-card p-6 rounded-2xl border transition-all duration-500 group bg-surface-container-low/40 backdrop-blur-sm ${
      index % 2 === 0 ? 'hover:border-blue-500/40' : 'hover:border-rose-500/40'
    } border-white/5`}
  >
    <p className="text-on-surface-variant/70 text-sm leading-relaxed mb-4">
      {m.description}
    </p>
    <div className={`flex flex-wrap gap-2 ${align === "right" ? "justify-end" : ""}`}>
      {m.tags.map((tag, ti) => (
        <span
          key={ti}
          className="px-2.5 py-1 bg-surface-container-high/50 rounded-lg text-[9px] font-bold uppercase tracking-wider text-on-surface-variant/60 border border-outline-variant/5 group-hover:border-blue-500/20 transition-colors"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default Timeline;