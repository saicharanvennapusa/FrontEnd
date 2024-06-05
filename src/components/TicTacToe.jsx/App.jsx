import React from "react";
import { useState } from "react";
import "./App.css";
import useTicTacToe from "./use-tic-tac-toe";

const App = () => {
   const { board, handleClick, resetGame, getStatusMessage } = useTicTacToe();

   return (
      <div className="game">
         <div className="status">
            {getStatusMessage()}
            <button className="reset-button" onClick={resetGame}>
               Reset Game
            </button>
         </div>

         <div className="board">
            {board.map((item, index) => (
               <button key={index} className="cell" onClick={() => handleClick(index)} disabled={board[index] !== null}>
                  {board[index]}
               </button>
            ))}
         </div>
      </div>
   );
};

export default App;
