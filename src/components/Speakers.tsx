// TO USE YOUR OWN SPEAKER IMAGES:
// 1. Place your speaker photos in: src/assets/
// 2. Recommended naming: speaker1.jpg, speaker2.jpg, etc. (or use descriptive names)
// 3. Update the 'image' field below with the filename
// 4. Image format: Use .jpg, .jpeg, .png, or .webp
// 5. Recommended size: 400x400px or larger (square images work best)

// Import your speaker images here:
import speaker1 from "@/assets/speaker1.jpg";
import speaker2 from "@/assets/speaker2.jpg";
import speaker3 from "@/assets/speaker3.png";
// import speaker4 from "@/assets/speaker4.jpg";

import { Linkedin, ExternalLink } from "lucide-react";

const speakers = [
  {
    name: "Zack Zuniga",
    title: "Founder & CEO, Zuleris Interactive",
    // TO USE YOUR IMAGE: Replace the URL below with your imported image
    // Example: image: speaker1,
    image: speaker1,
    bio: "Zackary Zuniga, an Electrical and Photonics engineer from UCF, is the founder and CEO of ZuLeris, a defense-simulation company transforming how warfighters train for the invisible electromagnetic battlefield. By blending advanced physics modeling with gaming-engine immersion, ZuLeris delivers scalable, data-driven training environments that cut costs, enhance mission readiness, and meet the defense sector’s urgent modernization needs.",
    linkedin: "https://www.linkedin.com/in/zack-zuniga/",  // Add LinkedIn URL here
    website: "https://www.zuleris.com/"    // Add Website URL here
  },
  {
    name: "Mike Pape",
    title: "Director, Upstarts Program",
    // TO USE YOUR IMAGE: Replace the URL below with your imported image
    // Example: image: speaker2,
    image: speaker2,
    bio: "Mike Pape is a biotech entrepreneur, investor, and thought leader who co-founded Esperion Therapeutics ($1.3B exit) and Akebia Therapeutics (IPO). With deep experience bridging science and commercialization, he has guided multiple ventures from lab bench to market. Today, he brings that expertise to the discussion as our distinguished panel moderator.",
    linkedin: "https://www.linkedin.com/in/michael-pape-9a103aa/",
    website: "https://business.ucf.edu/person/michael-pape/"
  },
  {
    name: "Cassi Willard Esq",
    title: "Entertainment and Technology Startup Attorney",
    // TO USE YOUR IMAGE: Replace the URL below with your imported image
    // Example: image: speaker3,
    image: speaker3,
    bio: "Cassandra Willard, Esq. is an entertainment and intellectual-property attorney with two decades of deal-making experience. Through her Orlando-based law practice, she’s guided startups, production companies, and investors through IP strategy, licensing, and capitalization. A trusted legal architect for emerging ventures, she now merges that experience with ecosystem leadership at UCF’s Blackstone LaunchPad, empowering founders to build fundable, defensible businesses from day one.",
    linkedin: "https://www.linkedin.com/in/cassandrawillardesq/",
    website: "https://business.ucf.edu/person/cassi-willard/"
  }
];

const Speakers = () => {
  return (
    <section id="speakers" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Featured Speakers & VCs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn from venture capitalists, successful founders, and innovation leaders shaping Florida's tech ecosystem
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card hover-scale"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={speaker.image} 
                  alt={speaker.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-card-foreground">
                  {speaker.name}
                </h3>
                <p className="text-primary font-semibold mb-2">
                  {speaker.title}
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  {speaker.bio}
                </p>
                <div className="flex gap-3">
                  <a 
                    href={speaker.linkedin} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href={speaker.website} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;