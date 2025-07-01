/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useState, useCallback, useRef, useLayoutEffect, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Monitor, Smartphone, MousePointerClick } from 'lucide-react';

// --- TIPOS ---
export interface TimelineItem {
  title: string;
  description: string;
  url: string;
  languages: string[];
  showcase: {
    desktop: { gifUrl: string; };
    mobile: { gifUrl: string; };
  };
}

type TimelineProps = {
  steps: TimelineItem[];
};

const svgFirst = <img src="/assets/svg/stepFirst.svg" alt="" width={36} height={36} />;
const svgMiddle = <img src="/assets/svg/stepMiddle.svg" alt="" width={36} height={36} />;
const svgLast = <img src="/assets/svg/stepLast.svg" alt="" width={36} height={36} />;

const languageColors: Record<string, string> = {
  html: 'text-amber-600',
  css: 'text-sky-600',
  javascript: 'text-yellow-600',
  react: 'text-blue-600',
};

// --- SUBCOMPONENTE SHOWCASEVIEWER ---
const ShowcaseViewer = ({ showcase }: { showcase: TimelineItem['showcase'] }) => {
  const [activeView, setActiveView] = useState<'desktop' | 'mobile'>('desktop');
  const activeGif = activeView === 'desktop' ? showcase.desktop.gifUrl : showcase.mobile.gifUrl;

  return (
    <div className="w-full h-full flex flex-col group">
        <motion.div
            layout
            transition={{ type: 'spring', stiffness: 400, damping: 40 }}
            className={`relative flex-grow overflow-hidden rounded-lg md:rounded-xl shadow-lg select-none
            ${activeView === 'mobile' ? 'aspect-[9/16] mx-auto w-auto' : 'aspect-video w-full'}`}
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

            <div className="pointer-events-none absolute top-2 right-2 z-10 opacity-70">
              <div className="flex items-center justify-center rounded-full bg-black/40 p-2 shadow-lg backdrop-blur-sm">
                <MousePointerClick className="h-5 w-5 text-white" />
              </div>
            </div>

        </motion.div>
        <div className="flex justify-center items-center gap-4 mt-3 flex-shrink-0">
            <button onClick={(e) => { e.stopPropagation(); setActiveView('desktop'); }} aria-label="Ver no desktop" className={`p-2 rounded-md transition-colors ${activeView === 'desktop' ? 'bg-violet-400/20 text-violet-300' : 'text-zinc-500 hover:text-zinc-300'}`}>
                <Monitor size={20} />
            </button>
            <div className="h-4 w-px bg-zinc-700" />
            <button onClick={(e) => { e.stopPropagation(); setActiveView('mobile'); }} aria-label="Ver no mobile" className={`p-2 rounded-md transition-colors ${activeView === 'mobile' ? 'bg-violet-400/20 text-violet-300' : 'text-zinc-500 hover:text-zinc-300'}`}>
                <Smartphone size={20} />
            </button>
        </div>
    </div>
  );
};


