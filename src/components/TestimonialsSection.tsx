import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "P. A.",
      text: "A Jessica consegue conciliar sua técnica e conhecimento com uma forma acolhedora e atenciosa. Ao mesmo tempo em que nos provoca reflexões importantes para situações as quais nem sempre conseguimos enxergar de uma forma realista, ela nos oferece todo suporte e nos passa a segurança necessária para que possamos atingir áreas que não tínhamos condições de acessar antes."
    },
    {
      name: "V. C.",
      text: "Jessica é uma excelente profissional! Atenciosa, pontual, a sessão é ótima."
    },
    {
      name: "A. C.",
      text: "Como sempre, terapia muito boa e esclarecedora demais! Sempre saio melhor que entro."
    },
    {
      name: "L. N.",
      text: "Trabalhar com a Jessica foi muito bom, ela sabe dirigir as sessões com calma e cuidado. Estou satisfeita com o serviço dela."
    },
    {
      name: "M. M.",
      text: "Fui uma das pacientes da Jessica e hoje venho relatar como foi fazer terapia com essa profissional que me acolheu tão bem e respeitosamente, me ouviu e me auxiliou nos momentos que eu mais precisei, fez a cada sessão um aprendizado diferente e sempre me respeitou quando dizia que não queria continuar com algum tipo de procedimento. Me arrancou muito choro sim pois faz parte do processo, porém foi libertador cada um deles. Os seus ensinamentos levo comigo procurando sempre sem um humano melhor e nunca somente me olhando, mas olhando o outro também."
    },
    {
      name: "L. L.",
      text: "Durante os meses de consulta que tive com a doutora Jessica, consegui mudar minha forma de enxergar o mundo ao meu redor, e não só entender melhor os outros como também a mim mesmo. Me senti confortável nas sessões e percebi um alívio contínuo quando me vi em paz comigo mesmo."
    },
    {
      name: "L. M.",
      text: "Iniciar na terapia foi um grande desafio, ainda existia muito preconceito e resistência de minha parte. Tomei a iniciativa quando percebi que precisava de ajuda de um profissional para compreender o que eu sentia. Então encontrei a Jessica, uma ótima profissional, atenciosa, disposta a escutar e a me entender. O aprendizado é gradual, Jessica me ajudou muito em todas as minhas necessidades, tanto nas que eu enxergava e outras que eu não percebia. As sessões sempre eram muito boas. Sem dúvidas a cada sessão eu entrava uma pessoa e sai melhor que entrei."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const prev = (currentIndex - 1 + testimonials.length) % testimonials.length;
    const next = (currentIndex + 1) % testimonials.length;
    return [prev, currentIndex, next];
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Depoimentos
        </h2>

        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-4">
            {/* Previous Button */}
            <button
              onClick={prevTestimonial}
              className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-coral hover:bg-coral-dark transition-colors z-10"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Testimonials Container */}
            <div className="flex items-center justify-center gap-4 flex-1 relative h-[400px] md:h-[350px]">
              {getVisibleTestimonials().map((index, position) => {
                const isCenter = position === 1;
                return (
                  <div
                    key={index}
                    className={`absolute transition-all duration-500 ease-in-out ${
                      isCenter
                        ? 'z-20 scale-100 opacity-100 transform translate-x-0'
                        : position === 0
                        ? 'z-10 scale-75 opacity-40 -translate-x-[85%] hidden md:block'
                        : 'z-10 scale-75 opacity-40 translate-x-[85%] hidden md:block'
                    }`}
                    style={{
                      width: isCenter ? '100%' : '90%',
                      maxWidth: isCenter ? '600px' : '500px',
                    }}
                  >
                    <div className="bg-gradient-to-br from-coral to-coral-dark rounded-3xl p-8 md:p-10 shadow-2xl h-full flex flex-col">
                      <div className="flex-1 overflow-y-auto">
                        <p className="text-white text-lg leading-relaxed mb-6">
                          "{testimonials[index].text}"
                        </p>
                      </div>
                      <p className="text-white font-bold text-xl mt-4">
                        — {testimonials[index].name}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Next Button */}
            <button
              onClick={nextTestimonial}
              className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-coral hover:bg-coral-dark transition-colors z-10"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-coral hover:bg-coral-dark transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextTestimonial}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-coral hover:bg-coral-dark transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-coral w-8' : 'bg-muted'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
