'use client';

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stories = [
  {
    name: "Rani",
    age: 8,
    quote: "Now I can go to school every day.",
    image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Arjun",
    age: 10,
    quote: "I want to become a doctor so I can help others.",
    image: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const ImpactStoriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.from(titleRef.current.children, {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        }
      });
    }
  }, []);

  useEffect(() => {
    // Breathing animation on image
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1.05,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, [currentIndex]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="stories" className="py-24 bg-muted/50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Faces of <span className="text-accent">Change</span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground">
            These are the voices of hope we're helping create.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl shadow-float">
            {stories.map((story, index) => (
              <div
                key={story.name}
                className={`transition-all duration-1000 ${
                  index === currentIndex
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 absolute inset-0 translate-x-full"
                }`}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-96 md:h-[600px] overflow-hidden">
                    <img
                      ref={index === currentIndex ? imageRef : null}
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover"
                      style={{ transformOrigin: "center center" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/40" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.4)_100%)]" />
                  </div>

                  {/* Content */}
                  <div className="bg-card p-12 flex flex-col justify-center relative">
                    {/* Decorative line */}
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent via-secondary to-transparent" />
                    
                    <div className="mb-8">
                      <div className="w-20 h-1 bg-accent mb-8" />
                      <p className="font-playfair text-3xl md:text-4xl italic text-foreground leading-relaxed mb-8">
                        "{story.quote}"
                      </p>
                      <p className="font-inter text-xl text-muted-foreground">
                        — {story.name}, {story.age} years old
                      </p>
                    </div>

                    <p className="font-inter text-sm text-accent italic">
                      Your kindness made this moment possible.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full shadow-soft hover:shadow-warm transition-shadow bg-background/50 backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full shadow-soft hover:shadow-warm transition-shadow bg-background/50 backdrop-blur-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-6">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? "bg-accent w-12"
                    : "bg-border hover:bg-muted-foreground w-3"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStoriesSection;
