//Complete the reducer function logic inside the curly braces {}
import * as  types from "./actionTypes.js";
const reducer = (state,action) => {
    switch(action.type){
        case types.ADD:
            return{...state,count:state.count+action.payload}
        case types.REDUCE:
            return{...state,count:state.count-action.payload}
        default:
            return state;
    }
};

export { reducer };
