import { Button } from "antd";
import styled from "styled-components";

const PageContainer = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  padding: 10px 24px 24px;
`;

const CommentForm = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
`;

const CommentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const ButtonStyled = styled(Button)`
  background-color: #1890ff;
  color: white;
  border-radius: 8px;
  margin-top: 10px;

  &:hover {
    background-color: #40a9ff !important;
    color: white !important;
  }
`;

const CommentsStyled = {
    PageContainer,
    CommentForm,
    CommentsGrid,
    ButtonStyled
};
export default CommentsStyled;
