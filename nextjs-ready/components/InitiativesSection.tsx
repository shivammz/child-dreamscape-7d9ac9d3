"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const InitiativesSection = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  const initiatives = [
    {
      title: "Educational Support",
      caption: "Lighting minds with the power of knowledge",
      image: "/images/educate.jpg",
    },
    {
      title: "Healthcare Assistance",
      caption: "Ensuring every child grows healthy and strong",
      image: "/images/protect.jpg",
    },
    {
      title: "Skill Development",
      caption: "Empowering youth with skills for tomorrow",
      image: "/images/empower.jpg",
    },
    {
      title: "Nutrition Support",
      caption: "Nourishing bodies, nurturing futures",
      image: "/images/nurture.jpg",
    },
    {
      title: "Awareness Programs",
      caption: "Building conscious communities for change",
      image: "/images/founder-with-children.jpg",
    },
    {
      title: "Community Welfare",
      caption: "Strengthening the fabric of society together",
      image: "/images/hero-children.jpg",
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

    if (marqueeRef.current) {
      const marqueeContent = marqueeRef.current.querySelector(".marquee-content");
      if (marqueeContent) {
        const marqueeWidth = marqueeContent.scrollWidth / 2;

        animationRef.current = gsap.to(marqueeContent, {
          x: -marqueeWidth,
          duration: 40,
          ease: "none",
          repeat: -1,
        });
      }
    }
  }, []);

  const handleMouseEnter = () => {
    if (animationRef.current) {
      animationRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    if (animationRef.current) {
      animationRef.current.play();
    }
  };

  return (
    <section id="initiatives" className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div ref={titleRef} className="text-center space-y-4">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
            <span className="font-inter text-sm font-medium text-primary uppercase tracking-wider">
              Our Initiatives
            </span>
          </div>
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-foreground">
            Creating <span className="text-accent">Waves of Change</span>
          </h2>
        </div>
      </div>

      <div ref={marqueeRef} className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/30 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/30 to-transparent z-10" />

        <div className="overflow-hidden">
          <div
            className="marquee-content flex gap-8"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Duplicate initiatives for seamless loop */}
            {[...initiatives, ...initiatives].map((initiative, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[400px] h-[500px] relative group cursor-pointer"
              >
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-float">
                  <Image
                    src={initiative.image}
                    alt={initiative.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-8 space-y-3 transform transition-transform duration-500 group-hover:translate-y-0 translate-y-4">
                    <h3 className="font-playfair text-3xl font-bold text-foreground">
                      {initiative.title}
                    </h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      {initiative.caption}
                    </p>
                    <div className="w-16 h-1 bg-accent transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;
