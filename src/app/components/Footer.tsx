'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="w-full bg-b text-w py-10 px-6 md:px-10 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <p className="text-sm md:text-base text-zinc-400">
        &copy; {year} Marcos. Todos os direitos reservados.
      </p>
    </motion.footer>
  );
}
