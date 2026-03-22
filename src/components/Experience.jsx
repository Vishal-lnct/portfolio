import React from "react";
import { motion } from "framer-motion";
import "./Experience.css";

const experiences = [
  {
    role: "Web Developer Intern",
    company: "VaultofCodes",
    type: "Internship",
    period: "Nov 2025 – Dec 2025",
    location: "Remote",
    color: "#3b82f6",
    icon: "💼",
    points: [
      "Worked as a Web Developer Intern gaining hands-on experience building and maintaining dynamic web applications.",
      "Developed responsive and user-friendly interfaces using HTML, CSS, JavaScript, and React.",
      "Collaborated on real-world projects improving team coordination, problem-solving, and practical understanding of full-stack workflows.",
      "Integrated user authentication, search functionality, and a voting system for ranking answers.",
      "Handled database operations and ensured efficient data management.",
      "Gained valuable real-world experience working in a professional environment with modern development tools.",
    ],
  },
];

const education = [
  {
    degree: "B.Tech – Computer Science & Engineering",
    institute: "Laxmi Narayan College of Technology, Bhopal",
    period: "2023 – 2027",
    location: "Bhopal, Madhya Pradesh",
    cgpa: "8.36",
    color: "#06b6d4",
    icon: "🎓",
  },
];

const certifications = [
  { name: "Foundations of Web Development: CSS, Bootstrap, JS, React", provider: "Udemy" },
  { name: "Django Essentials: Build and Deploy Real-World Apps",         provider: "Udemy" },
  { name: "Introduction to Cybersecurity",                               provider: "Cisco" },
  { name: "Networking Basics",                                           provider: "Cisco" },
];

const achievements = [
  {
    icon: "🏆",
    title: "1000+ DSA Problems Solved",
    desc: "Solved 1000+ Data Structure and Algorithm problems across LeetCode, GeeksforGeeks, CodeChef, and HackerRank.",
  },
  {
    icon: "🚀",
    title: "Smart India Hackathon 2025",
    desc: "Participated in SIH 2025, a national-level innovation initiative, and advanced to the second round of the college-level internal hackathon selection.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0  },
};
const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } },
};

const Experience = () => {
  return (
    <section id="experience" className="exp">
      <div className="exp-orb exp-orb-1" />
      <div className="exp-orb exp-orb-2" />

      <div className="exp-container">

        {/* ── header ── */}
        <motion.div
          className="exp-header"
          initial="hidden" whileInView="show"
          viewport={{ once: true }} variants={stagger}
        >
          <motion.span className="exp-tag" variants={fadeUp}>My Journey</motion.span>
          <motion.h2 className="exp-title" variants={fadeUp}>Experience & Education</motion.h2>
          <motion.div className="exp-line" variants={fadeUp} />
        </motion.div>

        {/* ── two column layout ── */}
        <div className="exp-grid">

          {/* LEFT – experience + achievements */}
          <div className="exp-col">

            <motion.h3
              className="exp-col-title"
              initial={{ opacity:0, x:-20 }}
              whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }}
              transition={{ duration:0.5 }}
            >
              <span className="exp-col-icon">💼</span> Work Experience
            </motion.h3>

            {experiences.map((exp, i) => (
              <motion.div
                className="exp-card"
                key={i}
                style={{ "--accent": exp.color }}
                initial={{ opacity:0, y:30 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ duration:0.5, delay: i * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <div className="exp-card-bar" />
                <div className="exp-card-top">
                  <div>
                    <div className="exp-card-role">{exp.role}</div>
                    <div className="exp-card-company">
                      <span className="exp-company-dot" style={{ background: exp.color }} />
                      {exp.company}
                    </div>
                  </div>
                  <div className="exp-card-meta">
                    <span className="exp-badge" style={{ color: exp.color, borderColor: `${exp.color}33`, background: `${exp.color}12` }}>
                      {exp.type}
                    </span>
                    <div className="exp-period">{exp.period}</div>
                    <div className="exp-location">📍 {exp.location}</div>
                  </div>
                </div>
                <ul className="exp-points">
                  {exp.points.map((pt, pi) => (
                    <li key={pi}>
                      <span className="exp-bullet" style={{ background: exp.color }} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* achievements */}
            <motion.h3
              className="exp-col-title"
              style={{ marginTop: "40px" }}
              initial={{ opacity:0, x:-20 }}
              whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }}
              transition={{ duration:0.5 }}
            >
              <span className="exp-col-icon">🏆</span> Achievements
            </motion.h3>

            <motion.div
              className="exp-achieve-grid"
              initial="hidden" whileInView="show"
              viewport={{ once:true }} variants={stagger}
            >
              {achievements.map((a, i) => (
                <motion.div
                  className="exp-achieve-card"
                  key={i} variants={fadeUp}
                  whileHover={{ y: -3, scale: 1.01 }}
                >
                  <span className="exp-achieve-icon">{a.icon}</span>
                  <div>
                    <div className="exp-achieve-title">{a.title}</div>
                    <div className="exp-achieve-desc">{a.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT – education + certifications */}
          <div className="exp-col">

            <motion.h3
              className="exp-col-title"
              initial={{ opacity:0, x:20 }}
              whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }}
              transition={{ duration:0.5 }}
            >
              <span className="exp-col-icon">🎓</span> Education
            </motion.h3>

            {education.map((edu, i) => (
              <motion.div
                className="exp-card exp-edu-card"
                key={i}
                style={{ "--accent": edu.color }}
                initial={{ opacity:0, y:30 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ duration:0.5 }}
                whileHover={{ y: -3 }}
              >
                <div className="exp-card-bar" />
                <div className="exp-edu-icon">{edu.icon}</div>
                <div className="exp-card-role" style={{ marginBottom: 6 }}>{edu.degree}</div>
                <div className="exp-card-company">
                  <span className="exp-company-dot" style={{ background: edu.color }} />
                  {edu.institute}
                </div>
                <div className="exp-edu-row">
                  <span className="exp-period">📅 {edu.period}</span>
                  <span className="exp-period">📍 {edu.location}</span>
                </div>
                <div className="exp-cgpa">
                  <span className="exp-cgpa-label">CGPA</span>
                  <span className="exp-cgpa-value">{edu.cgpa}</span>
                  <div className="exp-cgpa-bar">
                    <motion.div
                      className="exp-cgpa-fill"
                      style={{ "--c": edu.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(parseFloat(edu.cgpa)/10)*100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}

            {/* certifications */}
            <motion.h3
              className="exp-col-title"
              style={{ marginTop: "40px" }}
              initial={{ opacity:0, x:20 }}
              whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }}
              transition={{ duration:0.5 }}
            >
              <span className="exp-col-icon">📜</span> Certifications
            </motion.h3>

            <motion.div
              className="exp-cert-list"
              initial="hidden" whileInView="show"
              viewport={{ once:true }} variants={stagger}
            >
              {certifications.map((c, i) => (
                <motion.div
                  className="exp-cert-card"
                  key={i} variants={fadeUp}
                  whileHover={{ x: 4 }}
                >
                  <div className="exp-cert-check">✓</div>
                  <div>
                    <div className="exp-cert-name">{c.name}</div>
                    <div className="exp-cert-provider">{c.provider}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;