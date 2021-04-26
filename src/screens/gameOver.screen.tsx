import React from "react";
import { Jokes, SquareButton } from "../App";

export const GameOverScreen: React.FC<{
    score: number;
    record: number;
    onPlay: any;
  }> = ({ score, record, onPlay }) => {
    return (
      <>
        <h1 className="title shadow">Game over</h1>
  
        {score === record ? (
          <h3 className="shadow score max">New record: {record} points</h3>
        ) : (
          <>
            <h3 className="shadow score max">{score} points</h3>
            <h3 className="shadow score max">Record: {record} points</h3>
          </>
        )}
  
        <Jokes />
        <div className="buttonContainer">
          <SquareButton
            color="#6FCF97"
            onClick={() => {
              onPlay();
              document.documentElement.requestFullscreen();
            }}
          >
            ▶
          </SquareButton>
        </div>
      </>
    );
  };