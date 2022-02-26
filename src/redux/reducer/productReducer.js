import { GET_PRODUCTS, GET_PRODUCTS_ID } from '../types/index';

const initialState = {
    products: [],
    prodFilt: []
}

export default function productReducer(state= initialState, action) {
    switch(action.type){
        case GET_PRODUCTS:
            return{
                ...state,
                products: action.payload
            }
        case GET_PRODUCTS_ID:
            return{
                ...state,
                prodFilt: action.payload
            }
        default:
            return state;
    }
}