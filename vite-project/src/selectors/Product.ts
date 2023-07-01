import { State } from "../store";
import { createSelector } from 'reselect'


export const ProductSelector = (state:State) => state.product;


export const ProductLoadedSelector = createSelector(ProductSelector , (ProductState) => ProductState.products);


export const ProductLoadingSelector = createSelector(ProductSelector , (ProductState) => ProductState.loading);