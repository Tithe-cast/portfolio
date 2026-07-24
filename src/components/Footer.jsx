'use client';

import Link from 'next/link';
import { ArrowUp, MapPin } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/syeda-sima/',
      icon: 'https://skillicons.dev/icons?i=linkedin',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Tithe-cast',
      icon: 'https://skillicons.dev/icons?i=github',
    },
    {
      name: 'WhatsApp',
      url: '#',
      icon: 'https://cdn.simpleicons.org/whatsapp/25D366',
    },
    {
      name: 'Facebook',
      url: '#',
      icon: 'https://cdn.simpleicons.org/facebook',
    },
  ];

  return (
    <footer className="w-full mt-20 pb-12 border-t border-white/5 bg-transparent relative">
      {/* Scroll to Top Button - Applied Theme Colors */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute -top-10 left-1/2 -translate-x-1/2 p-4 glass-card rounded-full text-white hover:text-blue-400 transition-all duration-300 hover:-translate-y-2 group border border-white/10 bg-gradient-to-br from-blue-600/20 to-rose-500/20 backdrop-blur-xl shadow-lg shadow-blue-500/10"
      >
        <ArrowUp size={24} className="group-hover:animate-bounce text-blue-400" />
      </button>

      <div className="flex flex-col md:flex-row justify-between items-start px-8 md:px-12 max-w-7xl mx-auto gap-12 py-16">
        {/* Brand Section */}
        <div className="md:w-1/3">
          <h3 className="font-extrabold text-2xl tracking-[0.1em] uppercase mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-rose-400 bg-clip-text text-transparent">
              Syeda Sima
            </span>
          </h3>
          <p className="text-muted text-body-md leading-relaxed">
            Crafting high-performance digital solutions with technical mastery
            and creative vision. Building the future of the web, one pixel at a
            time.
          </p>
          <div className="space-y-2 mt-6">
            <div className="flex items-center gap-3 text-blue-400 font-body-md">
              <MapPin size={18} className="text-rose-400" />
              <span className="text-blue-400/80">Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12 md:w-1/2">
          {/* Quick Links */}
          <div>
            <h4 className="font-label-caps bg-gradient-to-r from-blue-400 to-rose-400 bg-clip-text text-transparent mb-6 uppercase tracking-widest text-[10px] font-bold">
              Quick Navigation
            </h4>
            <ul className="space-y-3 font-body-md text-muted">
              <li>
                <Link href="#home" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-rose-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-blue-400 transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-rose-400 transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Icons - Theme Applied */}
          <div>
            <h4 className="font-label-caps bg-gradient-to-r from-blue-400 to-rose-400 bg-clip-text text-transparent mb-6 uppercase tracking-widest text-[10px] font-bold">
              Digital Presence
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center border border-white/5 hover:border-rose-400/50 transition-all overflow-hidden bg-white/5 hover:bg-gradient-to-br hover:from-blue-600/10 hover:to-rose-500/10"
                >
                  <img
                    src={social.icon}
                    className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity"
                    alt={social.name}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Gradient Border Top */}
      <div className="relative px-8 md:px-12 max-w-7xl mx-auto">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-12">
          <p className="font-label-caps text-[10px] md:text-xs tracking-tight text-muted/60">
            © 2026 <span className="text-blue-400/60">Syeda Sima</span>. Built with Precision.
          </p>

          <div className="flex gap-4 md:gap-6">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                className="font-label-caps text-[10px] md:text-xs text-muted/50 hover:text-rose-400 transition-colors"
              >
                {social.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}