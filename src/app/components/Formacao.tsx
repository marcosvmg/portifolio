'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { EducationCard, EducationItem } from './EducationCard';
import { CertificateModal } from './CertificateModal';
import { motion, AnimatePresence } from 'framer-motion';

// --- Dados para os cards (com exemplos de certificateImgUrl) ---
const graduacaoData: EducationItem[] = [
  {
    type: 'Ensino Superior',
    course: 'Desenvolvimento de Software Multiplataforma',
    institution: 'FATEC-PG, 2024 - 2027',
    status: 'Cursando',
  },
  {
    type: 'Ensino Técnico',
    course: 'Suporte em Informática',
    institution: 'ETEC-PG, 2021 - 2022',
    status: 'Completo',
    certificateImgUrl: '/certificados/tecnico-ds.png',
  },
];

const cursosData: EducationItem[] = [
  {
    type: 'Back-end',
    course: 'Java Completo',
    institution: 'Udemy - Prof Arnaldo Sousa, 2025',
    status: 'Cursando',
  },
  {
    type: 'DataBase',
    course: 'Databse Programmin with SQL',
    institution: 'Oracle, 2025',
    status: 'Completo',
    certificateImgUrl: '/assets/img/certificados/sql.png',
  },
  {
    type: 'Front-end',
    course: 'Front-end Básico',
    institution: 'FATEC, 2025',
    status: 'Completo',
    certificateImgUrl: '/assets/img/certificados/frontendfatec.png',
  },
  {
    type: 'Front-end',
    course: 'CSS Grid',
    institution: 'Origamid, 2024',
    status: 'Completo',
    certificateImgUrl: '/assets/img/certificados/cssgrid.png',
  },
  {
    type: 'Front-end',
    course: 'CSS FlexBox',
    institution: 'Origamid, 2024',
    status: 'Completo',
    certificateImgUrl: '/assets/img/certificados/cssflexbox.png',
  },
  {
    type: 'UX/UI Design',
    course: 'Front-end & UX/UI Design',
    institution: 'Origamid, 2023',
    status: 'Completo',
    certificateImgUrl: '/assets/img/certificados/frontenduxui.png',
  },
  {
    type: 'UX/UI Design',
    course: 'UI Design Avançado',
    institution: 'Origamid, 2023',
    status: 'Completo',
    certificateImgUrl: '/assets/img/certificados/uiavancado.png',
  },
  {
    type: 'UX/UI Design',
    course: 'UI Design Iniciante',
    institution: 'Origamid, 2023',
    status: 'Completo',
    certificateImgUrl: '/assets/img/certificados/uiiniciante.png',
  },
  {
    type: 'Scrum',
    course: 'Ética no Desenvolvimento de Sistemas',
    institution: 'Fundação Bradesco, 2022',
    status: 'Completo',
    certificateImgUrl: '/assets/img/certificados/etica.png',
  },
  {
    type: 'Redes',
    course: 'Introdução às Redes de Computadores',
    institution: 'Fundação Bradesco, 2022',
    status: 'Completo',
    certificateImgUrl: '/assets/img/certificados/redes.png',
  },
  //
];

const idiomasData: EducationItem[] = [
  {
    type: 'Inglês',
    course: 'Avançado (C1)',
    institution: 'Autodidata & Experiência Profissional',
    status: 'Completo',
  },
  {
    type: 'Espanhol',
    course: 'Básico (A2)',
    institution: 'Cultura Espanhola, 2019',
    status: 'Completo',
  },
];

// --- Hook e Componentes Auxiliares (CÓDIGO ORIGINAL INCLUÍDO) ---
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(max-width: 767px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event: MediaQueryListEvent) =>
      setIsMobile(event.matches);
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () =>
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, []);
  return isMobile;
};

const LegendItem = ({
  label,
  status,
}: {
  label: string;
  status: 'Cursando' | 'Completo';
}) => (
  <span className="inline-flex items-center gap-1 whitespace-nowrap rounded-xl bg-c0 p-1 text-xs font-poppins text-c3 xs:gap-2 xs:rounded-2xl xs:p-2 xs:text-sm sm:text-base">
    <Image
      src={
        status === 'Cursando'
          ? '/assets/svg/dotCursando.svg'
          : '/assets/svg/dotCompleto.svg'
      }
      alt=""
      width={16}
      height={16}
      className="h-2 w-2 flex-shrink-0 md:h-4 md:w-4"
      aria-hidden="true"
    />
    {label}
  </span>
);

