import React from 'react';
import PageTransition from '../components/PageTransition';
import Projects from '../components/Projects';

export default function WorkPage({ onSelectProject }) {
  return (
    <PageTransition>
      <div className="pt-28 pb-16">
        <Projects onSelectProject={onSelectProject} />
      </div>
    </PageTransition>
  );
}
