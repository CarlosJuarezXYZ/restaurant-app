import { useState, useMemo, useEffect } from "react";
import { SectionNameRestaurant, type Dish } from "../../domain/restaurant";
import { FilterTabs } from "../../components/Tab/Tab";
import { DishCard } from "../../components/DishCard/DishCard";
import { DishModal } from "../../components/DishModal/DishModal";
import { fetchCategories, fetchDish } from "../../context/RestaurantAction";
import { useRestaurantContext } from "../../context/RestaurantContext";
import ContainerDishStyled from "./Dish.styled";
import DishCardSkeleton from "../../components/DishCard/components/DishCardSkeleton/DishCard.skeleton";
import { ErrorPage } from "../../components/ErrorPage/ErrorPage";

const { ContainerDish, Grid } = ContainerDishStyled;

export const DishesScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("entradas");
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const { state, dispatch } = useRestaurantContext();
  const [error, setError] = useState<Boolean>(false);
  const categories = state.categories;
  const dishes = state.dishes;
  const isFetching = state.isFetching;

  const categoriesName = useMemo(() => {
    const orderCategoriesByPriority = [...categories].sort(
      (a, b) => a.priority - b.priority
    );
    return orderCategoriesByPriority.map((category) => category.key);
  }, [categories]);

  const filteredDishes = useMemo(() => {
    return dishes.filter((dish) => dish.categoryType === selectedCategory);
  }, [selectedCategory, dishes]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([fetchCategories(dispatch), fetchDish(dispatch)]);
      } catch {
        setError(true);
      }
    };
    fetchData();
  }, []);

  if(error){
    return <ErrorPage section={SectionNameRestaurant.Dishes} />;
  }

  return (
    <ContainerDish id="dishes">
      <FilterTabs
        categories={categoriesName}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <Grid>
        {(isFetching ? Array.from({ length: 8 }) : filteredDishes).map(
          (dish, index) => (
            <DishCardSkeleton key={index} isLoading={isFetching}>
              {!isFetching && (
                <DishCard dish={dish as Dish} onClick={setSelectedDish} />
              )}
            </DishCardSkeleton>
          )
        )}
      </Grid>
      <DishModal dish={selectedDish} onClose={() => setSelectedDish(null)} />
    </ContainerDish>
  );
};
