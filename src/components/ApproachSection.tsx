import therapyIllustration from "@/assets/therapy-illustration.png";

const ApproachSection = () => {
  const whatsappLink = "https://wa.me/5521999999999"; // Atualizar com número real

  return (
    <section className="relative bg-mint overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Abordagem</h2>
            
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl space-y-6 text-foreground">
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

          <div className="order-first lg:order-last flex justify-center">
            <img 
              src={therapyIllustration} 
              alt="Ilustração terapia"
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
