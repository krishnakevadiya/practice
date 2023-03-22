//Write the ActionCreator functions here
import axios from "axios";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "./actionTypes";

const loginRequestAction = () => {
  return { type: LOGIN_REQUEST };
};

const loginSuccessAction = (payload) => {
  return { type: LOGIN_SUCCESS, payload };
};

const loginFailureAction = () => {
  return { type: LOGIN_FAILURE };
};

// Function currying Js

export const login = (userData) => (dispatch) => {
  dispatch(loginRequestAction())
   return axios
    .post("https://reqres.in/api/login", userData)
    .then((res) => {
      console.log(res);
      dispatch(loginSuccessAction(res.data.token));
    })
    .catch((err) => {
      dispatch(loginFailureAction());
    });
};
