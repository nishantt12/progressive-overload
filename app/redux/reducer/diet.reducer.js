import { SET_PRODUCTS } from "../actions/action.types";



const dietReducer = (state, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return [...action.payload];
        default:
            return state;
    }

}

export default dietReducer