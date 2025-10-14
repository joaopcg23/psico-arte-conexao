import { Brain, SmilePlus, Hand, Sparkles } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Ressignificação",
      description: "O que será que a ansiedade está querendo me dizer? O que posso fazer com isso?"
    },
    {
      icon: SmilePlus,
      title: "Equilíbrio emocional",
      description: "Encontre uma forma mais saudável de conviver com suas emoções"
    },
    {
      icon: Hand,
      title: "Aprenda a escutar suas necessidades",
      description: "Saiba como tomar decisões alinhadas aos seus objetivos"
    },
    {
      icon: Sparkles,
      title: "Crescimento pessoal",
      description: "Aumente sua confiança e autoestima"
    }
  ];

  return (
    <section id="beneficios" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
                  <benefit.icon className="w-10 h-10 text-foreground" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
