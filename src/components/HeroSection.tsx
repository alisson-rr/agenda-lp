import { Button } from "@/components/ui/button";
import { AgendaCard } from "@/components/AgendaCard";

export const HeroSection = () => {
  return (
    <section id="inicio" className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-brand-purple-light/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Agenda Card */}
          <div className="flex justify-center lg:justify-start">
            <AgendaCard />
          </div>

          {/* Right Column - Hero Text */}
          <div className="space-y-8 text-center lg:text-left">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Sua agenda cheia.</span>
                <br />
                <span className="text-foreground">Sua equipe tranquila.</span>
                <br />
                <span className="text-brand-purple">Seus pacientes bem cuidados.</span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
              Um assistente que cuida do seu WhatsApp para que você e sua equipe tenham tempo 
              de verdade para ouvir, orientar e cuidar dos seus pacientes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg"
                className="text-base px-8 py-4 h-auto"
                asChild
              >
                <a href="https://wa.me/5551994408307" target="_blank" rel="noopener noreferrer">
                  Quero transformar meu atendimento
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};