import React from "react";

const Card = ({ title, date, description }) => {
  return (
    <>
      <div claName="row">
        <div className="col">
          {" "}
          <h5>{title}</h5>
        </div>
        <div className="col">
          {" "}
          <h5>{date}</h5>
        </div>
      </div>
      <div claName="row">
        <div className="col">
          {" "}
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
