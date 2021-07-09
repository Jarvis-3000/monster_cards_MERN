import * as actionTypes from "./actionTypes"
import axios from "axios"
import config from "../../config"

export const editName=(payload)=>{
    return (dispatch)=>{
        //editing execution...
        return dispatch({type:actionTypes.EDIT_NAME,payload})
    }
}

export const addMonsters=()=>{
    return async function(dispatch){
        dispatch({type:actionTypes.FETCH_MONSTERS_REQUEST})

        console.log(config.fetchUri)
        //fetching execution...
        try{
            const monsters = await axios.get(`${config.fetchUri}/monsters/getmonsters`)
            dispatch({type:actionTypes.FETCH_MONSTERS_SUCCESS, payload:monsters.data.monsters})
            await localStorage.setItem("monstersAPI",JSON.stringify(monsters.data.monsters))
        }
        catch(err){
            dispatch({type:actionTypes.FETCH_MONSTERS_FAILED, payload:err })
        }   
        
    }
}

export const getPersistedData=(payload)=>{
    console.log("part 1.5")
    return{
        type:actionTypes.GET_PERSISTED_DATA,
        payload
    }
}

// https://monster-cards-mern-backend.herokuapp.com/monsters/getmonsters"