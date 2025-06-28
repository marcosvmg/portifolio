'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// --- Ícones como componentes para melhor organização e reutilização ---
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);

const ArrowUpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m5 12 7-7 7 7"/>
        <path d="M12 19V5"/>
    </svg>
);


export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.footer
      className="w-full bg-b text-w"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row md:gap-0">

        {/* Copyright - Alinhado à esquerda no desktop */}
        <p className="text-sm text-zinc-400 order-3 md:order-1">
          &copy; {year} Marcos. Todos os direitos reservados.
        </p>

        {/* Botão Voltar ao Topo - Centralizado */}
        <div className="order-1 md:order-2">
            <motion.button
                onClick={scrollToTop}
                className="group flex h-12 w-12 items-center justify-center rounded-full bg-c0 transition-colors hover:bg-c2"
                aria-label="Voltar ao topo da página"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <ArrowUpIcon />
            </motion.button>
        </div>

        {/* Links Sociais - Alinhados à direita no desktop */}
        <div className="flex items-center gap-4 order-2 md:order-3">
          <Link href="https://github.com/seuusuario" target="_blank" rel="noopener noreferrer" aria-label="Perfil no GitHub" className="text-zinc-400 transition-colors hover:text-w">
            <GithubIcon />
          </Link>
          <Link href="https://www.linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer" aria-label="Perfil no LinkedIn" className="text-zinc-400 transition-colors hover:text-w">
            <LinkedinIcon />
          </Link>
        </div>

      </div>
    </motion.footer>
  );
}