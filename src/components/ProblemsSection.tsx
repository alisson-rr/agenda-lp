import { Card } from "@/components/ui/card";
import phoneNotifications from "@/assets/phone-notifications.png";

const problems = [
  "Mensagens que acumulam no WhatsApp e você ou sua equipe não conseguem responder tudo.",
  "Sua equipe fica sobrecarregada tentando organizar a agenda e confirmar horários.",
  "Pacientes desmarcam ou faltam e o dia acaba parecendo um caos."
];

export const ProblemsSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={phoneNotifications} 
                alt="Celular com notificações de mensagens não respondidas" 
                className="max-w-sm w-full h-auto"
              />
            </div>
          </div>

          {/* Right Column - Problems List */}
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Você passa por isso?
            </h2>

            <div className="space-y-6">
              {problems.map((problem, index) => (
                <Card key={index} className="p-6 border-l-4 border-l-brand-purple bg-card">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-purple/10 flex items-center justify-center mt-1">
                      <span className="text-brand-purple font-bold text-sm">-</span>
                    </div>
                    <p className="text-foreground leading-relaxed">
                      {problem}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};