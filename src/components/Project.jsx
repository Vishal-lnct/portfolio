import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Project.css";

const projects = [
  {
    name: "Full-Stack E-Commerce Website",
    description:
      "A full-stack E-Commerce web application using React (Frontend) and Django REST Framework (Backend) with PostgreSQL database integration.",
    points: [
      "Secure user authentication and product listing with cart & order management",
      "Designed RESTful APIs for product, category, cart, and order modules with complete CRUD operations",
      "Integrated frontend with backend using Axios and optimized database queries",
    ],
    tech: ["React", "Django", "PostgreSQL", "REST API", "Axios"],
    github: "https://github.com/Vishal-lnct",
    live: "#",
    emoji: "🛒",
    color: "#3b82f6",
    date: "Feb 2026",
    featured: true,
  },
  {
    name: "Personal Portfolio Website",
    description:
      "A responsive personal portfolio website built with React to showcase projects, skills, and achievements with modern CSS animations.",
    points: [
      "Clean and modern UI design using advanced CSS styling and animations",
      "Implemented reusable React components for About, Projects, Skills, and Contact sections",
      "Optimized layout for different screen sizes ensuring smooth mobile and desktop experience",
    ],
    tech: ["React", "CSS", "Framer Motion", "Vite"],
    github: "https://github.com/Vishal-lnct",
    live: "#",
    emoji: "🌐",
    color: "#06b6d4",
    date: "Oct 2024",
    featured: false,
  },
  {
    name: "Rock Paper Scissors Game",
    description:
      "Interactive browser-based game using vanilla JavaScript with score tracking, animated results, and a clean responsive UI.",
    points: [
      "Real-time score tracking with win/loss/draw logic",
      "Smooth CSS animations for result reveal and button interactions",
      "Fully responsive layout playable on mobile and desktop",
    ],
    tech: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/Vishal-lnct",
    live: "#",
    emoji: "✊",
    color: "#8b5cf6",
    date: "2024",
    featured: false,
  },
];

const filters = ["All", "React", "Django", "JavaScript", "REST API"];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0  },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.13 } },
};

const Project = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.tech.includes(active));

  return (
    <section id="projects" className="proj">
      <div className="proj-orb proj-orb-1" />
      <div className="proj-orb proj-orb-2" />

      <div className="proj-container">

        {/* header */}
        <motion.div
          className="proj-header"
          initial="hidden" whileInView="show"
          viewport={{ once: true }} variants={stagger}
        >
          <motion.span className="proj-tag" variants={fadeUp}>What I've built</motion.span>
          <motion.h2 className="proj-title" variants={fadeUp}>Projects</motion.h2>
          <motion.div className="proj-line" variants={fadeUp} />
          <motion.p className="proj-subtitle" variants={fadeUp}>
            Real-world applications built with modern technologies
          </motion.p>
        </motion.div>

        {/* filter pills */}
        <motion.div
          className="proj-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {filters.map((f) => (
            <button
              key={f}
              className={`proj-filter ${active === f ? "proj-filter--active" : ""}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* cards grid */}
        <motion.div
          className="proj-grid"
          initial="hidden" whileInView="show"
          viewport={{ once: true }} variants={stagger}
        >
          <AnimatePresence mode="wait">
            {filtered.map((p, i) => (
              <motion.div
                className={`proj-card ${p.featured ? "proj-card--featured" : ""}`}
                key={p.name}
                style={{ "--accent": p.color }}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: 20 }}
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
                layout
              >
                {/* top bar */}
                <div className="proj-card-bar" />

                {p.featured && (
                  <div className="proj-featured-badge">⭐ Featured</div>
                )}

                {/* card header */}
                <div className="proj-card-top">
                  <div
                    className="proj-emoji-wrap"
                    style={{ background: `${p.color}18`, border: `1px solid ${p.color}33` }}
                  >
                    <span className="proj-emoji">{p.emoji}</span>
                  </div>
                  <div className="proj-card-links">
                    <motion.a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="proj-icon-btn"
                      aria-label="GitHub"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                    </motion.a>
                    <motion.a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="proj-icon-btn"
                      aria-label="Live Demo"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                      </svg>
                    </motion.a>
                  </div>
                </div>

                {/* content */}
                <div className="proj-card-date">{p.date}</div>
                <h3 className="proj-card-name">{p.name}</h3>
                <p className="proj-card-desc">{p.description}</p>

                {/* bullet points */}
                <ul className="proj-points">
                  {p.points.map((pt, pi) => (
                    <li key={pi}>
                      <span className="proj-bullet" style={{ background: p.color }} />
                      {pt}
                    </li>
                  ))}
                </ul>

                {/* tech badges */}
                <div className="proj-tech-list">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="proj-tech"
                      style={{
                        color: p.color,
                        borderColor: `${p.color}33`,
                        background: `${p.color}0f`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* footer CTA */}
        <motion.div
          className="proj-footer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.a
            href="https://github.com/Vishal-lnct"
            target="_blank"
            rel="noreferrer"
            className="proj-more-btn"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            View All Projects on GitHub
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default Project;