import { Rocket, Users, TrendingUp, Award } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "UCF Innovation Showcase",
    description: "Explore cutting-edge startups emerging from UCF's research labs and incubators"
  },
  {
    icon: Users,
    title: "VC Networking",
    description: "Direct access to leading venture capital firms actively seeking investment opportunities"
  },
  {
    icon: TrendingUp,
    title: "Orlando Ecosystem",
    description: "Discover why Orlando is becoming a major hub for technology and innovation in the Southeast"
  },
  {
    icon: Award,
    title: "Live Pitch Sessions",
    description: "Watch UCF spinouts and local startups pitch to top-tier VCs for funding and partnerships"
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Where VCs Meet Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The premier event connecting venture capital firms with Orlando's dynamic startup scene 
            and University of Central Florida's cutting-edge research commercialization
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card hover-scale"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:shadow-elegant transition-shadow duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;