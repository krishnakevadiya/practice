import { GET_PRODUCTS_FAILURE,GET_PRODUCTS_REQUEST,GET_PRODUCTS_SUCCESS } from "./actionTypes";
 const reducer = (state,action)=>{
    switch(action.type){
        case GET_PRODUCTS_REQUEST:
            return {...state,isLoading:true,isError:false}
        case GET_PRODUCTS_SUCCESS:
            return {...state,isLoading:false,data:action.payload}
        case GET_PRODUCTS_FAILURE:
            return {...state,isLoading:false,isError:true}
        default:
            return;
    }
}
export {reducer};
