/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export default function Contato() {
  return (
    <section
      id="contato"
      className="w-full bg-b py-12 md:py-20 px-4 sm:px-6 lg:px-20 "
    >
      <div className="container mx-auto w-full flex flex-col gap-8 sm:gap-12">
        {/* Título */}
        <h2 className="font-poppins font-semibold text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-w leading-none text-right ">
          CONTATO
        </h2>

        {/* Conteúdo */}
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-16 lg:gap-20">
          {/* Informações */}
          <div className="flex flex-col gap-6 text-c3 text-base sm:text-lg md:text-xl lg:text-2xl">
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

          {/* Formulário de contato */}
          <form className="w-full md:max-w-xl flex flex-col gap-4">
            <input
              type="text"
              placeholder="Seu nome"
              className="bg-c0 text-w placeholder-c3 p-4 rounded-xl outline-none"
              required
            />
            <input
              type="email"
              placeholder="Seu email"
              className="bg-c0 text-w placeholder-c3 p-4 rounded-xl outline-none"
              required
            />
            <textarea
              placeholder="Sua mensagem"
              rows={5}
              className="bg-c0 text-w placeholder-c3 p-4 rounded-xl outline-none resize-none"
              required
            />
            <button
              type="submit"
              className=" bg-linear-90 from-[#7A37FF] to-[#4D17B8] py-3 px-6 md:px-8 text-lg md:text-2xl font-semibold font-poppins rounded-2xl hover:scale-95 active:scale-90 transition-all duration-300 inline-block self-end"
            >
              <Link
              href="#contato"

              aria-label="Ir para seção de contato"
            >
              ENVIAR MENSAGEM
            </Link>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
