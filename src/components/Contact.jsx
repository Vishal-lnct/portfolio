import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const links = [
  {
    label: "Email",
    value: "vishalsarai37@gmail.com",
    href: "mailto:vishalsarai37@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    color: "#3b82f6",
  },
  {
    label: "Phone",
    value: "+91 9117225181",
    href: "tel:+919117225181",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.02 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z"/>
      </svg>
    ),
    color: "#06b6d4",
  },
  {
    label: "GitHub",
    value: "github.com/Vishal-lnct",
    href: "https://github.com/Vishal-lnct",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
    color: "#8b5cf6",
  },
  {
    label: "LinkedIn",
    value: "vishal-kumar-64aa61292",
    href: "https://www.linkedin.com/in/vishal-kumar-64aa61292",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    color: "#0ea5e9",
  },
  {
    label: "LeetCode",
    value: "leetcode.com/u/Vishal_9117",
    href: "https://leetcode.com/u/Vishal_9117/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
      </svg>
    ),
    color: "#f59e0b",
  },
  {
    label: "Codolio",
    value: "codolio.com/vishal",
    href: "https://codolio.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    color: "#10b981",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0  },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("vishalsarai37@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-orb contact-orb-1" />
      <div className="contact-orb contact-orb-2" />

      <div className="contact-container">

        {/* header */}
        <motion.div
          className="contact-header"
          initial="hidden" whileInView="show"
          viewport={{ once: true }} variants={stagger}
        >
          <motion.span className="contact-tag" variants={fadeUp}>Get in touch</motion.span>
          <motion.h2 className="contact-title" variants={fadeUp}>Contact Me</motion.h2>
          <motion.div className="contact-line" variants={fadeUp} />
          <motion.p className="contact-subtitle" variants={fadeUp}>
            Open to <strong>internships</strong> and <strong>Full stack roles</strong>
          </motion.p>
        </motion.div>

        {/* body */}
        <div className="contact-body">

          {/* left — CTA card */}
          <motion.div
            className="contact-cta-card"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-cta-emoji">👋</div>
            <h3 className="contact-cta-heading">Let's work together</h3>
            <p className="contact-cta-text">
              I'm actively looking for opportunities. Whether you have a project,
              a job opening, or just want to say hi — my inbox is always open.
            </p>

            <motion.button
              className="contact-copy-btn"
              onClick={copyEmail}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              {copied ? "✅ Copied!" : "📋 Copy Email Address"}
            </motion.button>

            <div className="contact-availability">
              <span className="contact-avail-dot" />
              Available for immediate joining
            </div>

            {/* quick stats */}
            <div className="contact-stats">
              <div className="contact-stat">
                <span className="contact-stat-num">1000+</span>
                <span className="contact-stat-label">DSA Solved</span>
              </div>
              <div className="contact-stat-div" />
              <div className="contact-stat">
                <span className="contact-stat-num">8.36</span>
                <span className="contact-stat-label">CGPA</span>
              </div>
              <div className="contact-stat-div" />
              <div className="contact-stat">
                <span className="contact-stat-num">3+</span>
                <span className="contact-stat-label">Projects</span>
              </div>
            </div>
          </motion.div>

          {/* right — link cards */}
          <motion.div
            className="contact-links"
            initial="hidden" whileInView="show"
            viewport={{ once: true }} variants={stagger}
          >
            {links.map((l, i) => (
              <motion.a
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="contact-link-card"
                key={i}
                variants={fadeUp}
                style={{ "--c": l.color }}
                whileHover={{ x: 5, transition: { type: "spring", stiffness: 300 } }}
              >
                <div
                  className="contact-link-icon"
                  style={{ background: `${l.color}18`, color: l.color }}
                >
                  {l.icon}
                </div>
                <div className="contact-link-info">
                  <span className="contact-link-label">{l.label}</span>
                  <span className="contact-link-value">{l.value}</span>
                </div>
                <svg className="contact-link-arrow" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;