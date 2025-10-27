import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const benefits = [
  "Access to keynotes and breakout sessions",
  "Exclusive networking opportunities",
  "Startup showcase & expo hall access",
  "Conference materials and recordings",
  "Catered meals and refreshments",
  "Certificate of attendance"
];

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Ready to Connect with Orlando's Innovation Ecosystem?
          </h2>
          <p className="text-xl mb-12 text-white/90">
            Join venture capitalists, UCF innovators, and Florida's top entrepreneurs at the region's premier VC-focused conference
          </p>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 text-left">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <span className="text-white">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center py-4">
              <div className="text-3xl font-bold mb-2">Multiple Ticket Options</div>
              <div className="text-white/90 text-lg">
                From $100 (Nonprofit) to $500 (Investor Pass)
              </div>
              <div className="text-white/70 text-sm mt-2">
                Choose the pass that fits your needs
              </div>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="text-lg px-12 py-6 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-glow hover-scale"
            onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Secure Your Spot Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <p className="mt-6 text-white/70 text-sm">
            Limited spots available • Multiple pass options available
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;