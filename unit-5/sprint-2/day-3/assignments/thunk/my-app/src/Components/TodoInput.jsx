import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, getTodos } from "../Redux/action";

const TodoInput = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    //first add the data using POST request
    //call the getTodos function to fetch all the data from db.json
    console.log("Inside handleAdd", getTodos);
    dispatch(addTodo(todo)).then(() => {
      //   getTodos(dispatch);
      dispatch(getTodos);
    });

    /*
    .then(r => return 'hello world').then(r => console.log(r))
     */
  };

  return (
    <div>
      <input value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={handleAdd}>Add Todo</button>
    </div>
  );
};

export default TodoInput;
