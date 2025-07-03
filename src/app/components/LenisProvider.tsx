'use client';

import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // --- NOVOS PARÂMETROS: MAIS RÁPIDO E MAIS FLUIDO ---
    const lenis = new Lenis({
      // lerp: Controla a suavidade. Um valor baixo como este
      // cria um efeito "líquido" bem pronunciado.
      lerp: 0.07,

      // wheelMultiplier: Aumenta o impacto inicial da roda do mouse.
      // Deixa a rolagem mais rápida e responsiva.
      wheelMultiplier: 1.2,
    });

    // Roda a animação de rolagem a cada frame do navegador
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    const rafId = requestAnimationFrame(raf);

    // Adiciona o listener para os links de âncora
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as Element).closest('a[href^="#"]');
      if (link) {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (!href) return;

        const headerOffset = 120;

        // A animação do clique agora é mais rápida e impactante
        lenis.scrollTo(href === '#' ? 0 : href, {
          offset: -headerOffset,
          duration: 1.5, // Duração da animação reduzida para 1.5s
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Curva de easing rápida no início
        });
      }
    };

    document.addEventListener('click', handleClick);

    // Função de limpeza
    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleClick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}