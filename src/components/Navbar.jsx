'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        if (section === 'home') {
          if (scrollPosition < 500) setActiveSection('home');
          continue;
        }
        const el = document.getElementById(section);
        if (
          el &&
          scrollPosition >= el.offsetTop &&
          scrollPosition < el.offsetTop + el.offsetHeight
        ) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home', id: 'home' },
    { name: 'About', href: '/#about', id: 'about' },
    { name: 'Skills', href: '/#skills', id: 'skills' },
    { name: 'Projects', href: '/#projects', id: 'projects' },
    { name: 'Contact', href: '/#contact', id: 'contact' },
  ];

  // Mobile and Desktop Scroll Logic
  const handleLinkClick = (e, href, id) => {
    e.preventDefault();
    setIsMenuOpen(false); // Menu bondho hobe agey

    const targetId = id || href.replace('/#', '').replace('#', '');
    const el = document.getElementById(targetId);

    if (el) {
      const offset = 80; // Navbar height adjustment
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: targetId === 'home' ? 0 : offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 w-full z-100 px-4 md:px-6 py-4 flex justify-center pointer-events-none"
    >
      <div
        className={`flex justify-between items-center w-full max-w-300 h-16 px-4 md:px-6 pointer-events-auto transition-all duration-500 rounded-2xl md:rounded-3xl relative overflow-hidden ${
          scrolled
            ? 'shadow-2xl shadow-blue-500/5 bg-background/80 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
        style={{
          border: scrolled ? '1px solid transparent' : '1px solid transparent',
          backgroundImage: scrolled 
            ? (theme === 'light'
              ? 'linear-gradient(to right, rgba(255,255,255,0.8), rgba(255,255,255,0.8)), linear-gradient(to right, #3b82f6, #f43f5e)'
              : 'linear-gradient(to right, rgba(20,20,20,0.8), rgba(20,20,20,0.8)), linear-gradient(to right, #3b82f6, #f43f5e)')
            : 'none',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
        }}
      >
        {/* LOGO */}
        <Magnetic strength={0.3}>
          <Link
            href="/#home"
            onClick={(e) => handleLinkClick(e, '/#home', 'home')}
            className="flex items-center gap-1 group z-110"
          >
            <span className="text-xl md:text-2xl font-black tracking-tighter text-on-background">Syeda</span>
            <span className="text-xl md:text-2xl font-black tracking-tighter bg-linear-to-r from-blue-500 to-rose-400 bg-clip-text text-transparent">Sima</span>
          </Link>
        </Magnetic>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-heading text-[13px] font-bold tracking-wider">
          {navLinks.map((link) => (
            <Magnetic key={link.id} strength={0.2}>
              <Link
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href, link.id)}
                className="relative group py-2 text-on-surface-variant hover:text-on-background transition-colors"
              >
                <span className={activeSection === link.id ? 'bg-linear-to-r from-blue-500 to-rose-400 bg-clip-text text-transparent' : ''}>
                  {link.name}
                </span>
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-linear-to-r from-blue-500 to-rose-400 w-full origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: activeSection === link.id ? 1 : 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
              </Link>
            </Magnetic>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4 z-110">
          {/* THEME TOGGLE */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="relative w-12 h-6 md:w-14 md:h-7 bg-surface-container-highest rounded-full p-1 border border-white/5"
            >
              <motion.div
                className="w-4 h-4 md:w-5 md:h-5 bg-background rounded-full flex items-center justify-center shadow-md"
                animate={{ x: theme === 'dark' ? 0 : 24 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              >
                {theme === 'dark' ? <Moon size={10} className="text-blue-400 fill-blue-400" /> : <Sun size={10} className="text-amber-500 fill-amber-500" />}
              </motion.div>
            </button>
          )}

          <Link
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-xl font-bold text-[10px] md:text-xs text-white bg-linear-to-r from-blue-600 to-rose-500 shadow-lg"
          >
            Hire Me
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden text-on-background p-2 relative z-120"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} className="text-rose-500" /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU CONTENT - FIXED FUNCTIONALITY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-3xl rounded-2xl border border-white/10 overflow-hidden md:hidden pointer-events-auto shadow-2xl z-100"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href, link.id)}
                    className={`text-2xl font-black tracking-tight ${
                      activeSection === link.id 
                        ? 'bg-linear-to-r from-blue-500 to-rose-400 bg-clip-text text-transparent' 
                        : 'text-on-surface-variant/70'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <hr className="border-white/5 my-2" />
              <Link
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="w-full text-center py-4 rounded-xl font-black text-white bg-linear-to-r from-blue-600 to-rose-500 shadow-xl"
              >
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;