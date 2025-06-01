'use client';
/* eslint-disable @next/next/no-img-element */
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) sidebarRef.current?.focus();
  }, [isOpen]);

  const toggleMenu = () => {
    if ('vibrate' in navigator) navigator.vibrate(10);
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { href: '#experiencia', label: 'Experiência' },
    { href: '#formacao', label: 'Formação' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <header
      className="w-full px-6 md:px-10  flex items-center justify-between relative z-50 container mx-auto pt-4 overflow-x-hidden overflow-y-hidden"
      role="banner"
    >
      <div className="text-w font-gochi text-4xl md:text-7xl select-none">
        <Link
          href="/"
          aria-label="Página inicial"
          className="flex items-center gap-1"
        >
          Marcos<span className="text-amber-400">.</span>
        </Link>
      </div>

      {/* Botão toggle mobile */}
      <motion.button
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-400 text-w"
        onClick={toggleMenu}
        whileTap={{ rotate: isOpen ? -90 : 90, scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        type="button"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </motion.button>

      {/* Navegação desktop */}
      <nav className="hidden md:flex" aria-label="Menu principal">
        <ul className="flex items-center space-x-6 select-none">
          {navLinks.map(({ href, label }, i) => (
            <li key={label} className="flex items-center space-x-2">
              <Link
                href={href}
                className="font-semibold text-xl text-w hover:scale-95 hover:text-purple-500 transition-all duration-300"
              >
                {label}
              </Link>
              {i < navLinks.length - 1 && (
                <img
                  src="/assets/svg/dotGd2.svg"
                  alt=""
                  aria-hidden="true"
                  width={8}
                  height={8}
                  className="inline-block"
                />
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Sidebar móvel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              aria-hidden="true"
            />

            {/* Sidebar */}
            <motion.aside
              key="sidebar"
              id="mobile-menu"
              className="fixed top-0 right-0 h-full w-64 bg-[#0d0d0d] z-50 p-6 shadow-xl flex flex-col outline-none"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              tabIndex={-1}
              ref={sidebarRef}
              aria-label="Menu móvel"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="text-w font-gochi text-3xl select-none">
                  Marcos<span className="text-amber-400">.</span>
                </div>
                <motion.button
                  aria-label="Fechar menu"
                  className="text-w"
                  onClick={closeMenu}
                  whileTap={{ rotate: -90, scale: 0.95 }}
                  type="button"
                >
                  <X size={28} />
                </motion.button>
              </div>

              <nav>
                <ul className="flex flex-col items-start select-none space-y-4">
                  {navLinks.map(({ href, label }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="font-semibold text-xl text-w hover:text-purple-500 transition"
                        onClick={closeMenu}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
