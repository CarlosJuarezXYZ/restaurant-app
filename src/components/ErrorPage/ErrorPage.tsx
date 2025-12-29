import type { FC } from "react";
import styled from "styled-components";
import type { SectionNameRestaurant } from "../../domain/restaurant";
import { SectionConfigErrorData } from "../../utils/SectionConfigErrorData/SectionConfigErrorData";

interface ErrorPageProps {
  section:SectionNameRestaurant;
}

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

export const ErrorPage: FC<ErrorPageProps> = ({section}) => {
  const {icon,title,description} = SectionConfigErrorData[section];
  return (
    <Container>
      <Card>
        <IconWrapper>
          {icon}
        </IconWrapper>

        <Title>{title}</Title>

        <Description>
         {description}
        </Description>

        <PortfolioLink
          href="https://portafolio-carlos-gray.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ir a portafolio
        </PortfolioLink>
      </Card>
    </Container>
  );
};
