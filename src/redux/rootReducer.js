import {combineReducers} from "redux"
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"

//reducers
import monstersReducer from "./dataFunctions/reducer"
import userReducer from "./userFunctions/reducer"


const persistConfig={
    key:'root',
    storage,
    // blackList:['user'],       //only user will not be persisted (stored)
    whitelist:['userReducer', 'monstersReducer']       // only navigation will be persisted
}

const rootReducer=combineReducers({
    user:userReducer,
    monsters:monstersReducer

})

export default persistReducer(persistConfig,rootReducer)