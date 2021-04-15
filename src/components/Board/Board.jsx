import React from "react";
import styles from "./Board.module.css";
import EmptySquare from "./EmptySquare";

const Board = () => {
  const renderSquare = (i) => {
    let x = i % 8;
    let y = Math.floor(i / 8);
    let black = (x + y) % 2 === 1;

    return <EmptySquare key={i} black={black} />;
  };

  let squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i));
  }
  return <div className={styles.board}>{squares}</div>;
};

export default Board;