// --- SUBCOMPONENTE DO MODAL ---
const ProjectModal = ({ step, onClose }: { step: TimelineItem; onClose: () => void; }) => {
  const [activeView, setActiveView] = useState<'desktop' | 'mobile'>('desktop');
  const activeGif = activeView === 'desktop' ? step.showcase.desktop.gifUrl : step.showcase.mobile.gifUrl;

  return (
    <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div
        layout
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`relative w-full max-h-[90vh] flex flex-col ${activeView === 'mobile' ? 'max-w-xl' : 'max-w-6xl'}`}
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full h-full flex flex-col group">
            <motion.div
                layout
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex-grow overflow-hidden rounded-lg md:rounded-xl shadow-lg select-none mx-auto h-[75vh] max-w-full ${activeView === 'mobile' ? 'aspect-[9/16]' : 'aspect-video'}`}
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
            <div className="flex justify-center items-center gap-4 mt-3 flex-shrink-0">
                <button onClick={() => setActiveView('desktop')} aria-label="Ver no desktop" className={`p-2 rounded-md transition-all duration-200 ${activeView === 'desktop' ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/30' : 'text-zinc-400 hover:text-white'}`}>
                    <Monitor size={20} />
                </button>
                <div className="h-4 w-px bg-zinc-700" />
                <button onClick={() => setActiveView('mobile')} aria-label="Ver no mobile" className={`p-2 rounded-md transition-all duration-200 ${activeView === 'mobile' ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/30' : 'text-zinc-400 hover:text-white'}`}>
                    <Smartphone size={20} />
                </button>
            </div>
        </div>
      </motion.div>
      <button onClick={onClose} className="absolute top-4 right-4 bg-white/20 text-white p-2 rounded-full z-10 hover:bg-white/40 transition-colors" aria-label="Fechar modal"><X size={24} /></button>
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
      if (idx === 0) return 18; if (!el) return 24;
      const { top } = el.getBoundingClientRect();
      return top - wrapperTop - 17;
    });
    setDotOffsets(offsets);
  }, []);

  useLayoutEffect(() => { calculateOffsets(); }, [calculateOffsets]);
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
      <div className="w-full flex px-4 md:px-10 py-10 bg-c1 rounded-2xl gap-6 relative select-none flex-col md:flex-row" ref={wrapperRef}>
        <div className="relative w-2 bg-c2 rounded-full hidden md:block" style={{ height: dotOffsets.length ? dotOffsets[dotOffsets.length - 1] + 18 : '100%' }}>
          {dotOffsets.map((top, idx) => (
            <span key={idx} className="absolute left-1/2 w-9 rounded-2xl" style={{ top: `${top}px`, transform: 'translate(-50%, -50%)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {idx === 0 ? svgFirst : idx === steps.length - 1 ? svgLast : svgMiddle}
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
                <h3 ref={(el) => { titleRefs.current[idx] = el; }} className="text-2xl md:text-4xl font-poppis font-medium text-w whitespace-nowrap leading-none">
                  {step.title}
                </h3>
                <div className="flex-grow h-1 md:h-2 bg-[#54505A]/25 rounded ml-2 md:ml-4" />
              </div>

              {/* LAYOUT ALTERADO AQUI: flex-col em mobile, md:flex-row em desktop */}
              <div className="flex flex-col md:flex-row w-full justify-between items-start mb-4 gap-4 md:gap-8">
                <p className="text-base md:text-2xl text-c3 flex-1">
                  {step.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-start md:justify-end flex-shrink-0">
                  {step.languages.map((lang) => (<span key={lang} className={`bg-b font-semibold font-poppins text-[10px] md:text-[12px] px-3 md:px-4 py-1 md:py-2 rounded-lg md:rounded-xl select-none whitespace-nowrap ${languageColors[lang.toLowerCase()] || 'text-purple-800'}`}>{lang.toUpperCase()}</span>))}
                </div>
              </div>

              <div className="mt-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <motion.div
                  className="w-full md:w-80 h-64 md:h-56 order-1 md:order-2 cursor-pointer"
                  onClick={() => handleOpenModal(step)}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <ShowcaseViewer showcase={step.showcase} />
                </motion.div>
                <Link href={step.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 md:gap-4 bg-b py-2 md:py-3 px-3 md:px-6 text-sm md:text-2xl font-semibold font-poppins rounded-lg md:rounded-xl hover:scale-105 active:scale-90 transition-transform duration-300 w-full md:w-fit justify-center order-2 md:order-1">
                  VISITE O SITE
                  <img src="/assets/svg/arrowRGd2.svg" width={24} height={24} alt="" />
                </Link>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>

      <AnimatePresence>
        {modalOpen && selectedStep && <ProjectModal step={selectedStep} onClose={handleCloseModal} />}
      </AnimatePresence>
    </>
  );
};

export default Timeline;