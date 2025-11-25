import styled from "styled-components";

const Card = styled.div`
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;
  width: 100%;

  &:hover {
    transform: scale(1.02);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 10px 14px;
`;

const Name = styled.h3`
  margin: 0;
  font-size: 1rem;
`;

const Price = styled.p`
  color: #888;
  font-weight: 600;
`;

const DishCardStyled = {
    Card,
    Image,
    Info,
    Name,
    Price 
};
export default DishCardStyled;
