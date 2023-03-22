//use this variable to create the redux store.
//the initial data of the redux store should be {counter: 10}
import {reducer} from "./reducer"

import { legacy_createStore } from "redux";
// initialstate={
//     counter:10,
// }

const store = legacy_createStore(reducer,{counter: 10});

export { store };
