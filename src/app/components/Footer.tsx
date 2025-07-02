'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// --- Ícones como componentes para melhor organização e reutilização ---
const GithubIcon = () => (
  <svg
    className="h-6 w-6"
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 2.5C8.544 2.5 2.5 8.544 2.5 16c0 5.964 3.864 11.012 9.224 12.792.674.124.92-.292.92-.648 0-.32-.012-1.168-.018-2.292-3.752.816-4.544-1.808-4.544-1.808-.612-1.552-1.496-1.964-1.496-1.964-1.224-.836.092-.82.092-.82 1.352.096 2.064 1.388 2.064 1.388 1.204 2.064 3.16 1.468 3.932 1.124.12-.872.472-1.468.86-1.808-2.996-.34-6.144-1.496-6.144-6.66 0-1.472.524-2.676 1.384-3.624-.14-.34-.6-1.712.132-3.568 0 0 1.128-.36 3.7 1.38a12.8 12.8 0 0 1 3.368-.452c1.144.004 2.296.156 3.368.452 2.572-1.74 3.7-1.38 3.7-1.38.732 1.856.272 3.228.132 3.568.86.948 1.384 2.152 1.384 3.624 0 5.176-3.152 6.316-6.156 6.652.484.416.916 1.236.916 2.492 0 1.8-.016 3.252-.016 3.692 0 .36.244.78.928.648C25.64 27.008 29.5 21.964 29.5 16c0-7.456-6.044-13.5-13.5-13.5Z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    className="h-6 w-6"
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="4" y="12" width="5" height="16" />
    <circle cx="6.5" cy="7.5" r="2.5" />
    <path d="M14 12h5v2.2c.7-1.2 2.1-2.2 4.1-2.2C26 12 28 14 28 18.1V28h-5v-8.2c0-2-.7-3.2-2.2-3.2-1.2 0-1.8.8-2.1 1.6-.1.3-.1.8-.1 1.2V28h-5V12z" />
  </svg>
);

const ArrowUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m5 12 7-7 7 7" />
    <path d="M12 19V5" />
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
            className="group flex h-12 w-12 items-center justify-center rounded-full bg-c0 transition-colors hover:bg-c2 cursor-pointer"
            aria-label="Voltar ao topo da página"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUpIcon />
          </motion.button>
        </div>

        {/* Links Sociais - Alinhados à direita no desktop */}
        <div className="flex items-center gap-4 order-2 md:order-3">
          <Link
            href="https://github.com/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil no GitHub"
            className="text-zinc-400 transition-colors hover:text-w"
          >
            <GithubIcon />
          </Link>
          <Link
            href="https://www.linkedin.com/in/seu-perfil"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil no LinkedIn"
            className="text-zinc-400 transition-colors hover:text-w"
          >
            <LinkedinIcon />
          </Link>
        </div>
      </div>
    </motion.footer>
  );
}
