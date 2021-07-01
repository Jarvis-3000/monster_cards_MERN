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