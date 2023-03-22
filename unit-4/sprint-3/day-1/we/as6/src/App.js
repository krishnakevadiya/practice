import "./styles.css";
import React from "react";
export default function App() {
  const [url, setUrl] = React.useState("");
  function op() {
    var Element = document.querySelector("input");
    var urla = URL.createObjectURL(Element.files[0]);
    setUrl(urla);
  }
  return (
    <div className="App">
      <input onChange={op} type="file" />
      <img src={url} alt={url} />
    </div>
  );
}