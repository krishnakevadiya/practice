import React,{useState} from 'react';
function App() {
 const [Player, setPlayer] = useState("Player 1");
 const [Counter, setCounter] = useState(0);
 const [Winner, setWinner] = useState("Still To Be Decided");
 const add1 =()=>{
  setCounter(Counter+1);
  if(Player=="Player 1"){
    setPlayer("Player 2");
  }else{
    setPlayer("Player 1");
  }
  if(Counter==9){
    if(Player=="Player 1"){
      setPlayer("Player 2");
    }else{
      setPlayer("Player 1");
    }
    setWinner(Player);
  }
 }
 const add2 =()=>{
  setCounter(Counter+2);
  if(Player=="Player 1"){
    setPlayer("Player 2");
  }else{
    setPlayer("Player 1");
  }
  if(Counter==8){
    if(Player=="Player 1"){
      setPlayer("Player 2");
    }else{
      setPlayer("Player 1");
    }
    setWinner(Player);
  }
 }
 const reset =()=>{
  setCounter(0);
  setPlayer("Player 1");
 }

  return (
    <div className="App">

      {/* Display Player Turn here */}
      <span data-testid="turn-container">{Player}</span>


      {/* Buttons to increment the counter */}
      <div data-testid="buttons-container">
        <button disabled={Counter==10?true:false} onClick={add1} data-testid="add-one-btn" >+1</button>
        <button disabled={Counter>=9?true:false} onClick={add2} data-testid="add-two-btn" >+2</button>
      </div>

      {/* Display the counter here */}
      <h1 data-testid="counter">{Counter}</h1>

      {/* Display the winner here */}
      <span data-testid="winner-container">Winner: {Winner}</span>

      {/* Reset the Game with this button */}
      <button onClick={reset} data-testid="reset-btn">Reset Game</button>
    </div>
  );
}

export default App;
