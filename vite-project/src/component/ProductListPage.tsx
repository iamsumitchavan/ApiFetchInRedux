import { FC, useEffect } from 'react'
import { ProductsLoadedAction } from '../actions/Product'
import { ProductLoadedSelector } from '../selectors/Product'
import { State } from '../store'
import {connect } from 'react-redux'
import Products from '../models/Product'
import axios from 'axios'
import ProductData from './ProductData'



export type ProductListPageProps = {
    ProductsLoaded: (products: Products[]) => void;
    Products: Products[];
}

const ProductListPage:FC<ProductListPageProps> = ({ProductsLoaded , Products}) => {

    useEffect(() => {

     axios.get("https://dummyjson.com/products").then((response) =>ProductsLoaded(response.data.products));

    },[])

  console.log(Products)

    return(
        <div className='grid grid-cols-4'>
           
            {Products &&  Products.map((p) =><ProductData key={p.id} {...p} /> )}
           
        </div>
    )
}

const MapPropsDispatchToState = {
    ProductsLoaded: ProductsLoadedAction,
}

const MapPropsToState = (state:State) => {
   return { Products: ProductLoadedSelector(state) };
};

export default connect(MapPropsToState , MapPropsDispatchToState)(ProductListPage);

