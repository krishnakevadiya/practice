import { TypeFlags } from "typescript";
import * as types from "./actionTypes"
// NOTE: DO NOT MODIFY the intial state structure in this file.
const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};

const reducer = (oldstate = initialState,action) => {
  const{type,payload}=action;
  switch(type){
    case types.LOGIN_REQUEST:
    return{...oldstate,isLoading:true}
    case types.LOGIN_SUCCESS:
    return{...oldstate,isLoading:false,Login:payload}
    case types.LOGIN_FAILURE:
    return{...oldstate,isLoading:false,isError:true}
     default:
    return oldstate;
  }
};

export { reducer };
