import React from "react";

const CounterButtons = () => {
  let {dispatch,subscribe}=store;
  const[focefullRender,setFourcefullRender]=useState(90)
  console.log(store);
  subscribe(()=>{
    setFourcefullRender(prev=>prev+1)
  })

  const heandleadd=()=>{
    dispatch(addAction(1));

  }
  const handleReducer=()=>{
    dispatch(reducerAction(1));

  }

  return (
    <div data-testid="counterButtons">
      <button data-testid="addButton" onClick={heandleadd}>ADD</button>
      <button data-testid="reduceButton" onClick={handleReducer} >REDUCE</button>
    </div>
  );
};

export default CounterButtons;
