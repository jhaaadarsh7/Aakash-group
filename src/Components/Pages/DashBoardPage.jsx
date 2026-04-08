import React, { useEffect, useState } from "react";
import { 
  Plus, Edit3, Trash2, ChevronDown, ChevronRight, Briefcase, Clock, User, CheckCircle 
} from "lucide-react";
import { 
  db 
} from "../../firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";

const initialForm = {
  AboutJob: "",
  JobLevel: "",
  JobResponsibilities: [],
  currentResponsibility: "",
  JobType: "",
  SkillsAndQualification: [],
  currentQualification: "",
  Tittle: "",
};

const DashBoardPage = () => {
  const [jobs, setJobs] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editingJobId, setEditingJobId] = useState(null);
  const [expandedJob, setExpandedJob] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Fetch jobs from Firestore on mount
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const q = query(collection(db, "jobs"), orderBy("created", "desc"));
    const querySnapshot = await getDocs(q);
    setJobs(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleResponsibilityKeyDown = (e) => {
    if (e.key === "Enter" && form.currentResponsibility.trim() !== "") {
      e.preventDefault();
      setForm((prev) => ({
        ...prev,
        JobResponsibilities: [
          ...prev.JobResponsibilities,
          prev.currentResponsibility.trim(),
        ],
        currentResponsibility: "",
      }));
    }
  };

  const handleQualificationKeyDown = (e) => {
    if (e.key === "Enter" && form.currentQualification.trim() !== "") {
      e.preventDefault();
      setForm((prev) => ({
        ...prev,
        SkillsAndQualification: [
          ...prev.SkillsAndQualification,
          prev.currentQualification.trim(),
        ],
        currentQualification: "",
      }));
    }
  };

  const removeResponsibility = (idx) => {
    setForm((prev) => ({
      ...prev,
      JobResponsibilities: prev.JobResponsibilities.filter((_, i) => i !== idx),
    }));
  };

  const removeQualification = (idx) => {
    setForm((prev) => ({
      ...prev,
      SkillsAndQualification: prev.SkillsAndQualification.filter(
        (_, i) => i !== idx
      ),
    }));
  };

  // Submit form — create or update job in Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      AboutJob: form.AboutJob,
      JobLevel: form.JobLevel,
      JobResponsibilities: form.JobResponsibilities,
      JobType: form.JobType,
      SkillsAndQualification: form.SkillsAndQualification,
      Tittle: form.Tittle,
      created: new Date(),
    };

    if (editingJobId) {
      const jobRef = doc(db, "jobs", editingJobId);
      await updateDoc(jobRef, payload);
    } else {
      await addDoc(collection(db, "jobs"), payload);
    }

    setForm(initialForm);
    setEditingJobId(null);
    setShowForm(false);
    await fetchJobs();
  };

  // Load job data into form for editing
  const handleEdit = (job) => {
    setForm({
      AboutJob: job.AboutJob,
      JobLevel: job.JobLevel,
      JobResponsibilities: job.JobResponsibilities || [],
      currentResponsibility: "",
      JobType: job.JobType,
      SkillsAndQualification: job.SkillsAndQualification || [],
      currentQualification: "",
      Tittle: job.Tittle,
    });
    setEditingJobId(job.id);
    setShowForm(true);
  };

  // Delete job from Firestore and refresh list
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "jobs", id));
    await fetchJobs();
  };

  const handleCancel = () => {
    setForm(initialForm);
    setEditingJobId(null);
    setShowForm(false);
  };

  const toggleJobExpansion = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Job Dashboard</h1>
              <p className="text-gray-600">Manage your job openings and applications</p>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              <Plus size={20} />
              Add
            </button>
          </div>
        </div>

        {/* Job Form */}
        {showForm && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {editingJobId ? "Edit Job Opening" : "Create New Job Opening"}
            </h2>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    name="Tittle"
                    value={form.Tittle}
                    onChange={handleChange}
                    placeholder="e.g. Senior Frontend Developer"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Level *
                  </label>
                  <select
                    name="JobLevel"
                    value={form.JobLevel}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select Level</option>
                    <option value="Intern">Intern</option>
                    <option value="Entry">Entry Level</option>
                    <option value="Mid-level">Mid Level</option>
                    <option value="Senior">Senior Level</option>
                    <option value="Lead">Lead</option>
                    <option value="Executive">Executive</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Type *
                </label>
                <select
                  name="JobType"
                  value={form.JobType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select Type</option>
                  <option value="Full-time">Full Time</option>
                  <option value="Part-time">Part Time</option>
                  <option value="Contract">Contract</option>
                  <option value="Freelance">Freelance</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  About Job *
                </label>
                <textarea
                  name="AboutJob"
                  value={form.AboutJob}
                  onChange={handleChange}
                  placeholder="Describe the job role and what makes it exciting..."
                  required
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Responsibilities
                </label>
                <input
                  type="text"
                  name="currentResponsibility"
                  value={form.currentResponsibility}
                  onChange={handleChange}
                  onKeyDown={handleResponsibilityKeyDown}
                  placeholder="Type a responsibility and press Enter"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
                {form.JobResponsibilities.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {form.JobResponsibilities.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-blue-50 px-3 py-2 rounded-lg">
                        <CheckCircle size={16} className="text-blue-600" />
                        <span className="flex-1 text-gray-700">{point}</span>
                        <button
                          type="button"
                          onClick={() => removeResponsibility(idx)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Skills and Qualifications */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Skills & Qualifications
                </label>
                <input
                  type="text"
                  name="currentQualification"
                  value={form.currentQualification}
                  onChange={handleChange}
                  onKeyDown={handleQualificationKeyDown}
                  placeholder="Type a skill/qualification and press Enter"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
                {form.SkillsAndQualification.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {form.SkillsAndQualification.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-green-50 px-3 py-2 rounded-lg">
                        <CheckCircle size={16} className="text-green-600" />
                        <span className="flex-1 text-gray-700">{point}</span>
                        <button
                          type="button"
                          onClick={() => removeQualification(idx)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium"
                >
                  {editingJobId ? "Update Job" : "Create Job"}
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Job Listings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">Job Listings ({jobs.length})</h3>
          </div>
          
          <div className="divide-y divide-gray-200">
            {jobs.length === 0 ? (
              <div className="p-12 text-center">
                <Briefcase size={48} className="mx-auto text-gray-400 mb-4" />
                <h4 className="text-lg font-medium text-gray-900 mb-2">No jobs posted yet</h4>
                <p className="text-gray-600">Get started by creating your first job opening</p>
              </div>
            ) : (
              jobs.map((job) => (
                <div key={job.id} className="p-6">
                  {/* Job Header - Always Visible */}
                  <div className="flex items-center justify-between">
                    <div 
                      className="flex items-center gap-4 cursor-pointer flex-1"
                      onClick={() => toggleJobExpansion(job.id)}
                    >
                      <div className="flex-shrink-0">
                        {expandedJob === job.id ? (
                          <ChevronDown size={20} className="text-gray-400" />
                        ) : (
                          <ChevronRight size={20} className="text-gray-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                          {job.Tittle}
                        </h4>
                        <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <User size={14} />
                            {job.JobLevel}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {job.JobType}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEdit(job)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Edit Job"
                      >
                        <Edit3 size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(job.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete Job"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>

                  {/* Expanded Job Details */}
                  {expandedJob === job.id && (
                    <div className="mt-6 pt-6 border-t border-gray-100 space-y-6">
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">About the Role</h5>
                        <p className="text-gray-700 leading-relaxed">{job.AboutJob}</p>
                      </div>

                      {job.JobResponsibilities && job.JobResponsibilities.length > 0 && (
                        <div>
                          <h5 className="font-medium text-gray-900 mb-3">Key Responsibilities</h5>
                          <ul className="space-y-2">
                            {job.JobResponsibilities.map((responsibility, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-700">{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {job.SkillsAndQualification && job.SkillsAndQualification.length > 0 && (
                        <div>
                          <h5 className="font-medium text-gray-900 mb-3">Required Skills & Qualifications</h5>
                          <div className="flex flex-wrap gap-2">
                            {job.SkillsAndQualification.map((skill, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardPage;
