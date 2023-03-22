import { number } from "prop-types";
import React from "react";

const PinInput = ({
  index,
  handleChange,
  maxLength,
  inputContainer,
  backSpacehandler,
  setBoxes,
  boxes
}) => {
  const handleKeyUp = (e) => {
    if (
      index < inputContainer.current.length - 1 &&
      e.target.value.length > 0
    ) {
      handleChange(index);
    }
    if (index > 0 && e.keyCode === 8 && !e.target.value.length) {
      backSpacehandler(index);
    }
    let newBoxes = [...boxes];
    newBoxes[index] = e.target.value;
    setBoxes(newBoxes);
    /*
    If the user has clicked on the backspace button, 
    then perform the backspace logic
    else 
    perform the onChange default logic
    */
  };
  return (
    <input
      ref={(n) => (inputContainer.current[index] = n)}
      key={index}
      maxLength={+maxLength}
      onKeyUp={handleKeyUp}
    />
  );
};

export default PinInput;

PinInput.defaultProps = {
  maxLength: 1
};
