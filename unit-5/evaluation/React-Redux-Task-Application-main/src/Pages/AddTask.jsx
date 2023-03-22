import React from "react";
import axios from 'axios';
import { useDispatch } from "react-redux/es/exports";
import {postTodoError,postTodoRequest,postTodoSuccess} from "../Redux/action"
import {useState} from 'react';
import { Link } from "react-router-dom";
const AddTask = () => {
  const dispatch = useDispatch();
  const addTODO = (title) =>{
    if(title){
        const payload= {
            title,
            status:false
        }
        dispatch(postTodoRequest());
        axios.post('http://localhost:8080/tasks',payload).then(r=>{
            dispatch(postTodoSuccess(r.data));
        }).catch((e)=>{
            dispatch(postTodoError());
        })
    }
  }
  const [text, settext] = useState("")
  const addtodo = ()=>{
      addTODO(text);
      settext("");
  }
  return (
    <div>
      <form>
        <input value={text} onChange={(e)=>settext(e.target.value)} data-testid="add-task-input-box" placeholder="add task here" />
        <button onClick={addtodo} data-testid="add-task-button"><Link to="/">Add task</Link></button>
      </form>
    </div>
  );
};

export default AddTask;
