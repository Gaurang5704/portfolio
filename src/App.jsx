import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Preloader from './components/Preloader';
import StudioNav from './components/StudioNav';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import SkillsPage from './pages/SkillsPage';
import ExperiencePage from './pages/ExperiencePage';
import SportsPage from './pages/SportsPage';
import AboutPage from './pages/AboutPage';
import CredentialsPage from './pages/CredentialsPage';
import ContactPage from './pages/ContactPage';

import { projectsData } from './data/portfolioData';

function AnimatedRoutes({ onSelectProject, onContactClick, onResumeClick }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <HomePage
              onSelectProject={onSelectProject}
              onContactClick={onContactClick}
              onResumeClick={onResumeClick}
            />
          }
        />
        <Route path="/work" element={<WorkPage onSelectProject={onSelectProject} />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/sports" element={<SportsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/credentials" element={<CredentialsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="*"
          element={
            <HomePage
              onSelectProject={onSelectProject}
              onContactClick={onContactClick}
              onResumeClick={onResumeClick}
            />
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  const handleContactClick = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeClick = () => {
    setResumeOpen(true);
  };

  return (
    <BrowserRouter>
      {/* 01. Preloader matching studiors.be */}
      <Preloader />

      {/* 02. Grain Noise Texture Overlay */}
      <div className="grain" aria-hidden="true"></div>

      <div className="min-h-screen bg-[#0e0e0d] text-[#ece9e2] selection:bg-[#ece9e2] selection:text-[#0e0e0d] flex flex-col justify-between relative overflow-x-hidden">
        {/* Scroll Helper */}
        <ScrollToTop />

        {/* 03. Floating Navigation Header */}
        <StudioNav onContactClick={handleContactClick} onResumeClick={handleResumeClick} />

        {/* 04. Main Content Routes */}
        <main id="main-content" role="main" className="flex-1 relative z-10">
          <AnimatedRoutes
            onSelectProject={(project) => setSelectedProject(project)}
            onContactClick={handleContactClick}
            onResumeClick={handleResumeClick}
          />
        </main>

        {/* 05. Interactive Project PRD Detail Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onSelectProject={(p) => setSelectedProject(p)}
            allProjects={projectsData}
          />
        )}

        {/* 06. Interactive Resume Viewer Modal */}
        <ResumeModal
          isOpen={resumeOpen}
          onClose={() => setResumeOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}
