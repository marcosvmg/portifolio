'use client';

import React from 'react';
import Timeline, { TimelineItem } from './TimeLine'; // Verifique se o caminho do import está correto

// --- DADOS ATUALIZADOS COM A NOVA ESTRUTURA 'showcase' E GIFs ---
const steps: TimelineItem[] = [
  {
    title: 'Lotus',
    description:
      'Saas voltado para gerenciamento de atendimento para psicólogos, com agendamentos, prontuários e relatóriosSaas voltado para gerenciamento de atendimento para psicólogos, com agendamentos, prontuários e relatórios.',
    url: 'https://lotus-site-seven.vercel.app/',
    languages: ['Next.js', 'TypeScript', 'TailwindCSS', 'Prisma'],
    // A estrutura agora é um objeto 'showcase'
    showcase: {
      desktop: { gifUrl: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGZmdTh6MXN0a2I3NDB2MWJicXVycmNkaHp2c2I4eGhjaHZtcjFzNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JtB2s2R0s3c1I3pu2a/giphy.gif' }, // Exemplo de GIF de UI Desktop
      mobile: { gifUrl: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDZpa2FpdmFxdGRsdjVqamJybzFveDYzc2lseGE0amFwZ2w4YmR2eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aVp3t23fKk5nB7d4l8/giphy.gif' },   // Exemplo de GIF de UI Mobile
    },
  },
  {
    title: 'Projeto React',
    description:
      'Interface desenvolvida com React para um projeto acadêmico, focando em componentização e estado.',
    url: '#',
    languages: ['react', 'tailwind', 'typescript'],
    showcase: {
      desktop: { gifUrl: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWYwdDI4cHR0a25ucDZtZzRocG5pY2U5M3E2dDR0b3FzZ2k4eDBnZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jM4b10gR5Jcbe2K37s/giphy.gif' }, // Exemplo de GIF de código
      mobile: { gifUrl: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExajNwb3JqbGF4ZmhjajQ1MWhhZWg1b2E4aDlsZnNvb2FobzJzZDNodyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZgTR3UQnX2Zg2Y2gIM/giphy.gif' },   // Exemplo de GIF de UI Mobile
    },
  },
   {
    title: 'App Fullstack',
    description: 'Aplicação completa usando Next.js para o frontend/backend, Prisma como ORM e banco de dados PostgreSQL.',
    url: '#',
    languages: ['next.js', 'prisma', 'postgresql'],
    showcase: {
      desktop: { gifUrl: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExajVtdDI2aDc5ZzF3bHcwNHA2NG5peXNqZThxazY5b252MHYzY3hheSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/scZzG5204z23S/giphy.gif' }, // Exemplo de GIF de terminal/backend
      mobile: { gifUrl: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnE4bTJicXZnMG5qdWRqZ3Uyb3J0eThnYjZyYWlzNTA3eDkyYnZicSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zMM מדיה/giphy.gif' },   // Exemplo de GIF de UI Mobile
    },
  },
];

export default function Experiencia() {
  return (
    <section id="experiencia" className="w-full bg-c0 mt-10">
      <div className="w-full max-w-[1440px] flex gap-5 justify-center mx-auto px-4 md:px-8 py-20">
        <h2
          className="vertical-container vertical-rotated-left font-poppins font-semibold text-5xl sm:text-7xl md:text-9xl text-c1 text-right md:text-center leading-none"
        >
          EXPERIÊNCIA
        </h2>
        <Timeline steps={steps} />
      </div>
    </section>
  );
}