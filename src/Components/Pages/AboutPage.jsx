import React, { useState, useEffect } from 'react';
import { 
  ArrowRightIcon, 
  UsersIcon, 
  ViewfinderCircleIcon,  // Corrected target icon
  TrophyIcon, 
  BriefcaseIcon, 
  CheckCircleIcon, 
  StarIcon,
  AcademicCapIcon,      // For careers section
  LightBulbIcon         // For innovation culture
} from '@heroicons/react/24/outline';
import hero from '../../assets/images/Aakash.png';
import { useNavigate } from 'react-router-dom';
const AboutPage = () => {
    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

 const navigate = useNavigate();

const handleCareersClick = () => {
  navigate('/careers');
};
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Same as Home */}
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
                Building Nepal's
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Tomorrow
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-2xl leading-relaxed">
                For over a century, Aakash Group has been shaping lives across diverse industries with unwavering commitment to trust, quality, and community upliftment.
              </p>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mb-6 sm:mb-8">
                {[
                  { number: '150+', label: 'Years Legacy' },
                  { number: '7+', label: 'Industries' },
                  { number: '1000+', label: 'Lives Impacted' }
                ].map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 lg:p-6 rounded-2xl text-center hover:bg-white/20 transition-all duration-300">
                    <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-blue-200 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md sm:max-w-none">
                <a 
                  href="#about-story"
                  className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  Our Story
                  <ArrowRightIcon className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a 
                  href="#careers"
                  className="group inline-flex items-center justify-center border-2 border-white/50 hover:border-white hover:bg-white/10 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 backdrop-blur-sm"
                >
                  Join Our Team
                  <ArrowRightIcon className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
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
                With every venture, we stay true to our values of trust, quality, and community upliftment. We believe growth means more than business – we're shaping a better Nepal by creating jobs, inspiring young leaders, and building sustainably.
              </p>

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

                {/* Timeline highlights */}
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

      {/* Team Images Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Team in Action</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our diverse team of professionals works collaboratively to drive innovation and deliver excellence across all our business verticals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Strategic Leadership',
                desc: 'Our leadership team drives strategic vision and growth across all business units.',
                image: 'https://www.aakash.group/static/media/who-we-are.2583e2d2.png'
              },
              {
                title: 'Collaborative Culture',
                desc: 'We foster an environment of teamwork and shared success across all departments.',
                image: 'https://www.aakash.group/static/media/how-we-started.52a84dbf.png'
              },
              {
                title: 'Innovation Focus',
                desc: 'Our teams continuously innovate to meet evolving market needs and customer expectations.',
                image: 'https://www.aakash.group/static/media/who-we-are.2583e2d2.png'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/10 transition-all duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
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
            <div className="w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-full mx-auto lg:mx-0 flex items-center justify-center shadow-2xl overflow-hidden">
              <img
                src="https://www.aakash.group/static/media/ankur-agrawal-2025.9307dcbf.jpg"
                alt="Mr. Ankur Agrawal"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full animate-pulse" />
            <div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            />
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
      <section id="careers" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 relative overflow-hidden">
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
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Join Our Growing
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Family
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Be part of Nepal's most dynamic business group. We're always looking for talented individuals who share our vision of building a better tomorrow. Discover opportunities across our diverse portfolio of companies and industries.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
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
          
          <button 
            onClick={handleCareersClick}
            className="group bg-white text-indigo-600 hover:bg-gray-50 px-8 lg:px-12 py-4 lg:py-6 rounded-full font-bold text-lg lg:text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3"
          >
            Explore Career Opportunities
            <ArrowRightIcon className="w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

     
    </div>
  )
}

export default AboutPage
