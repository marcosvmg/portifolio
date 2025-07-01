'use client';

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LoaderCircle, CheckCircle, AlertTriangle, Send } from 'lucide-react';

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

// Componente auxiliar para o conteúdo dinâmico do botão com ícones filled
const ButtonContent = ({ status }: { status: SubmissionStatus }) => {
  switch (status) {
    case 'submitting':
      return (
        <>
          <LoaderCircle size={20} className="animate-spin" />
          <span>ENVIANDO...</span>
        </>
      );
    case 'success':
      return (
        <>
          <CheckCircle size={22} className="text-amber-400" />
          <span>ENVIADA!</span>
        </>
      );
    case 'error':
      return (
        <>
          <AlertTriangle size={20} className="text-red-500/90" />
          <span>TENTE NOVAMENTE</span>
        </>
      );
    default:
      return (
        <>
          <span>ENVIAR MENSAGEM</span>
          <Send size={18} />
        </>
      );
  }
};

export default function Contato() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionStatus('submitting');

    const formData = { name, email, message };

    try {
      const response = await fetch('https://formspree.io/f/mldnzygz', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => setSubmissionStatus('idle'), 4000);
      } else {
        setSubmissionStatus('error');
        setTimeout(() => setSubmissionStatus('idle'), 4000);
      }
    } catch (error) {
      console.error('Submit Error:', error);
      setSubmissionStatus('error');
      setTimeout(() => setSubmissionStatus('idle'), 4000);
    }
  };

  // Função auxiliar para definir as classes do botão com base no status
  const getButtonClassName = () => {
    const baseClasses = `self-end rounded-2xl px-6 py-3 text-lg font-semibold transition-all duration-300
                        md:px-8 md:text-2xl font-poppins flex items-center justify-center gap-2 min-w-[300px] h-[68px] md:h-[76px]`;

    let stateClasses = '';
    if (submissionStatus === 'submitting' || submissionStatus === 'success') {
      stateClasses += ' cursor-not-allowed';
    } else {
      stateClasses += ' hover:-translate-y-1 active:scale-95';
    }

    switch (submissionStatus) {
      case 'success':
        return `${baseClasses} ${stateClasses} bg-c1 border-2 border-amber-400 text-amber-400`;
      case 'error':
        return `${baseClasses} ${stateClasses} bg-c1 border-2 border-red-500/60 text-red-500/90`;
      default:
        return `${baseClasses} ${stateClasses} bg-linear-90 from-[#7A37FF] to-[#4D17B8] text-w`;
    }
  };

  return (
    <section
      id="contato"
      className="w-full bg-b py-12 md:py-20 px-4 sm:px-6 lg:px-20"
    >
      <div className="container mx-auto flex w-full flex-col gap-8 sm:gap-12">
        <h2 className="font-poppins text-3xl font-semibold leading-none text-w text-right xs:text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
          CONTATO
        </h2>
        <div className="flex flex-col justify-between gap-10 md:flex-row md:gap-16 lg:gap-20">
          <div className="flex flex-col gap-6 text-base text-c3 sm:text-lg md:text-xl lg:text-2xl">
            <p>
              Estou disponível para novos projetos, colaborações e
              oportunidades. Sinta-se à vontade para me chamar via e-mail ou
              redes sociais.
            </p>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-w">Email:</span>
              <a
                href="mailto:devmarcosvmg@gmail.com"
                className="hover:underline"
              >
                devmarcosvmg@gmail.com
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-w">LinkedIn:</span>
              <a
                href="https://www.linkedin.com/in/marcosvmg/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/marcosvmg/
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-w">GitHub:</span>
              <a
                href="https://github.com/marcosvmg"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/marcosvmg
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-xl flex-col gap-4"
          >
            <div>
              <label htmlFor="name" className="sr-only">
                Seu nome
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Seu nome"
                className="w-full rounded-xl bg-c0 p-4 text-w placeholder-c3 outline-none transition-shadow focus:ring-2 focus:ring-purple-500"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Seu email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Seu email"
                className="w-full rounded-xl bg-c0 p-4 text-w placeholder-c3 outline-none transition-shadow focus:ring-2 focus:ring-purple-500"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Sua mensagem
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Sua mensagem"
                rows={5}
                className="w-full resize-none rounded-xl bg-c0 p-4 text-w placeholder-c3 outline-none transition-shadow focus:ring-2 focus:ring-purple-500"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <motion.button
              type="submit"
              layout
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className={getButtonClassName()}
              disabled={
                submissionStatus === 'submitting' ||
                submissionStatus === 'success'
              }
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={submissionStatus}
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center gap-3"
                >
                  <ButtonContent status={submissionStatus} />
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}
