import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

// Real SolarQuench project images from Cloudinary
const industrial1 = "https://res.cloudinary.com/dnnwvmh3n/image/upload/v1762247587/WhatsApp_Image_2025-11-04_at_10.28.21_3_yccd3g.jpg";
const industrial2 = "https://res.cloudinary.com/dnnwvmh3n/image/upload/v1762247599/WhatsApp_Image_2025-11-04_at_10.28.15_3_vrnxbg.jpg";
const industrial3 = "https://res.cloudinary.com/dnnwvmh3n/image/upload/v1762247582/WhatsApp_Image_2025-11-04_at_10.28.22_1_nxffha.jpg";
const industrial4 = "https://res.cloudinary.com/dnnwvmh3n/image/upload/v1762247554/WhatsApp_Image_2025-11-04_at_10.28.12_gu2rp2.jpg";
const industrial5 = "https://res.cloudinary.com/dnnwvmh3n/image/upload/v1762247532/WhatsApp_Image_2025-11-04_at_10.28.21_1_qhlmae.jpg";
const industrial6 = "https://res.cloudinary.com/dnnwvmh3n/image/upload/v1762247526/WhatsApp_Image_2025-11-04_at_10.28.16_1_v7ncht.jpg";
const industrial7 = "https://res.cloudinary.com/dnnwvmh3n/image/upload/v1762249012/WhatsApp_Image_2025-11-04_at_10.28.16_lgvpvb.jpg";
const industrial8 = "https://res.cloudinary.com/dnnwvmh3n/image/upload/v1762249025/WhatsApp_Image_2025-11-04_at_10.28.14_2_uf1tpn.jpg";

