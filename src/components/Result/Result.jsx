import React from "react";
import styles from "./Result.module.css";

const Result = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Result</h2>
      <div className={styles.resultContainer}></div>
    </div>
  );
};

export default Result;
