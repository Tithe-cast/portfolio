// "use client";

// import { motion, useInView } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// const Counter = ({ value, duration = 2 }) => {
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   useEffect(() => {
//     if (isInView) {
//       let start = 0;
//       const end = parseInt(value);
//       if (start === end) return;

//       let totalMilisecondsStep = Math.abs(Math.floor(duration * 1000 / end));
//       let timer = setInterval(() => {
//         start += 1;
//         setCount(start);
//         if (start === end) clearInterval(timer);
//       }, totalMilisecondsStep);

//       return () => clearInterval(timer);
//     }
//   }, [isInView, value, duration]);

//   return <span ref={ref}>{count}</span>;
// };

// const Stats = () => {
//   const stats = [
//     { label: "Completed Projects", value: "20", suffix: "+", icon: "task_alt" },
//     { label: "Satisfied Clients", value: "15", suffix: "+", icon: "groups" },
//     { label: "Lines of Code", value: "50", suffix: "k+", icon: "data_object" },
//     { label: "Cups of Coffee", value: "100", suffix: "+", icon: "coffee" },
//   ];

//   return (
//     <section className="max-w-[1200px] mx-auto px-6 py-[50px]">
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//         {stats.map((stat, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.1 }}
//             className="text-center group"
//           >
//             <div className="w-12 h-12 rounded-2xl bg-surface-container-high flex items-center justify-center mx-auto mb-4 border border-outline-variant/10 group-hover:scale-110 group-hover:border-primary/30 transition-all duration-500">
//               <span className="material-symbols-outlined text-primary">{stat.icon}</span>
//             </div>
//             <div className="text-3xl md:text-4xl font-black text-on-background mb-1">
//               <Counter value={stat.value} />
//               <span className="text-primary">{stat.suffix}</span>
//             </div>
//             <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em]">
//               {stat.label}
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Stats;






"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Counter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      if (start === end) return;

      let totalMilisecondsStep = Math.abs(Math.floor((duration * 1000) / end));
      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, totalMilisecondsStep);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

const Stats = () => {
  const stats = [
    { label: "Completed Projects", value: "10", suffix: "+", icon: "task_alt", color: "text-blue-400" },
    { label: "Satisfied Clients", value: "15", suffix: "+", icon: "groups", color: "text-rose-400" },
    { label: "Lines of Code", value: "50", suffix: "k+", icon: "data_object", color: "text-blue-400" },
    { label: "Cups of Coffee", value: "100", suffix: "+", icon: "coffee", color: "text-rose-400" },
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-[80px] relative overflow-hidden">
      {/* Background Subtle Glows */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-600/5 blur-[100px] -z-10" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-rose-500/5 blur-[100px] -z-10" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="text-center group relative"
          >
            {/* Icon Container with Cinematic Theme */}
            <div className={`w-14 h-14 rounded-2xl bg-surface-container-low flex items-center justify-center mx-auto mb-6 border border-white/5 shadow-xl group-hover:scale-110 group-hover:border-blue-500/30 transition-all duration-500 backdrop-blur-sm relative`}>
               {/* Hover Pulse Effect */}
               <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${i % 2 === 0 ? 'bg-blue-400' : 'bg-rose-400'}`} />
              <span className={`material-symbols-outlined text-3xl transition-colors duration-500 ${stat.color}`}>
                {stat.icon}
              </span>
            </div>

            {/* Counter and Suffix */}
            <div className="text-4xl md:text-5xl font-black text-on-background mb-2 font-heading tracking-tight">
              <Counter value={stat.value} />
              <span className={`bg-gradient-to-r ${i % 2 === 0 ? 'from-blue-400 to-blue-600' : 'from-rose-400 to-rose-600'} bg-clip-text text-transparent`}>
                {stat.suffix}
              </span>
            </div>

            {/* Label */}
            <p className="text-[10px] font-black text-on-surface-variant/60 uppercase tracking-[0.3em] group-hover:text-on-surface-variant transition-colors">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;