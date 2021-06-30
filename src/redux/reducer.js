import * as actionTypes from "./actionTypes"
import {editMonsters} from "./utils"

const INITIAL_STATE={
    monsters:[],
    fetchState:'',
    toggleSignin:false,
}


function Reducer(state=INITIAL_STATE, action){
    switch(action.type){

        case actionTypes.EDIT_NAME:
            return{
                ...state,
                monsters:editMonsters({...state.monsters,...action.payload})
            }

        default:
            return state
    }
}

export default Reducer