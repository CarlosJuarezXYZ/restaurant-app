import React from "react";
import {Link} from "react-scroll";
import { FaUtensils } from "react-icons/fa";
import { NavbarStyled } from "./NavBar.styled";
import { theme } from "../../theme";

const { NavbarContainer, LogoSection, Nav } = NavbarStyled;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <LogoSection>
        <FaUtensils size={35} color={theme.colors.wine} />
        <h1>Food restaurant</h1>
      </LogoSection>
      <Nav>
        <Link to="init" smooth={true} duration={500}>Inicio</Link>
        <Link to="dishes" smooth={true} duration={500}>Platos</Link>
        <Link to="comments" smooth={true} duration={500}>Comentarios</Link>
        <Link to="ubication" smooth={true} duration={500}>Ubicanos</Link>
      </Nav>
    </NavbarContainer>
  );
};

export default Navbar;
