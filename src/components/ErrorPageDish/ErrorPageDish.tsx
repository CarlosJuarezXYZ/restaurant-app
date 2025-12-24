import type { FC } from "react";
import { MdOutlineErrorOutline } from "react-icons/md";
import { FaKitchenSet } from "react-icons/fa6";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

const Card = styled.div`
  width: 100%;
  text-align: center;
  padding: 32px 24px;
  border-radius: 16px;
  background: #ffffff;
`;

const IconWrapper = styled.div`
  font-size: 72px;
  color: #bd0f0fff;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 12px;
  color: #222;
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.6;
`;

const PortfolioLink = styled.a`
  display: inline-block;
  margin-top: 16px;
  color: #4c6ef5;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const ErrorPageDish: FC = () => {
  return (
    <Container>
      <Card>
        <IconWrapper>
          <FaKitchenSet/>
        </IconWrapper>

        <Title>Ups… la cocina está teniendo un pequeño problema</Title>

        <Description>
          Por favor, comunícate conmigo a través de mi portafolio para poder
          resolverlo lo antes posible.
        </Description>

        <PortfolioLink
          href="https://portafolio-carlos-gray.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ir a mi portafolio
        </PortfolioLink>
      </Card>
    </Container>
  );
};
