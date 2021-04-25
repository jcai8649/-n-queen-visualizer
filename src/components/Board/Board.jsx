import React from "react";
import { useSelector } from "react-redux";
import styles from "./Board.module.css";
import EmptySquare from "./EmptySquare";
import QueenSqaure from "./QueenSqaure";

const Board = () => {
  const board = useSelector((state) => state.board);

  const renderSquare = (i, rowSize) => {
    let x = i % rowSize;
    let y = Math.floor(i / rowSize);
    let black = (x + y) % 2 === 1;

    // return board.currentBoard[x] === "." ? (
    return <QueenSqaure key={i} black={black} queenId={x} />;
    // ) : (
    //   <EmptySquare key={i} black={black} />
    // );
  };

  let squares = [];

  for (let i = 0; i < board.currentBoard.length ** 2; i++) {
    squares.push(renderSquare(i, board.currentBoard.length));
  }

  return (
    <div
      className={styles.board}
      style={{
        gridTemplateColumns: `repeat(${board.currentBoard.length}, 1fr)`,
      }}
    >
      {squares}
    </div>
  );
};

export default Board;
