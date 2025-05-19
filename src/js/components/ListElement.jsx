import React, { useState, useEffect } from "react";
import "../../styles/List.css";
import "../../styles/index.css";
import Card from "./Card";
import CardCreatorWidget from "./CardCreatorWidget";

const ListElement = ({ nameList, _deleteList, id, card, _setNewCardList }) => {
  const [name, setName] = useState({ name: "", date: "", desciption: "" });
  const [showCreatorWidget, setShowCreatorWidget] = useState(false);

  useEffect(() => {
    setName(nameList);
  }, [nameList]);

  return (
    <>
      <div className="list m-3 bg-card p-2 rounded-3">
        <div className="d-flex justify-content-between">
          <input
            className="interactive bg-transparent btn-mine rounded-2 text-light p-1 mb-2"
            type="text"
            placeholder={name}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
          <button
            className="interactive delete-button bg-transparent btn-mine text-secondary"
            onClick={() => {
              _deleteList(id);
            }}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>

        {card.map((card, index) => {
          return (
            <Card
              key={index}
              title={card.name}
              date={card.date}
              description={card.description}
            />
          );
        })}
        {!showCreatorWidget && (
          <button
            className="interactive bg-plus-button btn-mine rounded-2 text-light p-1 mt-3"
            onClick={() => {
              setShowCreatorWidget(true);
            }}
          >
            New Card <i className="fa-solid fa-plus"></i>
          </button>
        )}
        {showCreatorWidget && (
          <CardCreatorWidget
            _setNewCardList={(cardName, cardDate, cardDescription) => {
              _setNewCardList(cardName, cardDate, cardDescription, id);
              setShowCreatorWidget(false);
            }}
          />
        )}
      </div>
    </>
  );
};

export default ListElement;
