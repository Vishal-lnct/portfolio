import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const navLinks = [
  { to: "/",          label: "Home"       },
  { to: "/about",     label: "About"      },
  { to: "/experience",label: "Experience" },
  { to: "/skill",     label: "Skills"     },
  { to: "/project",   label: "Projects"   },
  { to: "/contact",   label: "Contact"    },
];

const Header = () => {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close menu on route change */
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="header-inner">

        {/* logo */}
        <NavLink to="/" className="header-logo" onClick={closeMenu}>
          <span className="header-logo-name">Vishal</span>
          <span className="header-logo-dot">.</span>
          <span className="header-logo-dev">dev</span>
        </NavLink>

        {/* desktop nav */}
        <nav className={`header-nav ${menuOpen ? "header-nav--open" : ""}`}>
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                `header-link ${isActive ? "header-link--active" : ""}`
              }
            >
              {l.label}
              <span className="header-link-bar" />
            </NavLink>
          ))}

          <a href="#" className="header-hire" onClick={closeMenu}>
            Hire Me ✦
          </a>
        </nav>

        {/* hamburger */}
        <button
          className={`header-burger ${menuOpen ? "header-burger--open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
};

export default Header;