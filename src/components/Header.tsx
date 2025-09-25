import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Agenda Magnética" className="h-8 w-8" />
            <span className="text-xl font-bold text-foreground">
              Agenda Magnética
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-foreground hover:text-brand-purple transition-smooth">
              Início
            </a>
            <a href="#como-funciona" className="text-foreground hover:text-brand-purple transition-smooth">
              Como Funciona
            </a>
            <a href="#depoimentos" className="text-foreground hover:text-brand-purple transition-smooth">
              Depoimentos
            </a>
            <a href="#precos" className="text-foreground hover:text-brand-purple transition-smooth">
              Preços
            </a>
          </nav>

          {/* CTA Button */}
          <Button 
            variant="whatsapp" 
            size="default" 
            className="hidden sm:flex"
            asChild
          >
            <a href="https://wa.me/5551994408307" target="_blank" rel="noopener noreferrer">
              Falar no WhatsApp
            </a>
          </Button>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};