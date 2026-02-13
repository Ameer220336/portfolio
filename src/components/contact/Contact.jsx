import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { CONTACT_INFO } from "../../constants/data";
import { motion, useInView, AnimatePresence } from "framer-motion";

// Copy to Clipboard Component
const CopyButton = ({ text, label }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.button
      onClick={handleCopy}
      className="group flex items-center gap-2 text-sm text-zinc-400 hover:text-accent transition-colors"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.span
            key="copied"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-green-400 flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Copied!
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Copy {label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

// Chat Message Component
const ChatMessage = ({ isBot, children, delay = 0 }) => (
  <motion.div
    className={`flex gap-3 ${isBot ? "" : "flex-row-reverse"}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.4 }}
  >
    <div
      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
        isBot ? "bg-accent/20 text-accent" : "bg-neon-purple/20 text-neon-purple"
      }`}
    >
      {isBot ? "🤖" : "👤"}
    </div>
    <div
      className={`flex-1 p-4 rounded-2xl ${
        isBot
          ? "bg-dark-700 rounded-tl-none"
          : "bg-accent/10 border border-accent/20 rounded-tr-none"
      }`}
    >
      {children}
    </div>
  </motion.div>
);

const Contact = () => {
  const form = useRef();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({ name: "", email: "", project: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.sendForm(
        "service_gsisx7q",
        "template_ukqc5ts",
        form.current,
        "e5CRfGhlomEeKte9E"
      );
      setSent(true);
      setFormData({ name: "", email: "", project: "" });
    } catch (error) {
      console.error(error);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="section-padding bg-dark-900 relative overflow-hidden" id="contact">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-neon-purple/5 blur-[120px] rounded-full" />

      <motion.div
        ref={containerRef}
        className="container mx-auto max-w-6xl relative z-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm font-mono text-accent mb-4">
            // Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Have a project in mind? Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info Cards */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-display font-bold text-white mb-6">
              Talk to me
            </h3>

            {/* Email Card */}
            <motion.div
              className="glass-card p-6 group hover:border-accent/30 transition-all duration-300"
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <i className="bx bx-mail-send text-2xl text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-sm text-zinc-400">{CONTACT_INFO.email}</p>
                  </div>
                </div>
                <CopyButton text={CONTACT_INFO.email} label="Email" />
              </div>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-2 mt-4 text-sm text-accent hover:underline"
              >
                Send an email
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>

            {/* WhatsApp Card */}
            <motion.div
              className="glass-card p-6 group hover:border-green-500/30 transition-all duration-300"
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <i className="bx bxl-whatsapp text-2xl text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">WhatsApp</h4>
                    <p className="text-sm text-zinc-400">{CONTACT_INFO.phone}</p>
                  </div>
                </div>
                <CopyButton text={CONTACT_INFO.phone} label="Number" />
              </div>
              <a
                href={CONTACT_INFO.whatsapp_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mt-4 text-sm text-green-400 hover:underline"
              >
                Message on WhatsApp
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>

            {/* Messenger Card */}
            <motion.div
              className="glass-card p-6 group hover:border-blue-500/30 transition-all duration-300"
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <i className="bx bxl-messenger text-2xl text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Messenger</h4>
                    <p className="text-sm text-zinc-400">@{CONTACT_INFO.messenger_user}</p>
                  </div>
                </div>
              </div>
              <a
                href={CONTACT_INFO.messenger_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mt-4 text-sm text-blue-400 hover:underline"
              >
                Message on Messenger
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Chat-style Form */}
          <motion.div
            className="glass-card p-6 md:p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-display font-bold text-white mb-6">
              Start a conversation
            </h3>

            {sent ? (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                <p className="text-zinc-400">I'll get back to you as soon as possible.</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-accent hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                {/* Chat Messages */}
                <div className="space-y-4">
                  <ChatMessage isBot delay={0.1}>
                    <p className="text-zinc-300">
                      Hi there! 👋 I'm excited to hear about your project. What's your name?
                    </p>
                  </ChatMessage>

                  <ChatMessage isBot={false} delay={0.2}>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Type your name..."
                      required
                      className="w-full bg-transparent text-white placeholder:text-zinc-500 outline-none"
                    />
                  </ChatMessage>

                  <ChatMessage isBot delay={0.3}>
                    <p className="text-zinc-300">
                      Nice to meet you{formData.name ? `, ${formData.name}` : ""}! What's your email so I can get back to you?
                    </p>
                  </ChatMessage>

                  <ChatMessage isBot={false} delay={0.4}>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full bg-transparent text-white placeholder:text-zinc-500 outline-none"
                    />
                  </ChatMessage>

                  <ChatMessage isBot delay={0.5}>
                    <p className="text-zinc-300">
                      Perfect! Now tell me about your project. What are you looking to build? 🚀
                    </p>
                  </ChatMessage>

                  <ChatMessage isBot={false} delay={0.6}>
                    <textarea
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      placeholder="Describe your project..."
                      required
                      rows={4}
                      className="w-full bg-transparent text-white placeholder:text-zinc-500 outline-none resize-none"
                    />
                  </ChatMessage>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={sending}
                  className="w-full py-4 bg-accent hover:bg-accent-dark rounded-2xl font-semibold text-white flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: sending ? 1 : 1.01 }}
                  whileTap={{ scale: sending ? 1 : 0.99 }}
                >
                  {sending ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
