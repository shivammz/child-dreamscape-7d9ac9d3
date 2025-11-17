import Link from "next/link";
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-muted/30 relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)",
            backgroundSize: "10px 10px"
          }} 
        />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-playfair text-xl font-bold text-foreground">
                D.V. Singh Foundation
              </span>
            </div>
            <p className="font-inter text-muted-foreground leading-relaxed">
              Transforming lives through education, healthcare, and community development.
              Every child deserves a chance to dream.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-playfair text-xl font-bold text-foreground">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="font-inter text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="#about" className="font-inter text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="#initiatives" className="font-inter text-muted-foreground hover:text-primary transition-colors">
                Our Initiatives
              </Link>
              <Link href="#stories" className="font-inter text-muted-foreground hover:text-primary transition-colors">
                Impact Stories
              </Link>
            </nav>
          </div>

          {/* Get Involved */}
          <div className="space-y-6">
            <h3 className="font-playfair text-xl font-bold text-foreground">Get Involved</h3>
            <nav className="flex flex-col gap-3">
              <Link href="#" className="font-inter text-muted-foreground hover:text-primary transition-colors">
                Donate
              </Link>
              <Link href="#" className="font-inter text-muted-foreground hover:text-primary transition-colors">
                Volunteer
              </Link>
              <Link href="#" className="font-inter text-muted-foreground hover:text-primary transition-colors">
                Partner With Us
              </Link>
              <Link href="#" className="font-inter text-muted-foreground hover:text-primary transition-colors">
                Corporate CSR
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-playfair text-xl font-bold text-foreground">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="font-inter text-muted-foreground text-sm">
                  123 Hope Street, New Delhi, India 110001
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@dvsinghfoundation.org" className="font-inter text-muted-foreground text-sm hover:text-primary transition-colors">
                  info@dvsinghfoundation.org
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+911234567890" className="font-inter text-muted-foreground text-sm hover:text-primary transition-colors">
                  +91 123 456 7890
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <Link 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-inter text-sm text-muted-foreground text-center md:text-left">
              Made with love — for every child who dares to dream.
            </p>
            <p className="font-inter text-sm text-muted-foreground">
              © {new Date().getFullYear()} D.V. Singh Foundation. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
