import * as actionTypes from "./actionTypes"
import axios from "axios"

export const editName=(payload)=>{
    return (dispatch)=>{
        //editing execution...
        return dispatch({type:actionTypes.EDIT_NAME,payload})
    }
}

export const toggleSignin=(payload)=>{
    return{
        type:actionTypes.TOGGLE_SIGNIN,
        payload
    }
}

export const addUsers=()=>{
    return function(dispatch){
        dispatch({type:actionTypes.FETCH_USERS_REQUEST})

        //fetching execution...
        axios.get("http://localhost:5000/monsters/getmonsters")
        .then(monsters=>{
            console.log(monsters.data)
            return dispatch({type:actionTypes.FETCH_USERS_SUCCESS, payload:monsters.data.monsters})
        })
        .catch(err=>{
            return dispatch({type:actionTypes.FETCH_USERS_FAILED, payload:err })
        })
    }
}

