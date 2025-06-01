/* eslint-disable @next/next/no-img-element */
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Main() {
  return (
    <main className="relative flex flex-col gap-5 justify-center px-2 w-full max-w-full overflow-x-hidden">
      {/* Container principal - muda para coluna em mobile */}
      <div className="flex flex-col md:flex-row bg-c0 rounded-2xl px-4 py-6 md:px-10 md:py-10 gap-6 md:gap-0 w-full max-w-full overflow-x-hidden">
        {/* Imagem */}
        <div className="md:flex-1 relative w-full h-64 md:h-auto min-w-0">
          <Image
            className="rounded-2xl select-none w-full h-full object-cover object-left"
            src="/assets/img/mainImage.png"
            width={720}
            height={720}
            alt="Foto do desenvolvedor"
            priority
          />
        </div>

        {/* Divider */}
        <div className="w-full h-2 md:w-2 md:h-[720px] rounded-2xl bg-[#54505A]/20 md:mx-8 min-w-0" />

        {/* Text Main */}
        <div className="flex flex-col flex-1 justify-between bg-b noise-[128,50,5] rounded-2xl p-6 md:p-10 text-center md:text-right select-none min-w-0 w-full">
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex flex-col self-center">
              <h1 className="text-3xl md:text-[80px] leading-tight md:leading-loose font-poppins font-semibold text-w">
                Web Developer{' '}
                <span className="text-amber-400 block md:inline">&</span> UX/UI
                Design
              </h1>
              <p className="text-base md:text-xl font-open-sans text-c3 mb-4 flex gap-2 items-center justify-center md:justify-end">
                Localizado no Litoral de SP{' '}
                <img
                  src="/assets/svg/beach.svg"
                  alt="Ícone de praia"
                  className="select-none"
                  width={32}
                  height={32}
                />
              </p>
            </div>
          </div>

          {/* Container botão + seta no mobile */}
          <div className="flex flex-col items-center md:items-end mt-6 md:mt-auto">
            <Link
              href="#contato"
              className="bg-linear-90 from-[#7A37FF] to-[#4D17B8] py-3 px-6 md:px-8 text-lg md:text-2xl font-semibold font-poppins rounded-2xl hover:scale-95 active:scale-90 transition-all duration-300 inline-block"
              aria-label="Ir para seção de contato"
            >
              CONTATO
            </Link>

            {/* Seta dentro do text main, visível só no mobile, abaixo do botão e centralizada */}
            <div className="md:hidden mt-4 text-c1">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                aria-hidden="true"
              >
                <path
                  d="M24 8V40"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M12 32L24 44L36 32"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Seta fixa fora do Text Main, visível só no desktop */}
      <div className="hidden md:block fixed left-4 bottom-4 z-50 text-c1">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12"
          aria-hidden="true"
        >
          <path
            d="M24 8V40"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M12 32L24 44L36 32"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Conhecimentos */}
      <div className="self-center py-2 md:py-0">
        <div className="flex gap-2 self-center w-max px-4 md:px-0 md:w-auto">
          {[
            'HTML',
            'CSS',
            'JavaScript',
            'Csharp',
            'PHP',
            'Cplusplus',
            'Java',
            'OracleApex',
            'Figma',
          ].map((skill) => (
            <img
              key={skill}
              className="rounded-xl hover:scale-95 active:scale-90 transition-transform duration-300 select-none w-8 h-8 md:w-10 md:h-10"
              src={`/assets/svg/${skill}.svg`}
              alt={skill}
              width={32}
              height={32}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
