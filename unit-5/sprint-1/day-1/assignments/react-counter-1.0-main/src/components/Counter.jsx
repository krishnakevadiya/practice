
import React, {useReducer, useState } from 'react'

function Counter() {
    // const [count, setCount] = useState(0);
    const [state,dispatch]=useReducer((state,action)=>{
      switch(action.type){
        case "ADD":
          return{...state,value:state.value+action.payload}
        case "REDUCE":
          return{...state,value:state.value-action.payload}
      }

    },{value:10})
    // const reduce=()=>{
    //     setCount(count-1)
    // } 
    // const Dubble=()=>{
    //     setCount(count*2)
    // } 
    // const add=()=>{
    //     setCount(count+1)
    // } 
    return (
        <>
        
     
        
      
       <h1>Count: {state.value}</h1> 
        <button onClick={()=>dispatch({type:"REDUCE"})}>Dubble</button>
        <button onClick={reduce}>-</button>
        <button onClick={add}>+</button>
      </>
    );
  }
export default Counter