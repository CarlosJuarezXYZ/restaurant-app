import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalCard = styled.div`
  background: #fff;
  border-radius: 16px;
  width: 90%;
  max-width: 400px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  margin: 0 0 8px 0;
`;

const Description = styled.p`
  color: #555;
`;

const Price = styled.p`
  font-weight: bold;
  margin-top: 12px;
  font-size: 1.1rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  color: black;
  background: none;
  border: none;
  font-size: 1.8rem;
  width: 36px;
  height: 36px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
`;

const DishModalStyled = {
    Overlay,
    ModalCard,
    Image,
    Content,
    Title,
    Description,
    Price,
    CloseButton
};

export default DishModalStyled;
