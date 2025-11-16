'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/initiatives", label: "Initiatives" },
    { href: "/blog", label: "Stories" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-elegant ${
          isScrolled
            ? "bg-background/95 backdrop-blur-2xl shadow-medium border-b border-border/40"
            : "bg-background/0 backdrop-blur-sm"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-depth opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <nav className="container mx-auto px-6 lg:px-8 py-5 lg:py-6 flex items-center justify-between relative">
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <Heart
                className="w-9 h-9 text-accent transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                fill="currentColor"
                strokeWidth={0.5}
              />
              <div className="absolute inset-0 bg-accent/20 blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <span className="font-playfair text-lg lg:text-xl font-semibold text-foreground tracking-tight">
              D.V. Singh Foundation
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative font-inter text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-300 group py-2"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-gold group-hover:w-full transition-all duration-400 ease-elegant" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link href="/donate">
              <Button
                variant="default"
                size="lg"
                className="hidden lg:flex relative overflow-hidden group bg-gradient-gold text-primary border-0 shadow-medium hover:shadow-luxury transition-all duration-400 font-medium px-8"
              >
                <span className="relative z-10">Donate Now</span>
                <div className="absolute inset-0 bg-gradient-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-600" />
              </Button>
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-accent transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-primary/95 backdrop-blur-2xl"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <nav className="relative h-full flex flex-col items-center justify-center gap-8 animate-fade-in">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-playfair text-3xl font-semibold text-primary-foreground hover:text-accent transition-colors duration-300"
                style={{
                  animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/donate" style={{ animation: 'scale-in 0.6s ease-out 0.5s both' }}>
              <Button
                variant="default"
                size="lg"
                className="mt-8 bg-gradient-gold text-primary border-0 shadow-luxury font-medium px-12 py-6 text-lg"
              >
                Donate Now
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
