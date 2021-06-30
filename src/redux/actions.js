import * as actionTypes from "./actionsTypes"

export const editName=(payload)=>{
    return{
        type:actionTypes.editName,
        payload
    }
}

export const toggleSignin=(payload)=>{
    return{
        type:actionTypes.toggleSignin,
        payload
    }
}

export const fetchDataRequest=()=>{
    return{
        type:actionTypes.fetchDataRequest
    }
}

export const fetchDataSuccess=(payload)=>{
    return{
        type:actionTypes.fetchDataSuccess,
        payload
    }
}

export const fetchDataFailed=(payload)=>{
    return{
        type:actionTypes.fetchDataFailed,
        payload
    }
}

