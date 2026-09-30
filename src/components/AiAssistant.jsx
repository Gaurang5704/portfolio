import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Send,
  Bot,
  User,
  ArrowRight,
  ExternalLink,
  RotateCcw,
  Zap,
  CheckCircle2,
  FileText,
  CornerDownLeft,
} from 'lucide-react';
import { aiSuggestedPrompts, queryAiAssistant } from '../data/aiKnowledgeBase';

export default function AiAssistant({ compact = false }) {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: "Hello! I am Gaurang's AI Operations Copilot. Ask me anything about his 50/50 tech-cum-management background, his 150+ CRM account operations at HouseSeek.in, his shipped projects, or how his National-level chess experience translates to executive leadership.",
      citations: ['Executive Telemetry', 'Portfolio Knowledge Graph'],
      actionLink: '/work',
      actionLabel: 'Explore Projects & Pitches',
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (textToSend) => {
    const promptText = textToSend || query;
    if (!promptText.trim() || isTyping) return;

    const userMsg = { sender: 'user', text: promptText };
    setMessages((prev) => [...prev, userMsg]);
    setQuery('');
    setIsTyping(true);

    // Simulate AI thinking and retrieval
    setTimeout(() => {
      const match = queryAiAssistant(promptText);
      const aiMsg = {
        sender: 'ai',
        text: match.response,
        citations: match.citations,
        actionLink: match.actionLink,
        actionLabel: match.actionLabel,
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="w-full rounded-3xl bg-[#0f0f12]/90 border border-white/10 shadow-2xl backdrop-blur-2xl overflow-hidden flex flex-col">
      {/* Top Copilot Bar */}
      <div className="p-4 sm:p-5 border-b border-white/[0.08] bg-white/[0.02] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-[#cb6d51] via-[#ba5337] to-[#769e84] flex items-center justify-center text-white shadow-md shadow-[#cb6d51]/20">
            <Sparkles className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-sm text-white">
                Gaurang AI Copilot
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#769e84]/15 text-[#769e84] border border-[#769e84]/30">
                Online & Ready
              </span>
            </div>
            <p className="text-[11px] text-zinc-400">
              Trained on verified resume telemetry, GitHub repos, and operations impact
            </p>
          </div>
        </div>

        <button
          onClick={() =>
            setMessages([
              {
                sender: 'ai',
                text: "Session refreshed. Ask me anything about Gaurang's engineering depth or management track record!",
                citations: ['Portfolio Knowledge Graph'],
              },
            ])
          }
          className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors cursor-pointer"
          title="Reset conversation"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Suggested Prompts Strip */}
      <div className="px-4 sm:px-5 py-3 border-b border-white/[0.06] bg-white/[0.01] overflow-x-auto flex items-center gap-2 scrollbar-none">
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider shrink-0 flex items-center gap-1">
          <Zap className="w-3 h-3 text-[#cb6d51]" /> Suggestions:
        </span>
        {aiSuggestedPrompts.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(prompt)}
            className="px-3 py-1 rounded-full text-xs font-medium bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-zinc-300 hover:text-white transition-all whitespace-nowrap cursor-pointer shrink-0"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Messages Thread */}
      <div
        className={`p-4 sm:p-6 overflow-y-auto space-y-4 ${
          compact ? 'max-h-[360px]' : 'max-h-[500px]'
        }`}
      >
        {messages.map((msg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className={`flex items-start gap-3 ${
              msg.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {msg.sender === 'ai' && (
              <div className="w-7 h-7 rounded-xl bg-[#cb6d51]/20 border border-[#cb6d51]/40 flex items-center justify-center text-[#cb6d51] shrink-0 mt-1">
                <Bot className="w-4 h-4" />
              </div>
            )}

            <div
              className={`max-w-[85%] sm:max-w-[80%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed space-y-3 ${
                msg.sender === 'user'
                  ? 'bg-[#cb6d51] text-white font-medium rounded-tr-sm shadow-md shadow-[#cb6d51]/25'
                  : 'bg-white/[0.03] text-zinc-200 border border-white/10 rounded-tl-sm shadow-sm'
              }`}
            >
              <div className="whitespace-pre-line">{msg.text}</div>

              {/* Citations & Jump Action if AI */}
              {msg.sender === 'ai' && (msg.citations || msg.actionLink) && (
                <div className="pt-2 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-2 text-[11px]">
                  {msg.citations && (
                    <div className="flex flex-wrap items-center gap-1.5 text-zinc-500">
                      <span className="font-mono">Sources:</span>
                      {msg.citations.map((c, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-2 py-0.5 rounded-md bg-white/[0.04] text-zinc-400 font-mono text-[10px]"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  )}

                  {msg.actionLink && (
                    <Link
                      to={msg.actionLink}
                      className="inline-flex items-center gap-1 text-[#cb6d51] hover:text-[#ba5337] font-semibold underline underline-offset-2 ml-auto"
                    >
                      <span>{msg.actionLabel || 'View in Portfolio'}</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              )}
            </div>

            {msg.sender === 'user' && (
              <div className="w-7 h-7 rounded-xl bg-white/[0.06] border border-white/15 flex items-center justify-center text-zinc-300 shrink-0 mt-1">
                <User className="w-4 h-4" />
              </div>
            )}
          </motion.div>
        ))}

        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 text-zinc-400 text-xs italic pl-10"
          >
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#cb6d51] animate-bounce" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#769e84] animate-bounce [animation-delay:0.2s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce [animation-delay:0.4s]" />
            </div>
            <span>Analyzing knowledge graph & generating synthesis...</span>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <div className="p-3 sm:p-4 border-t border-white/[0.08] bg-white/[0.02]">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Ask about Gaurang's engineering, CRM operations, chess tactics..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full pl-4 pr-12 py-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#cb6d51] transition-colors"
          />
          <button
            onClick={() => handleSend()}
            disabled={!query.trim() || isTyping}
            className="absolute right-2 p-2.5 rounded-xl bg-[#cb6d51] hover:bg-[#ba5337] disabled:opacity-40 disabled:hover:bg-[#cb6d51] text-white transition-all cursor-pointer shadow-md shadow-[#cb6d51]/20"
            title="Send query"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
