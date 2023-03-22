import { forwardRef } from "react";

const Block = ({ handleForward, handleBackward }, ref) => {
  const handleKeys = (e) => {
    if (e.keyCode === 8) {
      handleBackward(e);
    } else {
      handleForward(e);
    }
  };
  return <input ref={ref} onKeyUp={handleKeys} type="text" maxLength={4} />;
};
export default forwardRef(Block);
