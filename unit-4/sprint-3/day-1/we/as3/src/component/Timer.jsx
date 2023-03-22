import { useState, useRef } from "react";
export default function Timer() {
  const [Time, setTime] = useState(60);
  const timerRef = useRef(null);
  const onstart = () => {
    if (timerRef.current !== null) return;
    timerRef.current = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
  };
  const onpause = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };
  const onreset = () => {
    onpause();
    setTime(60);
  };
  if (Time === 0) {
    onreset();
  }
  return (
    <div>
      <h1>{Time}</h1>
      <button onClick={onstart}>Start</button>
      <button onClick={onpause}>Pause</button>
      <button onClick={onreset}>reset</button>
    </div>
  );
}