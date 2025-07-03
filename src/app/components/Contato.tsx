'use client';

import {
  useState,
  FormEvent,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// O ícone 'Send' foi removido da importação
import { LoaderCircle, Check, AlertTriangle } from 'lucide-react';

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

// --- HOOK REUTILIZÁVEL PARA LÓGICA DE ANIMAÇÃO DO CAMPO ---
const useFieldAnimation = (
  value: string | number | readonly string[] | undefined,
) => {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || (value ? value.toString().length > 0 : false);

  const labelVariants = {
    inactive: {
      y: '0%',
      scale: 1,
      color: 'rgb(161 161 170)', // text-zinc-400
    },
    active: {
      y: '-180%',
      scale: 0.85,
      color: 'rgb(139 92 246)', // text-violet-500
    },
  };

  return { isActive, labelVariants, setIsFocused };
};

// --- COMPONENTE ESPECÍFICO E SEGURO PARA INPUTS ---
const AnimatedInput = ({
  id,
  label,
  ...props
}: { id: string; label: string } & InputHTMLAttributes<HTMLInputElement>) => {
  const { isActive, labelVariants, setIsFocused } = useFieldAnimation(
    props.value,
  );

  return (
    <div className="relative mt-2">
      <motion.label
        htmlFor={id}
        className="absolute left-4 top-4 origin-left cursor-text font-poppins"
        variants={labelVariants}
        animate={isActive ? 'active' : 'inactive'}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        {label}
      </motion.label>
      <input
        id={id}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full rounded-xl bg-c0 p-4 pt-6 text-w placeholder-transparent outline-none ring-2 ring-transparent transition-shadow focus:ring-violet-500"
        {...props}
      />
    </div>
  );
};

// --- COMPONENTE ESPECÍFICO E SEGURO PARA TEXTAREA ---
const AnimatedTextarea = ({
  id,
  label,
  ...props
}: {
  id: string;
  label: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  const { isActive, labelVariants, setIsFocused } = useFieldAnimation(
    props.value,
  );

  return (
    <div className="relative mt-2">
      <motion.label
        htmlFor={id}
        className="absolute left-4 top-4 origin-left cursor-text font-poppins"
        variants={labelVariants}
        animate={isActive ? 'active' : 'inactive'}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        {label}
      </motion.label>
      <textarea
        id={id}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full resize-none rounded-xl bg-c0 p-4 pt-6 text-w placeholder-transparent outline-none ring-2 ring-transparent transition-shadow focus:ring-violet-500"
        {...props}
      />
    </div>
  );
};

// Componente para o conteúdo do botão
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
          <Check size={22} />
          <span>ENVIADA!</span>
        </>
      );
    case 'error':
      return (
        <>
          <AlertTriangle size={20} />
          <span>TENTE NOVAMENTE</span>
        </>
      );
    default:
      // ALTERAÇÃO AQUI: Substituído o ícone da biblioteca pelo seu SVG personalizado
      return (
        <>
          <span>ENVIAR MENSAGEM</span>
          <svg
            className="h-5 w-5 text-violet-400"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="currentColor"
          >
            <path d="M176.57-172.83q-26.79 11.4-50.44-4.34t-23.65-44.53v-162.47l346-95.83-346-95.83V-738.3q0-28.79 23.65-44.53 23.65-15.74 50.44-4.34l610.34 258.3q32.35 14.39 32.35 48.87t-32.35 48.87l-610.34 258.3Z" />
          </svg>
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
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error('Submit Error:', error);
      setSubmissionStatus('error');
    } finally {
      setTimeout(() => setSubmissionStatus('idle'), 4000);
    }
  };

  const getButtonClassName = () => {
    const baseClasses = `self-end rounded-2xl px-6 py-3 text-lg font-semibold transition-all duration-300 cursor-pointer
                        md:px-8 md:text-2xl font-poppins flex items-center justify-center gap-3 min-w-[300px] h-[68px] md:h-[76px]`;
    let stateClasses = ' ';
    if (submissionStatus === 'submitting' || submissionStatus === 'success') {
      stateClasses += 'cursor-not-allowed';
    } else {
      stateClasses += 'hover:-translate-y-1 active:scale-95';
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
      className="w-full  py-12 md:py-20 px-4 sm:px-6 lg:px-20 "
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
            className="flex w-full max-w-xl flex-col gap-6"
          >
            <AnimatedInput
              id="name"
              name="name"
              label="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="name"
            />
            <AnimatedInput
              id="email"
              name="email"
              label="Seu email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
            <AnimatedTextarea
              id="message"
              name="message"
              label="Sua mensagem"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
            />
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
