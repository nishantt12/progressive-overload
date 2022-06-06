import { SET_PRODUCTS, FETCH_PRODUCTS } from "./action.types"


export const fetchProducts = () =>{
    console.log("action fetchProducts")
    return {type: FETCH_PRODUCTS}
}

export const setProducts = (products = null) => {
    if (products)
        return {
            type: SET_PRODUCTS,
            payload: products
        }

}