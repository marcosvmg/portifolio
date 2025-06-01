/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image';
import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';

export type TimelineItem = {
  title: string;
  description: string;
  url: string;
  languages: string[];
  imageUrl: string;
};

type TimelineProps = {
  steps: TimelineItem[];
};

const svgFirst = (
  <img src="/assets/svg/stepFirst.svg" alt="" width={36} height={36} />
);
const svgMiddle = (
  <img src="/assets/svg/stepMiddle.svg" alt="" width={36} height={36} />
);
const svgLast = (
  <img src="/assets/svg/stepLast.svg" alt="" width={36} height={36} />
);

const languageColors: Record<string, string> = {
  html: 'text-amber-600',
  css: 'text-sky-600',
  javascript: 'text-yellow-600',
  react: 'text-blue-600',
};

const Timeline: React.FC<TimelineProps> = ({ steps }) => {
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [dotOffsets, setDotOffsets] = useState<number[]>([]);

  const calculateOffsets = () => {
    if (!wrapperRef.current) return;
    const wrapperTop = wrapperRef.current.getBoundingClientRect().top;
    const offsets = titleRefs.current.map((el) => {
      if (!el) return 24;
      const { top } = el.getBoundingClientRect();
      return top - wrapperTop -17;
    });
    setDotOffsets(offsets);
  };

  useLayoutEffect(() => {
    requestAnimationFrame(calculateOffsets);
  }, [steps]);

  useEffect(() => {
    window.addEventListener('resize', calculateOffsets);
    return () => window.removeEventListener('resize', calculateOffsets);
  }, []);

  const renderDot = (idx: number) => {
    if (idx === 0) return svgFirst;
    if (idx === steps.length - 1) return svgLast;
    return svgMiddle;
  };

  return (
    <div
      className=" w-full flex px-4 md:px-10 py-10 bg-c1 rounded-2xl gap-6 relative select-none flex-col md:flex-row"
      ref={wrapperRef}
    >
      {/* Linha vertical - só desktop */}
      <div
        className="relative w-2 bg-c2 rounded-full hidden md:block"
        style={{
          height: dotOffsets.length
            ? dotOffsets[dotOffsets.length - 1] + 18
            : '100%',
        }}
      >
        {dotOffsets.map((top, idx) => (
          <span
            key={idx}
            className="absolute left-1/2 w-9 rounded-2xl"
            style={{
              top: `${top}px`,
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {renderDot(idx)}
          </span>
        ))}
      </div>

      <ol className="flex flex-col flex-1 space-y-8 md:space-y-14">
        {steps.map((step, idx) => (
          <li
            key={idx}
            className="relative flex flex-col"
            style={{ minHeight: 'auto' }}
          >
            {/* Título + linha */}
            <div className="flex items-center w-full mb-3">
              <h3
                ref={(el) => {
                  titleRefs.current[idx] = el;
                }}
                className="text-2xl md:text-4xl font-poppins font-medium text-w whitespace-nowrap leading-none"
              >
                {step.title}
              </h3>
              <div className="flex-grow h-1 md:h-2 bg-[#54505A]/25 rounded ml-2 md:ml-4" />
            </div>

            {/* Descrição + lado direito */}
            <div className="flex flex-col w-full mb-4 gap-4 md:gap-6">
              {/* Descrição */}
              <p className="text-base md:text-2xl text-c3 w-full">
                {step.description}
              </p>

              {/* Lado direito (languages) - agora abaixo da descrição em mobile */}
              <div className="flex flex-col w-full gap-2 md:gap-4">
                <div className="flex flex-wrap gap-2">
                  {step.languages.map((lang) => {
                    const colorClass =
                      languageColors[lang.toLowerCase()] || 'text-purple-800';
                    return (
                      <span
                        key={lang}
                        className={`bg-b font-semibold font-poppins text-[10px] md:text-[12px] px-3 md:px-4 py-1 md:py-2 rounded-lg md:rounded-xl select-none whitespace-nowrap ${colorClass}`}
                      >
                        {lang.toUpperCase()}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Botão e imagem - agora empilhados em mobile, imagem acima no mobile */}
            <div className="mt-auto flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Imagem - mobile order 1, desktop order 2 */}
              <div className="w-full md:w-80 h-auto order-1 md:order-2">
                <Image
                  src={step.imageUrl}
                  alt={`Imagem do projeto ${step.title}`}
                  className="w-full h-24 md:h-30 rounded-lg md:rounded-xl shadow-lg object-cover"
                  loading="lazy"
                  width={300}
                  height={120}
                  draggable={false}
                />
              </div>

              {/* Botão - mobile order 2, desktop order 1 */}
              <Link
                href={step.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 md:gap-4 bg-b py-2 md:py-3 px-3 md:px-6 text-sm md:text-2xl font-semibold font-poppins rounded-lg md:rounded-xl hover:scale-95 active:scale-90 transition-all duration-300 w-full md:w-fit justify-center order-2 md:order-1"
                aria-label="Ir para site externo"
              >
                VISITE O SITE
                <img
                  src="/assets/svg/arrowRGd2.svg"
                  width={24}
                  height={24}
                  className="w-6 h-6 md:w-9 md:h-9"
                  alt=""
                />
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Timeline;
