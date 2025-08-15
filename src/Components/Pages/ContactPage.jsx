import React, { useState, useEffect, useRef } from 'react';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  UserIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';


import hero from '../../assets/images/Aakash.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
      const [isVisible, setIsVisible] = useState(false);
          const welcomeRef = useRef(null);
          const badgeRef = useRef(null);
          const titleRef = useRef(null);
          const subtitleRef = useRef(null);
          
     useEffect(() => {
        setIsVisible(true);
        const ctx = gsap.context(()=>{
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
                          }, "-=1")
        })
      }, [welcomeRef]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'success' | 'error'



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://www.aakash.group/mail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (submitStatus !== 'idle') {
      const timer = setTimeout(() => setSubmitStatus('idle'), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  return (<>
     {/* HERO IMAGE SECTION */}
      <div className="relative overflow-hidden h-[46vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[85vh] 2xl:h-screen">
        <img
          src={hero}
          alt="Aakash Group"
          className="w-full h-full object-cover filter brightness-95 md:hidden"
          style={{ objectPosition: 'center 60%' }}
        />
               {/* Desktop parallax background - adjusted positioning */}
               <div 
                 className="hidden md:block absolute inset-0 w-full h-full "
                 style={{
                   backgroundImage: `url(${hero})`,
                   backgroundPositionY: ' 25%',
                   backgroundAttachment: 'fixed',
                   backgroundPosition: 'center 60%',
                   backgroundRepeat: 'no-repeat',
                   backgroundSize: 'cover',
                   filter: 'brightness(0.95)'
                 }}
               />
     
               {/* Subtle overlay for professional look */}
               <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
      </div>
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
          Contact Aakash Group                 
        </span>               
      </div>                

      {/* Title - Slow Animated with ScrollTrigger */}               
      <h1                  
        ref={titleRef}                 
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"               
      >                 
        Get In Touch
       
      </h1>

      {/* Subtitle - Slow Animated with ScrollTrigger */}               
      <p                  
        ref={subtitleRef}                 
        className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed"               
      >                 
Reach out to learn more about Aakash Group, our operations, and our commitment to excellence across every venture.</p>                            
    </div>           
  </div>         
</section>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
     
      <section id="contact-form" className="py-16 sm:py-20 lg:py-24">
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">
            {/* Contact Info Cards */}
            <div id="contact-info" className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent mb-4">
                  Contact Information
                </h2>
                
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: PhoneIcon,
                    title: 'Phone',
                    content: '+977-1-4430196',
                    subtitle: 'Sun-Fri 10AM-6PM'
                  },
                  {
                    icon: EnvelopeIcon,
                    title: 'Email',
                    content: 'info@aakash.group',
                  },
                  {
                    icon: MapPinIcon,
                    title: 'Office',
                    content: 'Laxmi Plaza, Putalisadak, Kathmandu',
                    subtitle: 'Nepal'
                  },
                  {
                    icon: ClockIcon,
                    title: 'Business Hours',
                    content: 'Sunday - Friday',
                    subtitle: '10:00 AM - 6:00 PM '
                  }
                ].map((item, index) => (
                  <div key={index} className="group flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-800 font-medium">{item.content}</p>
                      <p className="text-sm text-gray-500">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-gray-100">
              <div className="mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent mb-2">
                  Send us a Message
                </h3>
                <p className="text-gray-600">
                  Fill out the form below 
                </p>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <p className="text-green-700 font-medium">Message sent successfully! We'll get back to you soon.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3">
                  <ExclamationTriangleIcon className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <p className="text-red-700 font-medium">Something went wrong. Please try again.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <div className="relative">
                    <UserIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 bg-gray-50 focus:bg-white hover:border-gray-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <div className="relative">
                    <EnvelopeIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 bg-gray-50 focus:bg-white hover:border-gray-300"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="group">
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <div className="relative">
                    <PhoneIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 bg-gray-50 focus:bg-white hover:border-gray-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 bg-gray-50 focus:bg-white hover:border-gray-300 resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
    </>
  )
}

export default ContactPage





