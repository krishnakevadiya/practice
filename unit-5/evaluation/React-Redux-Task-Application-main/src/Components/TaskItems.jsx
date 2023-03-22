import React from "react";
import {delTodoError,delTodoSuccess,delTodoRequest} from '../Redux/action'
import {  useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios';
const TaskItems = ({ id ,title,status}) => {
  console.log(id);
  const dispatch = useDispatch();

  const del = () =>{
    dispatch(delTodoRequest)
    axios.delete("https://localhost:8080/tasks",id).then(r=>{
      dispatch(delTodoSuccess());
    }).catch((e)=>{
      dispatch(delTodoError());
    })
  }
  return (
    <div key={id}
      style={{
        border: "1px solid black",
        borderRadius: "5px",
        padding: "0.2rem",
        paddingBottom: "0.5rem",
        display: "flex",
        flexDirection: "column",
        maxWidth: "380px",
        margin: "auto",
        marginBottom: "1rem",
        justifyContent: "center",
      }}
      data-testid={`task-item-${id}`}
    >
      <div
        data-testid="task-title"
        style={{ fontSize: "24px", fontWeight: "600" }}
      >{title}</div>
      <div data-testid="task-status" style={{ fontSize: "18px" }}>{status}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button data-testid="edit-task"><Link to={"/edit/"+id}></Link> Edit</button>
        <button data-testid="delete-task" onClick={del}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItems;
