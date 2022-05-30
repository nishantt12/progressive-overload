import {combineReducers} from 'redux'


import dietReducer from './reducer/diet.reducer'

const rootReducer = combineReducers({
    diets: dietReducer 
})

export default rootReducer;