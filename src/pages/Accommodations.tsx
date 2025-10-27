import { MapPin, Phone, ExternalLink, Star, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const hotels = [
  {
    name: "Celeste Hotel",
    address: "11730 Research Parkway, Orlando, FL 32826",
    phone: "(407) 434-6000",
    distance: "10 minutes from UCF",
    rate: "TBD",
    amenities: ["Free WiFi", "Pool", "Fitness Center", "Complimentary Breakfast"],
    bookingUrl: "#",
    rating: 4.3
  }
];

const Accommodations = () => {
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
              Accommodations
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Preferred hotel near University of Central Florida for APECS 2026 attendees
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="font-semibold">March 27, 2026</span>
              <span className="text-white/70">•</span>
              <span className="text-white/90">Conference rates coming soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Preferred Hotel</h2>
              <p className="text-lg text-muted-foreground">
                Conference rates will be available soon. Additional hotel options will be added as partnerships are secured.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              {hotels.map((hotel, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-card-foreground pr-4">
                      {hotel.name}
                    </h3>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold">{hotel.rating}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                      <span>{hotel.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                      <span>{hotel.phone}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
                    <div>
                      <div className="text-xl font-bold text-primary">{hotel.rate}</div>
                      <div className="text-xs text-muted-foreground">Conference rate</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-card-foreground">{hotel.distance}</div>
                      <div className="text-xs text-muted-foreground">from venue</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-xs font-semibold text-muted-foreground mb-2">AMENITIES</div>
                    <div className="flex flex-wrap gap-2">
                      {hotel.amenities.map((amenity, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className="w-full"
                    variant="outline"
                    onClick={() => window.open(hotel.bookingUrl, '_blank')}
                  >
                    View Hotel
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-12 bg-muted/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Booking Information</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Conference Rates:</strong> Special rates for APECS 2026 attendees will be available soon. Check back for updates!
                </p>
                <p>
                  <strong className="text-foreground">Booking Details:</strong> Once conference rates are secured, booking information and instructions will be provided here.
                </p>
                <p>
                  <strong className="text-foreground">Questions?</strong> Contact us at <a href="mailto:ucfentclub@gmail.com" className="text-primary hover:underline">ucfentclub@gmail.com</a> for assistance with accommodations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Accommodations;
