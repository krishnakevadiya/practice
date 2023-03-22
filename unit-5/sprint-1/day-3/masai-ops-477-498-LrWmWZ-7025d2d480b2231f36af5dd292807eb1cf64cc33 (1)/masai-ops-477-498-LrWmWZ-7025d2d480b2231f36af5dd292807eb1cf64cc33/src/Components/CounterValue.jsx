import React from "react";

const CounterValue = () => {
  const counter = 0; //get the counter value from the Redux store
  
  return <div data-testid="counterValue">{counter}</div>;
};

export default CounterValue;
