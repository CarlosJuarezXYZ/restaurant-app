import {
  createContext,
  useContext,
  useReducer,
  type Dispatch,
  type FC,
  type ReactNode,
} from "react";
import type { Category, Dish, CommentRestaurant } from "../domain/restaurant";
import {
  categoryReducer,
  commentReducer,
  dishReducer,
} from "./RestaurantReducer";

interface RestaurantState {
  dishes: Dish[];
  categories: Category[];
  comments: CommentRestaurant[];
}

type RestaurantAction =
  | { type: "SET_DISHES"; payload: Dish[] }
  | { type: "SET_CATEGORIES"; payload: Category[] }
  | { type: "SET_COMMENTS"; payload: CommentRestaurant[] };

const initialState: RestaurantState = {
  dishes: [],
  categories: [],
  comments: [],
};

export const restaurantReducer = (
  state: RestaurantState,
  action: RestaurantAction
): RestaurantState => {
  return {
    dishes: dishReducer(state.dishes, action as any),
    categories: categoryReducer(state.categories, action as any),
    comments: commentReducer(state.comments, action as any),
  };
};

interface RestaurantContextProps {
  state: RestaurantState;
  dispatch: Dispatch<RestaurantAction>;
}

const RestaurantContext = createContext<RestaurantContextProps | undefined>(
  undefined
);

export const RestaurantProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(restaurantReducer, initialState);
  return (
    <RestaurantContext.Provider value={{ state, dispatch }}>
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurantContext = () => {
  const context = useContext(RestaurantContext);
  if (!context) {
    throw new Error(
      "useRestaurantContext must be used within a RestaurantProvider"
    );
  }
  return context;
};
