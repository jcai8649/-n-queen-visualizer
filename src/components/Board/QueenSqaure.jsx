import React from "react";
import styles from "./Board.module.css";

const QueenSqaure = ({ black, queenId }) => {
  let fill = black ? styles.black : styles.white;
  return (
    <div className={styles.square + " " + fill}>
      <div className={styles.queen}>
        ♕<small className={styles.small}>{queenId + 1}</small>
      </div>
    </div>
  );
};

export default QueenSqaure;
