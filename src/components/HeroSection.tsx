import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import gsap from "gsap";

const HeroSection = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const ornamentRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timeline = gsap.timeline({ delay: 0.3 });

    timeline
      .from(headlineRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.4,
        ease: "power4.out"
      })
      .from(subtextRef.current, {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
      }, "-=0.8")
      .from(buttonsRef.current?.children || [], {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out"
      }, "-=0.6")
      .from(ornamentRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.6)"
      }, "-=1");

    gsap.to(particlesRef.current?.children || [], {
      y: "random(-30, 30)",
      x: "random(-30, 30)",
      duration: "random(4, 7)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        amount: 3,
        from: "random"
      }
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-elegant"
    >
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
        >
          <source src="https://videos.pond5.com/african-poor-children-footage-000362353_main_xxl.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-depth opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_100%)]" />
      </div>

      <div
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
        }}
      >
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              background: i % 3 === 0
                ? 'hsl(45 80% 70% / 0.4)'
                : i % 3 === 1
                ? 'hsl(25 90% 75% / 0.3)'
                : 'hsl(240 10% 10% / 0.2)',
              boxShadow: i % 3 === 0 ? '0 0 20px hsl(45 80% 70% / 0.5)' : 'none'
            }}
          />
        ))}
      </div>

      <div
        ref={ornamentRef}
        className="absolute top-20 right-20 opacity-10 pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`
        }}
      >
        <div className="w-96 h-96 border border-accent/20 rounded-full" />
        <div className="w-96 h-96 border border-accent/10 rounded-full absolute top-8 left-8" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 backdrop-blur-sm border border-accent/20 mb-8 animate-fade-in-down">
          <Sparkles className="w-4 h-4 text-accent animate-pulse-subtle" />
          <span className="font-inter text-sm font-medium text-foreground">
            Transforming Lives Since 2010
          </span>
        </div>

        <h1
          ref={headlineRef}
          className="font-playfair text-display-2 lg:text-display-1 font-semibold text-foreground mb-8 leading-tight"
        >
          Every Child Deserves
          <br />
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-gold bg-clip-text text-transparent">
              the Chance to Dream
            </span>
            <div className="absolute inset-0 bg-gradient-gold opacity-20 blur-2xl scale-110 animate-pulse-subtle" />
          </span>
        </h1>

        <p
          ref={subtextRef}
          className="font-inter text-xl md:text-2xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed"
        >
          Your compassion becomes their opportunity.
          <br />
          <span className="text-foreground/70">Together, we illuminate paths to brighter futures.</span>
        </p>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Button
            size="lg"
            className="group relative overflow-hidden bg-gradient-gold text-primary border-0 shadow-luxury hover:shadow-luxury hover:scale-105 transition-all duration-500 font-semibold px-10 py-7 text-base rounded-2xl"
          >
            <span className="relative z-10 flex items-center gap-2">
              Make a Difference
              <Heart className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
            </span>
            <div className="absolute inset-0 bg-gradient-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-600" />
            <div className="absolute inset-0 bg-accent/20 blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="group relative overflow-hidden bg-background/50 backdrop-blur-sm border-2 border-foreground/10 hover:border-accent/50 shadow-soft hover:shadow-medium transition-all duration-500 font-medium px-10 py-7 text-base rounded-2xl"
          >
            <span className="relative z-10 flex items-center gap-2 text-foreground">
              See Our Impact
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
            </span>
            <div className="absolute inset-0 bg-gradient-luxury opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Button>
        </div>

        <div className="mt-20 flex items-center justify-center gap-12 text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="text-center">
            <div className="font-playfair text-3xl font-semibold text-foreground mb-1">10,000+</div>
            <div>Children Supported</div>
          </div>
          <div className="h-12 w-px bg-border" />
          <div className="text-center">
            <div className="font-playfair text-3xl font-semibold text-foreground mb-1">50+</div>
            <div>Communities Reached</div>
          </div>
          <div className="h-12 w-px bg-border hidden sm:block" />
          <div className="text-center hidden sm:block">
            <div className="font-playfair text-3xl font-semibold text-foreground mb-1">15 Years</div>
            <div>Of Impact</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float-subtle">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="font-inter text-xs uppercase tracking-wider">Scroll to Explore</span>
          <div className="w-6 h-10 border-2 border-current/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-current/40 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
