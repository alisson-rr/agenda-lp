import { Card } from "@/components/ui/card";
import { Ear, Settings, Play } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Ear,
    title: "Escutamos você:",
    description: "Entendemos como sua clínica quer se comunicar e acolher os pacientes."
  },
  {
    number: "2", 
    icon: Settings,
    title: "Personalizamos o assistente:",
    description: "Para cada mensagem reflita o cuidado e atenção da sua equipe."
  },
  {
    number: "3",
    icon: Play,
    title: "Deixamos rodar:",
    description: "Clientes recebem lembretes e respostas automáticas, mas sempre humanizadas."
  }
];

export const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Como Funciona
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nós percebemos que muitas clínicas estavam lotadas de tarefas administrativas e que isso estava roubando o tempo de cuidar. Por isso, criamos o Agenda Magnética. Nosso objetivo é devolver tempo às equipes, deixando a tecnologia cuidar da parte repetitiva e liberando as pessoas para se dedicarem ao que realmente importa: o paciente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="p-8 text-center bg-card border-border hover:shadow-brand transition-smooth relative">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-brand-purple text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-purple/10 rounded-2xl mb-6">
                  <IconComponent className="h-8 w-8 text-brand-purple" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                
                {/* Connector Line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-brand-purple/30"></div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};