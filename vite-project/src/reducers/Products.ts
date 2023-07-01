import { produce } from "immer";
import { PRODUCTS_LOADED, PRODUCTS_LOADING } from "../actions/Product";
import Products from "../models/Product"
import { AnyAction } from "@reduxjs/toolkit";




export type state = {
    products: Products[];
    loading: boolean;
}


export const initialState:state = {
    products: [],
    loading: false,
}


 const ProductReducer = (state=initialState , action: AnyAction) =>{

    switch(action.type){

        case PRODUCTS_LOADED:
            return produce(state , (draft) =>{

                draft.products = action.payload ;
            });
            
          case PRODUCTS_LOADING:
                return produce(state , (draft) => {

                    draft.loading = true;
                });
                
           default : 
                return state;     
    }
    
}

export default ProductReducer;