//create action creator functions here, using the action types from actionTypes.js;

import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actionTypes"

export const getRequest = () => {
    return {type:GET_PRODUCTS_REQUEST}
}
export const getSuccess = (payload) => {
    return {type:GET_PRODUCTS_SUCCESS,payload}
}
export const getFailure = () => {
    return {type:GET_PRODUCTS_FAILURE}
}
