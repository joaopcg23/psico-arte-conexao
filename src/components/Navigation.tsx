import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of navigation bar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold text-coral">
            Jessica Melo
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-coral transition-colors font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-foreground hover:text-coral transition-colors font-medium"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-coral transition-colors font-medium"
            >
              Sobre mim
            </button>
            <button
              onClick={() => scrollToSection("abordagem")}
              className="text-foreground hover:text-coral transition-colors font-medium"
            >
              Abordagem
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-foreground hover:text-coral transition-colors font-medium"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-foreground hover:text-coral transition-colors font-medium"
            >
              FAQ
            </button>
          </div>

          <a
            href="https://wa.me/5521999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan text-white px-6 py-2 rounded-full font-semibold hover:bg-cyan-hover transition-all duration-300"
          >
            Agendar
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
