import React from "react";
import { useState } from "react";
import "../../styles/List.css";
import "../../styles/index.css";

const ListCreatorWidget = ({ _setNewElementList }) => {
  const [listName, setListName] = useState("");
  return (
    <>
      <div className="list m-3 bg-card p-3 rounded-3">
        <input
          className="mb-2 rounded-2"
          type="text"
          placeholder="Introduce name list..."
          value={listName}
          onChange={(e) => {
            setListName(e.target.value);
          }}
        ></input>
        <button
          className="interactive bg-plus-button btn-mine rounded-2 text-light p-1"
          onClick={() => {
            _setNewElementList(listName);
          }}
        >
          Create New List
        </button>
      </div>
    </>
  );
};

export default ListCreatorWidget;
