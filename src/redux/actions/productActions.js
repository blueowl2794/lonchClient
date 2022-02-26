import { GET_PRODUCTS, GET_PRODUCTS_ID } from '../types/index'

export const getProducts = () =>{
    return async function dispatch(dispatch){
        const reponse = await fetch('http://localhost:3000/products/all');
        const json = await reponse.json();
        dispatch({
            type: GET_PRODUCTS,
            payload: json
        })
    }
}
export const getProductsId = (id) =>{
    return async function dispatch(dispatch){
        const reponse = await fetch(`http://localhost:3000/products/${id}`);
        const json = await reponse.json();
        dispatch({
            type: GET_PRODUCTS_ID,
            payload: json
        })
    }
}