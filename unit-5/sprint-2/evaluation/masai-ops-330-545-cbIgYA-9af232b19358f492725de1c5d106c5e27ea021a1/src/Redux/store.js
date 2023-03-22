import { reducer as AppReducer } from "./AppReducer/reducer";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
// import thunk from "./AppReducer"
import { legacy_createStore ,compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
// NOTE: use this store variable to create a store.
const composeEnhancers=window.
__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;

const store = legacy_createStore(AppReducer,
  composeEnhancers(applyMiddleware(thunk)));


export { store };


// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
