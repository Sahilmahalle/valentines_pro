import React, { useState } from "react";
import "./App.css";

const buttonTexts = [ "No",
"Please yaar",
"Think Again",
"Are you sure ?",
"I am a good boy",
"I will be very angry",
"I will be very very angry",
"Ok fine i dont care",
"I dont back off so easily ",]; // Add your array of texts

function App() {
  const [noButtonText, setNoButtonText] = useState(buttonTexts[0]);
  const [yesClicked, setYesClicked] = useState(false);
  const [noClicked, setNoClicked] = useState(false);

  const handleNoButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * buttonTexts.length);
    setNoButtonText(buttonTexts[randomIndex]);
    setNoClicked(true);
  };

  const handleYesButtonClick = () => {
    setYesClicked(true);
  };

  return (
    <div className="container">
      <div>
        {/* Replace the src attribute with the URL of your image */}
        <img src="./assets/img1.gif" alt="Valentine's Day" />
      </div>
      <h1>Will you be my valentine</h1>
      {yesClicked ? (
        <p>Thank you for your response!</p>
      ) : (
        <>
          <button
            className={`no-button ${noClicked ? "increase-size" : ""}`}
            onClick={handleNoButtonClick}
          >
            {noButtonText}
          </button>
          <button className="yes-button" onClick={handleYesButtonClick}>
            Yes
          </button>
        </>
      )}
    </div>
  );
}

export default App;