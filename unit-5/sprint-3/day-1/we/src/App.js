import "./styles.css";
import React, { useEffect, useState } from "react";
import { useTimeout } from "./CustomHook/useTimeout";
export default function App() {
  const ready = useTimeout(5000);
  return (
    <div className="App">
      <h1>useTimeout Custom hook</h1>
      <h2>{ready ? "Ready" : "Not Ready"}</h2>
    </div>
  );
}
