import React from "react";
import { motion } from "framer-motion";
import "./Skill.css";

const skillGroups = [
  {
    category: "Frontend",
    icon: "🎨",
    color: "#3b82f6",
    skills: [
      { name: "HTML5",      level: 92 },
      { name: "CSS3",       level: 88 },
      { name: "JavaScript", level: 82 },
      { name: "React",      level: 80 },
      { name: "Tailwind CSS", level: 75 },
      { name: "Bootstrap",  level: 78 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    color: "#06b6d4",
    skills: [
      { name: "Python",     level: 78 },
      { name: "Django",     level: 72 },
      { name: "REST APIs",  level: 74 },
      { name: "MySQL",      level: 70 },
      { name: "PostgreSQL", level: 65 },
    ],
  },
  {
    category: "Tools & Others",
    icon: "🛠️",
    color: "#8b5cf6",
    skills: [
      { name: "Git",        level: 82 },
      { name: "GitHub",     level: 82 },
      { name: "VS Code",    level: 92 },
      { name: "C++",        level: 70 },
      { name: "SQL",        level: 72 },
    ],
  },
];

const techPills = [
  { name: "React",       color: "#61DAFB" },
  { name: "JavaScript",  color: "#F7DF1E" },
  { name: "HTML5",       color: "#E34F26" },
  { name: "CSS3",        color: "#1572B6" },
  { name: "Tailwind",    color: "#38BDF8" },
  { name: "Bootstrap",   color: "#7952B3" },
  { name: "Python",      color: "#3776AB" },
  { name: "Django",      color: "#44B78B" },
  { name: "REST API",    color: "#06b6d4" },
  { name: "PostgreSQL",  color: "#4479A1" },
  { name: "MySQL",       color: "#4479A1" },
  { name: "Git",         color: "#F05032" },
  { name: "GitHub",      color: "#e2e8f0" },
  { name: "C++",         color: "#00599C" },
  { name: "VS Code",     color: "#007ACC" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const Skill = () => {
  return (
    <section id="skills" className="skill skill--visible">
      <div className="skill__bg">
        <div className="skill__orb skill__orb--1" />
        <div className="skill__orb skill__orb--2" />
      </div>

      <div className="skill__container">

        {/* ── header ── */}
        <motion.div
          className="skill__header"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.span className="skill__tag" variants={fadeUp}>
            What I know
          </motion.span>
          <motion.h2 className="skill__title" variants={fadeUp}>
            My Skills
          </motion.h2>
          <motion.div className="skill__line" variants={fadeUp} />
          <motion.p className="skill__subtitle" variants={fadeUp}>
            Technologies and tools I work with regularly
          </motion.p>
        </motion.div>

        {/* ── skill groups ── */}
        <motion.div
          className="skill__groups"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
          {skillGroups.map((group, gi) => (
            <motion.div
              className="skill__group"
              key={gi}
              variants={fadeUp}
              whileHover={{ y: -4, transition: { type: "spring", stiffness: 300 } }}
            >
              <div className="skill__group-header">
                <span className="skill__group-icon">{group.icon}</span>
                <h3 className="skill__group-name">{group.category}</h3>
              </div>

              <div className="skill__bars">
                {group.skills.map((skill, si) => (
                  <motion.div
                    className="skill__bar-item"
                    key={si}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.1 + si * 0.07, duration: 0.5 }}
                  >
                    <div className="skill__bar-top">
                      <span className="skill__bar-name">{skill.name}</span>
                      <span className="skill__bar-pct">{skill.level}%</span>
                    </div>
                    <div className="skill__bar-track">
                      <motion.div
                        className="skill__bar-fill"
                        style={{ "--c": group.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          delay: gi * 0.1 + si * 0.08,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── tech stack pills ── */}
        <motion.div
          className="skill__tech-section"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h3 className="skill__tech-title" variants={fadeUp}>
            Tech Stack
          </motion.h3>
          <div className="skill__tech-grid">
            {techPills.map((t, i) => (
              <motion.span
                className="skill__tech-pill"
                key={i}
                variants={fadeUp}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <span
                  className="skill__tech-dot"
                  style={{ background: t.color }}
                />
                {t.name}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skill;