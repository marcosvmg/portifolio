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
    <main className="container mx-auto flex flex-col items-center gap-4 px-4 py-4">
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
              className="inline-block rounded-2xl bg-linear-90 from-[#7A37FF] to-[#4D17B8] px-6 py-3 text-lg font-semibold text-w transition-transform duration-300 hover:-translate-y-1 hover:scale-105 active:scale-100 md:px-8 md:text-2xl font-poppins"
              aria-label="Ir para seção de contato"
            >
              CONTATO
            </Link>

            <Link href="#experiencia" aria-label="Rolar para a seção de experiência" className="md:hidden mt-4 text-c1">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" aria-hidden="true">
                <title>Rolar para a próxima seção</title>
                <path d="M24 8V40" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                <path d="M12 32L24 44L36 32" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Seta Fixa para Desktop */}
      <Link href="#experiencia" aria-label="Rolar para a seção de experiência" className="hidden md:block fixed left-4 bottom-4 z-50 text-c1 transition-transform hover:scale-110">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" aria-hidden="true">
            <title>Rolar para a próxima seção</title>
            <path d="M24 8V40" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
            <path d="M12 32L24 44L36 32" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
      </Link>

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