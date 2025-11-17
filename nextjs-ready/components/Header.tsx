"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Initiatives", href: "#initiatives" },
    { name: "Stories", href: "#stories" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Heart className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-playfair text-xl font-bold text-foreground">
              D.V. Singh Foundation
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Button variant="default" size="lg" className="animate-glow">
              <Heart className="mr-2 w-4 h-4" />
              Donate Now
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-background/95 backdrop-blur-lg z-40">
          <div
            className="absolute inset-0"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <nav className="relative container mx-auto px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-foreground text-lg font-medium hover:text-primary transition-colors animate-fade-in-slow"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button
              variant="default"
              size="lg"
              className="w-full animate-glow animate-fade-in-slow"
              style={{ animationDelay: "0.5s" }}
            >
              <Heart className="mr-2 w-4 h-4" />
              Donate Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
