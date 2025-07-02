/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, {
  useState,
  useCallback,
  useRef,
  useLayoutEffect,
  useEffect,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- TIPOS ---
export interface TimelineItem {
  title: string;
  description: string;
  url: string;
  languages: string[];
  showcase: {
    desktop: { gifUrl: string };
    mobile: { gifUrl: string };
  };
}

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
  html: 'text-orange-600',
  css: 'text-blue-600',
  javascript: 'text-yellow-500',
  typescript: 'text-blue-500',
  react: 'text-sky-500',
  'next.js': 'text-zinc-400',
  svelte: 'text-orange-500',
  vue: 'text-emerald-500',
  astro: 'text-indigo-500',
  tailwindcss: 'text-cyan-500',
  'styled-components': 'text-pink-500',
  sass: 'text-pink-400',
  figma: 'text-fuchsia-500',
  ux: 'text-pink-500',
  nodejs: 'text-green-500',
  python: 'text-blue-400',
  prisma: 'text-teal-500',
  postgresql: 'text-blue-700',
  mongodb: 'text-green-600',
  firebase: 'text-amber-500',
  graphql: 'text-pink-600',
  laravel: 'text-red-600',
  git: 'text-orange-600',
  docker: 'text-sky-600',
  jest: 'text-red-600',
  npm: 'text-red-500',
  yarn: 'text-sky-600',
};

