import type { Category, Dish, CommentRestaurant } from "../domain/restaurant";

export type ActionDish = { type: "SET_DISHES"; payload: Dish[] };

export const dishReducer = (state: Dish[], action: ActionDish): Dish[] => {
  switch (action.type) {
    case "SET_DISHES":
      return action.payload;
    default:
      return state;
  }
};

export type ActionCategory = { type: "SET_CATEGORIES"; payload: Category[] };

export const categoryReducer = (state: Category[], action: ActionCategory) => {
  switch (action.type) {
    case "SET_CATEGORIES":
      return action.payload;
    default:
      return state;
  }
};

export type ActionComment =
  | { type: "SET_COMMENTS"; payload: CommentRestaurant[] }
  | { type: "ADD_COMMENT"; payload: CommentRestaurant };

export const commentReducer = (
  state: CommentRestaurant[],
  action: ActionComment
): CommentRestaurant[] => {
  switch (action.type) {
    case "SET_COMMENTS":
      return action.payload;
    case "ADD_COMMENT":
      return [action.payload, ...state];
    default:
      return state;
  }
};

type ActionLoading = | {type:"FETCH_START"} | {type:"FETCH_END"};

interface LoadingState {
  isFetching:boolean;
  loadingCount:number;
};

const initialLoadingState:LoadingState = {
  isFetching:false,
  loadingCount:0,
};

export const loadingReducer = (state:LoadingState = initialLoadingState,action:ActionLoading):LoadingState => {
  switch(action.type){
    case"FETCH_START":
    return {
      ...state,
      isFetching:true,
      loadingCount:state.loadingCount + 1,
    }
    case"FETCH_END":
    const newCount = Math.max(0,state.loadingCount -1);
    return {
      ...state,
      isFetching: newCount > 0,
      loadingCount:newCount
    }
    default:
      return state;
  }
}
