import styled from "styled-components";

const TabsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const TabButton = styled.button<{ active: boolean }>`
  padding: 8px 16px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  background-color: ${({ active,theme }) => (active ? theme.colors.wine : "#eee")};
  color: ${({ active }) => (active ? "#fff" : "#333")};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ active,theme }) => (active ? theme.colors.wine : "#ddd")};
  }
`;

const TabStyled = {
    TabsContainer,
    TabButton
};

export default TabStyled;
