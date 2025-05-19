import ListCreatorWidget from "./ListCreatorWidget";
import NewListButton from "./NewListButton";
import React, { useState } from "react";
import ListElement from "./ListElement";

const DashBoard = () => {
  const [showCreatorWidget, setShowCreatorWidget] = useState(false);
  const [listLists, setListLists] = useState([]);

  const _setNewElementList = (newList) => {
    if (newList != "") {
      setListLists([...listLists, { name: newList, cards: [] }]);
      setShowCreatorWidget(false);
      return;
    }
    alert("list name empty");
  };

  const _deleteList = (key) => {
    const newArrayList = listLists.filter((_, index) => index !== key);
    setListLists(newArrayList);
  };

  const _setNewCardList = (cardName, cardDate, cardDescription, listIndex) => {
    if (cardName !== "") {
      const updatedLists = [...listLists];
      const listToUpdate = updatedLists[listIndex];

      if (!Array.isArray(listToUpdate.cards)) {
        listToUpdate.cards = [];
      }
      const updatedCards = [
        ...(listToUpdate.cards || []),
        {
          name: cardName,
          date: cardDate,
          description: cardDescription,
        },
      ];
      updatedLists[listIndex] = {
        ...listToUpdate,
        cards: updatedCards,
      };

      setListLists(updatedLists);
      return;
    }
    alert("Task title empty");
  };

  return (
    <div className="bg-dashboard d-flex d-row align-items-start dashboard">
      {listLists.map((list, index) => (
        <ListElement
          key={index}
          nameList={list.name}
          _deleteList={_deleteList}
          id={index}
          card={list.cards || []}
          _setNewCardList={_setNewCardList}
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
