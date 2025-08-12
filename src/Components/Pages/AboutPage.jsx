import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRightIcon,
  UsersIcon,
  ViewfinderCircleIcon,
  TrophyIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  StarIcon,
  AcademicCapIcon,
  LightBulbIcon,
  PhoneIcon,
  EnvelopeIcon,
  BuildingOfficeIcon,
  TruckIcon,
  HomeIcon,
  CogIcon,
  BoltIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

import first from "../../assets/images/1.png";
import second from "../../assets/images/5.png";
import third from "../../assets/images/4.png";
import fourth from "../../assets/images/6.png";
import MD from "../../assets/images/md.jpg";

import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
const heroImages = [
  {
    src: "https://www.aakash.group/static/media/how-we-started.52a84dbf.png",
    alt: 'Aakash Group - Building Tomorrow',
    title: 'Building Nepal\'s Tomorrow',
    subtitle: 'For over a century, Aakash Group has been shaping lives across diverse industries with unwavering commitment to trust, quality, and community upliftment.'
  },
  {
    src:second ,
    alt: 'Aakash Group - Innovation',
    title: 'Innovation & Excellence',
    subtitle: 'Leading Nepal\'s digital transformation with cutting-edge technology and forward-thinking solutions across all business verticals.'
  },
  {
    src: third,
    alt: 'Aakash Group - Community',
    title: 'Community Focused Growth',
    subtitle: 'We believe growth means more than business – we\'re shaping a better Nepal by creating jobs, inspiring young leaders, and building sustainably.'
  },
  {
    src: fourth,
    alt: 'Aakash Group - Legacy',
    title: 'A Century of Trust',
    subtitle: 'From humble beginnings to a diversified powerhouse, our legacy continues to drive Nepal\'s progress in food, hospitality, real estate, and beyond.'
  }
];
const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // CTA section refs
  const ctaRef = useRef(null);
  const ctaTitleRef = useRef(null);
  const ctaSubtitleRef = useRef(null);
  const ctaCardsRef = useRef(null);
  const ctaButtonRef = useRef(null);


 useEffect(() => {
      setIsVisible(true);
      const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([ctaTitleRef.current, ctaSubtitleRef.current, ctaCardsRef.current, ctaButtonRef.current], {
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
          markers: false,
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
      .to(ctaCardsRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.0,
        ease: 'power3.out'
      }, '-=0.6')
      .to(ctaButtonRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.0,
        ease: 'power3.out'
      }, '-=0.4');

    }, [ctaRef]);

    return () => ctx.revert();
  }, []);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Enhanced auto-slide functionality with smooth transitions
  useEffect(() => {
    const slideInterval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 3000); // Increased to 6 seconds for better viewing

    return () => clearInterval(slideInterval);
  }, [isTransitioning]);

  const nextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 50);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 50);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 50);
  };

 

  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden">
        <div className=" relative h-[50vh] sm:h-[70vh] md:h-[75vh] lg:h-[90vh] xl:h-[85vh] 2xl:h-[800px]">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide 
                  ? 'opacity-100 transform translate-x-0 scale-100' 
                  : index < currentSlide 
                    ? 'opacity-0 transform -translate-x-full scale-105'
                    : 'opacity-0 transform translate-x-full scale-105'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out"
                style={{
                  imageRendering: 'crisp-edges',
                  filter: 'brightness(0.85) contrast(1.1) saturate(1.1)',
                  backfaceVisibility: 'hidden',
                  transform: 'translateZ(0)'
                }}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
    
            </div>
          ))}
          
        

          {/* Enhanced Slide Indicators */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`relative w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
                  index === currentSlide 
                    ? 'bg-white scale-125 shadow-lg' 
                    : 'bg-white/50 hover:bg-white/75 hover:scale-110'
                }`}
              >
                {index === currentSlide && (
                  <div className="absolute inset-0 rounded-full bg-white animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
            <div 
              className="h-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-1000 ease-linear"
              style={{ 
                width: `${((currentSlide + 1) / heroImages.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section id="about-story" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ✨ About Aakash Group
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Our Legacy of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                Excellence & Trust
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                Established over a century ago, Aakash Group began as a pioneering importer of textiles and electronics. Today, we're a diversified powerhouse shaping lives across food & hospitality, real estate, insurance, capital markets, IT, and beyond.
              </p>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
For over a century, Aakash Group has been shaping lives across diverse industries with unwavering commitment to trust, quality, and community upliftment.              </p>

              {/* Key Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {[
                  'Century-old legacy',
                  'Diversified portfolio',
                  'Community focused',
                  'Sustainable growth'
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <CheckCircleIcon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <ViewfinderCircleIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Vision</h3>
                <p className="text-gray-600 leading-relaxed">Shaping Nepal's future through innovation and trust</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <TrophyIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Values</h3>
                <p className="text-gray-600 leading-relaxed">Trust, quality, and community upliftment</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
  {/* Why Choose Us Section */}
      <div className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Aakash Group
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence and innovation sets us apart in every
              industry we serve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: StarIcon,
                title: "Proven Excellence",
                description:
                  "Decades of experience delivering exceptional results across multiple industries with a track record of success.",
              },
              {
                icon: CogIcon,
                title: "Innovation Focus",
                description:
                  "Cutting-edge technology and innovative solutions that drive efficiency and create competitive advantages.",
              },
              {
                icon: ShieldCheckIcon,
                title: "Quality Assurance",
                description:
                  "Rigorous quality control processes ensuring the highest standards in every project we undertake.",
              },
              {
                icon: BuildingOfficeIcon,
                title: "Industry Expertise",
                description:
                  "Deep domain knowledge across various sectors with specialized teams for each industry vertical.",
              },
              {
                icon: CheckCircleIcon,
                title: "Customer Commitment",
                description:
                  "Dedicated to customer satisfaction with personalized service and long-term partnership approach.",
              },
              {
                icon: BoltIcon,
                title: "Sustainable Solutions",
                description:
                  "Environmentally conscious practices and sustainable solutions that benefit communities and the planet.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* How We Started Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">How We Started</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100">
              <div className="space-y-8">
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                  What began 150 years ago as a humble trading venture — importing textiles and electronics into Nepal — has grown into one of the nation's most trusted and diversified business groups. Over the decades, Aakash Group has evolved with the aspirations of the people, expanding into packaged food manufacturing, hospitality, insurance, real estate, and banking.
                </p>
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                  Our journey reflects a deep-rooted commitment to progress — not just for our company, but for the communities and country we serve. From the foods we serve to the futures we design, we move with purpose — driven by trust, community, and a commitment to the world we share.
                </p>

               <div className="grid md:grid-cols-3 gap-6 mt-12">
                {[
                   { year: '1870s', title: 'Foundation', desc: 'Started as textile & electronics importer' },
                    { year: '1950s', title: 'Expansion', desc: 'Diversified into multiple industries' },
                    { year: '2020s', title: 'Innovation', desc: 'Leading digital transformation' }
                  ].map((milestone, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <span className="text-white font-bold text-sm">{milestone.year}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 text-sm">{milestone.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   

     {/* Managing Director Section */}
<section className="py-16 sm:py-20 lg:py-24 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
    <div className="text-center mb-12 lg:mb-16">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
        About the Managing Director
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
    </div>

    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
      <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
        
        {/* Image Section */}
        <div className="text-center lg:text-left">
          <div className="relative inline-block mb-6">
            <div className="w-52 h-60 lg:w-80 lg:h-80 rounded-2xl overflow-hidden  shadow-xl mx-auto lg:mx-0">
              <img
                src={MD}
                alt="Mr. Ankur Agrawal"
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                style={{
                  filter: 'contrast(1.1) saturate(1.1)',
                }}
              />
            </div>
          </div>

          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Mr. Ankur Agrawal</h3>
          <p className="text-blue-600 font-semibold text-lg">Managing Director</p>
        </div>

        {/* Bio Text */}
        <div className="lg:col-span-2 space-y-6">
          <p className="text-gray-700 leading-relaxed text-lg">
            Mr. Ankur Agrawal is the Managing Director of Aakash Group, leading multiple companies across diverse industries. He is the Founder and CEO of Aakash Labs, a firm specializing in software development and digital media management. He also founded and currently chairs Aakash Capital Ltd., a licensed Merchant Bank regulated by the Securities Board of Nepal (SEBON).
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Additionally, he serves as the Managing Proprietor of Aakash Foods, which focuses on manufacturing packaged food products and operating a fast food restaurant chain. Ankur successfully founded, built, and exited Aakash Tech, which developed an innovative aggregator app and Bulk SMS solutions.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            He has served as a board member of CNIYEF, member of CNI, Round Table and is an alumnus of the WEF Global Shapers community. He holds a Bachelor of Science in Finance from Bentley University, Boston, and completed MBA from the McCallum Graduate School of Business.
          </p>

          {/* Achievements */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            {[
              "WEF Global Shapers Alumni",
              "MBA Graduate",
              "Multiple Company Founder",
              "Industry Leader",
            ].map((achievement, index) => (
              <div key={index} className="flex items-center space-x-2">
                <StarIcon className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium text-sm">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Careers Section */}
      <section id="careers" ref={ctaRef} className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-blue-700 to-blue-400 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          
          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/4 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}>
            <StarIcon className="w-8 h-8 text-yellow-300/30" />
          </div>
          <div className="absolute top-1/3 right-1/3 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4s' }}>
            <StarIcon className="w-6 h-6 text-blue-300/40" />
          </div>
          <div className="absolute bottom-1/3 left-1/2 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}>
            <StarIcon className="w-7 h-7 text-purple-300/35" />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center relative z-10">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8">
            <BriefcaseIcon className="w-8 h-8 text-blue-200" />
          </div>
          
          <h2 ref={ctaTitleRef} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Join Our Growing
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Family
            </span>
          </h2>
          
          <p ref={ctaSubtitleRef} className="text-lg lg:text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Be part of Nepal's most dynamic business group. We're always looking for talented individuals who share our vision of building a better tomorrow. Discover opportunities across our diverse portfolio of companies and industries.
          </p>
          
          <div ref={ctaCardsRef} className="grid md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
            {[
              {
                title: 'Growth Opportunities',
                desc: 'Advance your career across multiple industries and business verticals',
                icon: ViewfinderCircleIcon
              },
              {
                title: 'Innovation Culture',
                desc: 'Work with cutting-edge technology and forward-thinking teams',
                icon: LightBulbIcon
              },
              {
                title: 'Impact & Purpose',
                desc: 'Contribute to meaningful work that shapes Nepal\'s future',
                icon: AcademicCapIcon
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-blue-100 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div ref={ctaButtonRef}>
            <a
              href="/careers"
              className="group bg-white text-indigo-600 hover:bg-gray-50 px-8 lg:px-12 py-4 lg:py-6 rounded-full font-bold text-lg lg:text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3"
            >
              Explore Career Opportunities
              <ArrowRightIcon className="w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

     

      

  
    </div>
  )
}

export default AboutPage