import React from "react";
import "./UserCard.css";
import PropTypes from 'prop-types'
const UserCard = ({backgroundColor,imageURL,name,title,description}) => {
  return (
    <div data-testid="usercard" className={backgroundColor} >
      <img src={imageURL} alt={name} className="round square"/>
      <div>
      <h3 className="userName">{name}</h3>
      <h2 className="userInformation userTitle">{title}</h2>
      <h4 className="userDescription">{description}</h4>
      </div>
      
    </div>
  );
};

export default UserCard;



UserCard.propTypes = {
  name: PropTypes.string.isRequired,
}
UserCard.defaultProps = {
  description:"Testing Description",
  backgroundColor:"red",  
}