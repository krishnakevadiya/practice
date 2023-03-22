import React, { useEffect, useState } from "react";
const useTimeout = (delay) => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => setReady(true), delay);

    return () => clearTimeout(timer);
  }, []);
  return ready;
};

export { useTimeout };
