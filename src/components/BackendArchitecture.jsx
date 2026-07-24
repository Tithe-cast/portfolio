"use client";

import { motion } from "framer-motion";

const BackendArchitecture = () => {
  const features = [
    {
      title: "Scalable APIs",
      desc: "Architecting RESTful and GraphQL APIs designed for high traffic and low latency.",
      icon: "api",
      color: "text-blue-400"
    },
    {
      title: "Secure Auth",
      desc: "Implementing JWT, OAuth2, and multi-factor authentication systems for data security.",
      icon: "security",
      color: "text-rose-400"
    },
    {
      title: "Data Modeling",
      desc: "Optimizing database schemas in MongoDB and PostgreSQL for complex relational data.",
      icon: "database",
      color: "text-blue-400"
    },
    {
      title: "Performance",
      desc: "Caching strategies with Redis and server-side optimizations for blazing fast response.",
      icon: "speed",
      color: "text-rose-400"
    }
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-[120px] relative overflow-hidden" id="backend">
      {/* Cinematic Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] -z-10 opacity-50" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 blur-[100px] -z-10" />

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="bg-gradient-to-r from-blue-400 to-rose-400 bg-clip-text text-transparent font-bold tracking-[0.3em] uppercase text-[10px]">
            Server-Side Mastery
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-on-background mt-3 mb-6 leading-tight">
            Building the <br /> <span className="text-blue-400">Engine Room</span>
          </h2>
          <p className="text-on-surface-variant/70 text-lg leading-relaxed mb-10 max-w-lg">
            I don't just build websites; I engineer high-performance backends. From complex database architectures to secure authentication layers, I ensure your application is powerful and scalable.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group space-y-3"
              >
                <div className="flex items-center gap-3">
                  <span className={`material-symbols-outlined ${feature.color} group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </span>
                  <h3 className="font-bold text-on-background group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                </div>
                <p className="text-sm text-on-surface-variant/60 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Visual Diagram Representation - Theme Applied */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="glass-card p-8 md:p-12 relative overflow-hidden bg-[#0d0e12]/80 border border-white/5 shadow-3xl rounded-[40px]"
          >
            {/* Diagram Background Accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-rose-500/5 z-0" />

             <div className="space-y-8 relative z-10">
                {/* Client Layer */}
                <div className="flex justify-center">
                   <div className="px-6 py-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-xs uppercase tracking-widest backdrop-blur-md">
                     Frontend Client (React/Next.js)
                   </div>
                </div>

                <div className="flex justify-center py-2">
                   <div className="w-0.5 h-8 bg-gradient-to-b from-blue-500/40 to-transparent" />
                </div>

                {/* API Gateway */}
                <div className="flex justify-center">
                   <div className="px-8 py-4 rounded-2xl bg-surface-container-highest border border-white/10 text-white font-bold text-sm shadow-2xl flex items-center gap-3 backdrop-blur-xl group hover:border-blue-500/30 transition-all">
                     <span className="material-symbols-outlined text-blue-400 group-hover:animate-spin">api</span>
                     REST / GraphQL API Gateway
                   </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4">
                   <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
                   <div className="h-[1px] bg-gradient-to-r from-transparent via-rose-500/30 to-transparent" />
                   <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
                </div>

                {/* Microservices / Handlers */}
                <div className="grid grid-cols-3 gap-4">
                   <div className="p-3 rounded-lg bg-surface-container-high border border-white/5 text-[10px] text-center text-rose-200/60 font-medium">Auth Service</div>
                   <div className="p-3 rounded-lg bg-surface-container-high border border-white/5 text-[10px] text-center text-blue-200/60 font-medium">Data Logic</div>
                   <div className="p-3 rounded-lg bg-surface-container-high border border-white/5 text-[10px] text-center text-rose-200/60 font-medium">File Storage</div>
                </div>

                <div className="flex justify-center py-2">
                   <div className="w-0.5 h-8 bg-gradient-to-t from-rose-500/40 to-transparent" />
                </div>

                {/* Database Layer */}
                <div className="flex justify-center">
                   <div className="px-8 py-4 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 font-black text-sm flex items-center gap-3 backdrop-blur-md shadow-lg shadow-rose-500/5">
                     <span className="material-symbols-outlined">database</span>
                     MongoDB / PostgreSQL
                   </div>
                </div>
             </div>

             {/* Animated Pulsing Orbs */}
             <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
             <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl animate-pulse delay-700" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BackendArchitecture;