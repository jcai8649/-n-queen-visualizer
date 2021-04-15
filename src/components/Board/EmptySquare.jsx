import React from "react";
import styles from "./Board.module.css";

const EmptySquare = ({ black }) => {
  let fill = black ? styles.black : styles.white;
  return <div className={styles.square + " " + fill}></div>;
};

export default EmptySquare;
