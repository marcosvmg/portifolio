'use client';
import { useRef, useEffect, RefObject, Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const useSidebarEffects = (
  isOpen: boolean,
  sidebarRef: RefObject<HTMLElement | null>,
) => {
  useEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab' && sidebarRef.current) {
        const focusableElements =
          sidebarRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), textarea, input, select',
          );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            event.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            event.preventDefault();
          }
        }
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      sidebarRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, sidebarRef]);
};

const NAV_LINKS = [
  { href: '#experiencia', label: 'Experiência' },
  { href: '#formacao', label: 'Formação' },
  { href: '#contato', label: 'Contato' },
];

const Logo = () => (
  <Link
    href="/"
    aria-label="Página inicial"
    className="flex items-center gap-1"
  >
    Marcos<span className="text-amber-400">.</span>
  </Link>
);

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useSidebarEffects(isMenuOpen, sidebarRef);

  const toggleMenu = () => {
    if ('vibrate' in navigator) navigator.vibrate(10);
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="w-full fixed top-0 left-0 z-50 py-4 bg-transparent">
        <div
          className={`
            flex items-center justify-between
            w-11/12 md:w-5/6 lg:w-4/5 xl:w-3/4
            mx-auto px-6 py-4
            rounded-2xl
            bg-zinc-950/70
            backdrop-blur-lg
          `}
        >
          <div className="text-w font-gochi text-4xl select-none">
            <Logo />
          </div>

          <motion.button
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="md:hidden p-2 rounded-2xl text-w flex items-center justify-center w-11 h-11 relative"
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence initial={false}>
              {!isMenuOpen ? (
                <motion.div
                  key="menu-icon"
                  className="absolute"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="x-icon"
                  className="absolute"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          <nav className="hidden md:flex" aria-label="Menu principal">
            <ul className="flex items-center select-none">
              {NAV_LINKS.map(({ href, label }, i) => (
                <li key={label} className="flex items-center">
                  <Link
                    href={href}
                    className="font-semibold text-xl text-w transition-colors duration-300 hover:text-purple-500 focus:outline-none focus-visible:text-purple-500"
                  >
                    {label}
                  </Link>
                  {i < NAV_LINKS.length - 1 && (
                    <img
                      src="/assets/svg/dotGd2.svg"
                      alt=""
                      width={8}
                      height={8}
                      className="mx-3"
                      aria-hidden="true"
                    />
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              key="overlay"
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              aria-hidden="true"
            />
            <motion.aside
              key="sidebar"
              id="mobile-menu"
              ref={sidebarRef}
              className="fixed top-0 right-0 h-full w-64 bg-b z-50 p-6 shadow-xl flex flex-col outline-none"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              tabIndex={-1}
              aria-modal="true"
              role="dialog"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="text-w font-gochi text-3xl select-none">
                  <Logo />
                </div>
                <motion.button
                  aria-label="Fechar menu"
                  className="text-w"
                  onClick={closeMenu}
                  whileTap={{ scale: 0.9 }}
                  type="button"
                >
                  <X size={28} />
                </motion.button>
              </div>
              <nav>
                <ul className="flex flex-col items-start select-none space-y-4">
                  {NAV_LINKS.map(({ href, label }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="font-semibold text-xl text-w transition-colors hover:text-purple-500"
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
