import { createStore, applyMiddleware } from "redux";
import {persistStore } from "redux-persist"
import thunk from "redux-thunk"

import rootReducer from "./rootReducer"

import logger from "redux-logger"

const middlewares=[]

if(process.env.NODE_ENV==='development'){
    middlewares.push(logger)
}

export const store=createStore(rootReducer,applyMiddleware(thunk, ...middlewares))

export const persistor = persistStore(store)

export default store