// --- SUBCOMPONENTE SHOWCASEVIEWER ---
const ShowcaseViewer = ({
  showcase,
}: {
  showcase: TimelineItem['showcase'];
}) => {
  const [activeView, setActiveView] = useState<'desktop' | 'mobile'>('desktop');
  const activeGif =
    activeView === 'desktop' ? showcase.desktop.gifUrl : showcase.mobile.gifUrl;

  return (
    <div className="w-full h-full flex flex-col group">
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 400, damping: 40 }}
        className={`relative flex-grow overflow-hidden rounded-lg md:rounded-xl shadow-lg select-none
            ${
              activeView === 'mobile'
                ? 'aspect-[9/16] mx-auto w-auto'
                : 'aspect-video w-full'
            }`}
      >
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={activeView}
            src={activeGif}
            alt={`GIF da visualização ${activeView}`}
            className="absolute top-0 left-0 w-full h-full object-cover object-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        </AnimatePresence>

        <div className="pointer-events-none absolute top-2 right-2 z-10">
          <div className="flex items-center justify-center rounded-full bg-black/40 p-2 shadow-lg backdrop-blur-sm">
            <svg
              className="h-5 w-5 text-zinc-50"
              fill="currentColor"
              viewBox="0 -960 960 960"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M116.04-564.52h39.44q18.69 0 31.61 12.91Q200-538.7 200-520t-12.91 31.61q-12.92 12.91-31.61 12.91h-39.44q-18.69 0-31.61-12.91Q71.52-501.3 71.52-520t12.91-31.61q12.92-12.91 31.61-12.91Zm64.61 222.22 28-28.57q13.13-13.13 31.11-12.91 17.98.21 31.11 12.91 13.13 13.13 13.35 31.61.21 18.48-12.92 31.61l-28 28q-13.13 13.13-31.6 12.63-18.48-.5-31.61-13.63-12.7-13.13-12.63-30.83.06-17.69 13.19-30.82Zm27.44-327.4-27.44-28q-13.13-13.13-12.91-31.1.22-17.98 12.91-31.11 13.13-13.13 31.33-13.35 18.19-.22 31.32 12.91l28.57 28q13.13 13.13 12.63 31.61-.5 18.48-13.63 31.61-13.13 12.7-31.39 12.63-18.26-.07-31.39-13.2Zm508.22 518.44-163.7-163.13-27.74 82.65q-3.13 9.26-10.33 13.89-7.19 4.63-15.45 4.63-8.26 0-15.18-5.13-6.91-5.13-9.47-14.39L387.3-523.26q-3.13-11.39-.06-21.65 3.06-10.26 10.33-17.52 7.26-7.27 17.52-10.33 10.26-3.07 21.65.06l291.96 87.14q9.26 2.56 14.17 9.76 4.91 7.19 4.91 15.45 0 8.26-4.13 15.18-4.13 6.91-13.39 10.04l-83.78 29.74 161.7 161.7q15.95 15.95 15.95 37.6 0 21.66-15.95 37.61l-17.22 17.22Q775-135.3 753.63-135.58q-21.37-.29-37.32-15.68ZM395.48-764.52v-39.44q0-18.69 12.91-31.61 12.91-12.91 31.61-12.91t31.61 12.91q12.91 12.92 12.91 31.61v39.44q0 18.69-12.91 31.61Q458.7-720 440-720t-31.61-12.91q-12.91-12.92-12.91-31.61Zm213.22 32.17 29-29q12.69-12.69 30.89-12.63 18.19.07 31.32 13.2 12.7 12.69 12.92 30.32.21 17.63-12.48 30.76l-29 30q-12.7 13.13-30.89 13.2-18.2.07-31.33-12.63-13.13-13.13-13.35-31.61-.21-18.48 12.92-31.61Z" />
            </svg>
          </div>
        </div>
      </motion.div>
      <div className="flex justify-center items-center gap-4 mt-3 flex-shrink-0">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setActiveView('desktop');
          }}
          aria-label="Ver no desktop"
          className={`group p-2 rounded-md transition-colors cursor-pointer ${
            activeView === 'desktop'
              ? 'bg-violet-400/20'
              : 'hover:bg-zinc-800/50'
          }`}
        >
          <svg
            className={`h-5 w-5 transition-colors duration-300 ${
              activeView === 'desktop'
                ? 'text-violet-300'
                : 'text-zinc-600 group-hover:text-violet-300'
            }`}
            fill="currentColor"
            viewBox="0 -960 960 960"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M389.83-229.26H166.78q-44.3 0-75.15-30.85-30.85-30.85-30.85-75.15v-417.96q0-44.3 30.85-75.15 30.85-30.85 75.15-30.85h626.44q44.3 0 75.15 30.85 30.85 30.85 30.85 75.15v417.96q0 44.3-30.85 75.15-30.85 30.85-75.15 30.85H570.17l72.9 72.9q1.97 1.97 7.1 16.51v14.55q0 9.69-7.18 17.11-7.19 7.41-16.77 7.41H326.65q-7.21 0-12.02-4.87-4.8-4.86-4.8-12.16v-24.32q0-2 5.13-12.26l74.87-74.87ZM166.78-433.22h626.44v-320H166.78v320Zm0 0v-320 320Z" />
          </svg>
        </button>
        <div className="h-6 w-1 rounded-2xl bg-zinc-700/60" />
        <button
          onClick={(e) => {
            e.stopPropagation();
            setActiveView('mobile');
          }}
          aria-label="Ver no mobile"
          className={`group p-2 rounded-md transition-colors cursor-pointer ${
            activeView === 'mobile'
              ? 'bg-violet-400/20'
              : 'hover:bg-zinc-800/50'
          }`}
        >
          <svg
            className={`h-5 w-5 transition-colors duration-300 ${
              activeView === 'mobile'
                ? 'text-violet-300'
                : 'text-zinc-600 group-hover:text-violet-300'
            }`}
            fill="currentColor"
            viewBox="0 -960 960 960"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M287.35-20.78q-44.31 0-75.15-30.85-30.85-30.85-30.85-75.15v-706.44q0-44.3 30.85-75.15 30.84-30.85 75.15-30.85h385.3q44.31 0 75.15 30.85 30.85 30.85 30.85 75.15v107.61q18.57 9.26 29.57 26.52 11 17.26 11 37.96v77.17q0 20.7-11 38.24-11 17.55-29.57 26.81v392.13q0 44.3-30.85 75.15-30.84 30.85-75.15 30.85h-385.3Zm-.57-105.44h386.44v-707.56H286.78v707.56Zm0 0v-707.56 707.56ZM480-177.52q18.92 0 31.72-12.8 12.8-12.8 12.8-31.72 0-18.93-12.8-31.73T480-266.57q-18.92 0-31.72 12.8-12.8 12.8-12.8 31.73 0 18.92 12.8 31.72 12.8 12.8 31.72 12.8Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

