import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  PhoneIcon,
  EnvelopeIcon,
  BuildingOfficeIcon,
  TruckIcon,
  HomeIcon,
  CogIcon,
  BoltIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import hero from "../../assets/images/Aakash.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import snacks from '../../assets/images/snacks1.png';

import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const IndustriesPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const welcomeRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const ctaTitleRef = useRef(null);
  const ctaSubtitleRef = useRef(null);
  const ctaButtonsRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    const ctx = gsap.context(() => {
       gsap.set([badgeRef.current, titleRef.current, subtitleRef.current], {
                opacity: 0,
                y: 80, 
                scale: 0.9 
              });
      
              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: welcomeRef.current,
                  start: "top 77%",
                  end: "bottom 15%",
                  toggleActions: "play none none reverse",
                  markers: false,
                  scrub: false,
                }
              });
      
              tl.to(badgeRef.current, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1.2,
                ease: "power3.out"
              })
              .to(titleRef.current, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1.5,
                ease: "power3.out"
              }, "-=0.8")
              .to(subtitleRef.current, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1.4,
                ease: "power3.out"
              }, "-=1.0");
      // Set initial states
      gsap.set(
        [ctaTitleRef.current, ctaSubtitleRef.current, ctaButtonsRef.current],
        {
          opacity: 0,
          y: 80,
          scale: 0.9,
        }
      );

      const t2 = gsap.timeline({
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          markers: false, 
          scrub: false,
        },
      });

      t2.to(ctaTitleRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
      })
        .to(
          ctaSubtitleRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.0,
            ease: "power3.out",
          },
          "-=0.8"
        )
        .to(
          ctaButtonsRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.0,
            ease: "power3.out",
          },
          "-=0.6"
        );
    }, [ctaRef]);

    return () => ctx.revert();
  }, []);

  const industries = [
    {
      id: 1,
      title: "Aakash Foods",
      description:
        "A leading name in Nepal's food industry, delivering a wide variety of traditional sweets, snacks, and food products with consistent quality and taste.",
      features: [
        "Traditional Sweets & Snacks",
        "Hygienic Food Production",
        "Nationwide Distribution",
        "Customer-Centric Innovation",
      ],
      image: "https://www.aakash.group/static/media/angan-logo.f0df8c14.png",
      url: "https://angansweets.com/",
    },
    {
      id: 2,
      title: "Aakash Labs",
      description:
        "A full-service digital marketing and creative agency specializing in branding, design, SEO, and online marketing solutions.",
      features: [
        "Digital Marketing",
        "SEO & Content Strategy",
        "Branding & Design",
        "Performance Campaigns",
      ],
      image:
        "https://www.aakash.group/static/media/aakashlabs-logo.7b7d7b96.png",
      url: "https://aakashlabs.com/",
    },
    {
      id: 3,
      title: "Aakash Capital Ltd.",
      description:
        "A real estate investment and development firm focused on building residential and commercial projects across prime locations.",
      features: [
        "Real Estate Development",
        "Property Investment",
        "Project Management",
        "Commercial & Residential Sales",
      ],
      image:
        "https://www.aakash.group/static/media/aakash-capital-logo.2b32b416.png",
      url: "https://aakashcapital.com.np/",
    },
    {
      id: 4,
      title: "Siddhartha Insurance Ltd.",
      description:
        "A trusted provider of general insurance services offering a wide range of policies for health, motor, property, and corporate risk management.",
      features: [
        "Health & Motor Insurance",
        "Corporate Insurance Solutions",
        "Quick Claim Settlement",
        "24/7 Customer Support",
      ],
      image:
        "https://www.aakash.group/static/media/siddhartha-logo.054b8d9d.png",
      url: "https://siddharthapremier.com.np/",
    },
    {
      id: 5,
      title: "SanimaReliance Life Insurance Ltd.",
      description:
        "A prominent life insurance company providing flexible and affordable life insurance products to secure your family's future.",
      features: [
        "Life Insurance Policies",
        "Retirement & Pension Plans",
        "Savings & Investment Options",
        "Policy Customization",
      ],
      image: "https://www.sanimareliancelife.com/themes/sanimareliancelife/images/logo.png",
      url: "https://www.sanimareliancelife.com/",
    },
    {
      id: 6,
      title: "Mahalaxmi Complex Pvt. Ltd.",
      description:
        "A multipurpose commercial complex offering premium office and retail spaces along with integrated facilities management services.",
      features: [
        "Commercial Rentals",
        "Facility Management",
        "Retail & Office Space",
        "Strategic Location",
      ],
      image:
        "https://www.aakash.group/static/media/mahalaxmi-logo.27be1450.png",
      url: "/industries",
    },
     {
      id: 7,
      title: "Aakash Snacks Pvt. Ltd.",
      description:
        "A leading player in the snacks industry, offering a diverse range of high-quality snacks that cater to all taste preferences.",
      features: [
        "Wide Range of Snacks",
        "Quality Ingredients",
        "Innovative Flavors",
        "Sustainable Packaging",
      ],
      image:
        snacks,
      url: "/industries",
    },
     {
      id: 8,
      title: "BnBKTM ",
      description:
      "BNB KTM is your gateway to exceptional short-term and long-term apartment rentals in Kupondole, Lalitpur.",
      features: [
        "Wide Range of Apartment Options",
        "Flexible Rental Terms",
        "Fully Furnished Units",
        "Prime Location in Kupondole",
      ],
      image:
        "https://bnbktm.com/bnblogo.png",
      url: "https://bnbktm.com/",
    },
  
    
  ];

  const handleIndustryClick = (industry) => {
    window.open(industry.url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className="relative overflow-hidden h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[85vh] 2xl:h-screen">
        <img
          src={hero}
          alt="Aakash Group Industries"
          className="w-full h-full object-cover filter brightness-95 md:hidden"
        />
        <div
          className="hidden md:block absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${hero})`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center 60%",
            backgroundSize: "cover",
            filter: "brightness(0.95)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
        </div>
      </div>

    <section         
  ref={welcomeRef}         
  className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white relative"       
>         
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">           
    <div className="text-center max-w-5xl mx-auto">             
      <div               
        ref={badgeRef}               
        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-full mb-4 sm:mb-6"             
      >               
        <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">                 
          Our Industries               
        </span>             
      </div>              

      <h1               
        ref={titleRef}               
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"             
      >               
        Diverse Sectors               
        <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">                 
          One Standard               
        </span>             
      </h1>              

      <p               
        ref={subtitleRef}               
        className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed"             
      >               
        Aakash Group operates across multiple industries, delivering consistent excellence and innovative solutions while maintaining our unwavering commitment to quality in every sector.             
      </p>           
    </div>         
  </div>       
</section>

      <div id="industries-section" className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Industries
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how we're transforming industries with innovative
              solutions, cutting-edge technology, and unwavering commitment to
              excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={industry.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden"
                onClick={() => handleIndustryClick(industry)}
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ArrowRightIcon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {industry.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {industry.features
                      .slice(0, 2)
                      .map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center text-sm"
                        >
                          <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                  </div>

                  {/* Learn More Button */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Learn More</span>
                      <ArrowRightIcon className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      

      {/* CTA Section with Fixed ScrollTrigger */}
      <div
        id="contact-section"
        ref={ctaRef}
        className="bg-gradient-to-r from-blue-700 to-blue-400 relative py-16 sm:py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            ref={ctaTitleRef}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Ready to Transform Your Industry?
          </h2>

          <p
            ref={ctaSubtitleRef}
            className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto"
          >
            Partner with Aakash Group and experience the difference that
            excellence, innovation, and commitment can make for your business.
          </p>

          <div
            ref={ctaButtonsRef}
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto sm:max-w-none"
          >
            <a
              href="/contact"
              className="group inline-flex items-center justify-center bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              Contact Us Today
            </a>
            <a
              href="/contact"
              className="group inline-flex items-center justify-center border-2 border-white/50 hover:border-white hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
            >
              <EnvelopeIcon className="w-5 h-5 mr-2" />
              Request Quote
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndustriesPage;
