import React from "react";

const Card = ({ title, date, description }) => {
  return (
    <>
      <div className="card bg-task rounded-3 p-2 border border-secondary border-opacity-25 mb-2">
        <div className="d-flex justify-content-between">
          <h6 className="text-light m-0">{title}</h6>
          <p className=" fs-6 m-0 text-secondary-emphasis">{date}</p>
        </div>
        <p className="text-secondary mt-2">{description}</p>
      </div>
    </>
  );
};

export default Card;
