import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Como funciona o primeiro atendimento?",
      answer: "É uma sessão de escuta inicial para entender seus motivos, alinhar frequência, dia/horário e combinar valores."
    },
    {
      question: "A terapia é online ou presencial?",
      answer: "O atendimento é online com horário combinado para maior conforto da sua sessão."
    },
    {
      question: "Qual a duração das sessões?",
      answer: "Normalmente 50 minutos a 1 hora."
    },
    {
      question: "Quem pode fazer terapia?",
      answer: "Atendimento para maiores de 18 anos (adultos)."
    },
    {
      question: "A terapia é sigilosa?",
      answer: "Sim — todo atendimento segue o código de ética profissional e é confidencial."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Perguntas Frequentes
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-2xl px-6 border-none shadow-md hover:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-coral hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
