import psychologistHero from "@/assets/psychologist-hero.png";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/5521999999999"; // Atualizar com número real

  return (
    <section id="inicio" className="relative bg-coral overflow-hidden pt-28 pb-16">
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content - Left Side */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Dê o primeiro passo — sua saúde mental importa!
            </h1>
            
            <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
              <span className="font-semibold">Você não é o seu transtorno de ansiedade.</span> Descubra como a terapia 
              pode <span className="font-semibold">transformar a sua relação com a ansiedade</span>, ajudando você a 
              desenvolver <span className="font-semibold">formas mais saudáveis de enfrentar os desafios</span> do dia a dia.
            </p>

            <div className="mb-6">
              <p className="text-white text-lg mb-2 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Atendimento online
              </p>
            </div>

            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cyan text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-cyan-hover transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Entre em contato
            </a>
          </div>

          {/* Image - Right Side */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <img 
              src={psychologistHero} 
              alt="Jessica Melo - Psicóloga"
              className="w-full max-w-md h-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
