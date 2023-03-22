import { useState } from 'react';
import './App.css';
import Pin from './components/pin';
function App() {
  const[pinInput, setPinInput] = useState("");
  return (
    <div className="App">
      <Pin length={5}/>
      OTP is {pinInput}
    </div>
  );
}

export default App;
