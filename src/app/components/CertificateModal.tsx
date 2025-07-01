'use client';

import { motion } from 'framer-motion';
import { X } from 'lucide-react';
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
        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl">
          <Image
            src={imgUrl}
            alt="Imagem do Certificado"
            fill // 'fill' é mais moderno que 'layout="fill"'
            className="object-contain bg-zinc-900"
          />
        </div>
      </motion.div>

      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-white/10 text-white p-2 rounded-full z-10 hover:bg-white/20 transition-colors"
        aria-label="Fechar modal"
      >
        <X size={24} />
      </button>
    </motion.div>
  );
};
