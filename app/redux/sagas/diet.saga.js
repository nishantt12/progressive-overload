import { takeEvery, call, put } from "redux-saga/effects";
import { FETCH_PRODUCTS } from "../actions/action.types";
import { setProducts } from "../actions/diet.action";
import productsService from "../services/products.service";



export function* fetchProducts(){
    try{
        const products = yield call(productsService.getAllProducts)

        yield put(setProducts(products));
    }
    catch(e){

    }    
}


export function* waitForFetchProducts(){
    yield takeEvery(FETCH_PRODUCTS, fetchProducts);
}