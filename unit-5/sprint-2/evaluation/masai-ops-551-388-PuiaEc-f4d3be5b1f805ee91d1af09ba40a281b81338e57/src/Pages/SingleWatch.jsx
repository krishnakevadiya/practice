import React from "react";

const SingleWatch = ({watches}) => {
  return (
    <div>
      <h2>{watches.name}</h2>
      <div>
        <img src={watches.image} alt="Cover Pic" />
      </div>
      <div>
        <div>{watches.category}</div>
      </div>
    </div>
  );
};

export default SingleWatch;
