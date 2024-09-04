import React, { useEffect, useState, ReactNode } from "react";
import { getWishlist } from "../../core/_requests";

export const FavoriteProducts = React.createContext<ProductModel[] | null>(null);

export interface ProductModel {
    id: string;
    created_at: string; // ISO date string
    updated_at: string; // ISO date string
    name: string;
    description: string;
    product: {
        category: string;
        created_at: string; // ISO date string
        created_by: string;
        description: string;
        id: string;
        image: string;
        name: string;
        price: string;
        stock: number;
        updated_at: string; // ISO date string
        user: string;
    };
    price: string;
    image: string;
    stock: number;
    attributes: JSON;
    category: string;
    created_by: number;
    linkToDetail: string;
}

export const FavoriteProductsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [favoriteProducts, setFavoriteProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        console.log('fetching products on getProduct context')
        const fetchProducts = async () => {
            const favoriteProducts = await getWishlist();
            setFavoriteProducts(favoriteProducts);
            console.log('The shop items from getFavoriteProducts are', favoriteProducts)
        };

        fetchProducts();
    }, []);

    return (
        <FavoriteProducts.Provider value= { favoriteProducts } >
        { children }
        </ FavoriteProducts.Provider>
    );
  };