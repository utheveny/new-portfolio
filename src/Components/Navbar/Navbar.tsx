import { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import hamburger from "../../assets/ep_menu.svg";
import { FaHome } from 'react-icons/fa';

const NavbarContainer = styled.nav`
  /* Desktop version */
  background-color: black;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Mobile version */
  @media (max-width: 768px) {
    align-items: flex-start;

    .logo {
      width: 32px;
      height: 32px;
    }

    .menu-icon {
      width: 32px;
      height: 32px;

      display: flex;
      justify-content: center;
      align-items: center;

      background-color: #4ace26;
      border-radius: 100%;

      .icon {
        color: #fff;
        fill: #fff;
      }
    }

    .mobile-menu {
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      padding: 20px;
      z-index: 1000;
    }

    .mobile-menu a {
      color: #fff;
      text-decoration: none;
      padding: 10px;
      margin: 0 10px;
      &:hover {
        text-decoration: underline;
      }
    }

    .close-icon {
      align-self: flex-end;
      cursor: pointer;
      color: #fff;
    }

    .desktop-button {
      display: none;
    }
  }

  /* Desktop version */
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

    .desktop-button {
      height: 40px;
      border: none;
      border-radius: 4px;
      padding: 0 16px;

      font-size: 16px;
      font-weight: 600;
      background-color: #4ace26;
      color: white;

      cursor: pointer;
      transition: 0.25s ease-in;

      &:hover {
        background-color: #4ac026;
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <NavbarContainer>
        {/* Logo */}
        <img src={logo} alt="Logo" className="logo" />

        <div className="links">
          {/* Desktop Link 1 */}
          <NavbarDesktopLink href="/"><FaHome /></NavbarDesktopLink>
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
        <button className="desktop-button">Download CV</button>

        {/* Hamburger Button */}
        <div className="menu-icon mobile-button" onClick={toggleMenu}>
          <img src={hamburger} className="icon" />
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            {/* Close button */}
            <span className="close-icon" onClick={() => setIsMenuOpen(false)}>
              ✖
            </span>

            {/* Mobile Link 1 */}
            <NavbarMobileLink href="/">Accueil</NavbarMobileLink>
            {/* Mobile Link 2 */}
            <NavbarMobileLink href="/projects">Experiences</NavbarMobileLink>
            {/* Mobile Link 3 */}
            <NavbarMobileLink href="/projects">Competences</NavbarMobileLink>
            {/* Mobile Link 4 */}
            <NavbarMobileLink href="/projects">Projets</NavbarMobileLink>
            {/* Mobile Link 5 */}
            <NavbarMobileLink href="/projects">Contact</NavbarMobileLink>
          </div>
        )}
      </NavbarContainer>
    </header>
  );
};

export default Navbar;