// --- SUBCOMPONENTE DO MODAL ---
const ProjectModal = ({
  step,
  onClose,
}: {
  step: TimelineItem;
  onClose: () => void;
}) => {
  const [activeView, setActiveView] = useState<'desktop' | 'mobile'>('desktop');
  const activeGif =
    activeView === 'desktop'
      ? step.showcase.desktop.gifUrl
      : step.showcase.mobile.gifUrl;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        layout
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`relative w-full max-h-[90vh] flex flex-col ${
          activeView === 'mobile' ? 'max-w-xl' : 'max-w-6xl'
        }`}
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full h-full flex flex-col group">
          <motion.div
            layout
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`relative flex-grow overflow-hidden rounded-lg md:rounded-xl shadow-lg select-none mx-auto h-[75vh] max-w-full ${
              activeView === 'mobile' ? 'aspect-[9/16]' : 'aspect-video'
            }`}
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.img
                key={activeView}
                src={activeGif}
                alt={`GIF da visualização ${activeView}`}
                className="absolute top-0 left-0 w-full h-full object-cover object-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
            </AnimatePresence>
          </motion.div>
          <div className="flex justify-center items-center gap-4 mt-3 flex-shrink-0 ">
            <button
              onClick={() => setActiveView('desktop')}
              aria-label="Ver no desktop"
              className={`group p-2 rounded-md transition-all duration-300 cursor-pointer ${
                activeView === 'desktop'
                  ? 'bg-violet-400/20'
              : 'hover:bg-zinc-800/50'
              }`}
            >
              <svg
                className={`h-5 w-5 transition-colors duration-300 ${
                  activeView === 'desktop'
                ? 'text-violet-300'
                : 'text-zinc-600 group-hover:text-violet-300'
                }`}
                fill="currentColor"
                viewBox="0 -960 960 960"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M389.83-229.26H166.78q-44.3 0-75.15-30.85-30.85-30.85-30.85-75.15v-417.96q0-44.3 30.85-75.15 30.85-30.85 75.15-30.85h626.44q44.3 0 75.15 30.85 30.85 30.85 30.85 75.15v417.96q0 44.3-30.85 75.15-30.85 30.85-75.15 30.85H570.17l72.9 72.9q1.97 1.97 7.1 16.51v14.55q0 9.69-7.18 17.11-7.19 7.41-16.77 7.41H326.65q-7.21 0-12.02-4.87-4.8-4.86-4.8-12.16v-24.32q0-2 5.13-12.26l74.87-74.87ZM166.78-433.22h626.44v-320H166.78v320Zm0 0v-320 320Z" />
              </svg>
            </button>
            <div className="h-6 w-1 rounded-2xl bg-zinc-700/60" />
            <button
              onClick={() => setActiveView('mobile')}
              aria-label="Ver no mobile"
              className={`group p-2 rounded-md transition-all duration-300 cursor-pointer ${
                activeView === 'mobile'
                ? 'bg-violet-400/20'
              : 'hover:bg-zinc-800/50'
              }`}
            >
              <svg
                className={`h-5 w-5 transition-colors duration-300 ${
                  activeView === 'mobile'
                ? 'text-violet-300'
                : 'text-zinc-600 group-hover:text-violet-300'
                }`}
                fill="currentColor"
                viewBox="0 -960 960 960"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M287.35-20.78q-44.31 0-75.15-30.85-30.85-30.85-30.85-75.15v-706.44q0-44.3 30.85-75.15 30.84-30.85 75.15-30.85h385.3q44.31 0 75.15 30.85 30.85 30.85 30.85 75.15v107.61q18.57 9.26 29.57 26.52 11 17.26 11 37.96v77.17q0 20.7-11 38.24-11 17.55-29.57 26.81v392.13q0 44.3-30.85 75.15-30.84 30.85-75.15 30.85h-385.3Zm-.57-105.44h386.44v-707.56H286.78v707.56Zm0 0v-707.56 707.56ZM480-177.52q18.92 0 31.72-12.8 12.8-12.8 12.8-31.72 0-18.93-12.8-31.73T480-266.57q-18.92 0-31.72 12.8-12.8 12.8-12.8 31.73 0 18.92 12.8 31.72 12.8 12.8 31.72 12.8Z" />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-zinc-700/40 text-zinc-50 p-2 rounded-full z-10 hover:bg-zinc-500/40 transition-colors duration-300 cursor-pointer"
        aria-label="Fechar modal"
      >
        <svg
          className="h-6 w-6 text-white"
          fill="currentColor"
          viewBox="0 -960 960 960"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M480-405.91 293.04-218.96Q278.09-204 256-204t-37.04-14.96Q204-233.91 204-256t14.96-37.04L405.91-480 218.96-666.96Q204-681.91 204-704t14.96-37.04Q233.91-756 256-756t37.04 14.96L480-554.09l186.96-186.95Q681.91-756 704-756t37.04 14.96Q756-726.09 756-704t-14.96 37.04L554.09-480l186.95 186.96Q756-278.09 756-256t-14.96 37.04Q726.09-204 704-204t-37.04-14.96L480-405.91Z" />
        </svg>
      </button>
    </motion.div>
  );
};

