import React from 'react';
import { motion } from 'framer-motion';

export default function StudioManifesto() {
  return (
    <section className="manifesto" id="profil" data-theme="dark">
      {/* Sticky Left Rail with Stats */}
      <motion.div
        className="manifesto__rail"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="manifesto__label">(My Philosophy &amp; Track Record)</p>

        <div className="manifesto__stats">
          <motion.div
            className="manifesto__stat"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <strong>150+</strong>
            <span>monthly client accounts managed via CRM at Future Real Estate</span>
          </motion.div>

          <motion.div
            className="manifesto__stat"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <strong>+70%</strong>
            <span>increase in operational data accuracy &amp; verification compliance</span>
          </motion.div>

          <motion.div
            className="manifesto__stat"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <strong>-30%</strong>
            <span>turnaround reduction across cross-team SLA workflows</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Manifesto Typography */}
      <motion.div
        className="manifesto__body"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="manifesto__text">
          The greatest operational breakthroughs happen when the person who understands client reality and business strategy is also the person who can architect and build the system.
        </p>

        <p className="manifesto__sub">
          At Future Real Estate, managing 150+ client accounts while auditing backend databases taught me that clean data, disciplined SLAs, and reliable full-stack software directly drive enterprise revenue. I work across both worlds so nothing gets lost in translation.
        </p>
      </motion.div>
    </section>
  );
}
