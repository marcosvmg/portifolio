'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const controls = useAnimation();
  const titleControls = useAnimation();
  const wrapperControls = useAnimation();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    if (isOpen) sidebarRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      const isMobile = window.innerWidth < 768;

      controls.start({
        translateY: isScrolled ? 20 : 0,
        transition: { duration: 0.15, ease: 'easeInOut' },
      });

      titleControls.start({
        fontSize: isScrolled ? '2rem' : '2.25rem',
        transition: { duration: 0.15, ease: 'easeInOut' },
      });

      wrapperControls.start({
        width: isScrolled && !isMobile ? '50%' : '90%',
        paddingTop: isScrolled ? (isMobile ? '0.1rem' : '0.8rem') : (isMobile ? '0.75rem' : '2rem'),
        paddingBottom: isScrolled ? (isMobile ? '0.1rem' : '0.8rem') : (isMobile ? '0.75rem' : '1rem'),
        paddingLeft: isMobile ? '1.5rem' : '2.5rem',
        paddingRight: isMobile ? '1.5rem' : '2.5rem',
        backgroundColor: isScrolled ? 'rgba(15, 13, 17, 0.75)' : 'rgba(0,0,0,0)',
        transition: { duration: 0.15, ease: 'easeInOut' },
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [controls, titleControls, wrapperControls]);

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
    <>
      <motion.header
        className={`w-full container mx-auto flex items-center justify-between z-50 sticky top-0 ${
          isOpen ? 'blur-sm' : ''
        }`}
        animate={controls}
        initial={{ translateY: 0 }}
        role="banner"
      >
        <motion.div
          className="flex items-center justify-between w-full rounded-2xl backdrop-blur-md"
          animate={wrapperControls}
          initial={{
            width: '90%',
            paddingTop: '2rem',
            paddingBottom: '1rem',
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
            backgroundColor: 'rgba(0,0,0,0)',
          }}
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <motion.div
            className="text-w font-gochi md:text-7xl select-none"
            animate={titleControls}
            initial={{ fontSize: '2.25rem' }}
          >
            <Link href="/" aria-label="Página inicial" className="flex items-center gap-1">
              Marcos<span className="text-amber-400">.</span>
            </Link>
          </motion.div>

          {/* Botão toggle mobile */}
          <motion.button
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="md:hidden p-2 rounded-2xl text-w"
            onClick={toggleMenu}
            whileTap={{ rotate: isOpen ? -90 : 90, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            type="button"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>

          {/* Navegação desktop */}
          <nav className="hidden md:flex" aria-label="Menu principal">
            <ul className="flex items-center select-none">
              {navLinks.map(({ href, label }, i) => (
                <li key={label} className="flex items-center">
                  <Link
                    href={href}
                    className="font-semibold text-xl text-w hover:scale-95 hover:text-purple-500 transition-all duration-300 mx-3"
                  >
                    {label}
                  </Link>
                  {i < navLinks.length - 1 && (
                    <span aria-hidden="true" className="mx-3">
                      <img
                        src="/assets/svg/dotGd2.svg"
                        alt=""
                        width={8}
                        height={8}
                      />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      </motion.header>

      {/* Menu mobile */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="overlay"
              className="fixed inset-0 c3-b/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              aria-hidden="true"
            />

            <motion.aside
              key="sidebar"
              id="mobile-menu"
              className="fixed top-0 right-0 h-full w-64 bg-b z-50 p-6 shadow-xl flex flex-col outline-none"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.15, ease: 'easeInOut' }}
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
    </>
  );
}
