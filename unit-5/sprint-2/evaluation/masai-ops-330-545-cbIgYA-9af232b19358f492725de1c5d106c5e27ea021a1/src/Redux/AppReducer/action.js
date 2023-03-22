//Write the ActionCreator functions here
import axios from "axios"
import * as types from "./actionType"
const getShoesDataRequest=()=>{
    return{
        type:types.GET_SHOES_DATA_REQUEST
    }
}
const getShoesDataSuccess=(payload)=>{
    return{
        type:types.GET_SHOES_DATA_SUCCESS,
        payload
    }
}
const getShoesDataFailure=()=>{
    return{
        type:types.GET_SHOES_DATA_FAILURE
    }
}
const getshoes=()=>dispatch=>{
    dispatch(getShoesDataRequest())
    return axios.get(`http://localhost:8080/shoes`)
    .then(res=>{
        dispatch(getShoesDataSuccess(res.data))

    }).catch(e=>{
       dispatch(getShoesDataFailure)
    })

    
}
export {getshoes};
