'use client';

import { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
}

const MOBILE_BREAKPOINT = 768; // md: do Tailwind

export default function FadeIn({ children, className }: FadeInProps) {
  // --- Lógica do useIsMobile agora está aqui dentro ---
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);
  // --- Fim da lógica do useIsMobile ---

  // As variantes usam o estado 'isMobile' para se ajustar
  const fadeInVariants: Variants = {
    hidden: {
      opacity: 0,
      y: isMobile ? 10 : 20, // Animação mais sutil no mobile
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.5 : 0.6, // Animação mais rápida no mobile
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={fadeInVariants}
    >
      {children}
    </motion.div>
  );
}