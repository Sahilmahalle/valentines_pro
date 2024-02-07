import { useState } from "react";
import "./Ask.css";

const buttonTexts = [
  "No",
  "Please yaar",
  "Think Again",
  "Are you sure ?",
  "I am a good boy",
  "I will be very angry",
  "I will be very very angry",
  "Ok fine I don't care",
  "I don't back off so easily ",
];

const initialImage =
  "https://media.tenor.com/NhawLnedTFEAAAAj/love-milk-and-mocha-bear.gif"; // Use your image URL

function Ask() {
  const [noButtonText, setNoButtonText] = useState(buttonTexts[0]);
  const [yesClicked, setYesClicked] = useState(false);
  const [noClicked, setNoClicked] = useState(false);
  const [imageSrc, setImageSrc] = useState(initialImage);

  const handleNoButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * buttonTexts.length);
    setNoButtonText(buttonTexts[randomIndex]);
    setNoClicked(true);
  };

  const handleYesButtonClick = () => {
    setYesClicked(true);
    setImageSrc("https://media.tenor.com/7vQ4wX6QVewAAAAj/kiss.gif"); // Use your image URL
  };

  return (
    <div className="container">
      <div>
        {/* Replace the src attribute with the URL of your image */}
        <img src={imageSrc} alt="Valentine's Day" />
      </div>
      <h1>Will you be my valentine</h1>
      {yesClicked ? (
        <h2>Thank you for your response!</h2>
      ) : (
        <>
          <div className="container-button">
            <button
              className={`no-button ${noClicked ? "increase-size" : ""}`}
              onClick={handleNoButtonClick}
            >
              {noButtonText}
            </button>
            <button className="yes-button" onClick={handleYesButtonClick}>
              Yes
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Ask;
