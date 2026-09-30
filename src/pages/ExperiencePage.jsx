import React from 'react';
import PageTransition from '../components/PageTransition';
import Experience from '../components/Experience';

export default function ExperiencePage() {
  return (
    <PageTransition>
      <div className="pt-28 pb-16">
        <Experience />
      </div>
    </PageTransition>
  );
}
