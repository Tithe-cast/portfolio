
"use client";

import { motion } from "framer-motion";

const WorkingProcess = () => {
  const steps = [
    {
      title: "Discovery",
      desc: "Deep diving into your goals, audience, and technical requirements to define the roadmap.",
      icon: "search",
      color: "bg-blue-500/10 text-blue-400"
    },
    {
      title: "Design",
      desc: "Creating high-fidelity mockups and interactive prototypes that prioritize user experience.",
      icon: "architecture",
      color: "bg-rose-500/10 text-rose-400"
    },
    {
      title: "Development",
      desc: "Writing clean, scalable code using modern technologies like React, Next.js, and Node.js.",
      icon: "code",
      color: "bg-blue-500/10 text-blue-400"
    },
    {
      title: "Launch",
      desc: "Rigorous testing and optimization followed by a smooth deployment to the production environment.",
      icon: "auto_awesome",
      color: "bg-rose-500/10 text-rose-400"
    }
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-[120px] relative overflow-hidden" id="process">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-600/5 blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-rose-500/5 blur-[100px] -z-10" />

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
        <div>
          <span className="bg-gradient-to-r from-blue-400 to-rose-400 bg-clip-text text-transparent font-bold tracking-[0.3em] uppercase text-[10px]">
            Methodology
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-on-background mt-3 leading-tight font-heading">
            How I Bring Ideas <br className="hidden md:block" /> <span className="text-blue-400">to Life</span>
          </h2>
        </div>
        <p className="text-on-surface-variant/70 max-w-sm text-sm leading-relaxed mb-2">
          A structured approach ensures that every project I undertake is delivered with precision and excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {/* Connection Line for Desktop - Theme Applied */}
        <div className="hidden lg:block absolute top-7 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent z-0"></div>

        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="relative z-10 group"
          >
            {/* Step Icon with Cinematic Border */}
            <div className={`w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center mb-8 border border-white/5 shadow-xl group-hover:scale-110 group-hover:border-blue-500/30 transition-all duration-500 bg-surface-container-low/50 backdrop-blur-sm relative`}>
               {/* Pulse effect on hover */}
               <div className="absolute inset-0 rounded-2xl bg-current opacity-0 group-hover:opacity-5 animate-ping" />
              <span className="material-symbols-outlined text-3xl transition-transform duration-500 group-hover:rotate-12">{step.icon}</span>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className={`text-[10px] font-black font-heading ${i % 2 === 0 ? 'text-blue-400/40' : 'text-rose-400/40'}`}>0{i + 1}</span>
                <h3 className="text-xl font-bold text-on-background font-heading group-hover:text-blue-400 transition-colors duration-300">
                  {step.title}
                </h3>
              </div>
              <p className="text-on-surface-variant/70 text-sm leading-relaxed group-hover:text-on-surface-variant transition-colors">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkingProcess;