'use client';

import React from 'react';
import Timeline, { TimelineItem } from './TimeLine';

const steps: TimelineItem[] = [
  {
    title: 'Lotus',
    description:
      'Saas voltado para gerenciamento de atendimento para psicólogos, com agendamentos, prontuários e relatórios.',
    url: 'https://lotus-site-seven.vercel.app/',
    languages: ['Next.js', 'TailwindCSS', 'Prisma'],
    showcase: {
      desktop: { gifUrl: '/assets/img/projetos/lotus/lotusdesktop.gif' },
      mobile: { gifUrl: '/assets/img/projetos/lotus/lotusmobile.gif' },
    },
  },
  {
    title: 'Gansai',
    description:
      'Landing Page a fim de estudo de UX e UI, com foco em acessibilidade e responsividade.',
    url: 'https://gansai.vercel.app/',
    languages: ['ux', 'next.js', 'tailwindcss'],
    showcase: {
      desktop: { gifUrl: '/assets/img/projetos/gansai/gansaidesktop.gif' }, // Exemplo de GIF de código
      mobile: { gifUrl: '/assets/img/projetos/gansai/gansaimobile.gif' }, // Exemplo de GIF de UI Mobile
    },
  },
  {
    title: 'ViniVinil',
    description:
      'Aplicação completa de front/backend para vendas de disco de vinil.',
    url: 'https://vinivinil.onrender.com/home',
    languages: ['Laravel', 'Tailwindcss', 'postgresql'],
    showcase: {
      desktop: {
        gifUrl: '/assets/img/projetos/vinivinil/vinivinildesktop.gif',
      }, // Exemplo de GIF de terminal/backend
      mobile: { gifUrl: '/assets/img/projetos/vinivinil/vinivinilmobile.gif' }, // Exemplo de GIF de UI Mobile
    },
  },
];

export default function Experiencia() {
  return (
    <div className="relative">
      {/* Fundo padrão para o restante da seção */}
      <div className="absolute inset-0 bg-b -z-20" />
      {/* Fundo com noise só no topo esquerdo, usando CSS puro e !important */}
      <style>{`
				.experiencia-noise-tl {
					position: absolute;
					left: 0;
					top: 0;
					width: 96px;
					height: 96px;
					border-top-left-radius: 96px;
					z-index: -10;
					background: #18171C url('/assets/img/noise.png') !important;
					background-size: cover, auto !important;
					background-repeat: no-repeat, repeat !important;
				}
			`}</style>
      <div className="experiencia-noise-tl" />
      <section
        id="experiencia"
        className="w-full bg-c0 mt-10 relative overflow-hidden z-10"
      >
        <div className="w-full max-w-[1440px] flex gap-5 justify-center mx-auto px-4 md:px-8 py-20">
          <h2 className="vertical-container vertical-rotated-left font-poppins font-semibold text-5xl sm:text-7xl md:text-9xl text-c1 text-right md:text-center leading-none">
            EXPERIÊNCIA
          </h2>
          <Timeline steps={steps} />
        </div>
      </section>
    </div>
  );
}
