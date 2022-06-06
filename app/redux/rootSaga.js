import { all } from "redux-saga/effects";

import { waitForFetchProducts } from "./sagas/diet.saga";

export function* rootSaga(){
    console.log("rootSaga")
    yield all([waitForFetchProducts()]);
} 