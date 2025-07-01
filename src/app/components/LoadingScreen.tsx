'use client';

import { motion } from 'framer-motion';

// A palavra que será animada
const word = "Marcos";
// Divide a palavra em um array de letras
const letters = word.split("");

// Animação para o contêiner principal, para orquestrar a entrada das letras
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Atraso de 0.1s entre cada letra
    },
  },
};

// Animação para cada letra individual
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

// Animação especial para o ponto final
const dotVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 400,
            damping: 15,
            delay: letters.length * 0.1 + 0.2,
        }
    }
}

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#10101A] text-white">
      {/* Logo Animada */}
      <motion.h1
        className="flex items-center text-9xl md:text-9xl font-gochi"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {letters.map((letter, index) => (
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

      {/* NOVO: Subtítulo animado */}
      <motion.p
        className=" text-lg md:text-xl font-sans tracking-widest text-zinc-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut', delay: letters.length * 0.1 + 0.6 }}
      >
        Boas vindas ao meu portfólio.
      </motion.p>
    </div>
  );
}