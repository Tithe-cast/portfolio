'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Mail,
  Globe,
  Send,
  ArrowRight,
  Phone,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [formMessage, setFormMessage] = useState('');
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from('.contact-info-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      });

      gsap.from('.contact-form-container', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        x: 50,
        opacity: 0,
        duration: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const contactMethods = [
    {
      icon: (
        <Phone
          className="text-blue-400 group-hover:scale-110 transition-transform"
          size={32}
        />
      ),
      title: 'Call',
      value: '+88013088....',
      link: 'tel:+88013088',
      label: 'Call me',
      hoverColor: 'hover:border-blue-400',
    },
    {
      icon: (
        <Mail
          className="text-rose-400 group-hover:scale-110 transition-transform"
          size={32}
        />
      ),
      title: 'Email',
      value: 'syeda.sima.ss@gmail.com',
      link: 'mailto:syeda.sima.ss@gmail.com',
      label: 'Write me',
      hoverColor: 'hover:border-rose-400',
    },
    {
      icon: (
        <Globe
          className="text-blue-500 group-hover:scale-110 transition-transform"
          size={32}
        />
      ),
      title: 'LinkedIn',
      value: 'syeda-sima',
      link: 'https://www.linkedin.com/in/syeda-sima/',
      label: 'Text me',
      hoverColor: 'hover:border-blue-500',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-section-padding px-8 relative overflow-hidden bg-background"
      id="contact"
    >
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] glow-radial -z-10 opacity-20"></div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-h2 text-4xl md:text-h2 text-on-background font-bold mb-2">
            Get in Touch
          </h2>
          <p className="font-label-caps bg-gradient-to-r from-blue-500 to-rose-400 bg-clip-text text-transparent tracking-widest uppercase font-bold">
            Let's Create Something Together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Contact Info */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="font-h3 text-[24px] text-on-background mb-8 flex items-center gap-2">
               <span className="w-8 h-[2px] bg-blue-500"></span> Talk to me
            </h4>

            {contactMethods.map((item, index) => (
              <div
                key={index}
                className={`contact-info-card glass-card p-6 rounded-2xl group transition-colors ${item.hoverColor}`}
              >
                <div className="flex items-center gap-4 mb-4">
                  {item.icon}
                  <h5 className="text-on-background font-h3 text-[18px]">
                    {item.title}
                  </h5>
                </div>
                <p className="text-muted text-sm mb-4">{item.value}</p>
                <a
                  href={item.link}
                  target={item.title === 'LinkedIn' ? '_blank' : undefined}
                  className="text-on-background/70 flex items-center gap-2 font-label-caps text-xs group-hover:gap-4 transition-all"
                >
                  {item.label} <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="md:col-span-8 contact-form-container">
            <h4 className="font-h3 text-[24px] text-on-background mb-8 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-rose-500"></span> Write me your project
            </h4>
            <div className="glass-card p-8 md:p-10 rounded-[32px] relative overflow-hidden">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-rose-500 rounded-full flex items-center justify-center text-white">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-2xl font-h2 text-on-background">
                    Message Sent!
                  </h3>
                  <p className="text-muted max-w-sm">
                    Thank you for reaching out. I have received your message and
                    will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-blue-400 hover:underline font-label-caps text-sm pt-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setStatus('loading');
                    const formData = new FormData(e.currentTarget);
                    formData.append(
                      'access_key',
                      '96678ec8-f93a-4d87-9d10-a3fd32f9fcc9',
                    );

                    try {
                      const response = await fetch(
                        'https://api.web3forms.com/submit',
                        {
                          method: 'POST',
                          body: formData,
                        },
                      );
                      const data = await response.json();
                      if (data.success) {
                        setStatus('success');
                        e.target.reset();
                      } else {
                        setStatus('error');
                        setFormMessage(data.message || 'Something went wrong.');
                      }
                    } catch (err) {
                      setStatus('error');
                      setFormMessage(
                        'Failed to send message. Please try again.',
                      );
                    }
                  }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-label-caps text-blue-400 text-[10px] font-bold tracking-widest">
                        NAME
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Insert your name"
                        className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-on-background focus:border-blue-500 focus:ring-0 outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-caps text-rose-400 text-[10px] font-bold tracking-widest">
                        ADDRESS
                      </label>
                      <input
                        type="text"
                        name="address"
                        required
                        placeholder="Insert your address"
                        className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-on-background focus:border-rose-500 focus:ring-0 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-label-caps text-blue-400 text-[10px] font-bold tracking-widest">
                        PHONE
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="Insert your phone number"
                        className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-on-background focus:border-blue-500 focus:ring-0 outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-caps text-rose-400 text-[10px] font-bold tracking-widest">
                        MAIL
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Insert your email"
                        className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-on-background focus:border-rose-500 focus:ring-0 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-label-caps text-blue-400 text-[10px] font-bold tracking-widest">
                      MESSAGE
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Write your message about the project"
                      className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-on-background focus:border-blue-500 focus:ring-0 outline-none transition-colors"
                    ></textarea>
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-rose-500 text-sm bg-rose-500/10 p-3 rounded-lg">
                      <AlertCircle size={16} />
                      <span>{formMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full md:w-auto px-12 py-4 rounded-xl font-h3 text-[18px] text-white flex items-center justify-center gap-3 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-blue-600 to-rose-500 shadow-lg shadow-blue-500/20"
                  >
                    {status === 'loading' ? 'Sending...' : 'Send'}
                    {status === 'loading' ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <span className="material-symbols-outlined rotate-[-45deg]">
                        send
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
