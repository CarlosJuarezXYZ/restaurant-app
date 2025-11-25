import { type FC, type ReactNode } from "react";
import { HeaderStyled } from "./Header.styled";

interface HeaderProps {
  Nav: ReactNode;
}

const { HeaderContainer, Content, OrderButton } = HeaderStyled;

const Header: FC<HeaderProps> = ({ Nav }) => {
  return (
    <HeaderContainer id="init">
      <div style={{ position: "relative", zIndex: 3 }}>{Nav}</div>

      <Content>
        <h1>Bienvenido a Food & Taste</h1>
        <p>
          Descubre los sabores más exquisitos preparados por nuestros chefs.
          Ingredientes frescos, ambiente único, y la mejor atención.
        </p>
        <OrderButton onClick={() => alert("Llevándote a la carta...")}>
          Ordene
        </OrderButton>
      </Content>
    </HeaderContainer>
  );
};

export default Header;
