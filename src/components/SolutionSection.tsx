import medicalTeam from "@/assets/medical-team.png";

export const SolutionSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-brand-purple/5 via-background to-gradient-start/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-brand-purple/10 text-brand-purple px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-brand-purple rounded-full animate-pulse"></div>
              <span className="font-medium">Solução Inteligente</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Agenda Magnética <span className="text-brand-purple">24h</span>
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">Atendimento humanizado</span> começa na forma como você se comunica.
              </p>
              
              <p>
                Seus pacientes já estão no seu WhatsApp! Você só precisa falar com eles 
                no momento e do jeito certo.
              </p>
              
              <p>
                <span className="font-semibold text-foreground">Mensagens personalizadas</span> criam proximidade e aumentam confiança.
              </p>
              
              <p>
                O fluxo fica mais leve, a agenda mais organizada e sobra tempo para 
                o que mais importa: <span className="font-semibold text-brand-purple">acolher seus pacientes</span>.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-2xl rounded-3xl"></div>
              <img 
                src={medicalTeam} 
                alt="Imã puxando agenda digital" 
                className="relative max-w-lg w-full h-auto rounded-2xl shadow-brand"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};