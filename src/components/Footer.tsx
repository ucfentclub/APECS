import { Mail, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Pegasus
            </h3>
            <p className="text-muted-foreground mb-4">
              Connecting Orlando's innovation ecosystem with venture capital opportunities through the University of Central Florida.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary/10 hover:bg-secondary/20 flex items-center justify-center text-secondary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary/10 hover:bg-secondary/20 flex items-center justify-center text-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-card-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/#about" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={(e) => {
                    if (window.location.pathname === '/') {
                      e.preventDefault();
                      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="/#speakers" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={(e) => {
                    if (window.location.pathname === '/') {
                      e.preventDefault();
                      document.getElementById('speakers')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Speakers
                </a>
              </li>
              <li>
                <a 
                  href="/#schedule" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={(e) => {
                    if (window.location.pathname === '/') {
                      e.preventDefault();
                      document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Schedule
                </a>
              </li>
              <li>
                <a 
                  href="/#registration" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={(e) => {
                    if (window.location.pathname === '/') {
                      e.preventDefault();
                      document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Register
                </a>
              </li>
            </ul>
          </div>
          
          {/* For Attendees */}
          <div>
            <h4 className="font-bold text-card-foreground mb-4">For Attendees</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/#registration" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={(e) => {
                    if (window.location.pathname === '/') {
                      e.preventDefault();
                      document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Register
                </a>
              </li>
              <li>
                <a href="/venue-info" className="text-muted-foreground hover:text-primary transition-colors">
                  Venue Info
                </a>
              </li>
              <li>
                <a href="/accommodations" className="text-muted-foreground hover:text-primary transition-colors">
                  Accommodations
                </a>
              </li>
              <li>
                <a href="/travel-guide" className="text-muted-foreground hover:text-primary transition-colors">
                  Travel Guide
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-bold text-card-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>ucfentclub@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>University of Central Florida<br />4000 Central Florida Blvd, Orlando, FL 32816</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; 2026 Pegasus Entrepreneurship Conference. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;