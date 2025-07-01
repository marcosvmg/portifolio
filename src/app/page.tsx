'use client';

import { useState } from 'react';
// 1. Importe o 'motion' e o componente 'FadeIn'
import { motion } from 'framer-motion';
import FadeIn from './components/FadeIn';

// Seus componentes de seção
import Header from './components/Header';
import Main from './components/Main';
import Experiencia from './components/Experiencia';
import Formacao from './components/Formacao';
import Contato from './components/Contato';
import Footer from './components/Footer';

// 2. Defina as 'variants' para o contêiner principal
// Isso irá orquestrar a animação dos filhos
const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Atraso de 0.2s entre cada componente FadeIn
    },
  },
};

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // 3. Transforme o div principal em um motion.div e aplique as variants
    <motion.div
      className=""
      variants={staggerContainerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* 4. Envolva cada seção com o componente FadeIn */}
      <FadeIn>
        <Header
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </FadeIn>

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