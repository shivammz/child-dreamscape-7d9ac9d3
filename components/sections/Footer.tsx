'use client';

import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-muted py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-accent" fill="currentColor" />
              <span className="font-playfair text-lg font-semibold text-foreground">
                D.V. Singh Foundation
              </span>
            </div>
            <p className="font-inter text-sm text-muted-foreground leading-relaxed">
              Nurturing dreams and building brighter futures for underprivileged children through
              education, care, and compassion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="font-inter text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="font-inter text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#initiatives"
                  className="font-inter text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Our Initiatives
                </a>
              </li>
              <li>
                <a
                  href="#stories"
                  className="font-inter text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Impact Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-playfair text-lg font-semibold text-foreground mb-4">
              Get Involved
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#donate"
                  className="font-inter text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Donate
                </a>
              </li>
              <li>
                <a
                  href="#volunteer"
                  className="font-inter text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Volunteer
                </a>
              </li>
              <li>
                <a
                  href="#partner"
                  className="font-inter text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Partner With Us
                </a>
              </li>
              <li>
                <a
                  href="#sponsor"
                  className="font-inter text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Sponsor a Child
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair text-lg font-semibold text-foreground mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <span className="font-inter text-sm text-muted-foreground">
                  New Delhi, India
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <a
                  href="mailto:info@dvsinghfoundation.org"
                  className="font-inter text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  info@dvsinghfoundation.org
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <a
                  href="tel:+911234567890"
                  className="font-inter text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  +91 123 456 7890
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 group"
              >
                <Facebook className="w-4 h-4 text-muted-foreground group-hover:text-accent-foreground" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 group"
              >
                <Twitter className="w-4 h-4 text-muted-foreground group-hover:text-accent-foreground" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 group"
              >
                <Instagram className="w-4 h-4 text-muted-foreground group-hover:text-accent-foreground" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 group"
              >
                <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-accent-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="font-inter text-sm text-muted-foreground italic">
            Made with love and purpose — for every dream yet to bloom.
          </p>
          <p className="font-inter text-xs text-muted-foreground mt-2">
            © {new Date().getFullYear()} D.V. Singh Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
