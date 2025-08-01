import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  ClockIcon,
  UserGroupIcon,
  XMarkIcon
} from "@heroicons/react/24/outline";
import hero from "../../assets/images/Aakash.png";

const CareerPage = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [jobsVisible, setJobsVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    resume: null,
    aakashform: true,
    subject: "Job Application from Aakash Group",
    jobTitle: ""
  });
  const [resumeError, setResumeError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    setIsVisible(true);
    const fetchJobs = async () => {
      try {
        const q = query(collection(db, "jobs"), orderBy("created", "desc"));
        const querySnapshot = await getDocs(q);
        setJobs(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        setTimeout(() => setJobsVisible(true), 300);
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
    if (selectedJob) {
      window.scrollTo(0, 0);
      setFormData(prev => ({
        ...prev,
        jobTitle: selectedJob.Title || selectedJob.Tittle
      }));
    }
  }, [selectedJob]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.resume) {
    setResumeError(true);
    return;
  }
  
  setIsSubmitting(true);

    setIsSubmitting(true);
    
    const formPayload = new FormData();
    for (const key in formData) {
      if (formData[key] !== null) {
        formPayload.append(key, formData[key]);
      }
    }

    try {
      const response = await fetch("https://www.aakash.group/mail.php", {
        method: "POST",
        body: formPayload
      });

      if (response.ok) {
        setSubmitStatus("success");
        // Reset form after successful submission
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          address: "",
          resume: null,
          aakashform: true,
          subject: "Job Application from Aakash Group",
          jobTitle: selectedJob?.Title || selectedJob?.Tittle || ""
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const ApplicationModal = () => (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Apply for {selectedJob?.Title || selectedJob?.Tittle}
            </h2>
            <button 
              onClick={() => {
                setShowApplicationModal(false);
                setSubmitStatus(null);
              }}
              className="text-gray-500 hover:text-gray-700"
            >
              <XMarkIcon className="w-8 h-8" />
            </button>
          </div>

          {submitStatus === "success" ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
              <p className="text-gray-600">
                Thank you for applying to Aakash Group. We'll review your application and contact you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>
           <div>
  <label className="block text-sm font-medium text-gray-700 mb-1">
    Upload Resume (PDF, DOC) *
  </label>
  <div className="flex items-center">
    <label className={`flex flex-col items-center justify-center w-full h-32 border-2 ${
      resumeError ? "border-red-500" : "border-gray-300"
    } border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition`}>
      <div className="flex flex-col items-center justify-center pt-5 pb-6">
        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        <p className="text-sm text-gray-500 mt-2">
          <span className="font-semibold">Click to upload</span> or drag and drop
        </p>
        <p className="text-xs text-gray-500">
          PDF or DOC (MAX. 5MB)
        </p>
      </div>
      <input 
        type="file" 
        name="resume"
        onChange={(e) => {
          handleFileChange(e);
          setResumeError(false);
        }}
        accept=".pdf,.doc,.docx"
        className="hidden" 
      />
    </label>
  </div>
  
  {resumeError && (
    <p className="mt-2 text-sm text-red-600">
      Please upload your resume
    </p>
  )}
  
  {formData.resume && !resumeError && (
    <p className="mt-2 text-sm text-gray-600">
      Selected file: {formData.resume.name}
    </p>
  )}
</div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:shadow-xl"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </button>
                
                {submitStatus === "error" && (
                  <p className="mt-3 text-center text-red-600">
                    Error submitting application. Please try again.
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );

  if (selectedJob) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Job Detail Header */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
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
                    {selectedJob.JobResponsibilities?.map((responsibility, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <span className="text-gray-700">{responsibility}</span>
                      </li>
                    ))}
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
                    {selectedJob.SkillsAndQualification?.map((qualification, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <span className="text-gray-700">{qualification}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Apply Button */}
              <div className="transform transition-all duration-700 delay-500 opacity-100 pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Ready to Apply?</h4>
                    <p className="text-gray-600">Join our team and make a difference</p>
                  </div>
                  <button
                    className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center"
                    onClick={() => setShowApplicationModal(true)}
                  >
                    Apply Now
                    <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Application Modal */}
        {showApplicationModal && <ApplicationModal />}
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
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
          <div
            className={`container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="max-w-4xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
                Join Our Team of
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-2xl leading-relaxed">
                Discover exciting career opportunities and be part of a company that values innovation, growth, and professional excellence.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md sm:max-w-none">
                <Link
                  to="/about"
                  className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  Learn About Us
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

      {/* Jobs Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div
          className={`transform transition-all duration-1000 delay-300 ${
            jobsVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
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
            <p className="text-center text-gray-600">No job openings available at the moment.</p>
          ) : (
            <div className="max-w-4xl mx-auto space-y-6">
              {jobs.map((job, index) => (
                <div
                  key={job.id}
                  className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden ${
                    jobsVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {job.Title || job.Tittle}
                        </h3>

                        <p className="text-gray-600 mb-4 leading-relaxed">{job.AboutJob}</p>

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
                          aria-label={`View details for ${job.Title || job.Tittle}`}
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