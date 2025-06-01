'use client';

import React from 'react';
import Timeline, { TimelineItem } from './TimeLine';

const steps: TimelineItem[] = [
  {
    title: 'Projeto teste',
    description:
      'Fiz esse projeto utilizando html, css e js para minha faculdade.',
    url: 'https://exemplo.com',
    languages: ['html', 'css', 'js'],
    imageUrl: '/assets/img/mainImage.png',
  },
  {
    title: 'Projeto React',
    description:
      'Fiz esse projeto utilizando html, css e js para minha faculdade.',
    url: 'https://reactprojeto.com',
    languages: ['react', 'tailwind', 'typescript'],
    imageUrl: '/assets/img/mainImage.png',
  },
  {
    title: 'App Fullstack',
    description: 'Aplicação completa usando Next.js, Prisma e PostgreSQL.',
    url: 'https://appfullstack.com',
    languages: ['next.js', 'prisma', 'postgresql'],
    imageUrl: '/assets/img/mainImage.png',
  },
];

export default function Experiencia() {
  return (
    <section className="w-full bg-c0 mt-10">
      <div className="w-full max-w-[1440px] flex gap-5 justify-center mx-auto px-4 md:px-8 py-20">
        <h2
          id="experiencia"
          className="vertical-container vertical-rotated-left font-poppins font-semibold text-5xl sm:text-7xl md:text-9xl text-c1 text-right md:text-center leading-none"
        >
          EXPERIÊNCIA
        </h2>
        <Timeline steps={steps} />
      </div>
    </section>
  );
}
