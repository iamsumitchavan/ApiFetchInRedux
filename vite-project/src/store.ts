import { combineReducers } from '@reduxjs/toolkit'
import ProductReducer from './reducers/Products'
import  { createStore} from '@reduxjs/toolkit'


const reducer = combineReducers({

    product: ProductReducer,
});


export type State = ReturnType<typeof reducer>;

const store = createStore(reducer)

export default store;