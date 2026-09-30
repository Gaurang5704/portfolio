import React from 'react';
import PageTransition from '../components/PageTransition';
import About from '../components/About';
import Hobbies from '../components/Hobbies';

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="pt-28 pb-16 space-y-12">
        <About />
        <Hobbies />
      </div>
    </PageTransition>
  );
}
