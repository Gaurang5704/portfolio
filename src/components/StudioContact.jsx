import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const needOptions = [
  'Tech-cum-Management Role',
  'Key Account Management',
  'Full-Stack Systems (MERN)',
  'Operations & SLA Optimization',
  'Product Ownership & Strategy',
  'Other Inquiries',
];

export default function StudioContact() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    needs: ['Tech-cum-Management Role'],
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleNeed = (need) => {
    setFormData((prev) => {
      const exists = prev.needs.includes(need);
      if (exists) {
        return { ...prev, needs: prev.needs.filter((n) => n !== need) };
      } else {
        return { ...prev, needs: [...prev.needs, need] };
      }
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Final submit
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#ece9e2', '#cb6d51', '#769e84'],
        });
      } catch (err) {}
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const stepLabels = {
    1: 'Who are you?',
    2: 'Need & Scope',
    3: 'Tell me more',
  };

  const progressWidth = step === 1 ? '33.33%' : step === 2 ? '66.66%' : '100%';

  return (
    <section className="contact" id="contact">
      <div className="contact__grid">
        {/* Left Column: Intro */}
        <motion.div
          className="contact__intro"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="contact__avail">
            <span className="contact__avail-dot" aria-hidden="true"></span>
            Open to Full-Time Roles &amp; Opportunities (Tech &amp; Management)
          </p>

          <p className="contact__hook">
            Let's discuss how I can contribute to your team.
          </p>

          <a className="contact__mail" href="mailto:gaurangjadhav53@gmail.com">
            gaurangjadhav53@gmail.com
          </a>

          <p className="contact__sub">
            Whether you have an open role in technical program management, full-stack engineering, or business operations, feel free to reach out directly or send a message below.
          </p>
        </motion.div>

        {/* Right Column: 3-Step Interactive Form */}
        <motion.div
          className="cform"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          {!isSubmitted ? (
            <form onSubmit={handleNext}>
              {/* Form Header */}
              <div className="cform__head">
                <span className="cform__count">
                  0{step} <em>/ 03</em>
                </span>
                <span className="cform__steplabel">{stepLabels[step]}</span>
              </div>

              {/* Step 1: Identity */}
              {step === 1 && (
                <div className="cform__step my-6">
                  <div className="cform__field">
                    <label htmlFor="cformName">Your Name &amp; Organization</label>
                    <input
                      id="cformName"
                      type="text"
                      required
                      placeholder="Alex Smith · Acme Corp"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div className="cform__field mt-6">
                    <label htmlFor="cformEmail">Your Work Email</label>
                    <input
                      id="cformEmail"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Needs / Pills */}
              {step === 2 && (
                <div className="cform__step my-6">
                  <p className="cform__grouplabel">
                    Select the relevant domains &amp; focus areas
                  </p>
                  <div className="cform__pills">
                    {needOptions.map((opt) => {
                      const isSelected = formData.needs.includes(opt);
                      return (
                        <button
                          key={opt}
                          type="button"
                          className={`cform__pill ${
                            isSelected ? 'is-selected' : ''
                          }`}
                          onClick={() => toggleNeed(opt)}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 3: Message */}
              {step === 3 && (
                <div className="cform__step my-6">
                  <div className="cform__field">
                    <label htmlFor="cformMessage">
                      Context, role scope, timeline &amp; goals
                    </label>
                    <textarea
                      id="cformMessage"
                      rows={4}
                      required
                      placeholder="Share details about your project, team, or opportunity..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>
                </div>
              )}

              {/* Navigation Bar */}
              <div className="cform__nav">
                {step > 1 && (
                  <button
                    type="button"
                    className="cform__back"
                    onClick={handleBack}
                  >
                    ← Back
                  </button>
                )}

                <button type="submit" className="cform__submit">
                  <span className="nav__cta-dot"></span>
                  <span>{step === 3 ? 'Send Message' : 'Continue →'}</span>
                </button>
              </div>

              {/* Progress Bar Indicator */}
              <div className="cform__progress">
                <span
                  className="cform__progress-bar"
                  style={{ width: progressWidth }}
                ></span>
              </div>
            </form>
          ) : (
            /* Done State */
            <div className="py-12 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full border border-[#ece9e2]/30 flex items-center justify-center mb-6 text-[#ece9e2]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="font-grotesk font-bold text-3xl mb-2 text-[#ece9e2]">
                Message Received.
              </h3>
              <p className="text-sm text-[#8d8a83] max-w-sm mb-6 leading-relaxed">
                Thank you, {formData.name || ''}. Your message has been transmitted successfully. I will get back to you within 24 to 48 business hours.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setStep(1);
                  setFormData({
                    name: '',
                    email: '',
                    needs: ['Tech-cum-Management Role'],
                    message: '',
                  });
                }}
                className="text-xs uppercase font-mono text-[#ece9e2]/70 hover:text-white underline underline-offset-4"
              >
                Send another message
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
