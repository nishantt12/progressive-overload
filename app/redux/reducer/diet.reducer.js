import { SET_PRODUCTS } from "../actions/action.types";



const dietReducer = (state = null, action) => {
    // console.log("dietReducer: action: "+action.type+"  "+action.payload)
    switch (action.type) {
        case SET_PRODUCTS:
            return [...action.payload];
        default:
            return state;
    }

}

export default dietReducer