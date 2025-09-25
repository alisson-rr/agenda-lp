import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export const PricingSection = () => {
  return (
    <section id="precos" className="py-16 bg-gradient-to-br from-brand-purple/5 via-background to-gradient-start/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="destructive" className="mb-4">
            ÚLTIMAS 3 VAGAS ESTE MÊS
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Planos e Preços
          </h2>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted rounded-lg p-1 flex">
            <button className="px-6 py-2 rounded-md bg-background text-foreground font-medium shadow-sm">
              Mensal
            </button>
            <button className="px-6 py-2 rounded-md text-muted-foreground">
              Anual
            </button>
          </div>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="p-8 bg-card border-brand-purple/20 shadow-brand relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 to-transparent"></div>
            
            <div className="relative">
              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">Starter</h3>
                <div className="flex items-baseline justify-center gap-2 mb-4">
                  <span className="text-4xl font-bold text-brand-purple">R$ 197</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <p className="text-muted-foreground">Ideal para 1 clínica</p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {[
                  "Resposta automática 24h/dia",
                  "Lembretes de consultas",
                  "Confirmação de horários",
                  "Mensagens personalizadas",
                  "Suporte técnico incluso"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-success rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                variant="hero" 
                size="lg"
                className="w-full text-base py-4 h-auto"
                asChild
              >
                <a href="https://wa.me/5551994408307" target="_blank" rel="noopener noreferrer">
                  Começar Agora
                </a>
              </Button>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Sem taxa de setup • Cancele quando quiser
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};