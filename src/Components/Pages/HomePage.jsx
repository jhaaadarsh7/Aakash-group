
import React, { useState, useEffect, useRef } from "react";
import hero from "../../assets/images/Aakash.png";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import mam from "../../assets/images/2 (1).png";
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const welcomeRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  // CTA section refs
  const ctaRef = useRef(null);
  const ctaBadgeRef = useRef(null);
  const ctaTitleRef = useRef(null);
  const ctaSubtitleRef = useRef(null);
  const ctaButtonsRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    const ctx = gsap.context(() => {
      // Welcome Section Animation
      gsap.set([badgeRef.current, titleRef.current, subtitleRef.current], {
        opacity: 0,
        y: 80,
        scale: 0.9,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: welcomeRef.current,
          start: "top 77%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
          markers: false,
          scrub: false,
        },
      });

      tl.to(badgeRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
      })
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
          },
          "-=0.8"
        )
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.4,
            ease: "power3.out",
          },
          "-=1.0"
        );

      // CTA Section Animation
      gsap.set(
        [
          ctaBadgeRef.current,
          ctaTitleRef.current,
          ctaSubtitleRef.current,
          ctaButtonsRef.current,
        ],
        {
          opacity: 0,
          y: 80,
          scale: 0.9,
        }
      );

      const ctaTl = gsap.timeline({
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 77%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
          markers: false,
          scrub: false,
        },
      });

      ctaTl
        .to(ctaBadgeRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
        })
        .to(
          ctaTitleRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
          },
          "-=0.8"
        )
        .to(
          ctaSubtitleRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.4,
            ease: "power3.out",
          },
          "-=1.0"
        )
        .to(
          ctaButtonsRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.3,
            ease: "power3.out",
          },
          "-=0.9"
        );
    }, [welcomeRef, ctaRef]);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Mobile-Optimized Hero Section - Adjusted positioning */}
      <div className="relative overflow-hidden h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[85vh] 2xl:h-screen">
        {/* Mobile-first image approach - adjusted positioning */}
        <img
          src={hero}
          alt="Aakash Group"
          className="w-full h-full object-cover filter brightness-95 md:hidden"
          style={{ objectPosition: "center 60%" }}
        />

        {/* Desktop parallax background - adjusted positioning */}
        <div
          className="hidden md:block absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${hero})`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center 60%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            filter: "brightness(0.95)",
          }}
        />

        {/* Subtle overlay for professional look */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
      </div>

      {/* Welcome Section with Slow ScrollTrigger - Removed bottom margin */}
      <section
        ref={welcomeRef}
        className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white relative"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge - Slow Animated with ScrollTrigger */}
            <div
              ref={badgeRef}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-full mb-4 sm:mb-6"
            >
              <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Welcome to Aakash Group
              </span>
            </div>

            {/* Title - Slow Animated with ScrollTrigger */}
            <h1
              ref={titleRef}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
            >
              Excellence in
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
                Every Endeavor
              </span>
            </h1>

            {/* Subtitle - Slow Animated with ScrollTrigger */}
            <p
              ref={subtitleRef}
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed"
            >
              Pioneering innovation and delivering exceptional results across
              industries with unwavering commitment to quality and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* About Section - Fixed image sizing and removed gap */}
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden -mt-1">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center">
            {/* Content Side */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4 sm:mb-6">
                  <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    ✨ About Aakash Group
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  Transforming Vision into
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                    Nepal’s Landmark Realities{" "}
                  </span>
                </h2>
              </div>

              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
                At Aakash Group Nepal, our legacy stretches over a century,
                rooted deeply in the Nepali landscape. We're not just building
                structures, we are crafting experiences, enhancing lives, and
                nurturing communities. From packaged foods to finance,
                hospitality, and cutting-edge technology, our diversified
                ventures reflect our spirit of innovation, integrity, and
                unwavering quality. Under visionary leadership, we strive to
                elevate Nepal by turning ambition into impact one sector at a
                time.
              </p>

              {/* CTA Button */}
              <a
                href="/about"
                className="group inline-flex items-center bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Explore Our Journey
                <ArrowRightIcon className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-700 group w-full">
                <img
                  src={mam}
                  alt="About Aakash Group - Professional team collaboration"
                  className="w-full h-[300px] sm:h-[450px] md:h-[400px] lg:h-[450px] xl:h-[550px] 2xl:h-[600px] object-cover object-center"
                />
              </div>

              {/* Decorative Elements - Responsive sizes */}
              <div className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-2xl animate-pulse" />
              <div
                className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 w-20 sm:w-32 lg:w-40 h-20 sm:h-32 lg:h-40 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-2xl animate-pulse"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action Section with ScrollTrigger Animation */}
      <section
        ref={ctaRef}
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-700 to-blue-400 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-white/5 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-40 sm:w-64 lg:w-80 h-40 sm:h-64 lg:h-80 bg-white/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />

          {/* Floating Elements */}
          <div
            className="absolute top-1/4 left-1/4 animate-bounce"
            style={{ animationDelay: "0.5s", animationDuration: "3s" }}
          >
            <StarIcon className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300/30" />
          </div>
          <div
            className="absolute top-1/3 right-1/3 animate-bounce"
            style={{ animationDelay: "1.5s", animationDuration: "4s" }}
          >
            <StarIcon className="w-4 h-4 sm:w-6 sm:h-6 text-blue-300/40" />
          </div>
          <div
            className="absolute bottom-1/3 left-1/2 animate-bounce"
            style={{ animationDelay: "2s", animationDuration: "3.5s" }}
          >
            <StarIcon className="w-5 h-5 sm:w-7 sm:h-7 text-purple-300/35" />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center relative">
          {/* Trust Badge - Animated */}
          <div
            ref={ctaBadgeRef}
            className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 sm:mb-8"
          >
            <StarIcon className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 mr-2" />
            <span className="text-sm sm:text-base text-white font-semibold">
              Transforming Ideas Into Outcomes
            </span>
          </div>

          {/* CTA Title - Animated */}
          <h2
            ref={ctaTitleRef}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
          >
           Explore Our Industry
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Verticals
            </span>
          </h2>

          {/* CTA Subtitle - Animated */}
          {/* <p
            ref={ctaSubtitleRef}
            className="text-base sm:text-lg lg:text-xl xl:text-2xl text-blue-100 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed"
          >
            From the sweetness of Angan Sweets to the digital brilliance of
            Aakash Labs, and the many ventures that define Aakash Group Nepal,
            we bring ideas to life across industries. Whether it’s crafting
            flavors, building brands, developing technology, or shaping
            infrastructure, our expertise, innovation, and integrity turn
            visions into reality. Join the many partners and customers who trust
            us to deliver excellence every single time.
          </p> */}

          {/* Enhanced CTA Buttons - Animated */}
          <div
            ref={ctaButtonsRef}
            className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center max-w-3xl mx-auto mb-8 sm:mb-12"
          >
            <a
              href="/contact"
              className="group bg-white text-indigo-600 hover:bg-gray-50 px-6 sm:px-10 py-3 sm:py-5 rounded-full font-bold text-sm sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl w-auto sm:w-auto flex items-center justify-center"
            >
              <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Contact Us
            </a>
            <a
              href="/industries"
              className="group border-2 border-white/60 hover:border-white text-white hover:bg-white/10 px-6 sm:px-10 py-3 sm:py-5 rounded-full font-semibold text-sm sm:text-lg transition-all duration-300 backdrop-blur-sm w-auto sm:w-auto flex items-center justify-center"
            >
              Explore Our Verticals
              <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
