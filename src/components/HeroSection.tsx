import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import gsap from "gsap";

const HeroSection = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline();
    
    timeline
      .from(headlineRef.current, {
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      })
      .from(subtextRef.current, {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.6")
      .from(buttonsRef.current?.children || [], {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      }, "-=0.5");

    // Floating particles animation
    gsap.to(particlesRef.current?.children || [], {
      y: "random(-20, 20)",
      x: "random(-20, 20)",
      duration: "random(3, 5)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        amount: 2,
        from: "random"
      }
    });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.7)" }}
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-children-playing-in-a-park-4563-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/30 to-background/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
      </div>

      {/* Floating Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 
          ref={headlineRef}
          className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight"
        >
          Every Child Deserves
          <br />
          <span className="text-accent">the Chance to Dream</span>
        </h1>

        <p 
          ref={subtextRef}
          className="font-inter text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto"
        >
          Your kindness lights the path to their future.
        </p>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="group shadow-warm">
            Make a Difference
            <Heart className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
          </Button>
          <Button variant="heroSecondary" size="lg" className="group">
            See Our Work
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
