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
        setMessage("too high");
      } else {
        setMessage("too low");
      }
    }
    setUserCount(userCount + 1);
    setAllGuessVal([...allGuessVal, userGuess]);
  };

  return (
    <div className="App">
      <h3> Find The Number Between 1 and 100</h3>
      <p>Total Round Play By User: {userCount}</p>
      <p>
        Your Guess :{" "}
        {allGuessVal?.map((item, index) => {
          return (
            <span key={index}>
              {item} {}
            </span>
          );
        })}
      </p>
      <input
        type="number"
        placeholder="enter the number"
        value={userGuess}
        onChange={play}
      />
      <button onClick={submit}>Guess</button>
      <p>you Guess:{message}</p>
    </div>
  );
};

export default App;