const gallery1 = "https://res.cloudinary.com/dnnwvmh3n/image/upload/v1760961787/WhatsApp_Image_2025-10-19_at_19.55.48_3_zadswm.jpg";
const gallery2 = "https://res.cloudinary.com/dnnwvmh3n/image/upload/v1760961786/WhatsApp_Image_2025-10-19_at_19.55.46_3_dijati.jpg";
const gallery3 = "https://res.cloudinary.com/dnnwvmh3n/image/upload/v1760961781/WhatsApp_Image_2025-10-19_at_19.55.59_2_dbk78f.jpg";
const gallery4 = "https://res.cloudinary.com/dnnwvmh3n/image/upload/v1760961794/WhatsApp_Image_2025-10-19_at_19.56.00_3_z3kojq.jpg";
const gallery5 = "https://res.cloudinary.com/dnnwvmh3n/image/upload/v1760961781/WhatsApp_Image_2025-10-19_at_19.55.46_2_eomcwy.jpg";
const gallery6 = "https://res.cloudinary.com/dnnwvmh3n/image/upload/v1760961780/WhatsApp_Image_2025-10-19_at_19.55.59_1_l42chn.jpg";
const gallery7 = "https://res.cloudinary.com/dnnwvmh3n/image/upload/v1760961792/WhatsApp_Image_2025-10-19_at_19.55.51_qbzyvp.jpg";
const gallery8 = "https://res.cloudinary.com/dnnwvmh3n/image/upload/v1760961799/WhatsApp_Image_2025-10-19_at_19.55.56_1_wv9shi.jpg";
const gallery9 = "https://res.cloudinary.com/dnnwvmh3n/image/upload/v1760961800/WhatsApp_Image_2025-10-19_at_19.55.54_bry9we.jpg";
const gallery10 = "https://res.cloudinary.com/dnnwvmh3n/image/upload/v1760961802/WhatsApp_Image_2025-10-19_at_19.55.57_ea9t2n.jpg";
const gallery11 = "https://res.cloudinary.com/dnnwvmh3n/image/upload/v1760961799/WhatsApp_Image_2025-10-19_at_19.55.56_foti41.jpg";
const gallery12 = "https://res.cloudinary.com/dnnwvmh3n/image/upload/v1760961796/WhatsApp_Image_2025-10-19_at_19.55.54_1_axwffl.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      image: industrial1,
      title: "Heavy-Duty Industrial Install",
      description: "High-capacity array for continuous operations",
      category: "Industrial",
    },
    {
      image: industrial2,
      title: "Industrial Rooftop System",
      description: "Robust setup for manufacturing facility",
      category: "Industrial",
    },
    {
      image: industrial3,
      title: "Factory Energy Upgrade",
      description: "Peak-load support and energy savings",
      category: "Industrial",
    },
    {
      image: industrial4,
      title: "Industrial Ground-Mount",
      description: "Durable ground-mount for harsh environments",
      category: "Industrial",
    },
    {
      image: industrial5,
      title: "Warehouse Solar Array",
      description: "Optimized coverage and performance",
      category: "Industrial",
    },
    {
      image: industrial6,
      title: "Industrial Carport PV",
      description: "Shaded parking with integrated solar",
      category: "Industrial",
    },
    {
      image: industrial7,
      title: "Industrial Control Room",
      description: "Distribution and protection panel integration",
      category: "Industrial",
    },
    {
      image: industrial8,
      title: "Industrial Inverter Stack",
      description: "High-reliability inverter and DB installation",
      category: "Industrial",
    },
    {
      image: gallery1,
      title: "Residential Solar Installation",
      description: "5kW system for modern family home",
      category: "Residential",
      showBadge: false,
    },
    {
      image: gallery2,
      title: "Commercial Solar Farm",
      description: "Large-scale solar energy production",
      category: "Commercial",
    },
    {
      image: gallery3,
      title: "Premium Solar Panels",
      description: "High-efficiency panel installation",
      category: "Technology",
    },
    {
      image: gallery4,
      title: "Professional Installation",
      description: "Certified technicians at work",
      category: "Installation",
    },
    {
      image: gallery5,
      title: "Urban Solar Solution",
      description: "Compact system for city living",
      category: "Residential",
    },
    {
      image: gallery6,
      title: "Industrial Scale Project",
      description: "Mega-watt solar installation",
      category: "Commercial",
    },
    {
      image: gallery7,
      title: "Solar Panel Array",
      description: "Multiple panel installation project",
      category: "Technology",
    },
    {
      image: gallery8,
      title: "Green Energy Solution",
      description: "Sustainable power generation",
      category: "Commercial",
    },
    {
      image: gallery9,
      title: "Advanced Solar System",
      description: "State-of-the-art solar technology",
      category: "Technology",
    },
    {
      image: gallery10,
      title: "Eco-Friendly Installation",
      description: "Environmentally conscious solar setup",
      category: "Residential",
    },
    {
      image: gallery11,
      title: "Solar Power Station",
      description: "Large-scale renewable energy project",
      category: "Commercial",
    },
    {
      image: gallery12,
      title: "Modern Solar Array",
      description: "Cutting-edge solar panel system",
      category: "Technology",
    },
  ];

  const stats = [
    { number: "2,500+", label: "Projects Completed" },
    { number: "15MW", label: "Total Capacity Installed" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "10,000+", label: "Tons CO₂ Saved" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Project Gallery
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our portfolio of successful solar installations. From residential 
              rooftops to large commercial projects, see the quality and precision we 
              bring to every installation.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-secondary via-secondary/95 to-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-secondary-foreground/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background" data-scroll-section>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group cursor-pointer overflow-hidden premium-glow"
                onClick={() => setSelectedImage(project.image)}
                data-scroll
                data-scroll-speed={0.3 + (index % 3) * 0.2}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Watermark - Always visible (centered logo) */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="rounded-xl bg-black/0 backdrop-blur-sm p-0 border-0">
                      <img
                        src="https://res.cloudinary.com/dnnwvmh3n/image/upload/v1760962192/WhatsApp_Image_2025-10-17_at_07.25.35_jynxa8.jpg"
                        alt="Solarquench watermark logo"
                        className="w-24 h-16 object-cover rounded-lg shadow-lg opacity-40"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-secondary-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    {project.showBadge !== false && (
                      <div className="inline-block px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium mb-2">
                        {project.category}
                      </div>
                    )}
                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                    <p className="text-sm text-secondary-foreground/90">{project.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] p-0 bg-background border shadow-2xl">
          {selectedImage && (
            <div className="relative">
              <img 
                src={selectedImage}
                alt="Project detail"
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Watermark - Always visible in dialog (centered logo) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <img
                  src="https://res.cloudinary.com/dnnwvmh3n/image/upload/v1760962192/WhatsApp_Image_2025-10-17_at_07.25.35_jynxa8.jpg"
                  alt="Solarquench watermark logo"
                  className="w-40 h-28 object-cover rounded-xl shadow-2xl opacity-40"
                />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Want to See Your Project Here?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Let's create your success story together. Contact us today for a free 
              consultation and join our growing list of satisfied customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/quote">
                <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium shadow-lg">
                  Get Free Quote
                </button>
              </a>
              <a href="/contact">
                <button className="px-8 py-4 border-2 border-border hover:border-primary/50 rounded-lg transition-colors font-medium">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
