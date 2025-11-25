import type { Dispatch } from "react";
import {
  createComment,
  getCategories,
  getComments,
  getDishes,
} from "../proxy/restaurante.service";
import type {
  ActionCategory,
  ActionComment,
  ActionDish,
} from "./RestaurantReducer";
import type { CommentRestaurant } from "../domain/restaurant";

export const fetchCategories = async (dispatch: Dispatch<ActionCategory>) => {
  try {
    const data = await getCategories();
    dispatch({ type: "SET_CATEGORIES", payload: data });
  } catch (err) {
    console.error("Error al cargar categorías", err);
  }
};

export const fetchDish = async (dispatch: Dispatch<ActionDish>) => {
  try {
    const data = await getDishes();
    dispatch({ type: "SET_DISHES", payload: data });
  } catch (err) {
    throw new Error("error dish");
  }
};

export const fetchComments = async (dispatch: Dispatch<ActionComment>) => {
  try {
    const data = await getComments();
    dispatch({ type: "SET_COMMENTS", payload: data });
  } catch (error) {
    throw new Error("error comments");
  }
};
export const addComment = async (
  comment: Omit<CommentRestaurant, "id">,
  dispatch: Dispatch<ActionComment>
) => {
  try {
    const newComment = await createComment(comment);
    dispatch({ type: "ADD_COMMENT", payload: newComment });
  } catch (error) {
    throw new Error("error adding comment");
  }
};
