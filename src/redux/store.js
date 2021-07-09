import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"

import rootReducer from "./rootReducer"

import logger from "redux-logger"

const middlewares=[]

if(process.env.NODE_ENV==='development'){
    middlewares.push(logger)
}

const store=createStore(rootReducer, applyMiddleware(thunk, ...middlewares))

export default store