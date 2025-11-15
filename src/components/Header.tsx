import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-soft border-b border-border/20"
          : "bg-background/10 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="w-8 h-8 text-accent animate-float" fill="currentColor" />
          <span className="font-playfair text-xl font-semibold text-foreground">
            D.V. Singh Foundation
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#home"
            className="font-inter text-sm text-foreground hover:text-accent transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="font-inter text-sm text-foreground hover:text-accent transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#initiatives"
            className="font-inter text-sm text-foreground hover:text-accent transition-colors duration-300"
          >
            Initiatives
          </a>
          <a
            href="#stories"
            className="font-inter text-sm text-foreground hover:text-accent transition-colors duration-300"
          >
            Stories
          </a>
          <a
            href="#contact"
            className="font-inter text-sm text-foreground hover:text-accent transition-colors duration-300"
          >
            Contact
          </a>
        </div>

        <Button variant="hero" size="lg" className="animate-glow">
          Donate
        </Button>
      </nav>
    </header>
  );
};

export default Header;
