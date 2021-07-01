import * as actionTypes from "./actionTypes"

const INITIAL_STATE = {
    loggedIn:false,
    alertInfo:{
        msg:'',
        severity:'',
        show:false
    }
}

export default function userReducer(state=INITIAL_STATE, action){

    switch(action.type){

        case actionTypes.TOGGLE_LOGIN:
            return {
                ...state,
                loggedIn:action.payload
            }

        case actionTypes.TOGGLE_ALERT:
            return {
                ...state,
                alertInfo:action.payload

            }
        default :
            return state
    }
} 