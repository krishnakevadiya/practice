import {legacy_createStore,applyMiddleware, compose,combineReducers} from 'redux';
import {reducer as AppReducer} from './AppData/reducer'
import {reducer as AuthReducer} from './AuthData/reducer'
import thunk from 'redux-thunk'
const rootReducer = combineReducers({AuthReducer,AppReducer})
const composeEnhancers = window.__REDUX_DEVTOOLS__EXTENSION_COMPOSE__|| compose;

const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export {store}