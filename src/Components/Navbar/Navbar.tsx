// Imports
import { useState } from "react";
import styled from "styled-components";

// Assets
import logo from "../../assets/logo.png";

// Icons
import { FaHome } from "react-icons/fa";
import { IoBarChart } from "react-icons/io5";
import { RiMenuFoldLine } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";
import { FaPaintBrush } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";

const NavbarContainer = styled.nav`
  /*******************/
  /*     General     */
  /*******************/

  background-color: black;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /******************/
  /* Mobile version */
  /******************/

  @media (max-width: 768px) {
    align-items: flex-start;

    .logo {
      width: 32px;
      height: 32px;
    }

    .menu-button {
      width: 32px;
      height: 32px;

      display: flex;
      justify-content: center;
      align-items: center;

      background-color: #4ace26;
      border-radius: 100%;
      cursor: pointer;

      .menu-icon {
        color: #fff;
        fill: #fff;
      }
    }

    .mobile-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 999;
    }

    .mobile-menu {
      display: flex;
      flex-direction: column;

      position: fixed;
      top: 0;
      right: 0;

      width: 100%;
      max-width: 400px;
      height: 100%;

      background-color: black;
      padding: 20px;
      z-index: 1000;

      backdrop-filter: blur(500px);

      .cards {
        width: 100%;
        height: 100%;

        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
        // grid-column-gap: 4px;
        grid-row-gap: 24px;

        baclground-color: red;

        .card {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          border: 1px dashed #4ace26;
          border-radius: 4px;
        }
        .link-icon {
          width: 24px;
          height: 24px;

          color: #4ace26;
        }
        a {
          color: #fff;
          text-decoration: none;
          padding: 10px;
          margin: 0 10px;
        }
      }
    }

    .close-button {
      width: 32px;
      height: 32px;

      display: flex;
      align-items: center;
      justify-content: center;
      align-self: flex-end;

      cursor: pointer;
      background-color: #4ace26;
      border-radius: 100%;

      margin-bottom: 8px;
      margin-right: 8px;

      .close-icon {
        width: 24px;
        height: 24px;

        color: #fff;
      }
    }

    .download-button {
      display: none;
    }
  }

  /*******************/
  /* Desktop version */
  /*******************/

  @media (min-width: 769px) {
    .logo {
      width: 40px;
      height: 40px;
    }

    .links {
      display: flex;
      justify-content: space-between;
      align-items: center;

      font-size: 16px;
      font-weight: 400;
    }

    .download-button {
      height: 40px;
      border: none;
      border-radius: 4px;
      padding: 0 16px;

      display: flex;
      align-items: center;

      font-size: 16px;
      font-weight: 600;
      background-color: #4ace26;
      color: white;

      cursor: pointer;
      transition: 0.25s ease-in;

      &:hover {
        background-color: #4ac026;
      }

      .download-icon {
        width: 18px;
        height: 18px;

        margin-right: 8px;
      }
    }

    .mobile-button {
      display: none;
    }
  }
`;

const NavbarDesktopLink = styled.a`
  @media (max-width: 768px) {
    display: none;
  }

  color: #cbd5e0;
  text-decoration: none;
  padding: 10px;
  margin: 0 10px;

  transition: 0.25s ease-in;

  &:hover {
    color: white;
  }
`;

const NavbarMobileLink = styled.a`
  @media (min-width: 768px) {
    display: none;
  }

  color: #fff;
  text-decoration: none;
  padding: 10px;
  margin: 0 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <NavbarContainer>
        {/* Logo */}
        <img src={logo} alt="Logo" className="logo" />

        <div className="links">
          {/* Desktop Link 1 */}
          <NavbarDesktopLink href="/">
            <FaHome />
          </NavbarDesktopLink>
          {/* Desktop Link 2 */}
          <NavbarDesktopLink href="/projects">Experiences</NavbarDesktopLink>
          {/* Desktop Link 3 */}
          <NavbarDesktopLink href="/projects">Competences</NavbarDesktopLink>
          {/* Desktop Link 4 */}
          <NavbarDesktopLink href="/projects">Projets</NavbarDesktopLink>
          {/* Desktop Link 5 */}
          <NavbarDesktopLink href="/projects">Contact</NavbarDesktopLink>
        </div>

        {/* Download CV Button */}
        <button className="download-button">
          <FaFileDownload className="download-icon" />
          <span>CV</span>
        </button>

        {/* Hamburger Button */}
        <div className="menu-button" onClick={() => setIsMenuOpen(true)}>
          <RiMenuFoldLine className="menu-icon" />
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mobile-overlay" onClick={() => setIsMenuOpen(false)}>
            <div className="mobile-menu">
              {/* Close button */}
              <div
                className="close-button"
                onClick={() => setIsMenuOpen(false)}
              >
                <IoIosClose className="close-icon" />
              </div>

              <div className="cards">
                {/* Mobile Link 1 */}
                <NavbarMobileLink href="/" className="card">
                  <FaHome className="link-icon" />
                  <span>Accueil</span>
                </NavbarMobileLink>
                {/* Mobile Link 2 */}
                <NavbarMobileLink href="/projects" className="card">
                  <MdBusinessCenter className="link-icon" />
                  <span>Experiences</span>
                </NavbarMobileLink>
                {/* Mobile Link 3 */}
                <NavbarMobileLink href="/projects" className="card">
                  <IoBarChart className="link-icon" />
                  <span>Competences</span>
                </NavbarMobileLink>
                {/* Mobile Link 4 */}
                <NavbarMobileLink href="/projects" className="card">
                  <FaPaintBrush className="link-icon" />
                  <span>Projets</span>
                </NavbarMobileLink>
                {/* Mobile Link 5 */}
                <NavbarMobileLink href="/projects" className="card">
                  <FaEnvelopeOpenText className="link-icon" />
                  <span>Contact</span>
                </NavbarMobileLink>
                {/* Mobile Link 6 */}
                <NavbarMobileLink href="/projects" className="card">
                  <FaFileDownload className="link-icon" />
                  <span>Download CV</span>
                </NavbarMobileLink>
              </div>
            </div>
          </div>
        )}
      </NavbarContainer>
    </header>
  );
};

export default Navbar;
