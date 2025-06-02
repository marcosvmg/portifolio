/* eslint-disable @next/next/no-img-element */

export default function Formacao() {
  return (
    <section
      id="formacao"
      className="w-full bg-b py-12 md:py-20 px-4 sm:px-6 lg:px-20"
    >
      {/* Container pai com alinhamento lado a lado em todas as telas */}
      <div className="flex flex-row items-center justify-between gap-4 w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* H2 com tamanho responsivo */}
        <h2 className="font-poppins font-semibold text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-w leading-none flex-shrink">
          FORMAÇÃO
        </h2>

        {/* Dots compactos e alinhados ao lado */}
        <div className="flex flex-col gap-1 xs:gap-2 md:gap-4 lg:gap-6 flex-shrink-0">
          <span className="inline-flex items-center gap-1 xs:gap-2 rounded-xl xs:rounded-2xl font-poppins text-c3 bg-c0 p-1 xs:p-2 text-xs xs:text-sm sm:text-base whitespace-nowrap">
            <img
              src="/assets/svg/dotCursando.svg"
              alt=""
              className="flex-shrink-0  w-2 h-2 md:w-4 md:h-4"
            />
            Cursando
          </span>
          <span className="inline-flex items-center gap-1 xs:gap-2 rounded-xl xs:rounded-2xl font-poppins text-c3 bg-c0 p-1 xs:p-2 text-xs xs:text-sm sm:text-base whitespace-nowrap">
            <img
              src="/assets/svg/dotCompleto.svg"
              alt=""
              className="flex-shrink-0  w-2 h-2 md:w-4 md:h-4"
            />
            Completo
          </span>
        </div>
      </div>

      {/* Graduação */}
      <div className="mx-auto mt-10 sm:mt-16 px-4 sm:px-6 lg:px-12 w-full max-w-[1820px]">
        <h3 className="font-poppins font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-w mb-6 sm:mb-10">
          Graduação:
        </h3>

        <div className="flex flex-col md:flex-row gap-2 sm:gap-4 md:gap-6 lg:gap-8 mb-2 lg:mb-8  justify-center">
          {/* Card 1 */}
          <div className="bg-c0 p-4 sm:p-5 md:p-6 rounded-xl shadow-md flex flex-col gap-3 sm:gap-4 w-full md:w-1/2">
            <div className="flex justify-between items-start sm:items-center">
              <div>
                <h3 className="text-c3 text-xl sm:text-2xl md:text-3xl font-semibold">
                  Ensino Superior
                  <div className="w-full h-1 bg-[#54505A]/25 rounded mt-1" />
                </h3>
              </div>
              <img
                src="/assets/svg/dotCursando.svg"
                alt="Cursando"
                className="md:w-9 md:h-9 w-5 h-5 -mr-2 md:-mr-4 -mt-2 md:-mt-8 flex-shrink-0"
              />
            </div>
            <h4 className="text-w font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Desenvolvimento de Software Multiplataforma
            </h4>
            <p className="text-c3 text-base sm:text-lg md:text-xl lg:text-2xl">
              FATEC-PG, 2024 - 2027
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-c0 p-4 sm:p-5 md:p-6 rounded-xl shadow-md flex flex-col gap-3 sm:gap-4 w-full md:w-1/2">
            <div className="flex justify-between items-start sm:items-center">
              <div>
                <h3 className="text-c3 text-xl sm:text-2xl md:text-3xl font-semibold">
                  Ensino Superior
                  <div className="w-full h-1 bg-[#54505A]/25 rounded mt-1" />
                </h3>
              </div>
              <img
                src="/assets/svg/dotCompleto.svg"
                alt="Completo"
                className="md:w-9 md:h-9 w-5 h-5 -mr-2 md:-mr-4 -mt-2 md:-mt-8 flex-shrink-0"
              />
            </div>
            <h4 className="text-w font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Desenvolvimento de Software Multiplataforma
            </h4>
            <p className="text-c3 text-base sm:text-lg md:text-xl lg:text-2xl">
              FATEC-PG, 2024 - 2027
            </p>
          </div>
        </div>
      </div>

      {/* Cursos Complementares */}
      <div className="mx-auto mt-10 sm:mt-16 px-4 sm:px-6 lg:px-12 w-full max-w-[1820px]">
        <h3 className="font-poppins font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-w mb-6 sm:mb-10">
          Cursos Complementares:
        </h3>

        <div className="flex flex-col md:flex-row gap-2 sm:gap-4 md:gap-6 lg:gap-8 mb-2 lg:mb-8 justify-center ">
          {/* Card 1 */}
          <div className="bg-c0 p-4 sm:p-5 md:p-6 rounded-xl shadow-md flex flex-col gap-3 sm:gap-4 w-full md:w-1/2">
            <div className="flex justify-between items-start sm:items-center">
              <div>
                <h3 className="text-c3 text-xl sm:text-2xl md:text-3xl font-semibold">
                  Ensino Superior
                  <div className="w-full h-1 bg-[#54505A]/25 rounded mt-1" />
                </h3>
              </div>
              <img
                src="/assets/svg/dotCursando.svg"
                alt="Cursando"
                className="md:w-9 md:h-9 w-5 h-5 -mr-2 md:-mr-4 -mt-2 md:-mt-8 flex-shrink-0"
              />
            </div>
            <h4 className="text-w font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Desenvolvimento de Software Multiplataforma
            </h4>
            <p className="text-c3 text-base sm:text-lg md:text-xl lg:text-2xl">
              FATEC-PG, 2024 - 2027
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-c0 p-4 sm:p-5 md:p-6 rounded-xl shadow-md flex flex-col gap-3 sm:gap-4 w-full md:w-1/2">
            <div className="flex justify-between items-start sm:items-center">
              <div>
                <h3 className="text-c3 text-xl sm:text-2xl md:text-3xl font-semibold">
                  Ensino Superior
                  <div className="w-full h-1 bg-[#54505A]/25 rounded mt-1" />
                </h3>
              </div>
              <img
                src="/assets/svg/dotCompleto.svg"
                alt="Completo"
                className="md:w-9 md:h-9 w-5 h-5 -mr-2 md:-mr-4 -mt-2 md:-mt-8 flex-shrink-0"
              />
            </div>
            <h4 className="text-w font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Desenvolvimento de Software Multiplataforma
            </h4>
            <p className="text-c3 text-base sm:text-lg md:text-xl lg:text-2xl">
              FATEC-PG, 2024 - 2027
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 sm:gap-4 md:gap-6 lg:gap-8 mb-2 lg:mb-8 justify-center ">
          {/* Card 1 */}
          <div className="bg-c0 p-4 sm:p-5 md:p-6 rounded-xl shadow-md flex flex-col gap-3 sm:gap-4 w-full md:w-1/2">
            <div className="flex justify-between items-start sm:items-center">
              <div>
                <h3 className="text-c3 text-xl sm:text-2xl md:text-3xl font-semibold">
                  Ensino Superior
                  <div className="w-full h-1 bg-[#54505A]/25 rounded mt-1" />
                </h3>
              </div>
              <img
                src="/assets/svg/dotCursando.svg"
                alt="Cursando"
                className="md:w-9 md:h-9 w-5 h-5 -mr-2 md:-mr-4 -mt-2 md:-mt-8 flex-shrink-0"
              />
            </div>
            <h4 className="text-w font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Desenvolvimento de Software Multiplataforma
            </h4>
            <p className="text-c3 text-base sm:text-lg md:text-xl lg:text-2xl">
              FATEC-PG, 2024 - 2027
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-c0 p-4 sm:p-5 md:p-6 rounded-xl shadow-md flex flex-col gap-3 sm:gap-4 w-full md:w-1/2">
            <div className="flex justify-between items-start sm:items-center">
              <div>
                <h3 className="text-c3 text-xl sm:text-2xl md:text-3xl font-semibold">
                  Ensino Superior
                  <div className="w-full h-1 bg-[#54505A]/25 rounded mt-1" />
                </h3>
              </div>
              <img
                src="/assets/svg/dotCompleto.svg"
                alt="Completo"
                className="md:w-9 md:h-9 w-5 h-5 -mr-2 md:-mr-4 -mt-2 md:-mt-8 flex-shrink-0"
              />
            </div>
            <h4 className="text-w font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Desenvolvimento de Software Multiplataforma
            </h4>
            <p className="text-c3 text-base sm:text-lg md:text-xl lg:text-2xl">
              FATEC-PG, 2024 - 2027
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 sm:gap-4 md:gap-6 lg:gap-8 mb-2 lg:mb-8 justify-center ">
          {/* Card 1 */}
          <div className="bg-c0 p-4 sm:p-5 md:p-6 rounded-xl shadow-md flex flex-col gap-3 sm:gap-4 w-full md:w-1/2">
            <div className="flex justify-between items-start sm:items-center">
              <div>
                <h3 className="text-c3 text-xl sm:text-2xl md:text-3xl font-semibold">
                  Ensino Superior
                  <div className="w-full h-1 bg-[#54505A]/25 rounded mt-1" />
                </h3>
              </div>
              <img
                src="/assets/svg/dotCursando.svg"
                alt="Cursando"
                className="md:w-9 md:h-9 w-5 h-5 -mr-2 md:-mr-4 -mt-2 md:-mt-8 flex-shrink-0"
              />
            </div>
            <h4 className="text-w font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Desenvolvimento de Software Multiplataforma
            </h4>
            <p className="text-c3 text-base sm:text-lg md:text-xl lg:text-2xl">
              FATEC-PG, 2024 - 2027
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-c0 p-4 sm:p-5 md:p-6 rounded-xl shadow-md flex flex-col gap-3 sm:gap-4 w-full md:w-1/2">
            <div className="flex justify-between items-start sm:items-center">
              <div>
                <h3 className="text-c3 text-xl sm:text-2xl md:text-3xl font-semibold">
                  Ensino Superior
                  <div className="w-full h-1 bg-[#54505A]/25 rounded mt-1" />
                </h3>
              </div>
              <img
                src="/assets/svg/dotCompleto.svg"
                alt="Completo"
                className="md:w-9 md:h-9 w-5 h-5 -mr-2 md:-mr-4 -mt-2 md:-mt-8 flex-shrink-0"
              />
            </div>
            <h4 className="text-w font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Desenvolvimento de Software Multiplataforma
            </h4>
            <p className="text-c3 text-base sm:text-lg md:text-xl lg:text-2xl">
              FATEC-PG, 2024 - 2027
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 sm:gap-4 md:gap-6 lg:gap-8 mb-2 lg:mb-8 justify-center ">
          {/* Card 1 */}
          <div className="bg-c0 p-4 sm:p-5 md:p-6 rounded-xl shadow-md flex flex-col gap-3 sm:gap-4 w-full md:w-1/2">
            <div className="flex justify-between items-start sm:items-center">
              <div>
                <h3 className="text-c3 text-xl sm:text-2xl md:text-3xl font-semibold">
                  Ensino Superior
                  <div className="w-full h-1 bg-[#54505A]/25 rounded mt-1" />
                </h3>
              </div>
              <img
                src="/assets/svg/dotCursando.svg"
                alt="Cursando"
                className="md:w-9 md:h-9 w-5 h-5 -mr-2 md:-mr-4 -mt-2 md:-mt-8 flex-shrink-0"
              />
            </div>
            <h4 className="text-w font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Desenvolvimento de Software Multiplataforma
            </h4>
            <p className="text-c3 text-base sm:text-lg md:text-xl lg:text-2xl">
              FATEC-PG, 2024 - 2027
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-c0 p-4 sm:p-5 md:p-6 rounded-xl shadow-md flex flex-col gap-3 sm:gap-4 w-full md:w-1/2">
            <div className="flex justify-between items-start sm:items-center">
              <div>
                <h3 className="text-c3 text-xl sm:text-2xl md:text-3xl font-semibold">
                  Ensino Superior
                  <div className="w-full h-1 bg-[#54505A]/25 rounded mt-1" />
                </h3>
              </div>
              <img
                src="/assets/svg/dotCompleto.svg"
                alt="Completo"
                className="md:w-9 md:h-9 w-5 h-5 -mr-2 md:-mr-4 -mt-2 md:-mt-8 flex-shrink-0"
              />
            </div>
            <h4 className="text-w font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Desenvolvimento de Software Multiplataforma
            </h4>
            <p className="text-c3 text-base sm:text-lg md:text-xl lg:text-2xl">
              FATEC-PG, 2024 - 2027
            </p>
          </div>
        </div>
      </div>

      {/* Idiomas */}
      <div className="mx-auto mt-10 sm:mt-16 px-4 sm:px-6 lg:px-12 w-full max-w-[1820px]">
        <h3 className="font-poppins font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-w mb-6 sm:mb-10">
          Idiomas:
        </h3>

        <div className="flex flex-col md:flex-row gap-2 sm:gap-4 md:gap-6 lg:gap-8 mb-2lgd:mb- 8justify-center">
          {/* Card 1 */}
          <div className="bg-c0 p-4 sm:p-5 md:p-6 rounded-xl shadow-md flex flex-col gap-3 sm:gap-4 w-full md:w-1/2">
            <div className="flex justify-between items-start sm:items-center">
              <div>
                <h3 className="text-c3 text-xl sm:text-2xl md:text-3xl font-semibold">
                  Ensino Superior
                  <div className="w-full h-1 bg-[#54505A]/25 rounded mt-1" />
                </h3>
              </div>
              <img
                src="/assets/svg/dotCursando.svg"
                alt="Cursando"
                className="md:w-9 md:h-9 w-5 h-5 -mr-2 md:-mr-4 -mt-2 md:-mt-8 flex-shrink-0"
              />
            </div>
            <h4 className="text-w font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Desenvolvimento de Software Multiplataforma
            </h4>
            <p className="text-c3 text-base sm:text-lg md:text-xl lg:text-2xl">
              FATEC-PG, 2024 - 2027
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-c0 p-4 sm:p-5 md:p-6 rounded-xl shadow-md flex flex-col gap-3 sm:gap-4 w-full md:w-1/2">
            <div className="flex justify-between items-start sm:items-center">
              <div>
                <h3 className="text-c3 text-xl sm:text-2xl md:text-3xl font-semibold">
                  Ensino Superior
                  <div className="w-full h-1 bg-[#54505A]/25 rounded mt-1" />
                </h3>
              </div>
              <img
                src="/assets/svg/dotCompleto.svg"
                alt="Completo"
                className="md:w-9 md:h-9 w-5 h-5 -mr-2 md:-mr-4 -mt-2 md:-mt-8 flex-shrink-0"
              />
            </div>
            <h4 className="text-w font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Desenvolvimento de Software Multiplataforma
            </h4>
            <p className="text-c3 text-base sm:text-lg md:text-xl lg:text-2xl">
              FATEC-PG, 2024 - 2027
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
