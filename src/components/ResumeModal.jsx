import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ExternalLink, X, FileText, CheckCircle2, Eye } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('pdf'); // 'pdf' | 'preview'

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[250] flex items-center justify-center p-2 sm:p-4 md:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#090908]/85 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl h-[92vh] max-h-[960px] bg-[#121211] border border-[#ece9e2]/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-[#ece9e2]/10 bg-[#161614]/90 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#ece9e2]/10 border border-[#ece9e2]/15 flex items-center justify-center text-[#ece9e2]">
                <FileText size={17} />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#ece9e2] tracking-tight">
                  Gaurang Jadhav <span className="text-[#ece9e2]/40 font-normal">· Resume</span>
                </h3>
                <p className="text-[11px] text-[#8d8a83] hidden sm:block">
                  Business Operations &amp; Full-Stack Systems
                </p>
              </div>
            </div>

            {/* Middle View Selector */}
            <div className="hidden sm:flex items-center bg-[#090908] p-1 rounded-full border border-[#ece9e2]/10 text-xs">
              <button
                type="button"
                className={`px-3 py-1 rounded-full font-medium transition-all ${
                  activeTab === 'pdf'
                    ? 'bg-[#ece9e2] text-[#0e0e0d] shadow-sm'
                    : 'text-[#8d8a83] hover:text-[#ece9e2]'
                }`}
                onClick={() => setActiveTab('pdf')}
              >
                PDF Document
              </button>
              <button
                type="button"
                className={`px-3 py-1 rounded-full font-medium transition-all ${
                  activeTab === 'preview'
                    ? 'bg-[#ece9e2] text-[#0e0e0d] shadow-sm'
                    : 'text-[#8d8a83] hover:text-[#ece9e2]'
                }`}
                onClick={() => setActiveTab('preview')}
              >
                Quick View
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              {/* Primary Download Button */}
              <a
                href="/resume.pdf"
                download="Gaurang_Jadhav_Resume.pdf"
                className="inline-flex items-center gap-2 bg-[#ece9e2] text-[#0e0e0d] hover:bg-white text-xs font-bold px-3.5 py-1.5 rounded-full transition-transform active:scale-95 shadow-sm"
              >
                <Download size={14} />
                <span>Download</span>
              </a>

              {/* Open in New Tab */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title="Open in new tab"
                className="hidden sm:inline-flex items-center justify-center w-8 h-8 rounded-full border border-[#ece9e2]/15 text-[#ece9e2]/70 hover:text-[#ece9e2] hover:bg-[#ece9e2]/5 transition-colors"
              >
                <ExternalLink size={14} />
              </a>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                title="Close (Esc)"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[#ece9e2]/15 text-[#ece9e2]/70 hover:text-[#ece9e2] hover:bg-[#ece9e2]/10 transition-colors ml-1"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Main Body */}
          <div className="flex-1 bg-[#090908] overflow-hidden relative">
            {activeTab === 'pdf' ? (
              <div className="w-full h-full relative flex flex-col">
                <iframe
                  src="/resume.pdf#toolbar=1&navpanes=0"
                  className="w-full h-full border-none"
                  title="Gaurang Jadhav Resume PDF"
                />
                {/* Mobile Fallback Overlay Hint */}
                <div className="sm:hidden absolute bottom-3 left-3 right-3 bg-[#161614]/95 border border-[#ece9e2]/20 p-2.5 rounded-xl flex items-center justify-between text-xs backdrop-blur-md">
                  <span className="text-[#ece9e2]/80">Prefer readable view?</span>
                  <button
                    type="button"
                    onClick={() => setActiveTab('preview')}
                    className="underline text-[#ece9e2] font-semibold"
                  >
                    Switch to Quick View
                  </button>
                </div>
              </div>
            ) : (
              /* Clean Readable Document Preview matching uploaded resume */
              <div className="w-full h-full overflow-y-auto p-4 sm:p-8 bg-[#ece9e2] text-[#0e0e0d] selection:bg-[#0e0e0d] selection:text-[#ece9e2]">
                <div className="max-w-3xl mx-auto bg-white p-6 sm:p-10 rounded-xl shadow-lg border border-black/10 font-sans leading-relaxed text-sm">
                  {/* Resume Header */}
                  <div className="text-center pb-5 border-b border-black/15">
                    <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1a365d] uppercase">
                      Gaurang Jadhav
                    </h1>
                    <p className="text-xs sm:text-sm font-semibold text-[#2b6cb0] mt-1 tracking-wide">
                      Business Operations | Project Management | Cross-Functional Coordination
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-gray-600 mt-2">
                      <a href="mailto:gaurangjadhav53@gmail.com" className="hover:underline">
                        gaurangjadhav53@gmail.com
                      </a>
                      <span>|</span>
                      <span>+91 93218 81190</span>
                      <span>|</span>
                      <span>Mumbai, Maharashtra</span>
                      <span>|</span>
                      <a
                        href="https://github.com/Gaurang5704"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#2b6cb0] hover:underline"
                      >
                        GitHub: Gaurang5704
                      </a>
                      <span>|</span>
                      <a
                        href="https://www.linkedin.com/in/gaurang-jadhav-73683a2a3/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#2b6cb0] hover:underline"
                      >
                        LinkedIn: gaurang-jadhav
                      </a>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="mt-5">
                    <h2 className="text-xs font-bold tracking-wider text-[#1a365d] uppercase border-b border-gray-300 pb-1 mb-2">
                      Summary
                    </h2>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                      Business operations and project management professional with hands-on experience coordinating
                      cross-functional teams, optimizing workflows, and managing CRM/sales pipelines. Combines strong
                      technical fluency (able to work closely with engineering teams) with a proven ability to improve
                      process efficiency and drive measurable operational results. Fast learner with strong stakeholder
                      communication and problem-solving skills.
                    </p>
                  </div>

                  {/* Experience */}
                  <div className="mt-5">
                    <h2 className="text-xs font-bold tracking-wider text-[#1a365d] uppercase border-b border-gray-300 pb-1 mb-3">
                      Internship / Work Experience
                    </h2>
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                        <span className="font-bold text-[#1a365d] text-sm">HouseSeek.in</span>
                        <span className="text-xs text-gray-500">Mumbai, Maharashtra</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                        <span className="italic text-xs font-semibold text-gray-700">
                          Tech &amp; Business Operations Intern
                        </span>
                        <span className="text-xs text-gray-500">Jul 2025 – Dec 2025</span>
                      </div>
                      <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-gray-700">
                        <li>
                          Managed end-to-end business operations for a real-estate tech platform, coordinating across
                          sales, marketing, and tech teams to streamline daily workflows.
                        </li>
                        <li>
                          Improved data accuracy by 70% by auditing and restructuring internal reporting processes,
                          reducing errors in client/property records.
                        </li>
                        <li>
                          Reduced average turnaround time by 30% by redesigning task-handoff workflows between departments.
                        </li>
                        <li>
                          Owned CRM management and lead pipeline, handling 150+ monthly lead follow-ups and improving
                          lead-response consistency.
                        </li>
                        <li>
                          Supported planning and execution of 3 major marketing campaigns, coordinating timelines,
                          content, and cross-team deliverables.
                        </li>
                        <li>
                          Acted as a liaison between technical and non-technical teams, ensuring project requirements
                          were clearly communicated and delivered on time.
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="mt-5">
                    <h2 className="text-xs font-bold tracking-wider text-[#1a365d] uppercase border-b border-gray-300 pb-1 mb-3">
                      Projects
                    </h2>
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-bold text-xs text-[#1a365d]">
                          Practo Doctor Appointment Platform
                        </h3>
                        <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-gray-700 mt-1">
                          <li>
                            Independently planned, scoped, and delivered a full booking platform end-to-end, managing
                            the entire project lifecycle from requirements to launch.
                          </li>
                          <li>
                            Designed user experience for distinct user types (patients and doctors), balancing competing
                            needs in one product.
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold text-xs text-[#1a365d]">
                          YouTube Clone – Learning Platform
                        </h3>
                        <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-gray-700 mt-1">
                          <li>
                            Coordinated a team project translating user needs into product features (playlists,
                            watch-parties, video upload).
                          </li>
                          <li>
                            Managed feature prioritization and collaborated across teammates to deliver a functional
                            product.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mt-5">
                    <h2 className="text-xs font-bold tracking-wider text-[#1a365d] uppercase border-b border-gray-300 pb-1 mb-2">
                      Skills
                    </h2>
                    <div className="space-y-1.5 text-xs text-gray-700">
                      <p>
                        <strong className="text-gray-900">Technologies:</strong> C, C++, Python, JavaScript, HTML, CSS,
                        MERN Stack (MongoDB, Express, React, Node.js), Firebase, AWS, Figma (UI/UX), Git
                      </p>
                      <p>
                        <strong className="text-gray-900">Management &amp; Business Skills:</strong> Project
                        Management, CRM, Workflow Optimization, Data-Driven Reporting, Sales &amp; Lead Management,
                        Team Coordination, Leadership, Time Management
                      </p>
                    </div>
                  </div>

                  {/* Education */}
                  <div className="mt-5">
                    <h2 className="text-xs font-bold tracking-wider text-[#1a365d] uppercase border-b border-gray-300 pb-1 mb-2">
                      Education
                    </h2>
                    <div className="space-y-1.5 text-xs">
                      <div className="flex justify-between text-gray-700">
                        <span>
                          <strong className="text-gray-900">ITM Skills University</strong> : Bachelor of Technology,
                          Computer Science
                        </span>
                        <span className="text-gray-500">2023 – 2027</span>
                      </div>
                      <div className="flex justify-between text-gray-700">
                        <span>
                          <strong className="text-gray-900">Chhatrapati Shivaji University, Kolhapur</strong> : Central
                          Board Of Secondary Education
                        </span>
                        <span className="text-gray-500">2021 – 2023</span>
                      </div>
                    </div>
                  </div>

                  {/* Interests */}
                  <div className="mt-5 pt-2 border-t border-gray-200">
                    <p className="text-xs text-gray-700">
                      <strong className="text-gray-900">Interests:</strong> Chess, Trekking, Swimming, Fitness Training
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
