'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '@/data/projectsData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const ProjectDetails = ({ params }) => {
  const resolvedParams = use(params);
  const { id } = resolvedParams;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="min-h-screen bg-background flex flex-col justify-center items-center">
        <Navbar />
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-on-background">Project Not Found</h1>
          <p className="text-on-surface-variant">The project you are looking for does not exist.</p>
          <Link href="/projects" className="text-primary hover:underline">
            Back to Projects
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const brandGradient = 'from-[#2563eb] via-[#a855f7] to-[#f43f5e]';

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-[140px] pb-20 max-w-[1000px] mx-auto px-6">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-8 hover:translate-x-[-4px] transition-transform"
        >
          <span className="material-symbols-outlined text-sm">west</span>
          Back to Projects
        </Link>

        {/* Header Title */}
        <div className="mb-10 space-y-4">
          <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold text-primary uppercase tracking-widest">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-on-background tracking-tight leading-none mt-2">
            {project.title}
          </h1>
          <p className="text-on-surface-variant/80 text-lg sm:text-xl font-medium tracking-wide">
            {project.subtitle}
          </p>
        </div>

        {/* Feature Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[16/10] w-full rounded-[32px] overflow-hidden border border-outline-variant/10 shadow-2xl bg-surface-container-highest mb-12"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority
          />
        </motion.div>

        {/* Two Column Content */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-10">
            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-on-background">Project Description</h2>
              <p className="text-on-surface-variant leading-relaxed text-base sm:text-lg">
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-on-background">Technology Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 bg-surface-container-high border border-outline-variant/10 text-on-surface text-xs font-bold rounded-full uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenges Faced */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-on-background">Challenges Faced & Resolutions</h2>
              <div className="space-y-4">
                {project.challenges.map((challenge, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-surface-container-highest/20 border border-outline-variant/10 rounded-2xl space-y-2 relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-blue-500 to-rose-500" />
                    <p className="text-sm font-bold text-on-background">Challenge {idx + 1}</p>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      {challenge}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links & Info */}
          <div className="space-y-8">
            <div className="p-6 bg-surface-container-low border border-outline-variant/10 rounded-[24px] space-y-6">
              <h3 className="text-lg font-bold text-on-background">Project Info</h3>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Link
                  href={project.liveLink}
                  target="_blank"
                  className={`w-full flex items-center justify-center gap-2 bg-linear-to-r ${brandGradient} text-white px-5 py-3.5 rounded-xl font-bold text-[10px] uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.25)] active:scale-[0.97] relative overflow-hidden group/btn`}
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover/btn:rotate-[-45deg]">
                      arrow_outward
                    </span>
                    Live Project
                  </span>
                </Link>

                <Link
                  href={project.repoLink}
                  target="_blank"
                  className="w-full flex items-center justify-center gap-2 bg-surface-container-high border border-outline-variant/10 text-on-surface hover:text-on-background hover:bg-surface-container-highest px-5 py-3.5 rounded-xl font-bold text-[10px] uppercase tracking-wider transition-all duration-300 active:scale-[0.97] group/btn"
                >
                  <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover/btn:scale-110">
                    code
                  </span>
                  GitHub (Client)
                </Link>
              </div>

              {/* Specs */}
              <div className="border-t border-outline-variant/5 pt-4 space-y-3 text-xs">
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Role</span>
                  <span className="font-semibold text-on-background">Full-Stack Dev</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Client Source Only</span>
                  <span className="font-semibold text-emerald-400">Yes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Year</span>
                  <span className="font-semibold text-on-background">2024 - Present</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ProjectDetails;
