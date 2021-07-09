import {combineReducers} from "redux"

//reducers
import monstersReducer from "./dataFunctions/reducer"
import userReducer from "./userFunctions/reducer"

console.log("I am in root reducer")

const rootReducer=combineReducers({
    user:userReducer,
    monsters:monstersReducer

})

export default rootReducer