import * as actionTypes from "./actionTypes"
import axios from "axios"

export const editName=(payload)=>{
    return (dispatch)=>{
        console.log("editing...")
        //editing execution...
        return dispatch({type:actionTypes.EDIT_NAME, payload})
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
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(users=>{
            console.log(users.data)
            return dispatch({type:actionTypes.FETCH_USERS_SUCCESS, payload:users.data})
        })
        .catch(err=>{
            return dispatch({type:actionTypes.FETCH_USERS_FAILED, payload:err })
        })
    }
}

