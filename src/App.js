import React, { useState } from "react";
import "./App.css";

const App = () => {
  const answar = Math.floor(Math.random() * 101);

  const [userGuess, setUserGuess] = useState("");
  const [userCount, setUserCount] = useState(0);
  const [allGuessVal, setAllGuessVal] = useState([]);
  const [randomNumber, setRandomNumber] = useState(answar);

  const [message, setMessage] = useState();

  const play = (event) => {
    setUserGuess(event.target.value);
  };

  const submit = () => {
    if (userGuess < 1 || userGuess > 100) {
      alert("Please Between 1 and 100");
    } else {
      if (userGuess == randomNumber) {
        setMessage("Conguradulation");
      } else if (userGuess > randomNumber) {
        setMessage("Too High");
      } else {
        setMessage("Too Low");
      }
    }
    setUserCount(userCount + 1);
    setAllGuessVal([...allGuessVal, userGuess]);
  };

  return (
    <div className="App">
      <div className="container">
        <h3 className="header"> Find The Number Between 1 and 100</h3>
        <p>
          Total Round Play By User: 
          <span className="num-play"> {userCount}</span>
        </p>
        <p>
          Your Guess: 
          {allGuessVal?.map((item, index) => {
            return (
              <span className="number-Guess" key={index}>
               {item} {}
              </span>
            );
          })}
        </p>
        <div>
          <input
            type="number"
            placeholder="enter the number"
            className="input"
            value={userGuess}
            onChange={play}
          />
        </div>

        <button className="btn" onClick={submit}>
          Guess
        </button>
        <p>
          Answared: <span className="message">{message}</span>
        </p>
      </div>
    </div>
  );
};

export default App;
