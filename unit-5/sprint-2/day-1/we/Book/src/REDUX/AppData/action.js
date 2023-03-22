import * as types from './actionType';
 import axios from 'axios'
const getBookRequest =()=>{
    return {
        type: types.GET_BOOKS_REQUEST
    }
}
const getBooksSuccess =(payload)=>{
    return {
        type: types.GET_BOOKS_SUCCESS,
        payload
    }
}
const getBooksError =()=>{
    return {
        type: types.GET_BOOKS_ERROR
    }
}

function getBooks (params){
    return function (dispatch) {
        dispatch(getBookRequest())
        return axios.get('http://localhost:8080/books',params)
        .then((r)=>{
            dispatch(getBooksSuccess(r.data));
        })
        .catch((err)=>{
            dispatch(getBooksError)
        });
    }
}
export {getBooks}