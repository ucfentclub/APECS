import { Rocket, Sparkles, Zap, Shield, Heart } from "lucide-react";

const topics = [
  {
    icon: Rocket,
    title: "Space",
    description: "Explore commercial space ventures and aerospace innovation"
  },
  {
    icon: Sparkles,
    title: "Immersive Entertainment",
    description: "VR, AR, and the future of interactive experiences"
  },
  {
    icon: Zap,
    title: "Energy & Sustainability",
    description: "Clean tech and sustainable business solutions"
  },
  {
    icon: Shield,
    title: "Defense",
    description: "Defense tech innovation and national security startups"
  },
  {
    icon: Heart,
    title: "Health",
    description: "Healthcare innovation and medical technology"
  }
];

const Schedule = () => {
  return (
    <section id="schedule" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Schedule Coming Soon!
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            A full day of insights, connections, and opportunities across cutting-edge industries
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Featured Session Topics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl border border-border p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-card"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <topic.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-card-foreground">
                  {topic.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Full schedule will be announced soon. Stay tuned for updates!
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
            <span className="text-primary font-semibold">March 27, 2026</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">8:00 AM - 8:00 PM</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;