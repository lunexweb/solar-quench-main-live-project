import { Mail, Phone, Clock, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/1CfiG55hgU/", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/solar_quench?utm_source=qr&igsh=MWRyMGEyMHkzYTZuZA==", label: "Instagram" },
  ];

  return (
    <footer 
      className="bg-secondary text-secondary-foreground pt-4 pb-28 sm:py-6 relative z-10 mt-auto"
      data-scroll-section
      data-scroll-section-inview=""
    >
      <div className="container mx-auto px-4">
        {/* Single Responsive Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3 sm:gap-4 lg:gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg overflow-hidden">
              <img 
                src="https://res.cloudinary.com/dnnwvmh3n/image/upload/v1760962192/WhatsApp_Image_2025-10-17_at_07.25.35_jynxa8.jpg" 
                alt="SOLARQUENCH Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm sm:text-base font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              SOLARQUENCH
            </span>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:gap-6">
            <div className="flex items-center gap-2 min-w-0">
              <Mail className="w-4 h-4 text-primary flex-shrink-0" />
              <a 
                href="mailto:info@solarquench.co.za"
                className="text-xs sm:text-sm text-secondary-foreground/80 hover:text-primary transition-colors hover:underline break-all sm:break-normal min-w-0"
              >
                info@solarquench.co.za
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary flex-shrink-0" />
              <a 
                href="tel:+27712345678"
                className="text-xs sm:text-sm text-secondary-foreground/80 hover:text-primary transition-colors hover:underline whitespace-nowrap"
              >
                +27 71 234 5678
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-xs sm:text-sm text-secondary-foreground/80 whitespace-nowrap">Mon–Fri 7–5</span>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg bg-secondary-foreground/10 hover:bg-primary/20 text-secondary-foreground/70 hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
          
          {/* Copyright */}
          <div className="text-center lg:text-right">
            <p className="text-xs sm:text-sm text-secondary-foreground/70">
              © {currentYear} SOLARQUENCH · All rights reserved · {" "}
              <a 
                href="https://www.lunexweb.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors font-bold hover:underline"
              >
                Built by LUNEXWEB
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
