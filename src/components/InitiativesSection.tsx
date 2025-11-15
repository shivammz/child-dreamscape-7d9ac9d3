import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import educateImage from "@/assets/educate.jpg";
import nurtureImage from "@/assets/nurture.jpg";
import empowerImage from "@/assets/empower.jpg";
import protectImage from "@/assets/protect.jpg";

gsap.registerPlugin(ScrollTrigger);

const initiatives = [
  {
    title: "Educational Support",
    caption: "Education gives them wings to fly.",
    image: educateImage,
  },
  {
    title: "Healthcare Assistance",
    caption: "Every child deserves to be healthy and strong.",
    image: nurtureImage,
  },
  {
    title: "Skill Development",
    caption: "Building confidence through creativity and learning.",
    image: empowerImage,
  },
  {
    title: "Nutrition Support",
    caption: "Nourishing bodies, nurturing futures.",
    image: protectImage,
  },
  {
    title: "Awareness Programs",
    caption: "Knowledge is the first step to change.",
    image: educateImage,
  },
  {
    title: "Community Welfare",
    caption: "Together, we create lasting impact.",
    image: nurtureImage,
  },
];

const InitiativesSection = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.from(titleRef.current.children, {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        }
      });
    }

    if (marqueeRef.current) {
      const marqueeContent = marqueeRef.current.querySelector(".marquee-content");
      if (marqueeContent) {
        const marqueeAnimation = gsap.to(marqueeContent, {
          x: "-50%",
          duration: 40,
          ease: "none",
          repeat: -1,
        });

        // Pause on hover
        marqueeRef.current.addEventListener("mouseenter", () => {
          marqueeAnimation.pause();
        });

        marqueeRef.current.addEventListener("mouseleave", () => {
          marqueeAnimation.play();
        });
      }
    }
  }, []);

  return (
    <section id="initiatives" className="py-24 bg-gradient-hope relative overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div ref={titleRef} className="text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Turning Compassion into <span className="text-secondary">Action</span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            A living ribbon of hope, impact, and transformation.
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div ref={marqueeRef} className="relative">
        <div className="overflow-hidden">
          <div className="marquee-content flex gap-8">
            {/* Duplicate items for seamless loop */}
            {[...initiatives, ...initiatives].map((initiative, index) => (
              <div
                key={index}
                className="group relative flex-shrink-0 w-[400px] h-[500px] rounded-3xl overflow-hidden shadow-float hover:shadow-warm transition-all duration-500 cursor-pointer"
              >
                {/* Image */}
                <img
                  src={initiative.image}
                  alt={initiative.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="font-playfair text-3xl font-bold text-primary-foreground mb-3">
                    {initiative.title}
                  </h3>
                  <p className="font-inter text-primary-foreground/90 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    {initiative.caption}
                  </p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="font-inter text-sm text-accent italic">
                      Your kindness made this possible.
                    </span>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-accent blur-xl" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>

      {/* Bottom Message */}
      <p className="text-center font-playfair text-xl italic text-muted-foreground mt-16">
        These are not just programs. They are promises kept.
      </p>
    </section>
  );
};

export default InitiativesSection;
