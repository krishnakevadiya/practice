//get tasks

//add task

//update task

//delete task
import { GET_TASKS_SUCCESS,GET_TASKS_FAILURE,ADD_TASK_REQUEST,ADD_TASK_SUCCESS,ADD_TASK_FAILURE,GET_TASKS_REQUEST,UPDATE_TASK_REQUEST,UPDATE_TASK_SUCCESS,UPDATE_TASK_FAILURE,DELETE_TASK_REQUEST,DELETE_TASK_SUCCESS,DELETE_TASK_FAILURE} from "./actionTypes";
const getTodoRequest = () =>{
    return {type:GET_TASKS_REQUEST};
}
const getTodoSuccess = (payload) =>{
    return {type:GET_TASKS_SUCCESS,payload};
}
const getTodoError = () =>{
    return {type:GET_TASKS_FAILURE};
}
const postTodoRequest = () =>{
    return {type:ADD_TASK_REQUEST};
}
const postTodoSuccess = (payload) =>{
    return {type:ADD_TASK_SUCCESS,payload};
}
const postTodoError = () =>{
    return {type:ADD_TASK_FAILURE};
}
const updateTodoRequest = () =>{
    return {type:UPDATE_TASK_REQUEST};
}
const updateTodoSuccess = (payload) =>{
    return {type:UPDATE_TASK_SUCCESS,payload};
}
const updateTodoError = () =>{
    return {type:UPDATE_TASK_FAILURE};
}
const delTodoRequest = () =>{
    return {type:DELETE_TASK_REQUEST};
}
const delTodoSuccess = (payload) =>{
    return {type:DELETE_TASK_SUCCESS,payload};
}
const delTodoError = () =>{
    return {type:DELETE_TASK_FAILURE};
}

export {getTodoRequest,getTodoError,getTodoSuccess,postTodoError,postTodoRequest,postTodoSuccess,updateTodoError,updateTodoRequest,updateTodoSuccess,delTodoError,delTodoSuccess,delTodoRequest};