import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Products = () => {
  // CLIENT APPROVED PACKAGES - DO NOT CHANGE
  const packages = [
    {
      name: "Residential Starter",
      description: "Perfect for small homes and apartments",
      price: "From R50,000",
      badge: "Popular",
      features: [
        "5kW Inverter",
        "5kW Battery",
        "6 Panels",
        "Basic Monitoring System",
        "10-Year Warranty",
        "Professional Installation",
        "Grid Connection Setup",
      ],
    },
    {
      name: "Home Complete",
      description: "Ideal for medium to large homes",
      price: "From R90,000",
      badge: "Best Value",
      popular: true,
      features: [
        "8kW Inverter",
        "10kW Battery",
        "12 X Panels",
        "Advanced Monitoring & App",
        "15-Year Warranty",
        "Professional Installation",
        "Energy Optimization",
      ],
    },
    {
      name: "Commercial Package",
      description: "Comprehensive solution for businesses",
      price: "Custom",
      badge: "Enterprise",
      features: [
        "Custom kW Configuration",
        "Industrial-Grade Panels",
        "Real-Time Analytics Dashboard",
        "25-Year Warranty",
        "Dedicated Installation Team",
        "Battery Storage Included",
        "Energy Management System",
        "Tax Incentive Assistance",
      ],
    },
  ];

  // CLIENT APPROVED PROMOTIONS - DO NOT CHANGE
  const promotions = [
    {
      title: "Spring Solar Sale",
      discount: "Save up to R25,000",
      description: "Limited time offer on all packages",
      expires: "Ends April 30th",
    },
    {
      title: "Referral Bonus",
      discount: "R5,000 Credit",
      description: "Refer a friend and both receive credit",
      expires: "Ongoing",
    },
    {
      title: "Trade-In Program",
      discount: "Up to R10,000",
      description: "Trade in your old system for credit",
      expires: "While supplies last",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="Premium Solar Packages & Energy Solutions - SOLARQUENCH"
        description="Choose your perfect solar package from SOLARQUENCH. Residential starter, premium, and commercial solar solutions with 25-year warranty. Get your free quote today."
        keywords="solar packages, solar solutions, residential solar, commercial solar, solar quotes, solar installation packages, energy solutions"
        url="https://solarquench.com/products"
      />
      <Navbar />
      
      {/* Fixed Background with Text */}
      <div className="fixed inset-0 -z-10 flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dnnwvmh3n/image/upload/v1760961790/WhatsApp_Image_2025-10-19_at_19.55.50_2_ytd9yj.jpg')"
          }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Solar{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Packages & Deals
              </span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Choose the perfect solar solution for your needs. All packages include 
              professional installation and comprehensive warranty coverage.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section Spacer */}
      <div className="min-h-screen"></div>

      {/* Packages Section */}
      <section className="py-20 bg-background" data-scroll-section>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={index}
                className={`relative border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl premium-glow flex flex-col h-full ${
                  pkg.popular ? 'ring-2 ring-primary shadow-lg scale-105' : ''
                }`}
                data-scroll
                data-scroll-speed={0.5 + index * 0.1}
              >
                {pkg.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className={`${pkg.popular ? 'bg-gradient-to-r from-primary to-accent' : 'bg-secondary'} text-sm px-4 py-1 shadow-md`}>
                      {pkg.badge}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                  <CardDescription className="text-base">{pkg.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {pkg.price}
                    </span>
                    {pkg.price !== "Custom" && (
                      <span className="text-muted-foreground"> / system</span>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6 flex flex-col flex-grow">
                  <ul className="space-y-3 flex-grow">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <Link to="/quote">
                      <Button 
                        className={`w-full ${
                          pkg.popular 
                            ? 'bg-gradient-to-r from-primary to-accent hover:opacity-90' 
                            : ''
                        }`}
                        variant={pkg.popular ? 'default' : 'outline'}
                      >
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Current{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Promotions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Take advantage of our limited-time offers and special deals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {promotions.map((promo, index) => (
              <Card 
                key={index}
                className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
              >
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 mb-4">
                      <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {promo.discount}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{promo.title}</h3>
                  <p className="text-muted-foreground text-center mb-4">{promo.description}</p>
                  <div className="text-center">
                    <Badge variant="outline" className="text-xs">
                      {promo.expires}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/quote">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
              >
                Claim Your Offer Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
