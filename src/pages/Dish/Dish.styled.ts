import styled from "styled-components";

const ContainerDish =  styled.div`
  padding: 16px;
  min-height: 100vh;
  box-sizing: border-box;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  width: 100%;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;

const ContainerDishStyled = {
    ContainerDish,
    Grid
};
export default ContainerDishStyled;
