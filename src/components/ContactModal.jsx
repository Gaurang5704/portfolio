import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  Sparkles,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData } from '../data/portfolioData';

export default function ContactModal({ isOpen, onClose }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleType: 'Tech-cum-Management (Hybrid)',
    message: '',
  });

  if (!isOpen) return null;

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
      onClose();
    }, 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-[#121214] border border-white/10 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-[#cb6d51]/15 text-[#cb6d51]">
              <Mail className="w-4 h-4" />
            </span>
            <h3 className="text-lg font-bold font-heading text-white">
              Connect with Gaurang
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-zinc-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Contact Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
            <div className="truncate mr-2">
              <span className="text-[10px] font-mono text-zinc-500 uppercase block">EMAIL</span>
              <span className="text-xs font-semibold text-white truncate block">
                {personalData.email}
              </span>
            </div>
            <button
              onClick={() => copyToClipboard(personalData.email, 'email')}
              className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white border border-white/10 shrink-0 cursor-pointer"
              title="Copy Email"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#769e84]" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
            <div className="truncate mr-2">
              <span className="text-[10px] font-mono text-zinc-500 uppercase block">PHONE</span>
              <span className="text-xs font-semibold text-white truncate block">
                {personalData.phone}
              </span>
            </div>
            <button
              onClick={() => copyToClipboard(personalData.phone, 'phone')}
              className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white border border-white/10 shrink-0 cursor-pointer"
              title="Copy Phone"
            >
              {copiedPhone ? <Check className="w-3.5 h-3.5 text-[#769e84]" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Social / Profiles */}
        <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-xs">
          <span className="flex items-center gap-1.5 text-zinc-400">
            <MapPin className="w-3.5 h-3.5 text-[#cb6d51]" />
            {personalData.location}
          </span>
          <div className="flex items-center gap-2">
            <a
              href={personalData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#cb6d51] hover:underline font-semibold flex items-center gap-1"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <span className="text-zinc-600">•</span>
            <a
              href={personalData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-white font-semibold flex items-center gap-1"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Form */}
        {sent ? (
          <div className="p-6 rounded-2xl bg-[#769e84]/15 border border-[#769e84]/30 text-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-[#769e84]/20 text-[#769e84] mx-auto flex items-center justify-center">
              <Check className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white font-heading">Message Sent!</h4>
            <p className="text-xs text-zinc-300">
              Gaurang will review your note and respond promptly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#cb6d51]"
              />
              <input
                type="email"
                required
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#cb6d51]"
              />
            </div>

            <select
              value={formData.roleType}
              onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#18181b] border border-white/10 text-xs text-white focus:outline-none focus:border-[#cb6d51]"
            >
              <option value="Tech-cum-Management (Hybrid)">Tech-cum-Management (50/50 Dual Focus)</option>
              <option value="Product Operations / TPM">Product Operations / TPM</option>
              <option value="Business Operations & KAM">Business Operations & KAM</option>
              <option value="Full-Stack Engineering">Full-Stack Systems</option>
              <option value="Other Opportunity">Other Discussion</option>
            </select>

            <textarea
              required
              rows={3}
              placeholder="Brief message..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#cb6d51] resize-none"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-[#cb6d51] hover:bg-[#ba5337] active:scale-95 text-white font-semibold text-xs shadow-md shadow-[#cb6d51]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Note</span>
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
