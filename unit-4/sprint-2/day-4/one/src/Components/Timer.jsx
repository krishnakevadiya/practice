import { useEffect, useState } from "react";

function Timer() {
  const [val, setVal] = useState(10);

  useEffect(() => {
    let intervalId;
    intervalId = setInterval(() => {
      console.log("callback inside setInterval", Date.now());
      setVal((prevVal) => {
        if (prevVal === 1) {
          clearInterval(intervalId);
        }
        return prevVal - 1;
      });
    }, 1000);

    const cleanup = () => {
      clearInterval(intervalId);
      console.log("cleanup is called");
    };
    return cleanup;
  }, []);

  return (
    <>
      <h1>Countdown Timer : {val}</h1>
    </>
  );
}

export default Timer;
