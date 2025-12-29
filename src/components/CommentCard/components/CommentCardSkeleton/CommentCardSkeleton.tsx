import { Avatar, Skeleton, Rate } from "antd";
import CommentCardStyled from "../../CommentCard.styled";
import type { FC, PropsWithChildren } from "react";
import type { SkeletonProps } from "../../../../domain/restaurant";

const { StyledCard, Header, Info } = CommentCardStyled;
const CommentCardSkeleton: FC<PropsWithChildren<SkeletonProps>> = ({
  children,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <StyledCard>
        <Header>
          <Avatar size={48} />
          <Info>
            <Skeleton active title={{ width: 100 }} paragraph={false} />
          </Info>
        </Header>
        <Rate disabled defaultValue={0} />
        <Skeleton active paragraph={{ rows: 2 }} />
      </StyledCard>
    );
  }
  return  children ;
};

export default CommentCardSkeleton;
