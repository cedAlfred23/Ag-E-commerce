import React, { useEffect, useState, ReactNode } from "react";
import { getProducts } from "../_requests";

export const ProductsContext = React.createContext<ProductModel[] | null>(null);

export interface ProductModel {
    "id": string,
    "created_at": Date,
    "updated_at": Date,
    "name": string,
    "description": string,
    "price": string,
    "image": string,
    "stock": number,
    "attributes": JSON,
    "category": string,
    "created_by": number,
    "linkToDetail": ''
}

export const ProductsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getProducts();
            setProducts(products);
            console.log('The shop items from getProductscontext are', products)
        };

        fetchProducts();
    }, []);

    return (
        <ProductsContext.Provider value= { products } >
        { children }
        </ ProductsContext.Provider>
    );
  };