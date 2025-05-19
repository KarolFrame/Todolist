import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Card = ({ title, date, description, id, index }) => {
  return (
    <>
      <Draggable draggableId={id.toString()} index={index}>
        {(provided) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <div className="card bg-task rounded-3 p-2 border border-secondary border-opacity-50 mb-2">
              <div className="d-flex justify-content-between">
                <h6 className="text-light m-0">{title}</h6>
                <p className=" fs-6 m-0 text-secondary-emphasis">{date}</p>
              </div>
              <p className="text-secondary mt-2">{description}</p>
            </div>
          </div>
        )}
      </Draggable>
    </>
  );
};

export default Card;
