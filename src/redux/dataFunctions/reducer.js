import * as actionTypes from "./actionTypes"
import {editMonsters} from "./utils"

const INITIAL_STATE={
    monsters:[],
    fetchState:'',
    toggleSignin:false,
}


function monstersReducer(state=INITIAL_STATE, action){
    switch(action.type){

        case actionTypes.FETCH_MONSTERS_REQUEST:
            return {
                ...state,
                fetchState:'fetching...'
            }

        case actionTypes.FETCH_MONSTERS_SUCCESS:
            return{
                ...state,
                monsters:action.payload,
                fetchState:'success'
            }
                   
        case actionTypes.FETCH_MONSTERS_FAILED:
            return {
                ...state,
                fetchState:'failed',
                monsters:[]
            }

        case actionTypes.EDIT_NAME:
            return{
                ...state,
                monsters:editMonsters({...state,...action.payload})
            }

        default:
            return state
    }
}

export default monstersReducer