import { useState } from "react";
import Timer from "./Components/Timer";
import "./styles.css";

export default function App() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div className="App">
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "HIDE TIMER" : "SHOW TIMER"}
      </button>
    </div>
  );
}
