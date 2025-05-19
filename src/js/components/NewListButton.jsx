import React from "react";
import "../../styles/List.css";
import "../../styles/index.css";

const NewListButton = ({ setShowCreatorWidget }) => {
  return (
    <div className="list m-3 bg-card p-2 rounded-3">
      <button
        className="interactive bg-transparent btn-mine rounded-2 text-light p-1"
        onClick={() => {
          setShowCreatorWidget(true);
        }}
      >
        New Task List
      </button>
    </div>
  );
};

export default NewListButton;
