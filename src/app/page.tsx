'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import FadeIn from './components/FadeIn';

// Seus componentes de seção
import Header from './components/Header';
import Main from './components/Main';
import Experiencia from './components/Experiencia';
import Formacao from './components/Formacao';
import Contato from './components/Contato';
import Footer from './components/Footer';

// O contêiner principal que orquestra a entrada de cada seção
const staggerContainerVariants = {
  hidden: { opacity: 1 }, // Começa visível para evitar "flash" de conteúdo
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Atraso entre a animação de cada seção
    },
  },
};

// Nova variante de animação SÓ PARA O HEADER (apenas opacidade)
const headerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: 'easeInOut'
        }
    }
}

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.div
      className=""
      variants={staggerContainerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* 1. Header agora usa sua própria animação, sem o FadeIn */}
      <motion.div variants={headerVariants}>
        <Header
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </motion.div>

      {/* 2. O resto dos componentes continua usando o FadeIn normalmente */}
      <FadeIn>
        <Main />
      </FadeIn>

      <FadeIn>
        <Experiencia />
      </FadeIn>

      <FadeIn>
        <Formacao />
      </FadeIn>

      <FadeIn>
        <Contato />
      </FadeIn>

      <FadeIn>
        <Footer />
      </FadeIn>

    </motion.div>
  );
}