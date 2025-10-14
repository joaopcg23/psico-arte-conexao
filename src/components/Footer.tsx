const Footer = () => {
  const whatsappLink = "https://wa.me/5521999999999"; // Atualizar com número real

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold mb-4">Jessica Melo</h3>
            <p className="text-white/80">
              Psicóloga CRP 05/60189
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              WhatsApp
            </a>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Atendimento</h3>
            <p className="text-white/80">
              Online - Horários agendados
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Jessica Melo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
