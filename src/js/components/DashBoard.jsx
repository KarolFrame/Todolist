import ListCreatorWidget from "./ListCreatorWidget";
import NewListButton from "./NewListButton";
import React, { useState } from "react";
import ListElement from "./ListElement";

const DashBoard = () => {
  const [showCreatorWidget, setShowCreatorWidget] = useState(false);
  const [listLists, setListLists] = useState([]);

  const _setNewElementList = (newList) => {
    if (newList != "") {
      setListLists([...listLists, newList]);
      setShowCreatorWidget(false);
      return;
    }
    alert("list name empty");
  };

  const _deleteList = (key) => {
    const newArrayList = listLists.filter((_, index) => index !== key);
    setListLists(newArrayList);
  };

  return (
    <div className="bg-dashboard d-flex d-row align-items-start dashboard">
      {listLists.map((list, index) => (
        <ListElement
          key={index}
          nameList={list}
          _deleteList={_deleteList}
          id={index}
        />
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