// --- COMPONENTE PRINCIPAL TIMELINE ---
const Timeline: React.FC<TimelineProps> = ({ steps }) => {
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [dotOffsets, setDotOffsets] = useState<number[]>([]);

  const calculateOffsets = useCallback(() => {
    if (!wrapperRef.current) return;
    const wrapperTop = wrapperRef.current.getBoundingClientRect().top;
    const offsets = titleRefs.current.map((el, idx) => {
      if (idx === 0) return 18;
      if (!el) return 24;
      const { top } = el.getBoundingClientRect();
      return top - wrapperTop - 17;
    });
    setDotOffsets(offsets);
  }, []);

  useLayoutEffect(() => {
    calculateOffsets();
  }, [calculateOffsets]);
  useEffect(() => {
    window.addEventListener('resize', calculateOffsets);
    return () => window.removeEventListener('resize', calculateOffsets);
  }, [calculateOffsets]);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedStep, setSelectedStep] = useState<TimelineItem | null>(null);

  const handleOpenModal = (step: TimelineItem) => {
    setSelectedStep(step);
    setModalOpen(true);
  };
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      <div
        className="w-full flex px-4 md:px-10 py-10 bg-c1 rounded-2xl gap-6 relative select-none flex-col md:flex-row"
        ref={wrapperRef}
      >
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
              {idx === 0
                ? svgFirst
                : idx === steps.length - 1
                ? svgLast
                : svgMiddle}
            </span>
          ))}
        </div>

        <ol className="flex flex-col flex-1 space-y-8 md:space-y-14">
          {steps.map((step, idx) => (
            <motion.li
              key={idx}
              className="relative flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div className="flex items-center w-full mb-3">
                <h3
                  ref={(el) => {
                    titleRefs.current[idx] = el;
                  }}
                  className="text-2xl md:text-4xl font-poppis font-semibold text-w whitespace-nowrap leading-none"
                >
                  {step.title}
                </h3>
                <div className="flex-grow h-1 md:h-2 bg-[#54505A]/25 rounded ml-2 md:ml-4" />
              </div>

              <div className="flex flex-col md:flex-row w-full justify-between items-start mb-4 gap-4 md:gap-8">
                <p className="text-base md:text-2xl text-c3 flex-1">
                  {step.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-start md:justify-end flex-shrink-0">
                  {step.languages.map((lang) => (
                    <span
                      key={lang}
                      className={`bg-b font-semibold font-poppins text-[10px] md:text-[12px] px-3 md:px-4 py-1 md:py-2 rounded-lg md:rounded-xl select-none whitespace-nowrap ${
                        languageColors[lang.toLowerCase()] || 'text-purple-800'
                      }`}
                    >
                      {lang.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <motion.div
                  className="w-full md:w-80 h-64 md:h-56 order-1 md:order-2 cursor-pointer"
                  onClick={() => handleOpenModal(step)}
                >
                  <ShowcaseViewer showcase={step.showcase} />
                </motion.div>
                <Link
                  href={step.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 md:gap-4 bg-b py-2 md:py-3 px-3 md:px-6 text-sm md:text-2xl font-semibold font-poppins rounded-lg md:rounded-xl hover:scale-105 active:scale-90 transition-transform duration-300 w-full md:w-fit justify-center order-2 md:order-1"
                >
                  VISITE O SITE
                  <img
                    src="/assets/svg/arrowRGd2.svg"
                    width={24}
                    height={24}
                    alt=""
                  />
                </Link>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>

      <AnimatePresence>
        {modalOpen && selectedStep && (
          <ProjectModal step={selectedStep} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Timeline;