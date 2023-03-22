import { useState, useRef } from "react";
export default function Timer() {
  const [Time, setTime] = useState(0);
  const [Min, setMin] = useState(4);
  const timerRef = useRef(null);
  const MinRef = useRef(null);
  const onstart = () => {
    if (timerRef.current !== null) return;
    timerRef.current = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    if (MinRef.current !== null) return;
    MinRef.current = setInterval(() => {
      setMin((prev) => prev - 1);
    }, 60000);
  };
  const onpause = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    clearInterval(MinRef.current);
    MinRef.current = null;
  };
  const onreset = () => {
    onpause();
    setTime(60);
    setMin(4);
  };
  if (Time === 0) {
    setTime(60);
  }
  if (Min === 0) {
    onreset();
  }
  return (
    <div>
      <h1>Google Timer</h1>
      <h1>
        {Min} M {Time} Sec
      </h1>
      <button onClick={onstart}>Start</button>
      <button onClick={onpause}>Pause</button>
      <button onClick={onreset}>reset</button>
    </div>
  );
}