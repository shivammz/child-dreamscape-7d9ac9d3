'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, Users } from "lucide-react";

const sunriseImage = "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1200";

const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${sunriseImage})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/70 to-primary/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in-slow">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-primary-foreground leading-tight">
            Be the reason a child <span className="text-accent">smiles today</span>
          </h2>

          <p className="font-inter text-xl text-primary-foreground/90">
            Every contribution, no matter how small, plants a seed of hope
            that will bloom into a brighter tomorrow.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Link href="/donate">
              <Button variant="hero" size="lg" className="group shadow-float min-w-[200px] animate-glow">
                <Heart className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Donate Now
              </Button>
            </Link>
            <Link href="/join">
              <Button variant="heroSecondary" size="lg" className="group min-w-[200px]">
                <Users className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Become a Volunteer
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-accent/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
    </section>
  );
};

export default CTASection;
