import { MapPin, Car, Info, Navigation, Utensils, Coffee, AlertCircle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const VenueInfo = () => {
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
              Venue Information
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Everything you need to know about the University of Central Florida campus
            </p>
            <div className="flex items-center justify-center gap-2 text-lg">
              <MapPin className="w-6 h-6" />
              <span>University of Central Florida, Orlando, FL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Parking Information */}
            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <Car className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Parking</h2>
                  <p className="text-muted-foreground">Convenient parking available for all attendees</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">Recommended: Garage F</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong className="text-foreground">Location:</strong> 4353 Scorpius Street, Orlando, FL 32816</p>
                    <p><strong className="text-foreground">Rate:</strong> $10 for all-day event parking</p>
                    <p><strong className="text-foreground">Distance:</strong> 5-minute walk to event venue</p>
                    <p><strong className="text-foreground">Capacity:</strong> 1,500+ spaces available</p>
                  </div>
                  <div className="mt-4">
                    <Button 
                      variant="outline" 
                      className="w-full sm:w-auto"
                      onClick={() => window.open('https://maps.google.com/?q=Garage+F+UCF', '_blank')}
                    >
                      <Navigation className="mr-2 w-4 h-4" />
                      Get Directions to Garage F
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Important:</strong> Parking passes will be available for purchase at the garage entrance. Cash and card accepted. Arrive early for best parking availability.
                  </div>
                </div>
              </div>
            </div>

            {/* Campus Information */}
            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center flex-shrink-0">
                  <Info className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">About UCF Campus</h2>
                  <p className="text-muted-foreground">One of the nation's leading innovation hubs</p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  The University of Central Florida is one of the largest universities in the United States, with a vibrant innovation ecosystem and strong ties to Orlando's growing tech scene.
                </p>
                <p>
                  <strong className="text-foreground">Campus Highlights:</strong>
                </p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>Home to over 68,000 students and world-class research facilities</li>
                  <li>Strategic location in the heart of Central Florida's tech corridor</li>
                  <li>Strong partnerships with NASA, Lockheed Martin, and other industry leaders</li>
                  <li>Robust startup ecosystem with multiple incubators and accelerators</li>
                  <li>Leader in optics, photonics, modeling & simulation, and engineering</li>
                </ul>
              </div>
            </div>

            {/* Dining Options */}
            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <Utensils className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Dining & Refreshments</h2>
                  <p className="text-muted-foreground">Food and beverage options on campus</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Catered meals and refreshments will be provided throughout the conference. Additionally, UCF offers numerous dining options:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Coffee className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">Student Union</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Multiple dining options including Chick-fil-A, Qdoba, Starbucks, and more
                    </p>
                  </div>

                  <div className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Coffee className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">Nearby Restaurants</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      University Boulevard features numerous restaurants within walking distance
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Getting Around */}
            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center flex-shrink-0">
                  <Navigation className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Getting to Campus</h2>
                  <p className="text-muted-foreground">Transportation and directions</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Address:</h4>
                  <p className="text-muted-foreground">4000 Central Florida Blvd, Orlando, FL 32816</p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">From Orlando International Airport (MCO):</h4>
                  <p className="text-muted-foreground">25 minutes (16 miles) via FL-528 W and FL-417 N</p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">From Downtown Orlando:</h4>
                  <p className="text-muted-foreground">20 minutes (13 miles) via FL-408 E</p>
                </div>

                <div className="mt-4">
                  <Button 
                    className="w-full sm:w-auto"
                    onClick={() => window.open('https://maps.google.com/?q=University+of+Central+Florida', '_blank')}
                  >
                    <MapPin className="mr-2 w-4 h-4" />
                    Open in Google Maps
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-foreground mb-4">Questions About the Venue?</h3>
              <p className="text-muted-foreground mb-6">
                Our team is here to help with any questions about parking, directions, or campus facilities.
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

export default VenueInfo;
