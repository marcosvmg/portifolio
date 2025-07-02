'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface CertificateModalProps {
  imgUrl: string;
  onClose: () => void;
}

export const CertificateModal = ({
  imgUrl,
  onClose,
}: CertificateModalProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-5xl"
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 30 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative inline-block rounded-lg overflow-hidden shadow-2xl bg-zinc-900">
          <Image
            src={imgUrl}
            alt="Imagem do Certificado"
            width={0}
            height={0}
            sizes="100vw"
            className="w-auto h-auto max-w-full max-h-[70vh] rounded-lg"
            style={{ display: 'block' }}
          />
        </div>
      </motion.div>

      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-zinc-700/40 text-zinc-50 p-2 rounded-full z-10 hover:bg-zinc-500/40 transition-colors duration-300 cursor-pointer"
        aria-label="Fechar modal"
        type="button"
      >
        <svg
          className="h-6 w-6 text-white"
          fill="currentColor"
          viewBox="0 -960 960 960"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          width="24px"
        >
          <path d="M480-405.91 293.04-218.96Q278.09-204 256-204t-37.04-14.96Q204-233.91 204-256t14.96-37.04L405.91-480 218.96-666.96Q204-681.91 204-704t14.96-37.04Q233.91-756 256-756t37.04 14.96L480-554.09l186.96-186.95Q681.91-756 704-756t37.04 14.96Q756-726.09 756-704t-14.96 37.04L554.09-480l186.95 186.96Q756-278.09 756-256t-14.96 37.04Q726.09-204 704-204t-37.04-14.96L480-405.91Z" />
        </svg>
      </button>
    </motion.div>
  );
};
