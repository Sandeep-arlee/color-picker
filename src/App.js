import React, { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#ffffff");
  const [cards, setCards] = useState([]);

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const generateRandomColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };
  const addCard = () => {
    const newCard = {
      id: Date.now(), 
      color: color
    };
    setCards([...cards, newCard]);
  };

  const deleteCard = (idToDelete) => {
    setCards(cards.filter((card) => card.id !== idToDelete));
  };

  return (
    <div className="App">
      <h1 className="title">Color Picker</h1>

      <div className="color-container">
        <input
          type="color"
          value={color}
          onChange={handleColorChange}
          className="color-input"
        />
        <button onClick={generateRandomColor} className="random-button">
           Random Color
        </button>
        <button onClick={addCard} className="add-button">
          + Add Color
        </button>
      </div>

      <div className="cards-container">
        {cards.map((card) => (
          <div key={card.id} className="card-wrapper">
            <div className="color-card" style={{ backgroundColor: card.color }}></div>
            <div className="color-info">
              <p className="card-color-code">{card.color}</p>
              <button className="delete-button" onClick={() => deleteCard(card.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="color-code">Selected Color: {color}</p>
    </div>
  );
}

export default App;
