/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, {
  useRef,
  useLayoutEffect,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';

export type TimelineItem = {
  title: string;
  description: string;
  url: string;
  languages: string[];
  imageUrls: string[];
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
  const [currentIndexes, setCurrentIndexes] = useState<number[]>(
    steps.map(() => 0),
  );

  const calculateOffsets = () => {
    if (!wrapperRef.current) return;
    const wrapperTop = wrapperRef.current.getBoundingClientRect().top;

    const offsets = titleRefs.current.map((el, idx) => {
      // --- CORREÇÃO FINAL APLICADA AQUI ---
      // Se for o primeiro item, fixa a posição em 18px.
      // 18px é metade da altura do ícone (36px), compensando o `translateY(-50%)`
      if (idx === 0) {
        return 18;
      }

      if (!el) return 24;
      const { top } = el.getBoundingClientRect();
      return top - wrapperTop - 17;
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

  const goToImage = useCallback(
    (stepIndex: number, targetIndex: number) => {
      if (targetIndex === currentIndexes[stepIndex]) return;
      setCurrentIndexes((prev) => {
        const updated = [...prev];
        updated[stepIndex] = targetIndex;
        return updated;
      });
    },
    [currentIndexes],
  );

  const goNext = useCallback(
    (stepIndex: number) => {
      const total = steps[stepIndex].imageUrls.length;
      const newIndex = (currentIndexes[stepIndex] + 1) % total;
      goToImage(stepIndex, newIndex);
    },
    [currentIndexes, steps, goToImage],
  );

  const goPrev = useCallback(
    (stepIndex: number) => {
      const total = steps[stepIndex].imageUrls.length;
      const newIndex = (currentIndexes[stepIndex] - 1 + total) % total;
      goToImage(stepIndex, newIndex);
    },
    [currentIndexes, steps, goToImage],
  );

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
    stepIndex: number,
  ) => {
    const threshold = 30;
    if (info.offset.x < -threshold) {
      goNext(stepIndex);
    } else if (info.offset.x > threshold) {
      goPrev(stepIndex);
    }
  };

  return (
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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="flex items-center w-full mb-3">
              <h3
                ref={(el) => {
                  titleRefs.current[idx] = el;
                }}
                className="text-2xl md:text-4xl font-poppis font-medium text-w whitespace-nowrap leading-none"
              >
                {step.title}
              </h3>
              <div className="flex-grow h-1 md:h-2 bg-[#54505A]/25 rounded ml-2 md:ml-4" />
            </div>

            <div className="flex flex-col w-full mb-4 gap-4 md:gap-6">
              <p className="text-base md:text-2xl text-c3 w-full">
                {step.description}
              </p>
              <div className="flex flex-wrap gap-2 md:justify-end">
                {step.languages.map((lang) => {
                  const color =
                    languageColors[lang.toLowerCase()] || 'text-purple-800';
                  return (
                    <span
                      key={lang}
                      className={`bg-b font-semibold font-poppins text-[10px] md:text-[12px] px-3 md:px-4 py-1 md:py-2 rounded-lg md:rounded-xl select-none whitespace-nowrap ${color}`}
                    >
                      {lang.toUpperCase()}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="mt-auto flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="w-full md:w-80 h-auto order-1 md:order-2">
                <motion.div
                  className="relative w-full h-24 md:h-30 overflow-hidden rounded-lg md:rounded-xl shadow-lg cursor-grab select-none"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(e, info) => handleDragEnd(e, info, idx)}
                  whileTap={{ cursor: 'grabbing' }}
                >
                  <AnimatePresence initial={false} mode="wait">
                    <motion.img
                      key={currentIndexes[idx]}
                      src={step.imageUrls[currentIndexes[idx]]}
                      alt={`Imagem ${currentIndexes[idx]}`}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      draggable={false}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    />
                  </AnimatePresence>

                  <button
                    className="absolute  left-1 top-1/2 -translate-y-1/2 z-10 p-2 rounded-2xl  hover:scale-110 transition-transform duration-200  cursor-pointer "
                    onClick={() => goPrev(idx)}
                    aria-label="Imagem anterior"
                    type="button"
                  >
                    <img
                      src="/assets/svg/arrowLC.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                  </button>
                  <button
                    className="absolute  right-1 top-1/2 -translate-y-1/2 z-10 p-2 rounded-2xl  hover:scale-110 transition-transform duration-200  cursor-pointer "
                    onClick={() => goNext(idx)}
                    aria-label="Próxima imagem"
                    type="button"
                  >
                    <img
                      src="/assets/svg/arrowRC.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                  </button>
                </motion.div>

                <div className="flex justify-center gap-2 mt-3">
                  {step.imageUrls.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goToImage(idx, i)}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        currentIndexes[idx] === i ? 'bg-c3/80' : 'bg-c3/40'
                      }`}
                      aria-label={`Ir para imagem ${i + 1}`}
                      type="button"
                      style={{ border: 'none', padding: 0 }}
                    />
                  ))}
                </div>
              </div>

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
  );
};

export default Timeline;