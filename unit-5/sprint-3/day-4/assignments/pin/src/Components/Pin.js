import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import PinInput from "./PinInput";
function Pin({ length, maxLength }) {
  const [boxes, setBoxes] = useState(new Array(length).fill(""));
  const inputContainer = useRef([]);
  console.log(inputContainer);

  const handleChange = (index) => {
    inputContainer.current[index + 1].focus();
  };

  const backSpacehandler = (index) => {
    inputContainer.current[index - 1].focus();
  };
  useEffect(() => {
    // inputContainer.current[0].focus();
  }, []);
  const handlePaste = (e) => {
    let data = e.clipboardData.getData("text");
    inputContainer.current.map((input, index) => {
      input.value = data[index];
      input.blur();
    });
  };

  return (
    <div onPaste={handlePaste}>
      {boxes.map((item, index) => (
        <PinInput
          key={index}
          index={index}
          inputContainer={inputContainer}
          handleChange={handleChange}
          maxLength={maxLength}
          backSpacehandler={backSpacehandler}
          setBoxes={setBoxes}
          boxes={boxes}
        />
      ))}
      <h2>OTP is {boxes.join("")} </h2>
    </div>
  );
}
export default Pin;

Pin.prototype = {
  length: PropTypes.number.isRequired,
  maxLength: PropTypes.number
};

Pin.prototype = {
  maxLength: 1
};

