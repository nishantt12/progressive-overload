import { takeEvery, call, put } from "redux-saga/effects";
import { FETCH_PRODUCTS } from "../actions/action.types";
import { setProducts } from "../actions/diet.action";
import productsService from "../services/products.service";



export function* fetchProducts(){
    console.log("fetchProducts saga")
    try{
        const products = yield call(productsService.getAllProducts)
        // console.log("products: "+products)

        yield put(setProducts(products));
    }
    catch(e){
        console.log(e)
    }    
}


export function* waitForFetchProducts(){
    console.log("waitForFetchProducts saga")
    yield takeEvery(FETCH_PRODUCTS, fetchProducts);
}