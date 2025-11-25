import styled from "styled-components";

const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
  background-image: url("https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/1b/4e/77/nuestro-main-hall.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding:10px 0px;
  color: white;
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    z-index: 1;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  padding: 4rem 6rem;
  max-width: 600px;

  @media (max-width: 768px) {
    padding: 2rem;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    line-height: 1.2;
    font-weight: 700;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    color: rgba(255, 255, 255, 0.9);
  }
`;

const OrderButton = styled.button`
  background: ${({ theme }) => theme.colors.wine};
  border: none;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.9rem 2rem;
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  &:hover {
    background: ${({ theme }) => theme.colors.wine};
    transform: translateY(-3px);
  }
`;

export const HeaderStyled = {
    HeaderContainer,
    Content,
    OrderButton
};
