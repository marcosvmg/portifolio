'use client';

import { motion } from 'framer-motion';

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const dotVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 400,
            damping: 15,
            delay: "Marcos".length * 0.1 + 0.2,
        }
    }
}

export default function LoadingScreen() {
  return (
    // ALTERAÇÃO AQUI: Fundo semi-transparente com backdrop-blur
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#10101A]/80 backdrop-blur-md text-white">
      <motion.h1
        className="flex items-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-gochi"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {"Marcos".split("").map((letter, index) => (
          <motion.span key={index} variants={letterVariants}>
            {letter}
          </motion.span>
        ))}
        <motion.span
          className="text-amber-400"
          variants={dotVariants}
        >
          .
        </motion.span>
      </motion.h1>

      <motion.p
        className="mt-2 text-sm sm:text-base md:text-lg font-sans tracking-widest text-zinc-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut', delay: "Marcos".length * 0.1 + 0.6 }}
      >
        Bem-vindo ao meu portfólio
      </motion.p>
    </div>
  );
}