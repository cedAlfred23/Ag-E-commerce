import React, { useEffect, useState, ReactNode } from "react";
import { getCart } from "../../core/_requests";

export const CartContext = React.createContext<CartModel[] | null>(null);

export interface CartModel {
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

export const CartProductsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartModel[]>([]);

    useEffect(() => {
        console.log('fetching products on cart context')
        const fetchProducts = async () => {
            const products = await getCart();
            setCart(products);
            console.log('The shop items from Cartcontext are', products)
        };

        fetchProducts();
    }, []);

    return (
        <CartContext.Provider value= { cart } >
        { children }
        </ CartContext.Provider>
    );
  };