import { Avatar, Rate, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import type { CommentRestaurant } from "../../domain/restaurant";
import CommentCardStyled from "./CommentCard.styled";

const { Text } = Typography;

const { StyledCard, Header, Info, CommentText } = CommentCardStyled;

export const CommentCard: React.FC<CommentRestaurant> = ({
  author,
  content,
  rating,     
  createdAt,
  avatarUrl,
}) => {
  return (
    <StyledCard hoverable>
      <Header>
        <Avatar
          src={avatarUrl}
          icon={!avatarUrl && <UserOutlined />}
          size={48}
        />
        <Info>
          <Text strong>{author}</Text>
          <br />
          <Text type="secondary" style={{ fontSize: 12 }}>
            {createdAt}
          </Text>
        </Info>
      </Header>

      <Rate disabled defaultValue={rating} style={{ marginBottom: 8 }} />
      <CommentText>{content}</CommentText>
    </StyledCard>
  );
};
