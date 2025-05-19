import ListCreatorWidget from "./ListCreatorWidget";
import NewListButton from "./NewListButton";
import React, { useState } from "react";
import ListElement from "./ListElement";
import { v4 as uuidv4 } from "uuid";
import { DragDropContext } from "react-beautiful-dnd";

const DashBoard = () => {
  const [showCreatorWidget, setShowCreatorWidget] = useState(false);
  const [listLists, setListLists] = useState([]);

  const _setNewElementList = (newList) => {
    if (newList != "") {
      setListLists([...listLists, { id: uuidv4(), name: newList, cards: [] }]);
      setShowCreatorWidget(false);
      return;
    }
    alert("list name empty");
  };

  const _deleteList = (key) => {
    const newArrayList = listLists.filter((_, index) => index !== key);
    setListLists(newArrayList);
  };

  const _setNewCardList = (cardName, cardDate, cardDescription, listId) => {
    if (cardName !== "") {
      console.log("listId recibido en _setNewCardList:", listId);
      const updatedLists = [...listLists];
      const listIndex = updatedLists.findIndex((list) => list.id === listId);
      console.log("listIndex encontrado:", listIndex);

      if (listIndex === -1) {
        console.error("List ID not found:", listId);
        return;
      }

      const listToUpdate = updatedLists[listIndex];

      if (!Array.isArray(listToUpdate.cards)) {
        listToUpdate.cards = [];
      }

      const updatedCards = [
        ...listToUpdate.cards,
        {
          id: uuidv4(),
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

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    setListLists((prevLists) => {
      const sourceListIndex = prevLists.findIndex(
        (list) => list.id === source.droppableId
      );
      const destListIndex = prevLists.findIndex(
        (list) => list.id === destination.droppableId
      );
      const sourceCardIndex = source.index;
      const destCardIndex = destination.index;

      if (sourceListIndex === -1 || destListIndex === -1) {
        console.error("List id not found");
        return prevLists;
      }

      if (
        sourceListIndex === destListIndex &&
        sourceCardIndex === destCardIndex
      ) {
        return prevLists;
      }

      const updatedLists = [...prevLists];
      const sourceCards = [...updatedLists[sourceListIndex].cards];
      const destCards =
        sourceListIndex === destListIndex
          ? sourceCards
          : [...updatedLists[destListIndex].cards];

      const [movedCard] = sourceCards.splice(sourceCardIndex, 1);
      destCards.splice(destCardIndex, 0, movedCard);

      updatedLists[sourceListIndex] = {
        ...updatedLists[sourceListIndex],
        cards: sourceCards,
      };
      updatedLists[destListIndex] = {
        ...updatedLists[destListIndex],
        cards: destCards,
      };

      return updatedLists;
    });
  };

  return (
    <>
      <div className="bg-dashboard d-flex d-row align-items-start dashboard">
        <DragDropContext onDragEnd={onDragEnd}>
          {listLists.map((list, index) => (
            <ListElement
              key={list.id}
              nameList={list.name}
              _deleteList={_deleteList}
              id={list.id}
              card={list.cards || []}
              _setNewCardList={_setNewCardList}
              index={index}
            />
          ))}
          {showCreatorWidget && (
            <ListCreatorWidget _setNewElementList={_setNewElementList} />
          )}
          {!showCreatorWidget && (
            <NewListButton setShowCreatorWidget={setShowCreatorWidget} />
          )}
        </DragDropContext>
      </div>
    </>
  );
};

export default DashBoard;
