import ListCreatorWidget from "./ListCreatorWidget";
import NewListButton from "./NewListButton";
import React, { useState } from "react";
import ListElement from "./ListElement";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";

const DashBoard = () => {
  const [showCreatorWidget, setShowCreatorWidget] = useState(false);
  const [listLists, setListLists] = useState([]);

  const onDragEnd = (res) => {
    const { destination, source, type } = res;

    if (!destination) return;

    if (type === "COLUMN") {
      const items = Array.from(listLists);
      const [moved] = items.splice(source.index, 1);
      items.splice(destination.index, 0, moved);
      setListLists(items);
    }
  };

  const _setNewElementList = (newList) => {
    if (newList != "") {
      setListLists([...listLists, { id: uuid(), name: newList, cards: [] }]);
      setShowCreatorWidget(false);
      return;
    }
    alert("list name empty");
  };

  const _deleteList = (key) => {
    const newArrayList = listLists.filter((list) => list.id !== idToDelete);
    setListLists(newArrayList);
  };

  const _setNewCardList = (cardName, cardDate, cardDescription, listId) => {
    if (cardName !== "") {
      const updatedLists = [...listLists];
      const index = updatedLists.findIndex((list) => list.id === listId);
      if (index === -1) return;

      const listToUpdate = updatedLists[index];
      const updatedCards = [
        ...(listToUpdate.cards || []),
        { name: cardName, date: cardDate, description: cardDescription },
      ];
      updatedLists[index] = {
        ...listToUpdate,
        cards: updatedCards,
      };

      setListLists(updatedLists);
      return;
    }
    alert("Task title empty");
  };

  return (
    <>
      <div className="bg-dashboard d-flex d-row align-items-start dashboard">
        {listLists.map((list, index) => (
          <ListElement
            nameList={list.name}
            _deleteList={_deleteList}
            id={list.id}
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
    </>
  );
};

export default DashBoard;
