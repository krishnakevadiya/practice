// NOTE: DO NOT MODIFY the intial state structure in this file.
import * as types from "./actionType"
const initialState = {
  shoes: [],
  isLoading: false,
  isError: false,
};

const reducer = (oldstate = initialState,action) => {
  const {type,payload}=action;
  switch(type){
    case types.GET_SHOES_DATA_REQUEST:
      return{...oldstate,isLoading: true}
    case types.GET_SHOES_DATA_SUCCESS:
      return{...oldstate,isLoading: false ,shoes:payload}
    case types.GET_SHOES_DATA_FAILURE:
      return{...oldstate,isLoading: false,isError:true}
    default:
       return oldstate;
};
}
export { reducer };
