import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Copy,
  Check,
  Send,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData } from '../data/portfolioData';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleType: 'Tech-cum-Management (Hybrid)',
    message: '',
  });

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: '', email: '', roleType: 'Tech-cum-Management (Hybrid)', message: '' });
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] bg-[#070708] relative">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Main CTA Block */}
        <div className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#cb6d51]/10 text-[#cb6d51] border border-[#cb6d51]/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open for Immediate Opportunities</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold font-heading text-white tracking-tight leading-[1.1]">
            Let’s Build Something Remarkable Together.
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Interested in hiring a hybrid engineer who bridges codebases with client accounts and operational workflows? Let's connect.
          </p>
        </div>

        {/* Contact Grid: Cards + Direct Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Links & Credentials (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/15 transition-all space-y-2">
              <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block">
                Direct Email
              </span>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${personalData.email}`}
                  className="text-base sm:text-lg font-bold font-heading text-white hover:text-[#cb6d51] transition-colors truncate"
                >
                  {personalData.email}
                </a>
                <button
                  onClick={() => copyToClipboard(personalData.email, 'email')}
                  className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-zinc-300 hover:text-white transition-all cursor-pointer shrink-0"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#769e84]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/15 transition-all space-y-2">
              <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block">
                Phone Number
              </span>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`tel:${personalData.phone}`}
                  className="text-base sm:text-lg font-bold font-heading text-white hover:text-[#cb6d51] transition-colors"
                >
                  {personalData.phone}
                </a>
                <button
                  onClick={() => copyToClipboard(personalData.phone, 'phone')}
                  className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-zinc-300 hover:text-white transition-all cursor-pointer shrink-0"
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-[#769e84]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Location & Social */}
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.08] space-y-4">
              <div className="flex items-center gap-2 text-zinc-400 text-xs">
                <MapPin className="w-4 h-4 text-[#cb6d51]" />
                <span className="text-zinc-300 font-medium">{personalData.location}</span>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href={personalData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-zinc-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#cb6d51]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-zinc-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] space-y-6">
            <h3 className="text-xl font-bold font-heading text-white">
              Send a Direct Message
            </h3>

            {sent ? (
              <div className="p-8 rounded-2xl bg-[#769e84]/10 border border-[#769e84]/30 text-center space-y-2 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-[#769e84]/20 text-[#769e84] mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white font-heading">Message Sent!</h4>
                <p className="text-xs text-zinc-300">
                  Thank you for reaching out. Gaurang will review your note and get back to you promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400">YOUR NAME</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#cb6d51] transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400">YOUR EMAIL</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#cb6d51] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400">ROLE FOCUS / TOPIC</label>
                  <select
                    value={formData.roleType}
                    onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#141416] border border-white/10 text-sm text-white focus:outline-none focus:border-[#cb6d51] transition-colors"
                  >
                    <option value="Tech-cum-Management (Hybrid)">Tech-cum-Management (50/50 Dual Focus)</option>
                    <option value="Product Operations / TPM">Product Operations / Technical Program Management</option>
                    <option value="Business Operations & KAM">Business Operations & Key Account Management</option>
                    <option value="Full-Stack Engineering">Full-Stack Systems Engineering</option>
                    <option value="General Opportunity">Other Collaboration / Inquiry</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400">MESSAGE</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about the role, team, or project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#cb6d51] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#cb6d51] hover:bg-[#ba5337] active:scale-95 text-white font-semibold text-sm transition-all shadow-lg shadow-[#cb6d51]/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Gaurang Jadhav. All rights reserved.</span>
            <span>•</span>
            <span>50% Tech · 50% Management</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
