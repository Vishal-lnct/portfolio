import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import "./Home.css";

const roles = [
  "Frontend Developer",
  "React Specialist",
  "Full-Stack Developer",
  "Problem Solver",
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed]  = useState("");
  const [deleting,  setDeleting]   = useState(false);

  /* typewriter */
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section id="home" className="hero">

      {/* background */}
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-grid" />
      </div>

      {/* left content */}
      <motion.div
        className="hero-left"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.div className="hero-greeting" variants={fadeUp}>
          <span className="hero-greeting-dot" />
          Available for work
        </motion.div>

        <motion.h1 className="hero-name" variants={fadeUp}>
          Hi, I'm <span className="hero-name-accent">Vishal Kumar</span>
        </motion.h1>

        <motion.div className="hero-role-row" variants={fadeUp}>
          <span className="hero-role">{displayed}</span>
          <span className="hero-cursor">|</span>
        </motion.div>

        <motion.p className="hero-desc" variants={fadeUp}>
          I build responsive user interfaces and scalable backend systems using{" "}
          <span className="hero-hl">React</span>,{" "}
          <span className="hero-hl">Python</span>,{" "}
          <span className="hero-hl">Django</span>, and{" "}
          <span className="hero-hl">MySQL</span>.
        </motion.p>

        {/* stats */}
        <motion.div className="hero-stats" variants={fadeUp}>
          <div className="hero-stat">
            <span className="hero-stat-num">1000+</span>
            <span className="hero-stat-label">DSA Problems</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-num">3+</span>
            <span className="hero-stat-label">Projects</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-num">8.36</span>
            <span className="hero-stat-label">CGPA</span>
          </div>
        </motion.div>

        {/* buttons */}
        <motion.div className="hero-buttons" variants={fadeUp}>
          <NavLink to="/contact">
            <motion.button
              className="hero-btn hero-btn-primary"
              whileHover={{ y: -2, boxShadow: "0 8px 28px rgba(59,130,246,0.5)" }}
              whileTap={{ scale: 0.97 }}
            >
              Hire Me
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </motion.button>
          </NavLink>

          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hero-btn hero-btn-secondary"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Download CV
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
          </motion.a>
        </motion.div>

        {/* socials */}
        <motion.div className="hero-socials" variants={fadeUp}>
          <motion.a
            href="https://github.com/Vishal-lnct"
            target="_blank" rel="noreferrer"
            className="hero-social" aria-label="GitHub"
            whileHover={{ y: -3, scale: 1.08 }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </motion.a>
          <motion.a
            href="https://leetcode.com/u/Vishal_9117"
            target="_blank" rel="noreferrer"
            className="hero-social" aria-label="LeetCode"
            whileHover={{ y: -3, scale: 1.08 }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
            </svg>
          </motion.a>
          <motion.a
            href="mailto:vishalsarai37@gmail.com"
            className="hero-social" aria-label="Email"
            whileHover={{ y: -3, scale: 1.08 }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank" rel="noreferrer"
            className="hero-social" aria-label="LinkedIn"
            whileHover={{ y: -3, scale: 1.08 }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* right — photo */}
      <motion.div
        className="hero-right"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="hero-photo-wrap">
          <div className="hero-photo-ring" />
          <div className="hero-photo-ring hero-photo-ring-2" />
          <motion.img
            src="/vishalpic.jpg"
            alt="Vishal Kumar"
            className="hero-photo"
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
          <div className="hero-photo-badge">
            <span className="hero-badge-dot" />
            Open to Work
          </div>
        </div>

        {/* floating cards */}
        <motion.div
          className="hero-float-card hero-float-card-1"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <span>⚡</span> React Developer
        </motion.div>
        <motion.div
          className="hero-float-card hero-float-card-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
        >
          <span>🏆</span> 1000+ DSA
        </motion.div>
      </motion.div>

      {/* scroll hint */}
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
};

export default Home;