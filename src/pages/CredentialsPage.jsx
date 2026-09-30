import React from 'react';
import PageTransition from '../components/PageTransition';
import Education from '../components/Education';

export default function CredentialsPage() {
  return (
    <PageTransition>
      <div className="pt-28 pb-16">
        <Education />
      </div>
    </PageTransition>
  );
}
