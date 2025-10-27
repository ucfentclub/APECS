import { Home, MapPin, Camera, Utensils, ShoppingBag, Sparkles, Rocket, Waves, Music, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const attractions = [
  {
    name: "Walt Disney World",
    icon: Sparkles,
    category: "Theme Parks",
    description: "The most magical place on Earth with 4 theme parks, 2 water parks, and Disney Springs.",
    distance: "25 minutes from UCF",
    highlights: ["Magic Kingdom", "EPCOT", "Hollywood Studios", "Animal Kingdom"],
    website: "https://disneyworld.disney.go.com"
  },
  {
    name: "Universal Orlando Resort",
    icon: Camera,
    category: "Theme Parks",
    description: "Experience the Wizarding World of Harry Potter, thrilling rides, and entertainment.",
    distance: "20 minutes from UCF",
    highlights: ["Universal Studios", "Islands of Adventure", "Volcano Bay", "CityWalk"],
    website: "https://www.universalorlando.com"
  },
  {
    name: "Kennedy Space Center",
    icon: Rocket,
    category: "Attractions",
    description: "Explore America's gateway to space with exhibits, tours, and rocket launches.",
    distance: "45 minutes from UCF",
    highlights: ["Space Shuttle Atlantis", "Rocket Garden", "Astronaut Encounters"],
    website: "https://www.kennedyspacecenter.com"
  },
  {
    name: "ICON Park",
    icon: Camera,
    category: "Entertainment",
    description: "Entertainment complex featuring The Wheel, Madame Tussauds, and SEA LIFE Aquarium.",
    distance: "15 minutes from UCF",
    highlights: ["The Wheel", "Starflyer", "7D Dark Ride Adventure"],
    website: "https://iconparkorlando.com"
  }
];

const dining = [
  {
    name: "International Drive",
    description: "Restaurant row featuring cuisine from around the world",
    highlights: ["The Cowfish", "Cafe Tu Tu Tango", "Texas de Brazil"]
  },
  {
    name: "Disney Springs",
    description: "Dining, shopping, and entertainment complex",
    highlights: ["The Boathouse", "Morimoto Asia", "Wine Bar George"]
  },
  {
    name: "UCF Area",
    description: "Local favorites near campus",
    highlights: ["Lazy Moon Pizza", "Huey Magoo's", "Gringos Locos"]
  }
];

const shopping = [
  {
    name: "The Mall at Millenia",
    description: "Upscale shopping with luxury brands and dining",
    distance: "15 minutes from UCF"
  },
  {
    name: "Disney Springs",
    description: "Outdoor shopping, dining, and entertainment",
    distance: "25 minutes from UCF"
  },
  {
    name: "The Florida Mall",
    description: "One of Central Florida's largest malls",
    distance: "20 minutes from UCF"
  }
];

const outdoors = [
  {
    name: "Lake Eola Park",
    description: "Downtown Orlando's centerpiece with swan boats and walking paths",
    icon: Waves
  },
  {
    name: "Wekiwa Springs State Park",
    description: "Natural springs, kayaking, and hiking trails",
    icon: TreePine
  },
  {
    name: "Orlando Wetlands Park",
    description: "Bird watching and nature photography paradise",
    icon: Camera
  }
];

const TravelGuide = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Button 
              variant="ghost" 
              className="mb-6 text-white hover:bg-white/10"
              onClick={() => window.location.href = '/'}
            >
              <Home className="mr-2 w-4 h-4" />
              Back to Home
            </Button>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Travel Guide
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Explore Orlando - The City Beautiful
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="font-semibold">Make the most of your visit</span>
              <span className="text-white/70">•</span>
              <span className="text-white/90">March 27, 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Attractions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Must-Visit Attractions</h2>
              <p className="text-lg text-muted-foreground">
                Orlando is home to world-class theme parks and unique experiences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {attractions.map((attraction, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <attraction.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-card-foreground">{attraction.name}</h3>
                        <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full whitespace-nowrap">
                          {attraction.category}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{attraction.distance}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{attraction.description}</p>

                  <div className="mb-4">
                    <div className="text-xs font-semibold text-muted-foreground mb-2">HIGHLIGHTS</div>
                    <div className="flex flex-wrap gap-2">
                      {attraction.highlights.map((highlight, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-muted text-foreground text-xs rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button 
                    variant="outline"
                    className="w-full"
                    onClick={() => window.open(attraction.website, '_blank')}
                  >
                    Learn More
                  </Button>
                </div>
              ))}
            </div>

            {/* Dining */}
            <div className="mb-16">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center flex-shrink-0">
                  <Utensils className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Dining</h2>
                  <p className="text-muted-foreground">Orlando offers incredible dining from casual to fine dining</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {dining.map((area, index) => (
                  <div 
                    key={index}
                    className="bg-card rounded-xl border border-border p-6"
                  >
                    <h3 className="text-lg font-bold text-card-foreground mb-2">{area.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{area.description}</p>
                    <div className="space-y-1">
                      {area.highlights.map((restaurant, idx) => (
                        <div key={idx} className="text-sm text-muted-foreground">
                          • {restaurant}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shopping */}
            <div className="mb-16">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <ShoppingBag className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Shopping</h2>
                  <p className="text-muted-foreground">From luxury brands to outlet deals</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {shopping.map((location, index) => (
                  <div 
                    key={index}
                    className="bg-card rounded-xl border border-border p-6"
                  >
                    <h3 className="text-lg font-bold text-card-foreground mb-2">{location.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{location.description}</p>
                    <p className="text-xs text-primary font-semibold">{location.distance}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Outdoor Activities */}
            <div className="mb-16">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center flex-shrink-0">
                  <TreePine className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Outdoor Activities</h2>
                  <p className="text-muted-foreground">Enjoy Florida's natural beauty</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {outdoors.map((activity, index) => (
                  <div 
                    key={index}
                    className="bg-card rounded-xl border border-border p-6"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <activity.icon className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-bold text-card-foreground">{activity.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Tips */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Travel Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Weather</h4>
                  <p className="text-sm">March weather is typically mild with temperatures in the 70s-80s°F. Bring layers for air-conditioned venues.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Transportation</h4>
                  <p className="text-sm">Rental cars recommended. Ride-sharing services (Uber/Lyft) widely available. Some theme parks offer transportation.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Best Time to Visit</h4>
                  <p className="text-sm">Arrive a day early to explore. Most attractions open by 9 AM. Book theme park tickets in advance for best rates.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">What to Bring</h4>
                  <p className="text-sm">Comfortable shoes, sunscreen, reusable water bottle, and portable charger for your phone.</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="mt-12 text-center">
              <h3 className="text-xl font-bold text-foreground mb-4">Need More Recommendations?</h3>
              <p className="text-muted-foreground mb-6">
                Contact us for personalized Orlando travel suggestions
              </p>
              <Button 
                variant="outline"
                onClick={() => window.location.href = 'mailto:ucfentclub@gmail.com'}
              >
                Contact Us
              </Button>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TravelGuide;