const ToggleButton = ({
  onClick,
  isExpanded,
}: {
  onClick: () => void;
  isExpanded: boolean;
}) => (
  <div className="mt-8 flex w-full justify-center">
    <motion.button
      onClick={onClick}
      className="flex items-center gap-2 font-poppins text-lg text-c3 transition-colors hover:text-w"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isExpanded ? 'Mostrar menos' : 'Mostrar mais'}
      <motion.div
        animate={{ rotate: isExpanded ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5V19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 13L12 19L18 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </motion.button>
  </div>
);

const EducationSection = ({
  title,
  data,
  initialCount,
  onCertificateClick,
}: {
  title: string;
  data: EducationItem[];
  initialCount: number;
  onCertificateClick: (imgUrl: string) => void;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionTitleRef = useRef<HTMLHeadingElement>(null);
  const displayedItems = isExpanded ? data : data.slice(0, initialCount);

  const chunkedItems = [];
  for (let i = 0; i < displayedItems.length; i += 2) {
    chunkedItems.push(displayedItems.slice(i, i + 2));
  }

  const handleToggle = () => {
    if (isExpanded && sectionTitleRef.current) {
      setTimeout(() => {
        sectionTitleRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }, 150);
    }
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="mx-auto mt-16 w-full max-w-[1820px] px-4 sm:px-6 lg:px-12">
      <h3
        ref={sectionTitleRef}
        className="mb-10 font-poppins text-3xl font-medium text-w sm:text-4xl lg:text-5xl scroll-mt-24"
      >
        {title}
      </h3>
      <div className="flex flex-col gap-6 lg:gap-8">
        <AnimatePresence>
          {chunkedItems.map((pair, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="flex flex-col justify-center gap-6 md:flex-row lg:gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {pair.map((item, cardIndex) => (
                <EducationCard
                  key={`${item.course}-${cardIndex}`}
                  item={item}
                  onCertificateClick={onCertificateClick}
                />
              ))}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {data.length > initialCount && (
        <ToggleButton onClick={handleToggle} isExpanded={isExpanded} />
      )}
    </div>
  );
};

// --- COMPONENTE PRINCIPAL ---
export default function Formacao() {
  const isMobile = useIsMobile();
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(
    null,
  );

  const handleOpenModal = (imgUrl: string) => {
    setSelectedCertificate(imgUrl);
  };
  const handleCloseModal = () => {
    setSelectedCertificate(null);
  };

  const initialCountGraduacao = isMobile ? 2 : 2;
  const initialCountCursos = isMobile ? 4 : 6;
  const initialCountIdiomas = isMobile ? 2 : 2;

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-c0 -z-10" />
      <section
        id="formacao"
        className="w-full bg-b px-4 py-20 sm:px-6 lg:px-20 relative z-10"
      >
        <div className="mx-auto flex w-full max-w-[1920px] flex-row items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
          <h2 className="flex-shrink font-poppins text-4xl font-semibold leading-none text-w sm:text-5xl md:text-6xl lg:text-8xl">
            FORMAÇÃO
          </h2>
          <div className="flex flex-shrink-0 flex-col gap-2 md:gap-4">
            <LegendItem label="Cursando" status="Cursando" />
            <LegendItem label="Completo" status="Completo" />
          </div>
        </div>
        <EducationSection
          title="Graduação e Técnico"
          data={graduacaoData}
          initialCount={initialCountGraduacao}
          onCertificateClick={handleOpenModal}
        />
        <EducationSection
          title="Cursos Complementares"
          data={cursosData}
          initialCount={initialCountCursos}
          onCertificateClick={handleOpenModal}
        />
        <EducationSection
          title="Idiomas"
          data={idiomasData}
          initialCount={initialCountIdiomas}
          onCertificateClick={handleOpenModal}
        />
      </section>
      <AnimatePresence>
        {selectedCertificate && (
          <CertificateModal
            imgUrl={selectedCertificate}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
