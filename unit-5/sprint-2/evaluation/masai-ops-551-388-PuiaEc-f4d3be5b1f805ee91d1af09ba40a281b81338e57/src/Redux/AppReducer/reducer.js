// NOTE: DO NOT MODIFY the intial state structure in this file.
import { GET_WATCHES_DATA_FAILURE } from "./actionType";
import { GET_WATCHES_DATA_REQUEST} from "./actionType";
import { GET_WATCHES_DATA_SUCCESS } from "./actionType";
const initialState = {
  watches: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState,{ type, payload }) => {

  switch (type) {
    case GET_WATCHES_DATA_REQUEST:
      return { ...state, isLoading: true };
    case GET_WATCHES_DATA_SUCCESS:
      return { ...state, isLoading: false, watches: payload };
    case GET_WATCHES_DATA_FAILURE:
      return { ...state, isLoading: false, isError: true };
    
    default:
      return state;
  }
};

export { reducer };
