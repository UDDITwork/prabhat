'use client';

import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Cover', href: '#cover' },
  { label: 'Contents', href: '#contents' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('cover');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Update active section
      const sections = navItems.map(item => item.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Desktop Navigation */}
      <nav className="fixed top-4 right-4 z-50 hidden lg:block">
        <div className="bg-white/90 backdrop-blur-md shadow-lg rounded-full px-6 py-3 border border-[#e8e4dc]">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`text-xs font-medium uppercase tracking-wider transition-colors duration-300 ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-[#c9a962]'
                      : 'text-[#2d2d2d] hover:text-[#c9a962]'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 lg:hidden bg-white/90 backdrop-blur-md shadow-lg rounded-full w-12 h-12 flex items-center justify-center border border-[#e8e4dc]"
        aria-label="Toggle menu"
      >
        <div className="flex flex-col gap-1.5">
          <span className={`w-5 h-0.5 bg-[#2d2d2d] transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-5 h-0.5 bg-[#2d2d2d] transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-0.5 bg-[#2d2d2d] transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      </button>

      {/* Mobile Navigation Menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}>
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        />
        <div className={`absolute right-0 top-0 h-full w-72 bg-white shadow-2xl transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-8 pt-20">
            <p className="text-xs font-medium uppercase tracking-widest text-[#8b7355] mb-8">Navigation</p>
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <li key={item.href} style={{ animationDelay: `${index * 0.05}s` }}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 font-serif text-2xl transition-colors duration-300 ${
                      activeSection === item.href.replace('#', '')
                        ? 'text-[#c9a962]'
                        : 'text-[#2d2d2d] hover:text-[#c9a962]'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Page Number Indicator */}
      <div className="fixed bottom-8 right-8 z-40 hidden lg:flex items-center gap-3">
        <span className="text-xs font-medium uppercase tracking-widest text-[#8b7355]">
          {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
        </span>
        <div className="w-12 h-[1px] bg-[#c9a962]" />
        <span className="font-serif text-lg text-[#2d2d2d]">
          {String(navItems.findIndex(item => item.href.replace('#', '') === activeSection) + 1).padStart(2, '0')}
        </span>
      </div>
    </>
  );
}
