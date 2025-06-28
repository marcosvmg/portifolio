'use client';

import { useState, FormEvent } from 'react';

export default function Contato() {
  // --- ESTADO PARA OS CAMPOS DO FORMULÁRIO ---
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // --- ESTADO PARA O FEEDBACK DE ENVIO ---
  type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Impede o recarregamento da página
    setSubmissionStatus('submitting');

    // --- SIMULAÇÃO DE ENVIO PARA API ---
    // Em um projeto real, você faria uma chamada `fetch` aqui para sua API
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simula 2s de espera

    // Simulação de sucesso. Mude para 'error' para testar o estado de erro.
    const success = true;

    if (success) {
      setSubmissionStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setSubmissionStatus('error');
    }
  };

  // Helper para o texto do botão
  const getButtonText = () => {
    switch (submissionStatus) {
      case 'submitting':
        return 'ENVIANDO...';
      case 'success':
        return 'MENSAGEM ENVIADA!';
      case 'error':
        return 'ERRO, TENTE NOVAMENTE';
      default:
        return 'ENVIAR MENSAGEM';
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
              Estou disponível para novos projetos, colaborações e oportunidades. Sinta-se à vontade para me chamar via e-mail ou redes sociais.
            </p>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-w">Email:</span>
              <a href="mailto:seuemail@dominio.com" className="hover:underline">
                seuemail@dominio.com
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-w">LinkedIn:</span>
              <a
                href="https://www.linkedin.com/in/seu-perfil"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/seu-perfil
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-w">GitHub:</span>
              <a
                href="https://github.com/seuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/seuusuario
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex w-full max-w-xl flex-col gap-4">
            <div>
              <label htmlFor="name" className="sr-only">Seu nome</label>
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
              <label htmlFor="email" className="sr-only">Seu email</label>
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
              <label htmlFor="message" className="sr-only">Sua mensagem</label>
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
            <button
              type="submit"
              className={`
                self-end rounded-2xl px-6 py-3 text-lg font-semibold transition-all duration-300
                md:px-8 md:text-2xl font-poppins
                ${submissionStatus === 'success' ? 'bg-green-600' : ''}
                ${submissionStatus === 'error' ? 'bg-red-600' : ''}
                ${submissionStatus === 'idle' || submissionStatus === 'submitting' ? 'bg-linear-90 from-[#7A37FF] to-[#4D17B8]' : ''}
                ${submissionStatus === 'submitting' || submissionStatus === 'success' ? 'cursor-not-allowed' : 'hover:-translate-y-1 active:scale-95'}
              `}
              disabled={submissionStatus === 'submitting' || submissionStatus === 'success'}
            >
              {getButtonText()}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}