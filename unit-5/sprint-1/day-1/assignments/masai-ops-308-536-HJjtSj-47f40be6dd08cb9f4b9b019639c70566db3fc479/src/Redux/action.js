import * as types from './actionType';

import axios from 'axios';
const getTodosRequest=()=>{
    return {
        type:types.GET_REQUEST,

    }
}
const getTodoSuccess=(payload)=>{
    return {
        type:types.GET_SUCCESS,
        payload

    }
}
const getTodosFailure=()=>{
    return {
        type:types.GET_FAILURE,

    }
}

export const getTodos=(dispatch)=>{
    dispatch(getTodosRequest())
    return axios
    .get(` http://localhost:8080/todos`)
    .then((res)=>{
     dispatch(getTodoSuccess(res.data))
    })
    .catch((error)=>{
        dispatch(getTodosFailure())
    })
}
export const statusTodo=({id,status})=>(dispatch)=>{
    dispatch(getTodoSuccess())
    return axios
    .get(` http://localhost:8080/todos/${id}`,{status:status})
    .then((res)=>{
     dispatch(getTodoSuccess(res.data))
    })
    .catch((error)=>{
        dispatch(getTodosFailure())
    })
}
export const deleteTodo=({id})=>(dispatch)=>{
    dispatch({type:"delete_request"})
    return axios
    .get(` http://localhost:8080/todos/${id}`)
    .then((res)=>{
     dispatch({type:"delete_Success"})
    })
    .catch((error)=>{
        dispatch({type:"delete_error"})
    })
}
