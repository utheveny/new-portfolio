import { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import hamburger from "../../assets/ep_menu.svg";

const NavbarContainer = styled.nav`
  background-color: black;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

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

      background-color: #4af626;
      border-radius: 100%;
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
  }
`;

const NavbarLink = styled.a`
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
        <img src={logo} alt="Logo" className="logo" />
        <NavbarLink href="/">Accueil</NavbarLink>
        <NavbarLink href="/projects">Projets</NavbarLink>
        <div className="menu-icon" onClick={toggleMenu}>
          <img src={hamburger} />
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <span className="close-icon" onClick={() => setIsMenuOpen(false)}>
              X
            </span>
            <NavbarLink href="/">Accueil</NavbarLink>
            <NavbarLink href="/projects">Projets</NavbarLink>
          </div>
        )}
      </NavbarContainer>
    </header>
  );
};

export default Navbar;
