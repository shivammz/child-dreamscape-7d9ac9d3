"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImpactStoriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const titleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const stories = [
    {
      name: "Arjun",
      age: 12,
      quote:
        "Education gave me wings to dream beyond my village. Today, I want to become a teacher and help others like me.",
      image: "/images/child-arjun.jpg",
    },
    {
      name: "Rani",
      age: 10,
      quote:
        "I never thought I could go to school. Now, I read books every day and dream of becoming a doctor to help my community.",
      image: "/images/child-rani.jpg",
    },
  ];

  useEffect(() => {
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      });
    }
  }, []);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 1 },
        {
          scale: 1.05,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        }
      );
    }
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stories.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [stories.length]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const currentStory = stories[currentIndex];

  return (
    <section id="stories" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div ref={titleRef} className="text-center space-y-4 mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
            <span className="font-inter text-sm font-medium text-primary uppercase tracking-wider">
              Impact Stories
            </span>
          </div>
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-foreground">
            Lives We've <span className="text-primary">Touched</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-float">
              <div ref={imageRef} className="w-full h-full">
                <Image
                  src={currentStory.image}
                  alt={currentStory.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            {/* Story Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="w-16 h-1 bg-accent" />
                <blockquote className="font-playfair text-3xl md:text-4xl italic text-foreground leading-relaxed">
                  "{currentStory.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="space-y-1">
                    <p className="font-inter text-xl font-semibold text-foreground">
                      {currentStory.name}
                    </p>
                    <p className="font-inter text-muted-foreground">
                      Age {currentStory.age}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-6">
                <button
                  onClick={prev}
                  className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all group"
                  aria-label="Previous story"
                >
                  <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={next}
                  className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all group"
                  aria-label="Next story"
                >
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Dots */}
                <div className="flex gap-2 ml-4">
                  {stories.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? "w-8 bg-primary"
                          : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                      aria-label={`Go to story ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStoriesSection;
