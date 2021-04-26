import React from "react";
import { useSelector } from "react-redux";
import styles from "./Result.module.css";

const Result = () => {
  const currentResult = useSelector((state) => state.result.currentResult);
  console.log(currentResult);
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Result</h2>
      <h4 className={styles.h4}>
        Total Distinct Solutions:{" "}
        {currentResult === 0 ? "0" : `${currentResult.length}`}{" "}
      </h4>
      <div className={styles.resultContainer}></div>
    </div>
  );
};

export default Result;
