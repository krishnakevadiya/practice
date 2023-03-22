import React, { useState } from "react";

export default function TextForm(props) {
  const [text, SetText] = useState("");
  // SetText("Enter The Text");
  const dab = (event) => {
    SetText(event.target.value);
    // console.log(text);
  };
  const Reset = (event) => {
    let newtxt = "";
    SetText(newtxt);
  };
  return (
    <>
      <div
        
        className="container"
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            type="text"
            value={text}
            onChange={dab}
            rows={10}
            
            className="form-control"
            id="mybox"
            aria-describedby="emailHelp"
          />
        </div>
        <button
         
          onClick={Reset}
        >
          Reset
        </button>
      </div>
      <div
      
      >
        <h1>Preview</h1>
        <p>{text || "Enter Text To Preview"}</p>
      </div>
    </>
  );
}
