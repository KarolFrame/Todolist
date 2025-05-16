import ListCreatorWidget from "./ListCreatorWidget";
import NewListButton from "./NewListButton";
import React, { useState } from "react";
import ListElement from "./ListElement";

const DashBoard = () => {
  const [showCreatorWidget, setShowCreatorWidget] = useState(false);
  const [listLists, setListLists] = useState([]);

  const _setNewElementList = (newList) => {
    setListLists([...listLists, newList]);
    setShowCreatorWidget(false);
  };

  return (
    <div className="bg-dashboard d-flex d-row align-items-start dashboard">
      {listLists.map((list, index) => (
        <ListElement key={index} nameList={list} />
      ))}
      {showCreatorWidget && (
        <ListCreatorWidget _setNewElementList={_setNewElementList} />
      )}
      {!showCreatorWidget && (
        <NewListButton setShowCreatorWidget={setShowCreatorWidget} />
      )}
    </div>
  );
};

export default DashBoard;
