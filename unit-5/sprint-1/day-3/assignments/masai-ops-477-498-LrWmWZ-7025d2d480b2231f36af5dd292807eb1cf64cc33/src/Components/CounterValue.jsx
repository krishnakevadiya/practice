import React, { useState } from "react";
import { store } from "../Redux/store";

const CounterValue = () => {
  let{getState,Subscribe}=store
  const[forceful,setforceful]=useState(0)
  Subscribe=(()=>{
    setforceful(prev=>prev+1)
  })



  const counter =getState().counter //get the counter value from the Redux store
  return <div data-testid="counterValue">{counter}</div>;
};

export default CounterValue;
