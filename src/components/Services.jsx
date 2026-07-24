"use client";

import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Full-Stack Solutions",
      description: "Specializing in the MERN stack to deliver high-performance, end-to-end web applications. From designing secure APIs to crafting fluid interfaces, I ensure every layer is engineered for growth.",
      icon: "layers",
      color: "from-blue-600/20 to-rose-500/5", // Blue-Rose Gradient
      size: "md:col-span-2 lg:col-span-2 lg:row-span-2", 
    },
    {
      title: "Clean Architecture",
      description: "Prioritizing maintainability and scalability with industry-standard patterns.",
      icon: "code",
      color: "from-blue-500/20 to-blue-600/5",
      size: "md:col-span-1",
    },
    {
      title: "Performance First",
      description: "Ensuring lightning-fast load times and smooth 60fps interactions.",
      icon: "bolt",
      color: "from-rose-500/20 to-rose-600/5",
      size: "md:col-span-1",
    },
    {
      title: "Modern UI/UX",
      description: "Pixel-perfect React interfaces with fluid Framer Motion animations.",
      icon: "palette",
      color: "from-blue-500/20 to-blue-600/5",
      size: "md:col-span-1",
    },
    {
      title: "SEO & Web Vitals",
      description: "Optimizing for search engines and superior user experience metrics.",
      icon: "search_check",
      color: "from-rose-500/20 to-rose-600/5",
      size: "md:col-span-1",
    }
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-[100px] lg:py-[140px] relative overflow-hidden" id="services">
      {/* Background Cinematic Glows */}
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-blue-600/5 blur-[120px] -z-10" />
      <div className="absolute bottom-1/3 -left-20 w-80 h-80 bg-rose-500/5 blur-[120px] -z-10" />

      {/* Header Section */}
      <div className="grid lg:grid-cols-2 gap-8 mb-16 items-end">
        <div>
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-r from-blue-400 to-rose-400 bg-clip-text text-transparent font-bold tracking-[0.4em] uppercase text-[10px] block mb-4"
          >
            Capabilities
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-on-background leading-[1.1]">
            Technical Expertise <br /> <span className="text-blue-400">& Services</span>
          </h2>
        </div>
        <p className="text-on-surface-variant/70 max-w-md text-base lg:text-lg leading-relaxed lg:pb-2">
          I bridge the gap between complex technical requirements and intuitive user experiences, delivering high-impact digital products.
        </p>
      </div>

      {/* Modern Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7, ease: "easeOut" }}
            className={`glass-card p-8 rounded-[32px] border border-white/5 relative overflow-hidden group hover:border-blue-500/30 transition-all duration-500 flex flex-col ${service.size} bg-surface-container-low/40 backdrop-blur-md`}
          >
            {/* Hover Gradient Overlay - Updated with Blue-Rose logic */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
            
            <div className="relative z-10 h-full flex flex-col">
              <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500 border border-white/10 ${i % 2 === 0 ? 'group-hover:bg-blue-500/20' : 'group-hover:bg-rose-500/20'}`}>
                <span className={`material-symbols-outlined text-3xl transition-colors duration-500 ${i % 2 === 0 ? 'text-blue-400' : 'text-rose-400'}`}>
                  {service.icon}
                </span>
              </div>
              
              <h3 className={`font-bold text-on-background mb-4 font-heading transition-colors duration-300 group-hover:text-white ${service.size.includes('row-span-2') ? 'text-3xl' : 'text-xl'}`}>
                {service.title}
              </h3>
              
              <p className="text-on-surface-variant/70 text-sm leading-relaxed max-w-[280px]">
                {service.description}
              </p>
              
              <div className="mt-auto pt-10 flex items-center justify-between">
                 <span className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${i % 2 === 0 ? 'text-blue-400/30 group-hover:text-blue-400/60' : 'text-rose-400/30 group-hover:text-rose-400/60'}`}>
                    Service 0{i + 1}
                 </span>
                 <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 ${i % 2 === 0 ? 'group-hover:bg-blue-600 group-hover:border-blue-600' : 'group-hover:bg-rose-500 group-hover:border-rose-500'} group-hover:shadow-lg`}>
                    <span className="material-symbols-outlined text-sm text-white transition-colors">arrow_outward</span>
                 </div>
              </div>
            </div>

            {/* Shine Animation Effect */}
            <div className="absolute -top-[100%] -left-[100%] w-[200%] h-[200%] bg-gradient-to-br from-white/5 via-transparent to-transparent rotate-45 pointer-events-none group-hover:top-[100%] group-hover:left-[100%] transition-all duration-[1.2s]" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;