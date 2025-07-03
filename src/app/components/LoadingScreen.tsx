'use client';

import { motion } from 'framer-motion';
// 1. Importar os hooks necessários do React
import { useState, useRef, useLayoutEffect } from 'react';

// A palavra que será animada
const word = 'Marcos';
// Divide a palavra em um array de letras
const letters = word.split('');

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
    },
  },
};

export default function LoadingScreen() {
  // 2. Criar o estado para a largura e a referência para o h1
  const [h1Width, setH1Width] = useState(0);
  const h1Ref = useRef<HTMLHeadingElement>(null);

  // 3. Medir a largura do h1 após a renderização e em redimensionamentos
  useLayoutEffect(() => {
    const updateWidth = () => {
      if (h1Ref.current) {
        setH1Width(h1Ref.current.clientWidth);
      }
    };

    updateWidth(); // Medida inicial
    window.addEventListener('resize', updateWidth); // Atualiza quando a janela muda de tamanho

    // Limpa o listener quando o componente é desmontado
    return () => window.removeEventListener('resize', updateWidth);
  }, []); // Roda apenas uma vez na montagem do componente

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#10101A]/80 backdrop-blur-md text-white ">
      <motion.h1
        ref={h1Ref} // 4. Anexar a referência ao h1
        className="flex items-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-gochi"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {'Marcos'.split('').map((letter, index) => (
          <motion.span key={index} variants={letterVariants}>
            {letter}
          </motion.span>
        ))}
        <motion.span className="text-amber-400" variants={dotVariants}>
          .
        </motion.span>
      </motion.h1>

      <motion.div
        // 5. Remover classes de largura e aplicar a largura dinamicamente via 'style'
        className="mt-1 sm:-mt-3 mb-3 h-1.5 rounded-full bg-zinc-700/60 origin-left"
        style={{ width: h1Width }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 0.7,
          ease: 'easeInOut',
          delay: 'Marcos'.length * 0.1 + 0.4,
        }}
      />

      <motion.p
        className=" text-sm sm:text-base md:text-lg font-open tracking-widest text-zinc-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: 'easeInOut',
          delay: 'Marcos'.length * 0.1 + 0.8,
        }}
      >
        Bem-vindo ao meu portfólio
      </motion.p>
    </div>
  );
}
