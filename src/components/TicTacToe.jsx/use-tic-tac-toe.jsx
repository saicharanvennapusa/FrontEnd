import { useState } from "react";

const useTicTacToe = () => {
   const initialBoard = () => Array(9).fill(null);
   const [board, setBoard] = useState(initialBoard());
   const [isXNext, setIsXNext] = useState(true);

   const WINNING_PATTERNS = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [3, 4, 5],
      [2, 5, 8],
      [2, 4, 6],
      [6, 7, 8],
      [1, 4, 7],
   ];

   const calculateWinner = (currentBoard) => {
      for (let i = 0; i < WINNING_PATTERNS.length; i++) {
         const [a, b, c] = WINNING_PATTERNS[i];
         if (currentBoard[a] !== null && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
            return currentBoard[a];
         }
      }

      return null;
   };

   const handleClick = (index) => {
      const winner = calculateWinner(board);

      if (winner || board[index] !== null) {
         return;
      }
      const newBoard = [...board];
      newBoard[index] = isXNext ? "X" : "O";
      setBoard(newBoard);
      setIsXNext(!isXNext);
   };

   const getStatusMessage = () => {
      const winner = calculateWinner(board);
      if (winner) {
         return `Player: ${winner} wins!`;
      }
      if (board.every((item) => item !== null)) {
         return `It's a tie!`;
      }
      return `Player: ${isXNext ? "X" : "O"} s turn`;
   };

   const resetGame = () => {
      setBoard(initialBoard());
      setIsXNext(true);
   };

   return {
      board,
      isXNext,
      calculateWinner,
      handleClick,
      getStatusMessage,
      resetGame,
   };
};

export default useTicTacToe;
