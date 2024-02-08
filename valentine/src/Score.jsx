import React, { useState } from "react";
import "./Score.css";

const highTextOptions = [
  "Better Together",
  "True love never gets old",
  "Forever type of love",
  "Some people are worth melting for",
  "Partners in Crime",
  "Your hearts speak the same language",
  "True love stories never have endings",
  "I am in you and you in me, mutual in divine love",
];

const lowTextOptions = [
  "Love must be as much a light, as it is a flame",
  "Love is a great beautifier",
  "Our souls are forever tangled",
  "Your love shines in my heart as the sun that shines upon the earth",
  "A hundred hearts would be too few to carry all my love for you",
  "To love is nothing. To be loved is something. But to love and be loved, that's everything",
  "The simple lack of her is more to me than others’ presence",
];

const initialImage =
  "https://media.tenor.com/6DKlG89MqkQAAAAj/cony-line-friends-i-love-you.gif";

function Score() {
  const [submitClick, setSubmitClick] = useState(false);
  const [imgSrc, setImgSrc] = useState(initialImage);
  const [yourName, setYourName] = useState("");
  const [partnerName, setPartnerName] = useState("");
  const [highText, setHighText] = useState(highTextOptions[0]);
  const [lowText, setLowText] = useState(lowTextOptions[0]);
  const [loveScore, setLoveScore] = useState(null);

  const handleYourName = (e) => {
    setYourName(e.target.value);
  };

  const handlePartnerName = (e) => {
    setPartnerName(e.target.value);
  };

  const handleSubmit = () => {
    let score = Math.floor(Math.random() * 100);
    if (score < 50) {
      score += 25;
    }
    setLoveScore(score);
    if (score > 80) {
      const randomIndex = Math.floor(Math.random() * highTextOptions.length);
      setHighText(highTextOptions[randomIndex]);
      setLowText(null);
    } else {
      const randomIndex = Math.floor(Math.random() * lowTextOptions.length);
      setLowText(lowTextOptions[randomIndex]);
      setHighText(null);
    }
    setImgSrc("https://media.tenor.com/E1mY2c4fTMAAAAAj/bubududu-panda.gif");
    setSubmitClick(true);
  };

  return (
    <div className="container">
      <div>
        <img src={imgSrc} alt="Love GIF" />
      </div>
      {!submitClick && (
        <div>
          <h1>Check your Love Score</h1>
          <div>
            <input
              placeholder="Your Name"
              name="Your Name"
              value={yourName}
              onChange={handleYourName}
              required
            />
            <input
              placeholder="Your Partner"
              name="Your Partner"
              value={partnerName}
              onChange={handlePartnerName}
              required
            />
          </div>
          <button disabled={!yourName || !partnerName} onClick={handleSubmit}>
            Check Love Score
          </button>
        </div>
      )}
      {submitClick && (
        <div>
          <h2 className="finalQte">Love Score</h2>
          <p
            className="finalQte"
            id="Text-score"
          >{`Your Love Score is ${loveScore}`}</p>
          <div className="finalQte">
            {highText && <p id="Text">{highText}</p>}
            {lowText && <p id="Text">{lowText}</p>}
          </div>
        </div>
      )}
    </div>
  );
}

export default Score;
