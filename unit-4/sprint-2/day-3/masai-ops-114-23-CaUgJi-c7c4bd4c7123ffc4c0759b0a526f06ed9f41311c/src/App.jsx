import React,{useState} from "react";

function App() {
  const[btn,setbtn]=useState("Show Non-Fiction Books")
  const btnchange=()=>{
    if(btn==="Show Non-Fiction Books"){
      setbtn("Show Fictional Books");
    }else{
      setbtn("Show Non-Fiction Books")
    }
   
  }
  return (
    <div>
      <h1>Mini Book Store</h1>

      <button onClick={btnchange} data-testid="toggle-btn">{btn}</button>

      <div data-testid="conditional-container">
        {/* Render either Fiction or NonFiction Based on the Condition */}
      </div>
    </div>
  );
}

export default App;
