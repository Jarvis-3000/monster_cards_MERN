import * as actionTypes from "./actionTypes"

export const toggleLogin = (payload) =>{
    return {
        type:actionTypes.TOGGLE_LOGIN,
        payload
    }
}

export const toggleAlert = (payload) =>{
    return {
        type:actionTypes.TOGGLE_ALERT,
        payload
    }
}

export const saveToken = (payload)=>{
    return{
        type:actionTypes.SAVE_TOKEN,
        payload
    }
}

export const getPersistedData=(payload)=>{
    console.log("part3.5")
    return{
        type:actionTypes.GET_PERSISTED_DATA,
        payload
    }
}