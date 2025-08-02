import React, { useState } from 'react';
import "../src/stylesheets/Tictaktoe.css";

function TicTakToe() {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);

  const checkWinner = (updatedBoard) => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (
        updatedBoard[a] &&
        updatedBoard[a] === updatedBoard[b] &&
        updatedBoard[a] === updatedBoard[c]
      ) {
        setLock(true);
        alert(`${updatedBoard[a]} wins!`);
        return true;
      }
    }
    return false;
  };

  const toggle = (num) => {
    if (lock || board[num] !== '') return;

    const newBoard = [...board];
    newBoard[num] = count % 2 === 0 ? 'X' : 'O';
    setBoard(newBoard);
    setCount(count + 1);

    checkWinner(newBoard);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setCount(0);
    setLock(false);
  };

  return (
    <>
      <div className="main">
        <h1>Tac Tak Toe</h1>
        <div className="tic-tac-toe-section">
          {[0, 3, 6].map((start) => (
            <div className="row" key={start}>
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={start + i}
                    className="box"
                    onClick={() => toggle(start + i)}
                  >
                    {board[start + i]}
                  </div>
                ))}
            </div>
          ))}
        </div>
        <button onClick={resetGame} className="reset-btn">
          Reset Game
        </button>
      </div>
    </>
  );
}

export default TicTakToe;
