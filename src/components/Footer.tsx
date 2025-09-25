import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Agenda Magnética" className="h-8 w-8" />
              <span className="text-xl font-bold">Agenda Magnética</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Assistente inteligente que cuida do seu WhatsApp para que você tenha mais tempo para cuidar dos seus pacientes.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Links Rápidos</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#inicio" className="text-background/80 hover:text-background transition-smooth">
                Início
              </a>
              <a href="#como-funciona" className="text-background/80 hover:text-background transition-smooth">
                Como Funciona
              </a>
              <a href="#depoimentos" className="text-background/80 hover:text-background transition-smooth">
                Depoimentos
              </a>
              <a href="#precos" className="text-background/80 hover:text-background transition-smooth">
                Preços
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Contato</h4>
            <div className="space-y-4">
              <p className="text-background/80">
                Pronto para transformar seu atendimento?
              </p>
              <Button 
                variant="outline" 
                className="border-background/20 text-background hover:bg-background hover:text-foreground"
                asChild
              >
                <a href="https://wa.me/5551994408307" target="_blank" rel="noopener noreferrer">
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60">
            © 2024 Agenda Magnética. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};