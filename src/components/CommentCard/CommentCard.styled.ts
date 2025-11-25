import { Card } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import styled from "styled-components";

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 400px;
  margin: 12px auto;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  cursor: default;

  &:hover {
    transform: translateY(-4px);
  }

  .ant-card-body {
    padding: 20px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Info = styled.div`
  margin-left: 12px;
`;

const CommentText = styled(Paragraph)`
  font-size: 14px;
  margin-bottom: 0;
  color: #444;
`;

const CommentCardStyled = {
    StyledCard,
    Header,
    Info,
    CommentText
};

export default CommentCardStyled;
