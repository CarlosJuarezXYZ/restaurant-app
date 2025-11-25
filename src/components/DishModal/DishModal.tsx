import type { Dish } from "../../domain/restaurant";
import DishModalStyled from "./DishModal.styled";

interface DishModalProps {
  dish: Dish | null;
  onClose: () => void;
}

const { Overlay, ModalCard, CloseButton, Image, Content, Title, Description, Price } = DishModalStyled;

export const DishModal: React.FC<DishModalProps> = ({ dish, onClose }) => {
  if (!dish) return null;
  return (
    <Overlay onClick={onClose}>
      <ModalCard onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Image src={dish.imageUrl} alt={dish.name} />
        <Content>
          <Title>{dish.name}</Title>
          <Description>{dish.description}</Description>
          <Price>S/ {dish.price.toFixed(2)}</Price>
        </Content>
      </ModalCard>
    </Overlay>
  );
};
