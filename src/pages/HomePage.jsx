import React from 'react';
import StudioHero from '../components/StudioHero';
import StudioManifesto from '../components/StudioManifesto';
import StudioServices from '../components/StudioServices';
import StudioStrip from '../components/StudioStrip';
import StudioProcess from '../components/StudioProcess';
import StudioMindset from '../components/StudioMindset';
import StudioContact from '../components/StudioContact';
import StudioFooter from '../components/StudioFooter';
import { projectsData } from '../data/portfolioData';

export default function HomePage({ onSelectProject, onContactClick, onResumeClick }) {
  const handleSelectProjectById = (id) => {
    const project = projectsData.find((p) => p.id === id);
    if (project && onSelectProject) {
      onSelectProject(project);
    }
  };

  return (
    <div className="relative w-full">
      {/* 01. Hero Section matching studiors.be */}
      <StudioHero
        onSelectProjectById={handleSelectProjectById}
        onResumeClick={onResumeClick}
      />

      {/* 02. The Manifesto / Philosophy with Sticky Stats */}
      <StudioManifesto />

      {/* 03. Core Skills & Operational Impact (Compact Side-by-Side Matrix) */}
      <StudioServices onSelectProject={onSelectProject} />

      {/* 04. Selected Projects Strip Carousel */}
      <StudioStrip onSelectProject={onSelectProject} />

      {/* 05. How I Work / Process Framework */}
      <StudioProcess />

      {/* 06. Beyond Tech: Athletic Discipline (Chess, Basketball, Trekking) */}
      <StudioMindset />

      {/* 07. Interactive 3-Step Contact Stepper */}
      <StudioContact />

      {/* 08. Personal Footer with Giant G Monogram Wordmark */}
      <StudioFooter
        onContactClick={onContactClick}
        onResumeClick={onResumeClick}
      />
    </div>
  );
}
