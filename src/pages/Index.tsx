import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection"; 
import { ProblemsSection } from "@/components/ProblemsSection";
import { SolutionSection } from "@/components/SolutionSection";
import { TargetSection } from "@/components/TargetSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { PricingSection } from "@/components/PricingSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemsSection />
        <SolutionSection />
        <TargetSection />
        <BenefitsSection />
        <TestimonialsSection />
        <HowItWorksSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
