// Imports
import { useEffect, useState } from "react";
import "./Navbar.scss";

// Assets
import logo from "../../assets/logo.png";

// Icons
import {
  FaHome,
  FaPaintBrush,
  FaEnvelopeOpenText,
  FaFileDownload,
} from "react-icons/fa";
import { IoBarChart } from "react-icons/io5";
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";
import { MdBusinessCenter } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuAnimation, setMenuAnimation] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      requestAnimationFrame(() => {
        setMenuAnimation(true);
      });
    } else {
      setMenuAnimation(false);
    }
  }, [isMenuOpen]);

  return (
    <header>
      {/* Logo */}
      <a href="/">
        <img src={logo} alt="Logo" className="logo" />
      </a>

      <div className="links">
        {/* Desktop Link 1 */}
        <a className="desktop-link" href="/">
          <FaHome />
        </a>
        {/* Desktop Link 2 */}
        <a className="desktop-link" href="/resume">
          Experiences
        </a>
        {/* Desktop Link 3 */}
        <a className="desktop-link" href="/skills">
          Competences
        </a>
        {/* Desktop Link 4 */}
        <a className="desktop-link" href="/projects">
          Projets
        </a>
        {/* Desktop Link 5 */}
        <a className="desktop-link" href="/contact">
          Contact
        </a>
      </div>

      {/* Download CV Button */}
      <button className="download-button">
        <FaFileDownload className="download-icon" />
        <span>CV</span>
      </button>

      {/* Hamburger Button */}
      <div
        className={`menu-button ${menuAnimation ? "" : "rotate"}`}
        onClick={() => setIsMenuOpen(true)}
      >
        <RiMenuUnfoldFill className="menu-icon" />
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="mobile-overlay" onClick={() => setIsMenuOpen(false)}>
          <div className={`mobile-menu ${menuAnimation ? "opened" : ""}`}>
            {/* Close button */}
            <div
              className={`close-button ${menuAnimation ? "rotate" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <RiMenuFoldFill className="close-icon" />
            </div>

            <div className="cards">
              {/* Mobile Link 1 */}
              <a href="/" className="card">
                <FaHome className="link-icon" />
                <span>Accueil</span>
              </a>
              {/* Mobile Link 2 */}
              <a href="/resume" className="card">
                <MdBusinessCenter className="link-icon" />
                <span>Experiences</span>
              </a>
              {/* Mobile Link 3 */}
              <a href="/skills" className="card">
                <IoBarChart className="link-icon" />
                <span>Competences</span>
              </a>
              {/* Mobile Link 4 */}
              <a href="/projects" className="card">
                <FaPaintBrush className="link-icon" />
                <span>Projets</span>
              </a>
              {/* Mobile Link 5 */}
              <a href="/contact" className="card">
                <FaEnvelopeOpenText className="link-icon" />
                <span>Contact</span>
              </a>
              {/* Mobile Link 6 */}
              <a className="card">
                <FaFileDownload className="link-icon" />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
