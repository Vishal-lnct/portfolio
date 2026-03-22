import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const highlights = [
  { icon: "⚡", label: "Fast Learner",   desc: "Pick up new tech quickly"        },
  { icon: "🎯", label: "Problem Solver", desc: "Love tackling real challenges"   },
  { icon: "💻", label: "Clean Coder",    desc: "Readable, maintainable code"     },
  { icon: "🤝", label: "Team Player",    desc: "Collaborate & communicate well"  },
];

const info = [
  { label: "Name",   value: "Vishal Kumar"            },
  { label: "Email",  value: "vishalsarai37@gmail.com" },
  { label: "Role",   value: "Frontend Developer"      },
  { label: "Status", value: "Open to Work", green: true },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0  },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } },
};

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-orb" />
      <div className="about-container">

        <motion.div
          className="about-header"
          initial="hidden" whileInView="show"
          viewport={{ once: true }} variants={stagger}
        >
          <motion.span className="about-tag" variants={fadeUp}>Who am I?</motion.span>
          <motion.h2  className="about-title" variants={fadeUp}>About Me</motion.h2>
          <motion.div className="about-line"  variants={fadeUp} />
        </motion.div>

        <div className="about-body">

          <motion.div
            className="about-photo-wrap"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-photo-bg" />
            <img src="/photo.jpg" alt="Vishal Kumar" className="about-photo" />
            <div className="about-photo-tag">📍 Indore, India</div>
          </motion.div>

          <motion.div
            className="about-right"
            initial="hidden" whileInView="show"
            viewport={{ once: true }} variants={stagger}
          >
            <motion.p className="about-text" variants={fadeUp}>
              I'm a <strong>Full-Stack Developer</strong> with hands-on experience
              in frontend and backend development, specializing in building
              responsive UIs with <span className="about-accent">React</span> and
              scalable backend APIs using{" "}
              <span className="about-accent">Python & Django</span>.
            </motion.p>

            <motion.p className="about-text" variants={fadeUp}>
              I enjoy solving real-world problems, writing clean code, and
              continuously improving my skills. Currently open to{" "}
              <span className="about-accent">internships</span> and{" "}
              <span className="about-accent">junior frontend roles</span>.
            </motion.p>

            <motion.div className="about-info-grid" variants={fadeUp}>
              {info.map((item) => (
                <div className="about-info-item" key={item.label}>
                  <span className="about-info-label">{item.label}</span>
                  <span className={`about-info-value${item.green ? " about-info-open" : ""}`}>
                    {item.green && <span className="about-dot" />}
                    {item.value}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div className="about-highlights" variants={stagger}>
              {highlights.map((h, i) => (
                <motion.div
                  className="about-highlight-card"
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="about-highlight-icon">{h.icon}</span>
                  <div>
                    <div className="about-highlight-label">{h.label}</div>
                    <div className="about-highlight-desc">{h.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="about-actions" variants={fadeUp}>
              <motion.a
                href="#"
                className="about-btn about-btn-primary"
                whileHover={{ y: -2, boxShadow: "0 8px 28px rgba(59,130,246,0.45)" }}
                whileTap={{ scale: 0.97 }}
              >
                Download Resume
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
              </motion.a>
              <motion.a
                href="#contact"
                className="about-btn about-btn-secondary"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Contact Me →
              </motion.a>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;