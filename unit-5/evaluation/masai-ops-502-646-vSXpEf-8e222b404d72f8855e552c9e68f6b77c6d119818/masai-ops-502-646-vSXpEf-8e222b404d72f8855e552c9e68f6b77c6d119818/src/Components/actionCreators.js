//create action creator functions here, using the action types from actionTypes.js;
//create action creator functions here, using the action types from actionTypes.js;
import { GET_PRODUCTS_FAILURE,GET_PRODUCTS_REQUEST,GET_PRODUCTS_SUCCESS } from "./actionTypes";

const getrequest = (payload) =>{
    return {type:GET_PRODUCTS_REQUEST};
}
const getsuccess = (payload) =>{
    return {type:GET_PRODUCTS_SUCCESS,payload};
}
const geterror = (payload) =>{
    return {type:GET_PRODUCTS_FAILURE};
}
export {geterror,getrequest,getsuccess};
