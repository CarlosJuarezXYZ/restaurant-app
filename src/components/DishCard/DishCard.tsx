import type { Dish } from "../../domain/restaurant";
import DishCardStyled from "./DishCard.styled";

interface DishCardProps {
  dish: Dish;
  onClick: (dish: Dish) => void;
  isLoading?: boolean;
}

const { Card, Image, Info, Name, Price } = DishCardStyled;

export const DishCard: React.FC<DishCardProps> = ({
  dish,
  onClick,
}) => (
    <Card onClick={() => onClick(dish)}>
      <Image src={dish.imageUrl} alt={dish.name} />
      <Info>
        <Name>{dish.name}</Name>
        <Price>S/ {dish.price.toFixed(2)}</Price>
      </Info>
    </Card>
);
