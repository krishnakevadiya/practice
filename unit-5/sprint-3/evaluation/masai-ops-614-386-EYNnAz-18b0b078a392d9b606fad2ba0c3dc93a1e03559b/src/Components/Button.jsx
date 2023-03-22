import React from 'react'
import PropTypes from 'prop-types';
const Button = ({   size,  colorScheme,  variant}) => {

  return(
    <div>
      <button className={`${colorScheme} ${variant} ${size}`}>Button</button>
    </div>
  ) 
}


export default Button;
Button.defaultProps = {
  colorScheme:'white',
  size:'md',

}
Button.propTypes = {
  size: PropTypes.string,
  variant:PropTypes.string,
  colorScheme:PropTypes.string,
}