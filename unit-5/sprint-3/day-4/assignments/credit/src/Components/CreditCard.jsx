import { useRef, useState } from "react";
import Block from "./Block";

const CreditCard = ({ setCN }) => {
  const [boxes, setBoxes] = useState(new Array(4).fill(0));
  const [inputData] = useState(new Array(4).fill(""));

  const inputRef = useRef([]);
  // console.log(boxes)

  const handleForward = (e, index) => {
    inputData[index] = e.target.value;
    if (e.target.value.length > 3 && index <boxes.length-1 ) {
      inputRef.current[index + 1].focus();
      
      
    }
    setCN(inputData.join(" "));
  };
  const handleBackward = (e, index) => {
    inputData[index] = e.target.value;
    if (!e.target.value.length  && index >0 ) {
      inputRef.current[index -1].focus();
      
      
    }
    setCN(inputData.join(" "));
  };


  return (
    <div>
      {boxes.map((box, i) => {
        return (
          <Block
            key={i}
            ref={(elem) => {
              inputRef.current[i] = elem
              // console.log(elem)
             
            }}
            handleForward = {(e)=>{ handleForward(e,i)} }
            handleBackward={(e)=>{handleBackward(e,i)}}
          />
        );
      })}
    </div>
  );
};
export default CreditCard;
