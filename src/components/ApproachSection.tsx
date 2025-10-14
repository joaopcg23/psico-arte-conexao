import therapyApproachIllustration from "@/assets/therapy-approach-illustration.png";

const ApproachSection = () => {
  const whatsappLink = "https://wa.me/5521999999999"; // Atualizar com número real

  return (
    <section id="abordagem" className="relative bg-mint overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Abordagem</h2>
        
        <div className="relative bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl overflow-hidden">
          {/* Illustration in top right corner */}
          <div className="absolute top-0 right-0 w-48 md:w-64 lg:w-80 opacity-90">
            <img 
              src={therapyApproachIllustration} 
              alt="Ilustração terapia"
              className="w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl space-y-6 text-foreground">
            <p className="text-lg leading-relaxed">
              - Terapia baseada na ética profissional, respeitando-se o sigilo das informações prestadas.
            </p>
            
            <p className="text-lg leading-relaxed">
              - Escuta empática e atenta à individualidade e singularidade de cada paciente.
            </p>
            
            <p className="text-lg leading-relaxed">
              - Espaço seguro para lidar com emoções, dúvidas e desafios.
            </p>
            
            <p className="text-lg leading-relaxed">
              - Apoio e parceria no enfrentamento de situações dolorosas, contribuindo para sua mudança.
            </p>

            <div className="pt-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-cyan text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-hover transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Agende sua consulta
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
