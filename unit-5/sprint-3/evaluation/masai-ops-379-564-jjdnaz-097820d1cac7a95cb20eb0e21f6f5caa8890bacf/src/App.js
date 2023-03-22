import { useState } from "react";
import "./App.css";
import Input from "./Components/Input";
import UserCard from "./Components/UserCard";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  const [value, setvalue] = useState("")
  //import the useDark mode hook here
  const onchage=(e)=>{
    setvalue(e.target.value);
  }
const [isDarkMode,toggleDarkMode]=useDarkMode();
  return (
    // add the dark-mode class name along with App depending on the boolean value of isDarkMode
    <div data-testid="app-component" className={isDarkMode===true?"dark-mode":"App"} >
      {/* to toggle the darkMode value of the application */}
      {/* Default value: Dark.  */}
      <button className="theme-button" onClick={toggleDarkMode}>{isDarkMode===true?"Dark":"Light"}</button>

      {/* use the UserCard component here */}
      <UserCard name="krishna" description="discription for user 1" title="Softwere Developer" imageURL="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=1400&q=60" />
      <br />
      {/* use the Input component here */}
      <Input onchage={onchage} value={value}/>
      <div data-testid="input-value">Input value is {value}</div>
    </div>
  );
}

export default App;

/*
imageURL for testing;
1. https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=1400&q=60
2. https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60
*/
