import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Pookie please",
  "Think Again!",
  "Last Chance",
  "Surely not?",
  "You might regret this!",
  "Give it another thought!",
  "Don't do this to me",
  "Are you absolutely certain?",
  "This could be a mistake!",
  "Have a heart?",
  "Don't be so cold!",
  "I'm gonna cry...",
  "Change of heart?",
  "Wouldn't you recosider?",
  "Is that your final decision?",
  "You're breaking my heart ;(",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  let yesButtonSize = 20 
  yesButtonSize = noCount * 15 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
          />
          <div className="text">Yay!!!!</div>
        </>
      ) : (
        <>
          <img
            alt="bear with hearts"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />

          <div>
            <h1 >Will you be my valentine?</h1></div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize, backgroundColor:"green",  borderRadius:"5px", padding:"5px 10px", margin:"10px"}}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton" style={{backgroundColor:"red",borderRadius:"5px", padding:"5px 10px"}}>
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
