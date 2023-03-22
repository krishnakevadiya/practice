import React from "react";
import { handleAddActionObj, handleReduceActionObj } from "../Redux/action";
import {store} from "../Redux/store"
const CounterButtons = () => {
  let {dispatch}=store
  const handleadd=()=>{
    dispatch(handleAddActionObj(3))

  }
  const handlereduce=()=>{
   dispatch(handleReduceActionObj(2))
  }
  return (
    <div data-testid="counterButtons">
      <button data-testid="addButton" onClick={handleadd} >ADD</button>
      <button data-testid="reduceButton" onClick={handlereduce} >REDUCE</button>
    </div>
  );
};

export default CounterButtons;
