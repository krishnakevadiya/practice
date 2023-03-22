//Write the ActionCreator functions here
//Write the ActionCreator functions here
import axios from "axios"
import * as types from "./actionType"
const LoginRequest=()=>{
    return{
        type:types.LOGIN_REQUEST
    }
}
const LoginSuccess=(payload)=>{
    return{
        type:types.LOGIN_SUCCESS,
        payload
    }
}
const LoginFailure=()=>{
    return{
        type:types.LOGIN_FAILURE
    }
}
const getLogin=()=>dispatch=>{
    dispatch(LoginRequest())
    return axios.get(`http://localhost:8080/Login`)
    .then(res=>{
        dispatch(LoginSuccess(res.data))

    }).catch(e=>{
       dispatch(LoginFailure)
    })

    
}
export {getLogin};
