import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import hero from '../../assets/images/Aakash.png';
import { ArrowRightIcon, CheckCircleIcon, StarIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const HomePage = () => {
    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
   <>
      {/* Hero Section - Fixed media queries */}
      <div className="relative overflow-hidden">
        <img
          src={hero}
          alt="Aakash Group"
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
        
        {/* Hero Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent flex items-center">
          <div className={`container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="max-w-4xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
                Excellence in
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Every Endeavor
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-2xl leading-relaxed">
                Pioneering innovation and delivering exceptional results across industries with unwavering commitment to quality and excellence.
              </p>
              
              {/* Improved button layout */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md sm:max-w-none">
                <Link 
                  to="/about"
                  className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  Discover Our Story
                  <ArrowRightIcon className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link 
                  to="/industries"
                  className="group inline-flex items-center justify-center border-2 border-white/50 hover:border-white hover:bg-white/10 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 backdrop-blur-sm"
                >
                  Our Services
                  <ArrowRightIcon className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section - Enhanced layout */}
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
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
                    Remarkable Reality
                  </span>
                </h2>
              </div>
              
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
                At Aakash Group, we are more than just a company – we are architects of innovation, 
                builders of dreams, and catalysts for transformation. Our unwavering commitment to 
                excellence has positioned us as industry leaders across multiple sectors.
              </p>

              {/* Key Points - Better mobile layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
                {[
                  'Industry-leading expertise',
                  'Innovative solutions',
                  'Global partnerships',
                  'Sustainable practices'
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <CheckCircleIcon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>

              {/* Stats Cards - Better responsive design */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
                {[
                  { number: '500+', label: 'Projects' },
                  { number: '15+', label: 'Years' },
                  { number: '50+', label: 'Experts' }
                ].map((stat, index) => (
                  <div key={index} className="bg-white p-3 sm:p-4 lg:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                    <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link 
                to="/about"
                className="group inline-flex items-center bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Explore Our Journey
                <ArrowRightIcon className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>

            {/* Image Side - Better responsive handling */}
            <div className="relative mt-8 lg:mt-0">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-700 group">
                <img 
                  src="https://www.aakash.group/static/media/about.c644c3fa.jpg" 
                  alt="About Aakash Group - Professional team collaboration"
                  className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[550px] 2xl:h-[600px] object-cover object-center"
                />
                
                {/* Minimal Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent group-hover:from-black/5 transition-all duration-500" />
                
                {/* Floating Achievement Badge */}
                <div className="absolute top-3 sm:top-4 lg:top-6 right-3 sm:right-4 lg:right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-2 sm:p-3 lg:p-4 shadow-lg transform hover:scale-105 transition-transform">
                  <div className="text-center">
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">
                      #1
                    </div>
                    <div className="text-xs text-gray-600 font-semibold">Industry Leader</div>
                  </div>
                </div>

                {/* Bottom Info Card */}
                <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6 right-3 sm:right-4 lg:right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-3 sm:p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-1">Excellence in Action</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Our dedicated team collaborating to deliver exceptional results.
                  </p>
                </div>
              </div>

              {/* Decorative Elements - Responsive sizes */}
              <div className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 w-20 sm:w-32 lg:w-40 h-20 sm:h-32 lg:h-40 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-white/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-40 sm:w-64 lg:w-80 h-40 sm:h-64 lg:h-80 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          
          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/4 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}>
            <StarIcon className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300/30" />
          </div>
          <div className="absolute top-1/3 right-1/3 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4s' }}>
            <StarIcon className="w-4 h-4 sm:w-6 sm:h-6 text-blue-300/40" />
          </div>
          <div className="absolute bottom-1/3 left-1/2 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}>
            <StarIcon className="w-5 h-5 sm:w-7 sm:h-7 text-purple-300/35" />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center relative z-10">
          {/* Trust Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 sm:mb-8">
            <StarIcon className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 mr-2" />
            <span className="text-sm sm:text-base text-white font-semibold">Trusted by 500+ Happy Clients</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Ready to Create Something
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Extraordinary?
            </span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-blue-100 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed">
            Let's collaborate to transform your vision into reality with our expertise, innovation, and unwavering commitment to excellence. Join hundreds of satisfied clients who trust us with their most important projects.
          </p>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <Link 
              to="/contact"
              className="group bg-white text-indigo-600 hover:bg-gray-50 px-6 sm:px-10 py-3 sm:py-5 rounded-full font-bold text-sm sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl w-auto sm:w-auto flex items-center justify-center"
            >
              <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Contact Us
            </Link>
            <Link 
              to="/industries"
              className="group border-2 border-white/60 hover:border-white text-white hover:bg-white/10 px-6 sm:px-10 py-3 sm:py-5 rounded-full font-semibold text-sm sm:text-lg transition-all duration-300 backdrop-blur-sm w-auto sm:w-auto flex items-center justify-center"
            >
              Explore Our Services
              <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Quick Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center text-blue-100">
            <div className="flex items-center space-x-2">
              <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base font-medium">Quick Response</span>
            </div>
            <div className="flex items-center space-x-2">
              <EnvelopeIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base font-medium">Free Consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base font-medium">100% Satisfaction</span>
            </div>
          </div>

    
        </div>
      </section>
    </>
  )
}

export default HomePage
