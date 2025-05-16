import React from "react";
import { useState } from "react";

const CardCreatorWidget = ({ _setNewCardList }) => {
  const [cardName, setCardName] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [cardDescription, setCardDescription] = useState("");
  return (
    <>
      <div className="list p-3 rounded-3">
        <input
          className="mb-2 rounded-2"
          type="text"
          placeholder="Introduce card list..."
          value={cardName}
          onChange={(e) => {
            setCardName(e.target.value);
          }}
        ></input>
        <input
          className="mb-2 rounded-2"
          type="text"
          placeholder="Introduce card list..."
          value={cardDate}
          onChange={(e) => {
            setCardDate(e.target.value);
          }}
        ></input>
        <input
          className="mb-2 rounded-2"
          type="text"
          placeholder="Introduce card list..."
          value={cardDescription}
          onChange={(e) => {
            setCardDescription(e.target.value);
          }}
        ></input>
        <button
          className="bg-plus-button btn-mine rounded-2 text-light p-1"
          onClick={() => {
            _setNewCardList(cardName, cardDate, cardDescription);
          }}
        >
          Create New Card
        </button>
      </div>
    </>
  );
};

export default CardCreatorWidget;
