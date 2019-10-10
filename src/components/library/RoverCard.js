import React from "react";

const RoverCard = props => {
  return (
    <div className="rover-card">
      <h2>Rover Name: {props.rover}</h2>
      <h3>Status: {props.status}</h3>
      <img
        className="roverImage"
        alt="Latest Photos of the Mars Rover"
        src={props.image}
      />
    </div>
  );
};

export default RoverCard;
