import * as actionTypes from "./actionTypes"

const INITIAL_STATE = {
    loggedIn:false,
    alertInfo:{
        msg:'',
        severity:'',
        show:false
    },
    token:''
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
        
        case actionTypes.SAVE_TOKEN:
            return{
                ...state,
                token:action.payload
            }
            
        default :
            return state
    }
} 