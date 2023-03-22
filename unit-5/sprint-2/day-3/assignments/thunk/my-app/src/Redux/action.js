import axios from "axios";
import * as types from "./actionTypes";

const getTodosRequest = () => {
  return {
    type: types.GET_TODOS_REQUEST,
  };
};

const getTodosSuccess = (payload) => {
  return {
    type: types.GET_TODOS_SUCCESS,
    payload,
  };
};

const getTodosError = () => {
  return {
    type: types.GET_TODOS_ERROR,
  };
};

const addTodoRequest = () => {
  return {
    type: types.ADD_TODO_REQUEST,
  };
};

const addTodoSuccess = (payload) => {
  return {
    type: types.ADD_TODO_SUCCESS,
    payload,
  };
};

const addTodoError = () => {
  return {
    type: types.ADD_TODO_ERROR,
  };
};

const getTodos = (dispatch) => {
  dispatch(getTodosRequest());
  return axios
    .get("http://localhost:8080/todos")
    .then((r) => dispatch(getTodosSuccess(r.data)))
    .catch((e) => {
      dispatch(getTodosError());
    });
};

// const addTodo = (todo) => (dispatch) => {
//   if (todo) {
//     const payload = {
//       title: todo,
//       status: false,
//     };
//     dispatch(addTodoRequest());
//     return axios
//       .post("http://localhost:8080/todos", payload)
//       .then((r) => {
//         console.log("Response from post request", r);
//         dispatch(addTodoSuccess());
//         return "Masai School";
//       })
//       .catch((e) => {
//         dispatch(addTodoError());
//       });
//   }
// };

function addTodo(todo) {
  return function (dispatch) {
    if (todo) {
      const payload = {
        title: todo,
        status: false,
      };
      dispatch(addTodoRequest());
      return axios
        .post("http://localhost:8080/todos", payload)
        .then((r) => {
          console.log("Response from post request", r);
          dispatch(addTodoSuccess());
          return "Masai School";
        })
        .catch((e) => {
          dispatch(addTodoError());
        });
    }
  };
}

export {
  getTodosError,
  getTodosRequest,
  getTodosSuccess,
  addTodoError,
  addTodoRequest,
  addTodoSuccess,
  getTodos,
  addTodo,
};
