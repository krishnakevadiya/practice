import React from "react";
import PropTypes from 'prop-types';
const Image = ({src,width,height, alt}) => {
  
  return (
    <div>
      
      
      <img
      width={width}
      height={height}
        src={src}
        alt={alt}
      />
    </div>
  );

};

export default Image;

Image.propTypes = {
  width: PropTypes.number,
  height:PropTypes.number,
  alt:PropTypes.string.isRequired,
  src:PropTypes.string.isRequired,

}