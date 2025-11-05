import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Zap, Shield, Clock, DollarSign, ArrowRight, CheckCircle2, Check, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import solarHero from "@/assets/solar-hero.jpg";

const Home = () => {
  const isMobile = useIsMobile();
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

  const services = [
    {
      icon: Zap,
      title: "High Efficiency",
      description: "Premium solar panels with industry-leading conversion rates for maximum energy output.",
    },
    {
      icon: Shield,
      title: "25-Year Warranty",
      description: "Comprehensive warranty coverage on all installations for complete peace of mind.",
    },
    {
      icon: Clock,
      title: "Quick Installation",
      description: "Professional installation completed in days, not weeks. Minimal disruption guaranteed.",
    },
    {
      icon: DollarSign,
      title: "Cost Savings",
      description: "Reduce energy bills by up to 70% and increase your property value significantly.",
    },
  ];

  const benefits = [
    "Free consultation and site assessment",
    "Custom solar solutions tailored to your needs",
    "24/7 monitoring and support system",
    "Clean, renewable energy for a better future",
    "Professional installation by certified technicians",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="SOLARQUENCH - Premium Solar Energy Solutions | Reduce Energy Bills by 70%"
        description="Transform your home or business with SOLARQUENCH's premium solar energy solutions. Expert installation, 25-year warranty, and up to 70% savings on energy bills. Serving South Africa since 2015."
        keywords="solar energy south africa, solar panels johannesburg, renewable energy, solar installation midrand, solar power cape town, clean energy solutions, residential solar, commercial solar, solar quotes, energy savings"
        url="https://solarquench.com"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden" 
        data-scroll-section
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${solarHero})` }}
          data-scroll
          data-scroll-speed="-2"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-3xl" data-scroll data-scroll-speed="1">
            <h1 className="text-5xl md:text-7xl font-bold text-secondary-foreground mb-6 leading-tight">
              Power Your Future with{" "}
              <span className="text-gradient-premium drop-shadow-2xl">
                Clean Energy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary-foreground/90 mb-8 leading-relaxed">
              Transform sunlight into savings. SOLARQUENCH delivers premium solar solutions 
              that reduce costs and protect our planet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/quote">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all text-lg px-8 py-6 shadow-lg hover:shadow-xl group"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/products">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-6 bg-secondary-foreground/10 backdrop-blur-sm border-secondary-foreground/20 hover:bg-secondary-foreground/20 text-secondary-foreground"
                >
                  Explore Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30" data-scroll-section>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                SOLARQUENCH
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leading the renewable energy revolution with cutting-edge technology and unmatched service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group bg-card/50 backdrop-blur-sm premium-glow"
                data-scroll
                data-scroll-speed={0.5 + index * 0.1}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-background" data-scroll-section>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Complete Solar Solutions for Every Need
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                From residential homes to large commercial installations, we provide 
                end-to-end solar solutions that maximize your investment and minimize 
                your carbon footprint.
              </p>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80">{benefit}</p>
                  </div>
                ))}
              </div>

              <Link to="/about">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="relative" data-scroll data-scroll-speed="0.5">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <Card className="relative border-border shadow-xl overflow-hidden premium-glow">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
                      <div>
                        <p className="text-sm text-muted-foreground">Average Savings</p>
                        <p className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          70%
                        </p>
                      </div>
                      <DollarSign className="w-12 h-12 text-primary" />
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
                      <div>
                        <p className="text-sm text-muted-foreground">Installations</p>
                        <p className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          2,500+
                        </p>
                      </div>
                      <CheckCircle2 className="w-12 h-12 text-primary" />
                    </div>

                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
                      <div>
                        <p className="text-sm text-muted-foreground">Customer Rating</p>
                        <p className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          4.9/5
                        </p>
                      </div>
                      <Shield className="w-12 h-12 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Value Added Services Section */}
      <section className="py-20 bg-muted/30" data-scroll-section>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Value Added{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support services to keep your solar system running at peak performance
            </p>
          </div>

          <TooltipProvider delayDuration={200} skipDelayDuration={0}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: "System Monitoring",
                  description: "Continuous tracking of your solar system's performance to detect faults early, ensure optimal energy production, and maintain system efficiency."
                },
                {
                  title: "System Maintenance",
                  description: "Regular inspections and servicing of inverters, wiring, and components to keep the system safe, efficient, and in good working condition."
                },
                {
                  title: "Solar Panel Cleaning",
                  description: "Removal of dust and debris from panels to maximise sunlight absorption and maintain peak energy output."
                },
                {
                  title: "SSEG Application",
                  description: "Handling the registration and approval process with the municipality or Eskom to ensure your system is legally connected to the grid."
                },
                {
                  title: "Bird Proofing",
                  description: "Installing mesh or barriers under panels to prevent birds from nesting and damaging wiring or reducing system performance."
                },
                {
                  title: "System Upgrades",
                  description: "Adding panels, batteries, or updated components to increase system capacity, improve backup power, and enhance performance."
                }
              ].map((service, index) => {
                const isExpanded = expandedIndex === index;
                
                if (isMobile) {
                  // Mobile: Show description inline when tapped
                  return (
                    <Card 
                      key={index}
                      onClick={() => setExpandedIndex(isExpanded ? null : index)}
                      className="group relative overflow-hidden border-border/50 active:border-primary/70 transition-all duration-300 active:shadow-xl active:shadow-primary/30 active:-translate-y-1 active:scale-[0.98] text-center bg-gradient-to-br from-card/80 via-card/50 to-card/80 backdrop-blur-sm cursor-pointer touch-manipulation select-none"
                      data-scroll
                      data-scroll-speed={0.5 + index * 0.1}
                    >
                      {/* Animated background gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 group-active:opacity-100'}`} />
                      
                      {/* Shine effect on tap */}
                      <div className="absolute inset-0 -translate-x-full group-active:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                      
                      <CardContent className="p-6 relative z-10">
                        <div className="flex items-center justify-center mb-4">
                          <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center transition-all duration-300 shadow-lg ${isExpanded ? 'from-primary/25 to-accent/25 scale-105 rotate-1 shadow-primary/40' : 'group-active:from-primary/25 group-active:to-accent/25 group-active:scale-105 group-active:rotate-1 group-active:shadow-primary/40'}`}>
                            {/* Glow effect */}
                            <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 blur-md transition-opacity duration-300 -z-10 ${isExpanded ? 'opacity-100' : 'opacity-0 group-active:opacity-100'}`} />
                            <Check className={`w-7 h-7 text-primary transition-transform duration-200 ${isExpanded ? 'scale-105' : 'group-active:scale-105'}`} />
                          </div>
                        </div>
                        <h3 className={`text-lg font-semibold transition-colors duration-200 mb-2 ${isExpanded ? 'text-primary' : 'group-active:text-primary'}`}>
                          {service.title}
                        </h3>
                        
                        {/* Description that expands on mobile */}
                        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                          <p className="text-sm text-muted-foreground leading-relaxed text-left">
                            {service.description}
                          </p>
                        </div>
                        
                        {/* Expand/Collapse indicator */}
                        <div className="flex items-center justify-center mt-3">
                          <ChevronDown className={`w-4 h-4 text-primary transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                        </div>
                        
                        {/* Decorative line that appears on tap */}
                        <div className={`w-0 ${isExpanded ? 'w-12' : 'group-active:w-12'} h-0.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full transition-all duration-300 mt-3`} />
                      </CardContent>
                    </Card>
                  );
                }
                
                // Desktop: Use tooltip
                return (
                  <Tooltip key={index} delayDuration={200}>
                    <TooltipTrigger asChild>
                      <Card 
                        className="group relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 text-center bg-gradient-to-br from-card/80 via-card/50 to-card/80 backdrop-blur-sm cursor-pointer"
                        data-scroll
                        data-scroll-speed={0.5 + index * 0.1}
                      >
                        {/* Animated background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Shine effect on hover */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        
                        <CardContent className="p-6 relative z-10">
                          <div className="flex items-center justify-center mb-4">
                            <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg group-hover:shadow-primary/30">
                              {/* Glow effect */}
                              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 -z-10" />
                              <Check className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                            </div>
                          </div>
                          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300 mb-2">
                            {service.title}
                          </h3>
                          {/* Decorative line that appears on hover */}
                          <div className="w-0 group-hover:w-12 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full transition-all duration-500 mt-3" />
                        </CardContent>
                      </Card>
                    </TooltipTrigger>
                    <TooltipContent 
                      side="top"
                      sideOffset={4}
                      className="max-w-sm bg-gradient-to-br from-popover via-popover/95 to-popover border-primary/20 shadow-2xl backdrop-blur-md p-4 rounded-lg"
                    >
                      <p className="text-sm leading-relaxed text-popover-foreground">{service.description}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          </TooltipProvider>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
              >
                View All Packages
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 bg-gradient-to-r from-muted/20 via-background to-muted/20 relative overflow-hidden" data-scroll-section>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Industry Leaders
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Partnering with the world's most innovative solar technology companies
            </p>
          </div>

          {/* Premium Company Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {[
              { name: "SolarEdge", description: "Smart Energy Technologies" },
              { name: "Enphase", description: "Microinverter Solutions" },
              { name: "Canadian Solar", description: "Global Solar Manufacturing" },
              { name: "JinkoSolar", description: "Premium Solar Panels" },
              { name: "Trina Solar", description: "Advanced Technology" }
            ].map((company, index) => (
              <div 
                key={index}
                className="group text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10"
                data-scroll
                data-scroll-speed={0.3 + index * 0.1}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent opacity-70 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {company.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {company.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Accent */}
          <div className="mt-16 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="py-24 bg-background" data-scroll-section>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about our solar solutions
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left font-semibold">
                      Which areas in South Africa do you service?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      We install and provide residential solutions to all of Gauteng as well as the Hartebeespoort area, Nelspruit, Bloemfontein and George, Western Cape. Commercial, industrial and agricultural projects are commissioned all over South Africa, depending on the project size and this process is handled by our highly qualified engineers and project managers.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left font-semibold">
                      Do you only offer solar PV?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      No, we have a variety of different energy solutions we offer to our clients. As energy experts, we want our clients to get the most out of their investment and we build bespoke energy packages around each individual's needs - this includes energy efficiencies and backup solutions.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left font-semibold">
                      What size system should I purchase?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      We calculate your needs based on your requirements during power outages. One of the most important calculations is your peak power demand which is the amount of power that will be drawn from the system during peak use - the other is the monthly usage (kWh). One of our skilled team members will recommend the size system you need based on your first consultation. Commercial projects are designed and built differently from residential installations and through a detailed process, our engineers will recommend fit-for-purpose energy solutions based on your company's requirements.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-left font-semibold">
                      How do I get a quote?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Fill out a form on our home or contact us page. Alternatively, you can drop us an email or give us a call directly. We have a skilled team ready to assist you with all the necessary information you may need. For accurate quotes on bigger installations, we will request your utility bills, so make sure to have those handy.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-6">
                    <AccordionTrigger className="text-left font-semibold">
                      How long will my solar battery last?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Batteries have varying life spans depending on their quality and battery technology. A great quality, well-maintained lithium-ion solar battery can last up to 10 years. We ensure that a battery management system (BMS) is connected which extends the life span of your battery significantly. It is important to remember to take maintenance into consideration as a healthy battery will last longer and can even exceed its expected lifespan.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7">
                    <AccordionTrigger className="text-left font-semibold">
                      What affects the power generation of my system?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      The angle and intensity of the UV rays of the sun on your roof on a daily basis will drastically affect your power generation, so location of your installed panels is key. Shade, roof orientation, trees, other obstructions, weather conditions, and maintenance all affect the maximum output of your system. We design the most efficient layout for your building, taking all unique factors into consideration.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-8">
                    <AccordionTrigger className="text-left font-semibold">
                      What should I consider before I make a purchase?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Even though we experience the daily pressures of South Africa's energy crisis, this is not a process one should rush into. You must take the following factors into consideration carefully before going ahead with you purchase; energy requirements, system design, correct technology, quality and durability of the system's components, credibility and reputation of your installer, product and installation costs, length of the projects and your contractors experience and qualifications.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-9">
                    <AccordionTrigger className="text-left font-semibold">
                      How reliable will my solar system be?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      A properly installed system will be extremely reliable in saving on your monthly utility bill and providing sufficient power during load-shedding schedules. Provided your system is maintained properly and you have installed a sufficient size system for your load, you will not feel the effects of power outages.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-10">
                    <AccordionTrigger className="text-left font-semibold">
                      How long will my installation take?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      After your first consultation with one of our skilled Gurus, we will require a couple of things from you in order to accurately quote and send through a proposal. Installations usually take 1-2 days depending on the system size. Commercial projects are handled differently and our engineers will schedule site visits first beforehand where we measure the energy quality and supply and then advise on project timelines.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-24 bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-secondary-foreground relative overflow-hidden" 
        data-scroll-section
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent" data-scroll data-scroll-speed="-1" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Saving with Solar?
            </h2>
            <p className="text-xl text-secondary-foreground/90 mb-8 leading-relaxed">
              Join thousands of satisfied customers who have made the switch to clean, 
              renewable energy. Get your free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-lg px-8 py-6 shadow-lg"
                >
                  Request Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 py-6 bg-secondary-foreground/10 border-secondary-foreground/20 hover:bg-secondary-foreground/20 text-secondary-foreground"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
