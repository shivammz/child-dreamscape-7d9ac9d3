"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight, ChevronDown } from "lucide-react";
import gsap from "gsap";

const HeroSection = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const ornamentRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .from(headlineRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      })
      .from(
        subtextRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6"
      )
      .from(
        buttonsRef.current,
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      );

    // Floating particles animation
    const particles = particlesRef.current?.children;
    if (particles) {
      Array.from(particles).forEach((particle, index) => {
        gsap.to(particle, {
          y: "random(-100, 100)",
          x: "random(-100, 100)",
          duration: "random(3, 6)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2,
        });
      });
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (particlesRef.current) {
      gsap.to(particlesRef.current, {
        x: mousePosition.x,
        y: mousePosition.y,
        duration: 2,
        ease: "power2.out",
      });
    }

    if (ornamentRef.current) {
      gsap.to(ornamentRef.current, {
        x: mousePosition.x * 0.5,
        y: mousePosition.y * 0.5,
        duration: 1.5,
        ease: "power2.out",
      });
    }
  }, [mousePosition]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-children-playing-in-a-park-4563-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20" />
      </div>

      {/* Floating Particles */}
      <div
        ref={particlesRef}
        className="absolute inset-0 z-10 pointer-events-none"
      >
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent/30 rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Decorative Ornament */}
      <div
        ref={ornamentRef}
        className="absolute top-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl z-10 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Tagline */}
          <p className="font-inter text-sm md:text-base uppercase tracking-wider text-accent">
            Transforming Lives, One Child at a Time
          </p>

          {/* Main Headline */}
          <h1
            ref={headlineRef}
            className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
          >
            Every Child Deserves the{" "}
            <span className="text-gradient-gold">Chance to Dream</span>
          </h1>

          {/* Subtext */}
          <p
            ref={subtextRef}
            className="font-inter text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
          >
            Your kindness lights the path to their future.
          </p>

          {/* CTA Buttons */}
          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <Button
              variant="default"
              size="lg"
              className="group shadow-float min-w-[220px] animate-glow"
            >
              <Heart className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Make a Difference
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group min-w-[220px] border-2"
            >
              See Our Impact
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="font-playfair text-4xl md:text-5xl font-bold text-primary">
                500+
              </div>
              <div className="font-inter text-sm text-muted-foreground">
                Children Helped
              </div>
            </div>
            <div className="space-y-2">
              <div className="font-playfair text-4xl md:text-5xl font-bold text-primary">
                50+
              </div>
              <div className="font-inter text-sm text-muted-foreground">
                Villages Reached
              </div>
            </div>
            <div className="space-y-2">
              <div className="font-playfair text-4xl md:text-5xl font-bold text-primary">
                10+
              </div>
              <div className="font-inter text-sm text-muted-foreground">
                Years of Impact
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm font-inter">Scroll to Explore</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
