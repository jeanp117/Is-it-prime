import React, { useEffect, useState } from "react";
import { SquareButton } from "../App";
import { playAudio, randomNumbersBetween, isPrime } from "../functions";


export const GameScreen: React.FC<{ record: number; onGameOver: any }> = ({
    record,
    onGameOver,
  }) => {
    const [number, setNumber] = useState(2);
    const [score, setScore] = useState(0);
    const [remainingSeconds, setRemainingSeconds] = useState(10);
    const [level, setLevel] = useState(1);
    const [lifes,setLifes]=useState(3)
  
    useEffect(() => {
      const interval = setInterval(() => {
        setRemainingSeconds((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }, []);
  
    useEffect(() => {
      if(lifes==0)onGameOver(score)
      }, [lifes]);

    useEffect(() => {
      if (remainingSeconds <= 5) playAudio("./audio/time.mp3");
      if (remainingSeconds <= 0) onGameOver(score);
    }, [remainingSeconds]);
  
    const newNumber = () => {
      return randomNumbersBetween(25 * (level - 1), 25 * level);
    };
  
    const responseHandler = (prime: boolean) => {
      if (isPrime(number) === prime) {
        setScore((prev) => prev + 1);
        if ((score + 1) % (10 + level) === 0) setLevel((prev) => prev + 1);
        setNumber(newNumber());
        setRemainingSeconds((prev) => prev + 2);
      } else {
        playAudio("./audio/time.mp3")
        setLifes(prev=>prev-1)
      }
    };
  
    return (
      <>
        <h1
          className={
            `${remainingSeconds <= 5 ? "pulse " : ""}` + "countdown shadow"
          }
        >
           {remainingSeconds}
        </h1>
        <h1 className="score shadow">Lvl. {level}</h1>
        <h1 className="score shadow">{score} points</h1>
  
        {lifes &&  (
          <h1 className={`score shadow ${lifes===1?'pulse':''} `} style={{color:'red'}}>{new Array(lifes).fill('♥ ')}</h1>
        )}

        {score >0 && score > record && (
          <h1 className="score shadow pulse record">New Record!</h1>
        )}
        <h1 className="number shadow">{number}</h1>
        <h2 className="subtitle shadow">Is it prime?</h2>
        <div className="buttonContainer">
          <SquareButton color="#EB5757" onClick={() => responseHandler(false)}>
            X
          </SquareButton>
          <SquareButton color="#6FCF97" onClick={() => responseHandler(true)}>
            ✓
          </SquareButton>
        </div>
      </>
    );
  };