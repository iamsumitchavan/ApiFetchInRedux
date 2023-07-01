import { ActionCreator } from ".";
import Products from "../models/Product";



export const PRODUCTS_LOADED = "PRODCUTS LOADED";
export const ProductsLoadedAction:ActionCreator<Products[]> = (products:Products[]) => ({

            type : PRODUCTS_LOADED,
            payload: products,
});


export const PRODUCTS_LOADING = "PRODUCTS LOADING";

export const ProductsLoadingAction:ActionCreator = () => ({

            type: PRODUCTS_LOADING , 
            payload: undefined,
});