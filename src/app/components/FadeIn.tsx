'use client';

import { motion, Variants } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
}

const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
};

export default function FadeIn({ children, className }: FadeInProps) {
  return (
    <motion.div
      className={className}
      variants={fadeInVariants}
    >
      {children}
    </motion.div>
  );
}