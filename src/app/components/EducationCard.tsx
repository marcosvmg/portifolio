// src/app/components/EducationCard.tsx
import Image from 'next/image';
import { motion } from 'framer-motion';

export type EducationItem = {
  type: string;
  course: string;
  institution: string;
  status: 'Cursando' | 'Completo';
};

interface EducationCardProps {
  item: EducationItem;
}

export const EducationCard: React.FC<EducationCardProps> = ({ item }) => {
  return (
    <motion.div
      className="flex w-full flex-col gap-3 rounded-2xl bg-c0 p-6 transition-transform duration-300 hover:-translate-y-2 md:w-1/2"
      // --- ANIMAÇÃO SUTIL E MODERNA APLICADA AQUI ---
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="flex justify-between items-start">
        <div>
          <h4 className="text-xl font-semibold text-c3 md:text-2xl">{item.type}</h4>
          <div className="mt-1 h-1 w-full rounded bg-[#54505A]/25" />
        </div>
        <Image
          src={item.status === 'Cursando' ? '/assets/svg/dotCursando.svg' : '/assets/svg/dotCompleto.svg'}
          alt={`Status: ${item.status}`}
          width={36}
          height={36}
          className="h-5 w-5 flex-shrink-0 -mt-2 -mr-2 md:h-9 md:w-9 md:-mt-4 md:-mr-4"
        />
      </div>
      <h5 className="text-2xl font-semibold text-w md:text-3xl">{item.course}</h5>
      <p className="text-lg text-c3 md:text-xl">{item.institution}</p>
    </motion.div>
  );
};