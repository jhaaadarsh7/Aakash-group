

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRightIcon, CheckCircleIcon, StarIcon, PhoneIcon, EnvelopeIcon, BuildingOfficeIcon, TruckIcon, HomeIcon, CogIcon, BoltIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import hero from '../../assets/images/Aakash.png';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const IndustriesPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ctaRef = useRef(null);
  const ctaTitleRef = useRef(null);
  const ctaSubtitleRef = useRef(null);
  const ctaButtonsRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([ctaTitleRef.current, ctaSubtitleRef.current, ctaButtonsRef.current], {
        opacity: 0,
        y: 80,
        scale: 0.9
      });

      // Create timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          markers: false, // Set to true for debugging
          scrub: false,
        }
      });

      tl.to(ctaTitleRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out'
      })
      .to(ctaSubtitleRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.0,
        ease: 'power3.out'
      }, '-=0.8')
      .to(ctaButtonsRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.0,
        ease: 'power3.out'
      }, '-=0.6');

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
        "Customer-Centric Innovation"
      ],
      image: "https://www.aakash.group/static/media/angan-logo.f0df8c14.png",
      url: "https://angansweets.com/"
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
        "Performance Campaigns"
      ],
      image: "https://www.aakash.group/static/media/aakashlabs-logo.7b7d7b96.png",
      url: "https://aakashlabs.com/"
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
        "Commercial & Residential Sales"
      ],
      image: "https://www.aakash.group/static/media/aakash-capital-logo.2b32b416.png",
      url: "https://aakashcapital.com.np/"
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
        "24/7 Customer Support"
      ],
      image: "https://www.aakash.group/static/media/siddhartha-logo.054b8d9d.png",
      url: "https://siddharthapremier.com.np/"
    },
    {
      id: 5,
      title: "Reliance Life Insurance Ltd.",
      description:
        "A prominent life insurance company providing flexible and affordable life insurance products to secure your family's future.",
      features: [
        "Life Insurance Policies",
        "Retirement & Pension Plans",
        "Savings & Investment Options",
        "Policy Customization"
      ],
      image: "https://www.aakash.group/static/media/reliance-logo.4cbd08a2.png",
      url: "https://www.reliancegeneral.co.in/"
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
        "Strategic Location"
      ],
      image: "https://www.aakash.group/static/media/mahalaxmi-logo.27be1450.png",
      url: "/industries"
    }
  ];

  const handleIndustryClick = (industry) => {
    window.open(industry.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <div className="relative overflow-hidden">
        <img
          src={hero}
          alt="Aakash Group Industries"
          className="
            w-full 
            object-cover
            h-[60vh] 
            sm:h-[70vh] 
            md:h-[75vh] 
            lg:h-[80vh] 
            xl:h-[85vh]
            2xl:h-screen
            filter brightness-90
          "
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex items-center">
          <div className={`container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="max-w-4xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
                One Company.
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Multiple Solutions.
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-2xl leading-relaxed">
                Aakash Group, a fusion of various companies each of them being the best in their own field. We are continuously dedicated to empower and improve the lives of our customers, employees, investors, partners and the entire nation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md sm:max-w-none">
                <button
                  onClick={() => document.getElementById('industries-section').scrollIntoView({ behavior: 'smooth' })}
                  className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  Explore Industries
                  <ArrowRightIcon className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button
                  onClick={() => document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' })}
                  className="group inline-flex items-center justify-center border-2 border-white/50 hover:border-white hover:bg-white/10 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 backdrop-blur-sm"
                >
                  Get In Touch
                  <ArrowRightIcon className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industries Section - Updated with separate boxes */}
      <div id="industries-section" className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Industries</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how we're transforming industries with innovative solutions, cutting-edge technology, and unwavering commitment to excellence.
            </p>
          </div>

          {/* Industry Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={industry.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden"
                onClick={() => handleIndustryClick(industry)}
              >
                {/* Industry Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Hover Arrow */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ArrowRightIcon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Industry Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {industry.description}
                  </p>
                  
                  {/* Key Features */}
                  <div className="space-y-2 mb-4">
                    {industry.features.slice(0, 2).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
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

      {/* Why Choose Us Section */}
      <div className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Aakash Group</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence and innovation sets us apart in every industry we serve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: StarIcon,
                title: "Proven Excellence",
                description: "Decades of experience delivering exceptional results across multiple industries with a track record of success."
              },
              {
                icon: CogIcon,
                title: "Innovation Focus",
                description: "Cutting-edge technology and innovative solutions that drive efficiency and create competitive advantages."
              },
              {
                icon: ShieldCheckIcon,
                title: "Quality Assurance",
                description: "Rigorous quality control processes ensuring the highest standards in every project we undertake."
              },
              {
                icon: BuildingOfficeIcon,
                title: "Industry Expertise",
                description: "Deep domain knowledge across various sectors with specialized teams for each industry vertical."
              },
              {
                icon: CheckCircleIcon,
                title: "Customer Commitment",
                description: "Dedicated to customer satisfaction with personalized service and long-term partnership approach."
              },
              {
                icon: BoltIcon,
                title: "Sustainable Solutions",
                description: "Environmentally conscious practices and sustainable solutions that benefit communities and the planet."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section with Fixed ScrollTrigger */}
      <div id="contact-section" ref={ctaRef} className="bg-gradient-to-r from-blue-700 to-blue-400 relative py-16 sm:py-20">
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
            Partner with Aakash Group and experience the difference that excellence, innovation, and commitment can make for your business.
          </p>

          <div
            ref={ctaButtonsRef}
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto sm:max-w-none"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              Contact Us Today
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center border-2 border-white/50 hover:border-white hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
            >
              <EnvelopeIcon className="w-5 h-5 mr-2" />
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndustriesPage