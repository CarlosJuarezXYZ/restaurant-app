export interface Dish{
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    categoryType:string;
    categoryId:string;
}

export interface Category{
    id:string;
    key:string;
    name:string;
    priority:number;
};

export interface CommentRestaurant{
    id?:number;
    author:string;
    content:string;
    rating:number;
    createdAt?:string;
    avatarUrl?:string;
};

export interface SkeletonProps {
  isLoading?: boolean;
}

export const SectionNameRestaurant = {
  Dishes: "Dishes",
  Comments: "Comments",
} as const;

export type SectionNameRestaurant =
  typeof SectionNameRestaurant[keyof typeof SectionNameRestaurant];

export type SectionConfig = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

