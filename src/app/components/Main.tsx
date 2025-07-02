'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Main() {
  const skills = [
    { name: 'HTML', src: '/assets/svg/HTML.svg' },
    { name: 'CSS', src: '/assets/svg/CSS.svg' },
    { name: 'JavaScript', src: '/assets/svg/JavaScript.svg' },
    { name: 'Csharp', src: '/assets/svg/Csharp.svg' },
    { name: 'PHP', src: '/assets/svg/PHP.svg' },
    { name: 'Cplusplus', src: '/assets/svg/Cplusplus.svg' },
    { name: 'Java', src: '/assets/svg/Java.svg' },
    { name: 'OracleApex', src: '/assets/svg/OracleApex.svg' },
    { name: 'Figma', src: '/assets/svg/Figma.svg' },
  ];

  return (
    <main className="container mx-auto flex flex-col items-center gap-4 px-4 py-4 mt-[96px]">
      <div className="flex w-full max-w-full flex-col gap-4 rounded-2xl bg-c0 p-4 md:flex-row md:gap-6 md:p-10">
        {/* Imagem Principal */}
        <div className="relative h-64 w-full min-w-0 md:h-auto md:flex-1">
          <Image
            className="select-none rounded-2xl object-cover object-left"
            src="/assets/img/mainImage.png"
            alt="Foto do desenvolvedor Marcos"
            fill
            priority
          />
        </div>

        {/* Divisor */}
        <div className="h-1 w-full rounded-2xl bg-[#54505A]/20 md:h-auto md:w-1" />

        {/* Conteúdo Principal de Texto */}
        <div className="flex min-w-0 flex-1 flex-col justify-between rounded-2xl bg-b p-6 text-center md:p-10 md:text-right">
          <div className="flex flex-1 flex-col items-center justify-center md:items-end">
            <h1 className="text-3xl font-semibold leading-tight text-w md:text-[80px] md:leading-none font-poppins">
              Web Developer{' '}
              <span className="block text-amber-400 md:inline">&</span> UX/UI
              Design
            </h1>
            <p className="mb-4 mt-2 flex items-center justify-center gap-2 text-base text-c3 md:justify-end md:text-xl font-open-sans">
              Localizado no Litoral de SP{' '}
              <Image
                src="/assets/svg/beach.svg"
                alt="Ícone de praia"
                className="select-none"
                width={32}
                height={32}
              />
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <Link
              href="#contato"
              className="flex items-center gap-4 rounded-2xl bg-linear-90 from-[#7A37FF] to-[#4D17B8] px-6 py-3 text-lg font-semibold text-w transition-transform duration-300 hover:-translate-y-1 hover:scale-105 active:scale-100 md:px-8 md:text-2xl font-poppins"
              aria-label="Ir para seção de contato"
            >
              CONTATO
              <svg className='h-5 w-5 text-violet-400' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M176.57-172.83q-26.79 11.4-50.44-4.34t-23.65-44.53v-162.47l346-95.83-346-95.83V-738.3q0-28.79 23.65-44.53 23.65-15.74 50.44-4.34l610.34 258.3q32.35 14.39 32.35 48.87t-32.35 48.87l-610.34 258.3Z"/></svg>
            </Link>

            <Link
              href="#experiencia"
              aria-label="Rolar para a seção de experiência"
              className="md:hidden mt-4 text-c1"
            >
              <svg
                className="h-7 w-7 text-zinc-800"
                fill="currentColor"
                viewBox="0 -960 960 960"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                width="24px"
                aria-hidden="true"
              >
                <path d="M480-82.87q-10.26 0-19.8-3.63-9.55-3.63-17.24-11.33L217.83-322.96q-14.96-14.95-14.96-37.04t14.96-37.04q15.39-15.96 37.26-15.74 21.87.21 36.82 15.74L427-262.39v-582.7q0-22.08 15.46-37.54 15.45-15.46 37.54-15.46t37.54 15.46Q533-867.17 533-845.09v582.7l134.65-134.65Q683.61-413 705.2-413q21.58 0 37.54 15.96 15.52 15.95 15.24 37.54-.28 21.59-15.24 36.54L517.61-97.83q-7.7 7.7-17.52 11.33-9.83 3.63-20.09 3.63Z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Seção de Conhecimentos */}
      <div className="py-2">
        <ul className="flex flex-wrap justify-center gap-2">
          {skills.map((skill) => (
            <li key={skill.name}>
              <Image
                className="select-none rounded-xl transition-transform duration-300 hover:-translate-y-1 hover:scale-110"
                src={skill.src}
                alt={`Ícone da tecnologia ${skill.name}`}
                width={40}
                height={40}
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
