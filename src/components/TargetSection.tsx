import { Card } from "@/components/ui/card";
import { Building2, Stethoscope, Users } from "lucide-react";

const targetAudiences = [
  {
    icon: Building2,
    title: "Clínicas",
    description: "Que querem transformar cada contato em uma experiência de cuidado."
  },
  {
    icon: Users,
    title: "Consultórios", 
    description: "Que buscam organização sem sobrecarregar a equipe."
  },
  {
    icon: Stethoscope,
    title: "Médicos",
    description: "Que desejam menos tarefas repetitivas e mais tempo para conversar e orientar seus pacientes."
  }
];

export const TargetSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Para Quem É
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {targetAudiences.map((audience, index) => {
            const IconComponent = audience.icon;
            return (
              <Card key={index} className="p-8 text-center hover:shadow-brand transition-smooth bg-card border-border">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-purple/10 rounded-2xl mb-6">
                  <IconComponent className="h-8 w-8 text-brand-purple" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {audience.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {audience.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};