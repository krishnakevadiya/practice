//import the action types here from the actionTypes.js to be used in the reducer function

import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actionTypes";

//Complete the reducer function here
const reducer = (state, { type, payload }) => {
    switch (type) {
        case GET_PRODUCTS_REQUEST:
            return { ...state, isLoading: true }
        case GET_PRODUCTS_SUCCESS:
            return { ...state, data: payload ,isLoading: false}
        case GET_PRODUCTS_FAILURE:
            return { ...state, isLoading: false, isError: true }
        default:
            return state;
    }
};

export { reducer };
