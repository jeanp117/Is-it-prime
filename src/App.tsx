import React, { useEffect, useState } from "react";
import "./App.scss";
import { playAudio, randomNumbersBetween } from "./functions";
import { jokes } from "./jokes.json";
import { GameScreen } from "./screens/game.screen";
import { GameOverScreen } from "./screens/gameOver.screen";
import { StartScreen } from "./screens/start.screen";


function App() {


 

  const [started, setStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [lastScore, setLastScore] = useState(0);
  const [record, setRecord] = useState(
    parseInt(JSON.parse(localStorage.getItem("record") + "")) || 0
  );

  const playHandler = () => {
    setStarted(true);
  };

  const recordHandler = (score: number) => {
    setRecord(score);
    localStorage.setItem("record", JSON.stringify(score));
  };
  const gameOverHandler = (score: number) => {
    setGameOver(true);
    setStarted(false);
    setLastScore(score);

    if (score > record) {
      recordHandler(score);
      playAudio("./audio/max score.mp3");
    } else {
      playAudio("./audio/game over.mp3");
    }
  };
  return (
    <div className=" gameContainer" style={{ textAlign: "center" }}>
      {started ? (
        <GameScreen record={record} onGameOver={gameOverHandler} />
      ) : gameOver ? (
        <GameOverScreen
          score={lastScore}
          record={record}
          onPlay={playHandler}
        />
      ) : (
        <StartScreen score={lastScore} onPlay={playHandler} />
      )}
    </div>
  );
}

export const Jokes = () => (
  <>
    {" "}
    <p className="subtitle shadow" style={{ maxWidth: "100vh" }}>
      {" "}
      {jokes[randomNumbersBetween(0, jokes.length)]}
    </p>
    <a
      href="https://github.com/jeanp117/Is-it-prime"
      className="shadow"
      style={{ color: "white" }}
    >
      commit your math joke
    </a>
  </>
);





export  const SquareButton: React.FC<{
  onClick: any;
  color: string;
  children: any;
}> = ({ onClick, color, children }) => {
  return (
    <button
      className="squareButton"
      onClick={onClick}
      style={{ background: color }}
    >
      {children}
    </button>
  );
};

export default App;
