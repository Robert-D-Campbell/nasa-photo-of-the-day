import React from "react";

const PotdCard = props => {
  return (
    <div className="potd-card">
      <h2>Title: {props.title}</h2>
      <h3>Date: {props.date}</h3>
      <img className="potd" alt="Nasa Pic of the day" src={props.hdUrl} />
      <p>{props.explanation}</p>
    </div>
  );
};

export default PotdCard;
