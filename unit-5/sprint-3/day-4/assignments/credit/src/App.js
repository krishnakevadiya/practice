import { useState } from "react";
import CreditCard from "./Components/CreditCard";
import "./styles.css";

export default function App() {
  const [CN, setCN] = useState("");
  return (
    <div className="App">
      <CreditCard setCN={setCN}/>
      <h1>Your card Number is "{CN}"</h1>
    </div>
  );
}
