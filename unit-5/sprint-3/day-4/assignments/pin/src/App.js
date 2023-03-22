import "./styles.css";
import Pin from "./Components/Pin";

export default function App() {
  return (
    <div className="App">
      <Pin length={5} maxLength={1} />
    </div>
  );
}
