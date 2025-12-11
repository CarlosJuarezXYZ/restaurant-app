import styled from "styled-components";

const NavbarContainer = styled.header`
  position: fixed;
  top: 10px;
  left: 20px;
  right: 20px;
  background: rgba(97, 15, 9, 0.8);
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  color: ${({ theme }) => theme.colors.textLight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 2rem;
  z-index: 1000;
  border-radius: 40px;
  @media (max-width: 768px) {
    padding: 0rem 1rem;
  }
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1rem;
      font-weight: 600;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;

  a {
    color: ${({ theme }) => theme.colors.textLight};
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.wine};
    }
  }
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 0.8rem;

    a {
      font-size: 0.9rem;
    }
  }
`;

export const NavbarStyled = {
  NavbarContainer,
  LogoSection,
  Nav,
};
