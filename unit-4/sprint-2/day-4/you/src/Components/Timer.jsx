import { useEffect, useState } from "react";

function Timer() {
  const [val, setVal] = useState(10);

  useEffect(() => {
    // mount phase
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
      // whatever you want to do in unmount phase; you'll write it here and it'll be taken
      // care of by react.useEffect
      clearInterval(intervalId);
      console.log("cleanup is called");
    };
    return cleanup;
  }, []);

  // 5,4,3,2,1
  return (
    <>
      <h1>Countdown Timer : {val}</h1>
    </>
  );
}

export default Timer;

/* 
() => {
      setVal(val - 1);
    }

    once during mount

    1. yes
    2. no
*/

/* 

*/
