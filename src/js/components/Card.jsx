import React from "react";

const Card = ({ title, date, description }) => {
  return (
    <>
      <div className="card bg-task rounded-3 p-2 border border-secondary border-opacity-50">
        <div className="d-flex justify-content-between">
          <h6 className="text-light m-0">{title}</h6>
          <p className="text-secondary fs-6 m-0">{date}</p>
        </div>
        <p className="text-secondary-emphasis mt-2">{description}</p>
      </div>
    </>
  );
};

export default Card;
