import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Building2, Rocket, Users, TrendingUp, Store } from "lucide-react";

const ticketTypes = [
  {
    name: "Nonprofit",
    price: "$100",
    icon: Users,
    perks: [
      "Access to breakout sessions",
      "Access to expo hall"
    ]
  },
  {
    name: "Founder",
    price: "$350",
    icon: Rocket,
    badge: "Business Required",
    perks: [
      "Access to breakout sessions",
      "Access to expo hall"
    ]
  },
  {
    name: "Community Member",
    price: "$475",
    icon: Building2,
    perks: [
      "Access to breakout sessions",
      "Access to expo hall"
    ]
  },
  {
    name: "Investor",
    price: "$500",
    icon: TrendingUp,
    badge: "Most Popular",
    popular: true,
    perks: [
      "Access to breakout sessions",
      "Access to expo hall",
      "Investor-founder networking",
      "StrictlyVC session",
      "Investor reception",
      "Founder list",
      "Early access to StartupSwipe",
      "Discount to StartupSwipe Premium"
    ]
  }
];

const Registration = () => {
  const [showTicketForm, setShowTicketForm] = useState(false);
  const [showVendorForm, setShowVendorForm] = useState(false);

  useEffect(() => {
    // This will ensure the Zoho form scripts load properly
    const script = document.createElement('script');
    script.src = 'https://js.zohostatic.com/books/zfwidgets/assets/js/zf-widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="registration" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Register for APECS 2026
            </h2>
            <p className="text-xl text-muted-foreground">
              Secure your spot at Orlando's premier entrepreneurship conference
            </p>
            <div className="mt-6 text-lg">
              <span className="font-semibold text-primary">March 27, 2026</span>
              <span className="mx-3 text-muted-foreground">•</span>
              <span className="text-muted-foreground">University of Central Florida, Orlando</span>
            </div>
          </div>

          {!showTicketForm && !showVendorForm ? (
            <>
              {/* Ticket Types */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-center mb-8">Choose Your Ticket</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {ticketTypes.map((ticket, index) => (
                    <div 
                      key={index}
                      className={`relative bg-card rounded-2xl border-2 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                        ticket.popular ? 'border-primary' : 'border-border'
                      }`}
                    >
                      {ticket.badge && (
                        <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold ${
                          ticket.popular 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {ticket.badge}
                        </div>
                      )}
                      
                      <div className="text-center mb-4">
                        <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                          ticket.popular 
                            ? 'bg-gradient-to-br from-primary to-secondary' 
                            : 'bg-muted'
                        }`}>
                          <ticket.icon className={`w-8 h-8 ${
                            ticket.popular ? 'text-primary-foreground' : 'text-foreground'
                          }`} />
                        </div>
                        <h4 className="text-xl font-bold mb-2">{ticket.name}</h4>
                        <div className="text-3xl font-bold text-primary mb-4">{ticket.price}</div>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        {ticket.perks.map((perk, perkIndex) => (
                          <div key={perkIndex} className="flex items-start gap-2 text-sm">
                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{perk}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Button 
                        className="w-full"
                        variant={ticket.popular ? "default" : "outline"}
                        onClick={() => setShowTicketForm(true)}
                      >
                        Select {ticket.name}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vendor Application */}
              <div className="max-w-2xl mx-auto">
                <div className="bg-card rounded-2xl border-2 border-border p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                    <Store className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Become a Vendor</h3>
                  <p className="text-muted-foreground mb-6">
                    Showcase your products and services to hundreds of entrepreneurs, investors, and industry leaders. Limited spots available!
                  </p>
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-secondary to-primary hover:opacity-90"
                    onClick={() => setShowVendorForm(true)}
                  >
                    Apply as Vendor
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Zoho Forms */}
              <div className="max-w-4xl mx-auto">
                <Button 
                  variant="outline" 
                  className="mb-6"
                  onClick={() => {
                    setShowTicketForm(false);
                    setShowVendorForm(false);
                  }}
                >
                  ← Back to Ticket Selection
                </Button>

                <div className="bg-card rounded-2xl shadow-lg p-8 border border-border">
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-2">
                      {showTicketForm ? 'Ticket Registration & Payment' : 'Vendor Application'}
                    </h3>
                    <p className="text-muted-foreground">
                      Complete the form below to {showTicketForm ? 'register and process your payment' : 'apply as a vendor'} securely through Zoho.
                    </p>
                  </div>

                  {/* 
                    Replace the iframe src with your actual Zoho form URLs
                    
                    TICKET FORM: Replace YOUR_TICKET_FORM_URL_HERE
                    VENDOR FORM: Replace YOUR_VENDOR_FORM_URL_HERE
                    
                    To get your Zoho form embed code:
                    1. Go to your Zoho Forms dashboard
                    2. Select your form
                    3. Click on "Publish" or "Share"
                    4. Copy the embed code or iframe URL
                    5. Replace the src URL below with your form's URL
                  */}
                  <div className="zoho-form-container">
                    <iframe
                      aria-label={showTicketForm ? 'APECS Ticket Registration Form' : 'APECS Vendor Application Form'}
                      frameBorder="0"
                      style={{
                        height: '800px',
                        width: '100%',
                        border: 'none',
                      }}
                      src={showTicketForm ? 'https://forms.zohopublic.com/ucfentclubgm1/form/ConvergenceRegistrationForm/formperma/aQLqBLEdKY34G-Sbje6DTv_xxvD3WFvek4p6YojKNkk' : 'YOUR_VENDOR_FORM_URL_HERE'}
                      title={showTicketForm ? 'APECS 2026 Ticket Registration & Payment' : 'APECS 2026 Vendor Application'}
                    />
                  </div>

                  <div className="mt-6 text-sm text-muted-foreground text-center">
                    <p>🔒 Your {showTicketForm ? 'payment' : ''} information is securely processed through Zoho</p>
                    <p className="mt-2">Questions? Contact us at <a href="mailto:ucfentclub@gmail.com" className="text-primary hover:underline">ucfentclub@gmail.com</a></p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Registration;
