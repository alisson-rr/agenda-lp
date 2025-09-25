import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Tiago G. Estevam",
    company: "MedBra",
    text: "Estamos felizes como fluiu as coisas e por termos te encontrado, me decepcionei com bastantes devs nesse percurso. Você parece um cara de palavra e com responsabilidades no seu trabalho. Abraço.",
    avatar: "https://7250ab44-e23a-4f0d-8f0c-a42709b94905.weweb-preview.io/images/Medbra.png?_wwcv=4"
  },
  {
    name: "Marina Santos", 
    company: "Avance Kids",
    text: "Eu queria te parabenizar assim, porque ficou muito bom, você entendeu o que a gente queria e tô muito feliz... mas adorei, tá, parabéns mesmo, de verdade.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Felipe Cordeiro",
    company: "Finscale", 
    text: "Tá incrível!!! Muito massa ver que nossa ideia saiu do papel exatamente como estávamos esperando!",
    avatar: "https://7250ab44-e23a-4f0d-8f0c-a42709b94905.weweb-preview.io/images/Screenshot_5.png?_wwcv=4"
  }
];

export const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Veja Quem Já Está <span className="text-brand-purple">Dominando Com Tecnologia</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:shadow-brand transition-smooth">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-brand-purple font-medium">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-brand-purple/20" />
                <p className="text-muted-foreground leading-relaxed pl-6">
                  "{testimonial.text}"
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};