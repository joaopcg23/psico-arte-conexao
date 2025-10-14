import psychologistAbout from "@/assets/psychologist-about.png";

const AboutSection = () => {
  return (
    <section id="sobre" className="relative bg-coral overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <img 
              src={psychologistAbout} 
              alt="Jessica Melo - Psicóloga"
              className="w-full max-w-sm h-auto"
            />
          </div>
          
          <div className="order-1 lg:order-2 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Sobre mim</h2>
            
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                <span className="font-semibold">Olá, muito prazer!</span> Sou a Jessica Melo, psicóloga registrada no 
                <span className="font-semibold"> Conselho Regional de Psicologia do Rio de Janeiro (CRP 05/60189)</span> com 
                <span className="font-semibold"> 5 anos de experiência clínica.</span>
              </p>
              
              <p>
                Formada pela <span className="font-semibold">Universidade do Estado do Rio de Janeiro (UERJ)</span>, 
                com formação em <span className="font-semibold">Gestalt-terapia (Instituto Gestalt-Paraná)</span> e 
                especialista em <span className="font-semibold">Psicologia Hospitalar e da Saúde (PUC-RIO)</span>, 
                dedico meu trabalho a cuidar de pessoas que atravessam sofrimentos de vários tipos — 
                <span className="font-semibold"> especialmente aquelas com quadros de ansiedade e depressão.</span>
              </p>
              
              <p>
                No <span className="font-semibold">âmbito hospitalar</span>, tenho especial encanto pela área de 
                <span className="font-semibold"> envelhecimento</span> e pelos <span className="font-semibold">cuidados paliativos</span>, 
                já tendo atuado em ambos os contextos em um <span className="font-semibold">hospital de transição.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
