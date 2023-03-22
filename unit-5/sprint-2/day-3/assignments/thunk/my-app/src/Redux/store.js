import { applyMiddleware, legacy_createStore } from "redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk";

// const customMiddleware = (store) => (next) => (action) => {
//   //action is getTodos in this scenario
//   if (typeof action === "function") {
//     // getTodos(dispatch)
//     return action(store.dispatch);
//   }
//   return next(action); //next middleware if there are any OR to the reducer function
// };

const store = legacy_createStore(reducer, applyMiddleware(thunk));

export { store };
