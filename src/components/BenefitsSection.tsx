import { Card } from "@/components/ui/card";
import { Heart, Calendar, Users, Zap } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Atendimento que encanta:",
    description: "Mensagens que falam a língua da sua clínica e transmitem cuidado."
  },
  {
    icon: Calendar,
    title: "Agenda organizada:",
    description: "Sua equipe foca no cuidado, não em responder mensagens o dia todo."
  },
  {
    icon: Users,
    title: "Equipe mais leve e presente:",
    description: "Menos tempo no WhatsApp, mais atenção para cada cliente."
  },
  {
    icon: Zap,
    title: "Resultados rápidos:",
    description: "Em poucos dias você já sente a diferença na rotina e na relação com os pacientes."
  }
];

export const BenefitsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-brand-purple/5 via-muted/20 to-gradient-start/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Por Que Sua Clínica Precisa <span className="text-brand-purple">Disso Agora</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="p-6 bg-card border-border hover:shadow-brand transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-purple/10 rounded-xl flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};