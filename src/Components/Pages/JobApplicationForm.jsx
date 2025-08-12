import {
  ArrowRightIcon,
  DocumentArrowUpIcon,
  EnvelopeIcon,
  PhoneIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";

const JobApplicationForm = ({
  job,
  onCancel,
  onSuccess,
}) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    resume: null,
    aakashform: true,
    subject: "Job Application from Aakash Group",
    jobTitle: job?.Title || job?.Tittle || "",
  });
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [fileError, setFileError] = useState("");

  function handleInputChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    setFileError("");

    if (file) {
      // Check file size (2MB = 2 * 1024 * 1024 bytes)
      const maxSize = 2 * 1024 * 1024; // 2MB in bytes
      
      if (file.size > maxSize) {
        setFileError(`File size must be less than 2MB. Current file size: ${(file.size / (1024 * 1024)).toFixed(2)}MB`);
        e.target.value = ""; // Clear the file input
        setFormData((prev) => ({
          ...prev,
          resume: null,
        }));
        return;
      }

      // Check file type
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];
      
      if (!allowedTypes.includes(file.type)) {
        setFileError("Please upload only PDF, DOC, or DOCX files.");
        e.target.value = ""; // Clear the file input
        setFormData((prev) => ({
          ...prev,
          resume: null,
        }));
        return;
      }

      // If validation passes, set the file
      setFormData((prev) => ({
        ...prev,
        resume: file,
      }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitLoading(true);
    setSubmitError("");

    // Final validation before submit
    if (!formData.resume) {
      setSubmitError("Please upload your resume/CV.");
      setSubmitLoading(false);
      return;
    }

    if (formData.resume.size > 2 * 1024 * 1024) {
      setSubmitError("Resume file size must be less than 2MB.");
      setSubmitLoading(false);
      return;
    }

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) =>
        formDataToSend.append(key, formData[key] || "")
      );

      const response = await fetch("https://www.aakash.group/mail.php", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setSubmitSuccess(true);
        onSuccess && onSuccess();
      } else {
        throw new Error("Failed to submit application");
      }
    } catch (err) {
      setSubmitError("Failed to submit application. Please try again.");
    } finally {
      setSubmitLoading(false);
    }
  }

  if (submitSuccess) {
    return (
      <div className="p-6 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h4 className="text-xl font-semibold text-gray-900 mb-2">Application Submitted!</h4>
        <p className="text-gray-600">Thank you for your interest. We'll review your application and get back to you soon.</p>
        <button onClick={onCancel} className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg">Close</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md mt-12 mb-12">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold">Apply for {formData.jobTitle}</h3>
        <button type="button" onClick={onCancel}>
          <XMarkIcon className="w-6 h-6" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <UserIcon className="w-4 h-4 inline mr-1" />
            First Name *
          </label>
          <input type="text" name="firstname" value={formData.firstname} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <UserIcon className="w-4 h-4 inline mr-1" />
            Last Name *
          </label>
          <input type="text" name="lastname" value={formData.lastname} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <EnvelopeIcon className="w-4 h-4 inline mr-1" />
          Email Address *
        </label>
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <PhoneIcon className="w-4 h-4 inline mr-1" />
          Phone Number *
        </label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
        <textarea name="address" value={formData.address} onChange={handleInputChange} rows="3" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <DocumentArrowUpIcon className="w-4 h-4 inline mr-1" />
          Resume/CV *
        </label>
        <input 
          type="file" 
          name="resume" 
          onChange={handleFileChange} 
          accept=".pdf,.doc,.docx" 
          required 
          className={`w-full px-4 py-3 border rounded-lg ${fileError ? 'border-red-300' : 'border-gray-300'}`}
        />
        <div className="mt-1">
          <p className="text-xs text-gray-500">Accepted formats: PDF, DOC, DOCX (Max 2MB)</p>
          {formData.resume && (
            <p className="text-xs text-green-600 mt-1">
              ✓ File selected: {formData.resume.name} ({(formData.resume.size / (1024 * 1024)).toFixed(2)}MB)
            </p>
          )}
        </div>
        {fileError && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-3 py-2 rounded-lg text-sm mt-2">
            {fileError}
          </div>
        )}
      </div>
      {submitError && <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">{submitError}</div>}
      <div className="flex gap-4 pt-4">
        <button type="button" onClick={onCancel} className="flex-1 px-6 py-3 border border-gray-300 rounded-lg text-gray-700">Cancel</button>
        <button 
          type="submit" 
          disabled={submitLoading || !!fileError || !formData.resume} 
          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitLoading ? "Submitting..." : <>Submit Application <ArrowRightIcon className="ml-2 w-4 h-4 inline" /></>}
        </button>
      </div>
    </form>
  );
};

export default JobApplicationForm;