import React from "react";
import { Jokes, SquareButton } from "../App";

export const StartScreen: React.FC<{ score: number; onPlay: any }> = ({
  score,
  onPlay,
}) => {
  return (
    <>
      <h1 className="title shadow">Is it prime?</h1>

      <Jokes />
      {score > 0 && <h3 className="shadow score max">record: {score} </h3>}

      <div className="buttonContainer" id="play">
        <SquareButton
        
          color="#6FCF97"
          onClick={() => {
            onPlay();
            document.documentElement.requestFullscreen();
          }}
        >
          ▶&#xFE0E;
        </SquareButton>
      </div>
      <div className="buttonContainer">
        <a
          href="https://github.com/jeanp117/Is-it-prime"
          className="shadow"
          style={{ color: "white" }}
        >
          GitHub
        </a>
        <a
          href="https://www.buymeacoffee.com/jeanpr117"
          className="shadow"
          style={{ color: "white" }}
        >
          Buy me a coffee
        </a>
      </div>
    </>
  );
};
