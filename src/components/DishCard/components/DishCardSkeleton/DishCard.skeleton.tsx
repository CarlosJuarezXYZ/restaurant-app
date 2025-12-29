import { Skeleton } from "antd";
import type { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import type { SkeletonProps } from "../../../../domain/restaurant";

const Wrapper = styled.div`
  border-radius: 12px;
  overflow: hidden;
`;

const ImageSkeleton = styled.div`
  margin-bottom: 12px;
`;

const InfoSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const DishCardSkeleton: FC<PropsWithChildren<SkeletonProps>> = ({
  children,
  isLoading=true,
}) => {
  if (isLoading) {
    return (
      <Wrapper>
        <ImageSkeleton>
          <Skeleton.Image active style={{width:200}} />
        </ImageSkeleton>

        <InfoSkeleton>
          <Skeleton.Input active style={{ width: 200 }} />
          <Skeleton.Input active size="small" style={{ width: 200 }} />
        </InfoSkeleton>
      </Wrapper>
    );
  }
  return children;
};

export default DishCardSkeleton;
