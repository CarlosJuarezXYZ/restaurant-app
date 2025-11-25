import type { Category, Dish,CommentRestaurant } from "../domain/restaurant";
import { baseUrl } from "../global";

export const getDishes = async (): Promise<Dish[]> => {
  const response = await fetch(`${baseUrl}/dishes`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) throw new Error("Error fetching dishes");

  return await response.json();
};

export const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(`${baseUrl}/categories`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) throw new Error("Error fetching categories");

  return await response.json();
};

export const getComments = async (): Promise<CommentRestaurant[]> => {
  const response = await fetch(`${baseUrl}/comments`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) throw new Error("Error fetching comments");

  return await response.json();
};

export const createComment = async(comment: Omit<CommentRestaurant, 'id'>): Promise<CommentRestaurant> => {
  const response = await fetch(`${baseUrl}/comments`, {
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify(comment),
  });

  if(!response.ok) throw new Error("Error creating comment");

  return await response.json();
};
