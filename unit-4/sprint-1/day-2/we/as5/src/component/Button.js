import React from "react";
export default function Button({ name }) {
  const opp = () => {
    alert("You clicked Masai!");
    console.log(name);
  };
  return (
    <>
      <button onClick={opp}>{name}</button>
    </>
  );
}
