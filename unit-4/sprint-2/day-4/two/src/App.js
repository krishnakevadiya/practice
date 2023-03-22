import { useState } from "react";
import Timer from "./Components/Timer";
import "./styles.css";

export default function App() {
  // const [showTimer, setShowTimer] = useState(true);

  return (
    <div className="App">
      {/* {showTimer && <Timer />} */}
      <Timer />
      {/* <button>
        {showTimer}
      </button> */}
    </div>
  );
}
