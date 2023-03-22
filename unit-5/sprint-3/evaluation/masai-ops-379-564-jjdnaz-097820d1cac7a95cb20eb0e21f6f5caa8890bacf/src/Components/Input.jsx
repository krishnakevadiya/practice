import React from "react";
import "./Input.css";
import PropTypes from 'prop-types'
const Input = ({type,value,onchage,variant,size}) => {
  return <input className={variant==="outline"?"md":"flushed"} onChange={onchage} value={value}size={size || "md"} data-testid="inputTag" type={type}/>;
};

export default Input;
Input.propTypes = {
  type: PropTypes.string.isRequired,
  onchage: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}