import React, { useState, useEffect } from "react";
import "../../styles/List.css";
import "../../styles/index.css";
import Card from "./Card";
import CardCreatorWidget from "./CardCreatorWidget";

const ListElement = ({ nameList }) => {
  const [name, setName] = useState({ name: "", date: "", desciption: "" });
  const [cardsList, setcardsList] = useState([]);
  const [showCreatorWidget, setShowCreatorWidget] = useState(false);

  const _setNewCardList = (cardName, cardDate, cardDescription) => {
    setcardsList([
      ...cardsList,
      { name: cardName, date: cardDate, desciption: cardDescription },
    ]);
    console.log(cardsList);
    setShowCreatorWidget(false);
  };

  useEffect(() => {
    setName(nameList);
  }, [nameList]);

  return (
    <>
      <div className="interactive list m-3 bg-card p-2 rounded-3">
        <input
          className="bg-transparent btn-mine rounded-2 text-light p-1"
          type="text"
          placeholder={name}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        {cardsList.map((card, index) => {
          return (
            <Card
              key={index}
              title={card.name}
              date={card.date}
              description={card.desciption}
            />
          );
        })}
        {!showCreatorWidget && (
          <button
            className="bg-plus-button btn-mine rounded-2 text-light p-1"
            onClick={() => {
              setShowCreatorWidget(true);
            }}
          >
            New Card <i className="fa-solid fa-plus"></i>
          </button>
        )}
        {showCreatorWidget && (
          <CardCreatorWidget _setNewCardList={_setNewCardList} />
        )}
      </div>
    </>
  );
};

export default ListElement;
