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
