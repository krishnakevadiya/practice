import "./styles.css";
import React from "react";
export default function App() {
  const inputRef = React.useRef();
  function focus() {
    inputRef.current.focus();
  }
  return (
    <div className="App">
      <input ref={inputRef} placeholder="input " />
      <button style={{ display: "block", margin: "auto" }} onClick={focus}>
        Focus
      </button>
    </div>
  );
}