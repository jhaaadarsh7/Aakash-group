import { db } from "../../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  ClockIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
// import carrer1 from "../../assets/images/carrer1.jpg";
import hero from "../../assets/images/Aakash.png";
import { useCallback, useEffect, useRef, useState } from "react";
import JobApplicationForm from "./JobApplicationForm";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const CareerPage = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [jobsVisible, setJobsVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const welcomeRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    const ctx = gsap.context(() => {
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
          "-=1"
        );
    });
  }, [welcomeRef]);
  useEffect(() => {
    setIsVisible(true);
    const fetchJobs = async () => {
      try {
        const q = query(collection(db, "jobs"), orderBy("created", "desc"));
        const querySnapshot = await getDocs(q);
        setJobs(
          querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
        // Change delay to 1 second instead of 300ms
        setTimeout(() => setJobsVisible(true), 1000);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch jobs:", err);
        setError("Failed to load jobs. Please try again later.");
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    if (selectedJob) window.scrollTo(0, 0);
  }, [selectedJob]);

  // Open application form
  const handleApply = useCallback((job) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
  }, []);

  // Close application form
  const handleCancelApplication = useCallback(() => {
    setShowApplicationForm(false);
    setSelectedJob(null);
  }, []);

  // After successful submit
  const handleSuccessApplication = useCallback(() => {
    setTimeout(() => {
      setShowApplicationForm(false);
      setSelectedJob(null);
    }, 2000);
  }, []);

  // Job details view
  if (selectedJob && !showApplicationForm) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Job Detail Header */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <button
                onClick={() => setSelectedJob(null)}
                aria-label="Back to job listings"
                className="group inline-flex items-center text-white/80 hover:text-white mb-6 text-sm font-medium transition-colors duration-300"
              >
                <ArrowRightIcon className="w-4 h-4 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
                Back to Career Opportunities
              </button>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                {selectedJob.Title || selectedJob.Tittle}
              </h1>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <BriefcaseIcon className="w-4 h-4 mr-2" />
                  {selectedJob.JobLevel}
                </div>
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <ClockIcon className="w-4 h-4 mr-2" />
                  {selectedJob.JobType}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Job Details Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
              {/* About Job */}
              <div className="transform transition-all duration-700 delay-200 opacity-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <BriefcaseIcon className="w-5 h-5 text-blue-600" />
                  </div>
                  About This Role
                </h3>
                <div className="text-gray-700 leading-relaxed bg-gray-50 rounded-lg p-6">
                  {selectedJob.AboutJob}
                </div>
              </div>
              {/* Responsibilities */}
              <div className="transform transition-all duration-700 delay-300 opacity-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <UserGroupIcon className="w-5 h-5 text-green-600" />
                  </div>
                  Key Responsibilities
                </h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="space-y-3">
                    {selectedJob.JobResponsibilities?.map(
                      (responsibility, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                          <span className="text-gray-700">
                            {responsibility}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
              {/* Skills & Qualifications */}
              <div className="transform transition-all duration-700 delay-400 opacity-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-purple-600 font-bold text-sm">✓</span>
                  </div>
                  Skills & Qualifications
                </h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="space-y-3">
                    {selectedJob.SkillsAndQualification?.map(
                      (qualification, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                          <span className="text-gray-700">{qualification}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
              {/* Apply Button */}
              <div className="transform transition-all duration-700 delay-500 opacity-100 pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      Ready to Apply?
                    </h4>
                    <p className="text-gray-600">
                      Join our team and make a difference
                    </p>
                  </div>
                  <button
                    onClick={() => handleApply(selectedJob)}
                    className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center"
                  >
                    Apply Now
                    <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Job application form view
  if (showApplicationForm && selectedJob) {
    return (
      <JobApplicationForm
        job={selectedJob}
        onCancel={handleCancelApplication}
        onSuccess={handleSuccessApplication}
      />
    );
  }

  // Main jobs listing view
  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden h-[46vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[85vh] 2xl:h-screen">
        <img
          src={hero}
          // src={carrer1}
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
            filter brightness-90"
        />
        {/* Desktop parallax background - adjusted positioning */}
        <div
          className="hidden md:block absolute inset-0 w-full h-full "
          style={{
            backgroundImage: `url(${hero})`,
          //  backgroundImage: `url(${carrer1})`,
            backgroundPositionY: '35%',

            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundPosition: 'center 60%',

            backgroundSize: "cover",
            filter: "brightness(0.95)",
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
                Join Our Team
              </span>
            </div>

            {/* Title - Slow Animated with ScrollTrigger */}
            <h1
              ref={titleRef}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
            >
             Building Nepal's
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
                Tomorrow
              </span>
            </h1>

            {/* Subtitle - Slow Animated with ScrollTrigger */}
            <p
              ref={subtitleRef}
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed"
            >
              Discover rewarding career opportunities at Aakash Group, where
              innovation meets excellence and talented professionals thrive in a
              culture of growth and achievement.
            </p>
          </div>
        </div>
      </section>


{/* Team Images Section */}
      <section className="py-7 sm:py-20 lg:py-5 bg-gradient-to-br from-gray-50 via-white to-blue-50">
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
                    style={{
                      imageRendering: 'crisp-edges',
                      filter: 'contrast(1.1) saturate(1.1)',
                    }}
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
      {/* Jobs Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div
          className={`transform transition-all duration-1000 delay-100 ${
            jobsVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Current Openings
          </h2>
          {error ? (
            <div className="text-center text-red-600 py-8">{error}</div>
          ) : loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading opportunities...</p>
            </div>
          ) : jobs.length === 0 ? (
            <p className="text-center text-gray-600">
              No job openings available at the moment.
            </p>
          ) : (
            <div className="max-w-4xl mx-auto space-y-6">
              {jobs.map((job, index) => (
                <div
                  key={job.id}
                  className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden ${
                    jobsVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {job.Title || job.Tittle}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {job.AboutJob}
                        </p>
                        <div className="flex flex-wrap gap-3 mb-4">
                          <span className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                            <BriefcaseIcon className="w-4 h-4 mr-1" />
                            {job.JobLevel}
                          </span>
                          <span className="inline-flex items-center bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                            <ClockIcon className="w-4 h-4 mr-1" />
                            {job.JobType}
                          </span>
                        </div>
                      </div>
                      <div className="lg:ml-8 flex-shrink-0">
                        <button
                          aria-label={`View details for ${
                            job.Title || job.Tittle
                          }`}
                          className="group/btn w-full lg:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center"
                          onClick={() => setSelectedJob(job)}
                        >
                          View Details
                          <ArrowRightIcon className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CareerPage;
