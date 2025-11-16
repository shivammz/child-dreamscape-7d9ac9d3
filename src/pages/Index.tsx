import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Sparkles, ChevronLeft, ChevronRight, Users } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import founderImage from "@/assets/founder-with-children.jpg";
import educateImage from "@/assets/educate.jpg";
import nurtureImage from "@/assets/nurture.jpg";
import empowerImage from "@/assets/empower.jpg";
import protectImage from "@/assets/protect.jpg";
import raniImage from "@/assets/child-rani.jpg";
import arjunImage from "@/assets/child-arjun.jpg";
import sunriseImage from "@/assets/sunrise-walk.jpg";

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

const stories = [
  {
    name: "Rani",
    age: 8,
    quote: "Now I can go to school every day.",
    image: raniImage,
  },
  {
    name: "Arjun",
    age: 10,
    quote: "I want to become a doctor so I can help others.",
    image: arjunImage,
  },
];

const Index = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const ornamentRef = useRef<HTMLDivElement>(null);
  const videoCardRef = useRef<HTMLDivElement>(null);
  const videoTextRef = useRef<HTMLParagraphElement>(null);
  const collageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const storiesTitleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Hero Section Animations
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

  // Video Section Animations
  useEffect(() => {
    if (videoCardRef.current) {
      gsap.from(videoCardRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: videoCardRef.current,
          start: "top 80%",
        }
      });
    }

    if (videoTextRef.current) {
      gsap.from(videoTextRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: videoTextRef.current,
          start: "top 85%",
        }
      });
    }
  }, []);

  // Who We Are Section Animations
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

  // Initiatives Section Animations
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

        marqueeRef.current.addEventListener("mouseenter", () => {
          marqueeAnimation.pause();
        });

        marqueeRef.current.addEventListener("mouseleave", () => {
          marqueeAnimation.play();
        });
      }
    }
  }, []);

  // Impact Stories Section Animations
  useEffect(() => {
    if (storiesTitleRef.current) {
      gsap.from(storiesTitleRef.current.children, {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: storiesTitleRef.current,
          start: "top 80%",
        }
      });
    }
  }, []);

  useEffect(() => {
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stories.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleVideoMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = videoCardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleVideoMouseLeave = () => {
    gsap.to(videoCardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <div className="min-h-screen font-inter">
      <Header />
      <main>
        {/* Hero Section */}
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

        {/* Intro Video Section */}
        <section className="py-24 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)",
                backgroundSize: "10px 10px"
              }}
            />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div
              ref={videoCardRef}
              className="max-w-5xl mx-auto"
              onMouseMove={handleVideoMouseMove}
              onMouseLeave={handleVideoMouseLeave}
              style={{ perspective: "1000px" }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-float bg-card">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Foundation Introduction"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            <p
              ref={videoTextRef}
              className="font-playfair text-2xl italic text-center text-muted-foreground mt-12"
            >
              This is who we are. This is why we exist.
            </p>
          </div>
        </section>

        {/* Who We Are Section */}
        <section id="about" className="py-24 bg-background relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div ref={collageRef} className="relative h-[600px]">
                <div className="collage-image absolute top-0 left-0 w-3/5 h-3/5 rounded-2xl overflow-hidden shadow-float transform -rotate-2">
                  <img
                    src={founderImage}
                    alt="Founder with children"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="collage-image absolute top-8 right-0 w-2/5 h-2/5 rounded-2xl overflow-hidden shadow-warm transform rotate-3">
                  <img
                    src={educateImage}
                    alt="Children learning"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="collage-image absolute bottom-16 left-8 w-2/5 h-2/5 rounded-2xl overflow-hidden shadow-soft transform rotate-2">
                  <img
                    src={nurtureImage}
                    alt="Caring moments"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="collage-image absolute bottom-0 right-12 w-1/3 h-1/3 rounded-2xl overflow-hidden shadow-warm transform -rotate-3">
                  <img
                    src={empowerImage}
                    alt="Empowering children"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute -inset-8 bg-gradient-warm opacity-10 rounded-full blur-3xl -z-10" />
              </div>

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

        {/* Initiatives Section */}
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

          <div ref={marqueeRef} className="relative">
            <div className="overflow-hidden">
              <div className="marquee-content flex gap-8">
                {[...initiatives, ...initiatives].map((initiative, index) => (
                  <div
                    key={index}
                    className="group relative flex-shrink-0 w-[400px] h-[500px] rounded-3xl overflow-hidden shadow-float hover:shadow-warm transition-all duration-500 cursor-pointer"
                  >
                    <img
                      src={initiative.image}
                      alt={initiative.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />

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

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 bg-accent blur-xl" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
          </div>

          <p className="text-center font-playfair text-xl italic text-muted-foreground mt-16">
            These are not just programs. They are promises kept.
          </p>
        </section>

        {/* Impact Stories Section */}
        <section id="stories" className="py-24 bg-muted/50 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div ref={storiesTitleRef} className="text-center mb-16">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
                Faces of <span className="text-accent">Change</span>
              </h2>
              <p className="font-inter text-lg text-muted-foreground">
                These are the voices of hope we're helping create.
              </p>
            </div>

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

                      <div className="bg-card p-12 flex flex-col justify-center relative">
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

              <div className="flex justify-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevStory}
                  className="rounded-full shadow-soft hover:shadow-warm transition-shadow bg-background/50 backdrop-blur-sm"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextStory}
                  className="rounded-full shadow-soft hover:shadow-warm transition-shadow bg-background/50 backdrop-blur-sm"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>

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

        {/* CTA Section */}
        <section className="relative py-32 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${sunriseImage})`,
              backgroundAttachment: "fixed",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/70 to-primary/50" />
          </div>

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
                <Button variant="hero" size="lg" className="group shadow-float min-w-[200px] animate-glow">
                  <Heart className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Donate Now
                </Button>
                <Button variant="heroSecondary" size="lg" className="group min-w-[200px]">
                  <Users className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Become a Volunteer
                </Button>
              </div>
            </div>
          </div>

          <div className="absolute top-1/4 left-10 w-32 h-32 bg-accent/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
