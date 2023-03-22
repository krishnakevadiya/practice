import "./styles.css";
import React from "react";
export default function App() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    document.title = "This is counter=" + count;
  });
  return (
    <div className="App">
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        counter
      </button>
    </div>
  );
}
