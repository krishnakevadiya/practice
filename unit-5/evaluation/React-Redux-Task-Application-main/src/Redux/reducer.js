// NOTE: DO NOT MODIFY the intial state structure in this file.
import { GET_TASKS_SUCCESS,GET_TASKS_FAILURE,ADD_TASK_REQUEST,ADD_TASK_SUCCESS,ADD_TASK_FAILURE,GET_TASKS_REQUEST,UPDATE_TASK_REQUEST,UPDATE_TASK_SUCCESS,UPDATE_TASK_FAILURE,DELETE_TASK_REQUEST,DELETE_TASK_SUCCESS,DELETE_TASK_FAILURE} from "./actionTypes";
const initialState = {
  tasks: [],
  isLoading: false,
  isFAILURE: false,
};

const reducer = (state = initialState,action) => {
  const {type,payload} = action;
    switch(type){
        case GET_TASKS_REQUEST:
            return {...state,isLoading:true}
        case GET_TASKS_SUCCESS:
            return {...state,isLoading:false,TASKS:payload}
        case GET_TASKS_FAILURE:
            return {...state,isLoading:false,isFAILURE:true}
        case ADD_TASK_REQUEST:
            return {...state,isLoading:true}
        case ADD_TASK_SUCCESS:
            return {...state,isLoading:false,TASKS:[...state.tasks,payload]}
        case ADD_TASK_FAILURE:
            return {...state,isLoading:false,isFAILURE:true}
        case UPDATE_TASK_REQUEST:
            return {...state,isLoading:true}
        case UPDATE_TASK_SUCCESS:
            return {...state,isLoading:false,TASKS:[...state.tasks,payload]}
        case UPDATE_TASK_FAILURE:
            return {...state,isLoading:false,isFAILURE:true}
        case DELETE_TASK_REQUEST:
            return {...state,isLoading:true}
        case DELETE_TASK_SUCCESS:
            return {...state,isLoading:false,TASKS:[...state.tasks,payload]}
        case DELETE_TASK_FAILURE:
            return {...state,isLoading:false,isFAILURE:true}
        default:
            return state;
    }
};

export { reducer };
