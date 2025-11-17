"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhoWeAreSection = () => {
  const collageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (collageRef.current) {
      const images = collageRef.current.querySelectorAll(".collage-image");
      gsap.from(images, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: collageRef.current,
          start: "top 70%",
        },
      });
    }

    if (contentRef.current) {
      gsap.from(contentRef.current, {
        x: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 70%",
        },
      });
    }
  }, []);

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Collage */}
          <div ref={collageRef} className="relative h-[600px]">
            <div className="collage-image absolute top-0 left-0 w-64 h-64 rounded-2xl overflow-hidden shadow-lg rotate-3 hover:rotate-0 transition-transform">
              <Image
                src="/images/founder-with-children.jpg"
                alt="Founder with children"
                fill
                className="object-cover"
              />
            </div>
            <div className="collage-image absolute top-20 right-0 w-56 h-56 rounded-2xl overflow-hidden shadow-lg -rotate-6 hover:rotate-0 transition-transform">
              <Image
                src="/images/educate.jpg"
                alt="Education program"
                fill
                className="object-cover"
              />
            </div>
            <div className="collage-image absolute bottom-32 left-12 w-48 h-48 rounded-2xl overflow-hidden shadow-lg rotate-6 hover:rotate-0 transition-transform">
              <Image
                src="/images/nurture.jpg"
                alt="Nurture program"
                fill
                className="object-cover"
              />
            </div>
            <div className="collage-image absolute bottom-0 right-12 w-52 h-52 rounded-2xl overflow-hidden shadow-lg -rotate-3 hover:rotate-0 transition-transform">
              <Image
                src="/images/empower.jpg"
                alt="Empower program"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                <span className="font-inter text-sm font-medium text-primary uppercase tracking-wider">
                  Who We Are
                </span>
              </div>
              <h2 className="font-playfair text-5xl font-bold text-foreground leading-tight">
                A Legacy of <span className="text-primary">Love</span> and{" "}
                <span className="text-accent">Hope</span>
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Founded with a vision to create lasting change, the D.V. Singh Foundation
                has been a beacon of hope for underprivileged children across rural India.
                We believe that every child, regardless of their circumstances, deserves
                access to education, healthcare, and opportunities to thrive.
              </p>
              <p>
                Our work is rooted in compassion and driven by the belief that small acts
                of kindness can create ripples of transformation. From providing quality
                education to ensuring nutritional support, we are committed to nurturing
                the potential within every child we serve.
              </p>
            </div>

            {/* Founder Quote */}
            <div className="relative p-6 bg-muted/50 rounded-2xl border-l-4 border-primary">
              <p className="font-playfair text-xl italic text-foreground/90 leading-relaxed">
                "Every child we help today becomes a pillar of strength for tomorrow's
                society. This is not charity — this is investment in humanity."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-1 h-8 bg-accent" />
                <div>
                  <p className="font-inter font-semibold text-foreground">D.V. Singh</p>
                  <p className="font-inter text-sm text-muted-foreground">Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </section>
  );
};

export default WhoWeAreSection;
