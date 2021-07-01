import * as actionTypes from "./actionTypes"
import axios from "axios"

export const editName=(payload)=>{
    return (dispatch)=>{
        //editing execution...
        return dispatch({type:actionTypes.EDIT_NAME,payload})
    }
}

export const addMonsters=()=>{
    return function(dispatch){
        dispatch({type:actionTypes.FETCH_MONSTERS_REQUEST})

        //fetching execution...
        axios.get("https://monster-cards-mern-backend.herokuapp.com/monsters/getmonsters")
        .then(monsters=>{
            // console.log(monsters.data)
            return dispatch({type:actionTypes.FETCH_MONSTERS_SUCCESS, payload:monsters.data.monsters})
        })
        .catch(err=>{
            return dispatch({type:actionTypes.FETCH_MONSTERS_FAILED, payload:err })
        })
    }
}

