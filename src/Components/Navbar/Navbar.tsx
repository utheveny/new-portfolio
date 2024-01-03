import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #333;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
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
  return (
    <NavbarContainer>
      <NavbarLink href="/">Accueil</NavbarLink>
      <NavbarLink href="/projects">Projets</NavbarLink>
    </NavbarContainer>
  );
};

export default Navbar;