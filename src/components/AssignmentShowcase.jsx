"use client";

import { motion } from "framer-motion";

const AssignmentShowcase = () => {
  const assignments = [
    { id: 1, title: "Assignment 01", marks: 60, total: 60, status: "Perfect" },
    { id: 2, title: "Assignment 02", marks: 60, total: 60, status: "Perfect" },
    { id: 3, title: "Assignment 03", marks: 60, total: 60, status: "Perfect" },
    { id: 4, title: "Assignment 04", marks: 60, total: 60, status: "Perfect" },
    { id: 5, title: "Assignment 05", marks: 60, total: 60, status: "Perfect" },
    { id: 6, title: "Assignment 06", marks: 60, total: 60, status: "Perfect" },
    { id: 7, title: "Assignment 07", marks: 60, total: 60, status: "Perfect" },
    { id: 8, title: "Assignment 08", marks: 60, total: 60, status: "Perfect" },
    { id: 9, title: "Assignment 09", marks: 60, total: 60, status: "Perfect" },
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-[90px] relative" id="assignments">
      {/* Background Subtle Glows */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-blue-600/5 blur-[100px] -z-10"></div>
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-rose-500/5 blur-[100px] -z-10"></div>

      <div className="text-center mb-20">
        <span className="bg-gradient-to-r from-blue-500 to-rose-400 bg-clip-text text-transparent font-bold tracking-[0.3em] uppercase text-[10px]">
          Academic Excellence
        </span>
        <h2 className="text-h2 text-on-background mt-3 font-bold tracking-tight">
          Consistency is <span className="bg-gradient-to-r from-blue-600 to-rose-500 bg-clip-text text-transparent">Key</span>
        </h2>
        <p className="text-on-surface-variant/60 mt-4 max-w-lg mx-auto text-sm">
          A showcase of my dedication and performance during my specialized training at Programming Hero.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {assignments.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass-card p-6 flex flex-col items-center justify-center text-center relative group transition-all duration-500 w-[calc(50%-1rem)] sm:w-[calc(33.33%-1rem)] lg:w-[calc(20%-1rem)] xl:w-[calc(14.28%-1rem)] min-w-[140px] border border-white/5 hover:border-blue-500/30 overflow-hidden"
          >
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-2 block">
                {item.title}
              </span>
              <div className="text-3xl font-black text-on-background mb-1">
                {item.marks}
                <span className="text-xs text-on-surface-variant/40 font-normal">/{item.total}</span>
              </div>
              <div className={`text-[9px] font-bold px-3 py-1 rounded-full inline-block ${
                item.marks === 60 
                  ? "bg-gradient-to-r from-blue-500/10 to-rose-500/10 text-rose-400 border border-rose-500/20" 
                  : "bg-blue-500/10 text-blue-500"
              }`}>
                {item.status}
              </div>
            </div>

            {/* Background Icon with Theme Color */}
            <span className="material-symbols-outlined absolute -bottom-2 -right-2 text-rose-500/5 text-6xl pointer-events-none group-hover:text-blue-500/10 transition-colors">
              verified
            </span>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 glass-card p-8 md:p-12 border-white/5 relative overflow-hidden bg-surface-container/20 backdrop-blur-md">
        {/* Animated Gradient Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-600/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-rose-500 rounded-3xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
            <span className="material-symbols-outlined text-white text-4xl">emoji_events</span>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-on-background mb-3 font-heading">
              Programming Hero <span className="text-blue-400">Journey</span>
            </h3>
            <p className="text-on-surface-variant/70 leading-relaxed max-w-3xl">
              Throughout my journey at Programming Hero, I maintained a near-perfect track record in all conceptual assignments. 
              This consistency reflects my commitment to mastering every technology I touch, from core JavaScript to complex Full-Stack architectures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssignmentShowcase;
