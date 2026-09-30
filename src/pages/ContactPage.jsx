import React from 'react';
import PageTransition from '../components/PageTransition';
import ContactSection from '../components/ContactSection';

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="pt-28 pb-16">
        <ContactSection />
      </div>
    </PageTransition>
  );
}
