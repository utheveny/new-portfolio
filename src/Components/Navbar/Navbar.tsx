// Imports
import { useState } from "react";
import "./Navbar.scss";

// Assets
import logo from "../../assets/logo.png";

// Icons
import { FaHome } from "react-icons/fa";
import { IoBarChart } from "react-icons/io5";
import { RiMenuFoldLine, RiMenuUnfoldFill } from "react-icons/ri";
import { FaPaintBrush } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
        {/* Logo */}
        <img src={logo} alt="Logo" className="logo" />

        <div className="links">
          {/* Desktop Link 1 */}
          <a className="desktop-link" href="/">
            <FaHome />
          </a>
          {/* Desktop Link 2 */}
          <a className="desktop-link" href="/projects">Experiences</a>
          {/* Desktop Link 3 */}
          <a className="desktop-link" href="/projects">Competences</a>
          {/* Desktop Link 4 */}
          <a className="desktop-link" href="/projects">Projets</a>
          {/* Desktop Link 5 */}
          <a className="desktop-link" href="/projects">Contact</a>
        </div>

        {/* Download CV Button */}
        <button className="download-button">
          <FaFileDownload className="download-icon" />
          <span>CV</span>
        </button>

        {/* Hamburger Button */}
        <div className={`menu-button ${isMenuOpen ? 'rotate' : ''}`} onClick={() => setIsMenuOpen(true)}>
          <RiMenuFoldLine className="menu-icon" />
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mobile-overlay" onClick={() => setIsMenuOpen(false)}>
            <div className="mobile-menu">
              {/* Close button */}
              <div
                className={`close-button ${isMenuOpen ? 'rotate' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <RiMenuUnfoldFill className="close-icon" />
              </div>

              <div className="cards">
                {/* Mobile Link 1 */}
                <a href="/" className="mobile-link card">
                  <FaHome className="link-icon" />
                  <span>Accueil</span>
                </a>
                {/* Mobile Link 2 */}
                <a href="/projects" className="mobile-link card">
                  <MdBusinessCenter className="link-icon" />
                  <span>Experiences</span>
                </a>
                {/* Mobile Link 3 */}
                <a href="/projects" className="mobile-link card">
                  <IoBarChart className="link-icon" />
                  <span>Competences</span>
                </a>
                {/* Mobile Link 4 */}
                <a href="/projects" className="mobile-link card">
                  <FaPaintBrush className="link-icon" />
                  <span>Projets</span>
                </a>
                {/* Mobile Link 5 */}
                <a href="/projects" className="mobile-link card">
                  <FaEnvelopeOpenText className="link-icon" />
                  <span>Contact</span>
                </a>
                {/* Mobile Link 6 */}
                <a href="/projects" className="mobile-link card">
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
