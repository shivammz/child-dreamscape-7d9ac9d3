'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const founderImage = "https://images.pexels.com/photos/3768111/pexels-photo-3768111.jpeg?auto=compress&cs=tinysrgb&w=600";
const educateImage = "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=600";
const nurtureImage = "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=600";
const empowerImage = "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600";

gsap.registerPlugin(ScrollTrigger);

const WhoWeAreSection = () => {
  const collageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (collageRef.current) {
      const images = collageRef.current.querySelectorAll(".collage-image");
      
      gsap.from(images, {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: collageRef.current,
          start: "top 70%",
        }
      });
    }

    if (contentRef.current) {
      gsap.from(contentRef.current.children, {
        x: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 75%",
        }
      });
    }
  }, []);

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Collage Side */}
          <div ref={collageRef} className="relative h-[600px]">
            {/* Main large image */}
            <div className="collage-image absolute top-0 left-0 w-3/5 h-3/5 rounded-2xl overflow-hidden shadow-float transform -rotate-2">
              <img
                src={founderImage}
                alt="Founder with children"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top right image */}
            <div className="collage-image absolute top-8 right-0 w-2/5 h-2/5 rounded-2xl overflow-hidden shadow-warm transform rotate-3">
              <img
                src={educateImage}
                alt="Children learning"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom left image */}
            <div className="collage-image absolute bottom-16 left-8 w-2/5 h-2/5 rounded-2xl overflow-hidden shadow-soft transform rotate-2">
              <img
                src={nurtureImage}
                alt="Caring moments"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom right image */}
            <div className="collage-image absolute bottom-0 right-12 w-1/3 h-1/3 rounded-2xl overflow-hidden shadow-warm transform -rotate-3">
              <img
                src={empowerImage}
                alt="Empowering children"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -inset-8 bg-gradient-warm opacity-10 rounded-full blur-3xl -z-10" />
          </div>

          {/* Content Side */}
          <div ref={contentRef} className="space-y-8">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground leading-tight">
              We Don't Just Build Futures —
              <span className="text-secondary block mt-2">We Nurture Dreams</span>
            </h2>

            <p className="font-inter text-lg text-muted-foreground leading-relaxed">
              Founded with love and purpose, the D.V. Singh Foundation exists because every child,
              regardless of circumstance, carries within them infinite potential.
            </p>

            <p className="font-inter text-lg text-muted-foreground leading-relaxed">
              We believe education is not a privilege — it's a birthright. Through compassion-driven
              programs and community support, we transform lives one child at a time.
            </p>

            {/* Handwritten Quote */}
            <div className="relative pt-8">
              <div className="absolute left-0 top-0 w-16 h-1 bg-accent" />
              <p className="font-playfair text-2xl italic text-accent leading-relaxed pl-2">
                "We don't just build futures — we nurture dreams."
              </p>
              <p className="font-inter text-sm text-muted-foreground mt-3 pl-2">
                — D.V. Singh, Founder
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
