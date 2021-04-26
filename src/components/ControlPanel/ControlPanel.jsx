import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetResult } from "../../redux/result/result.actions";
import solveNQueen from "../../script/backtrack";
import styles from "./ControlPanel.module.css";

const ControlPanel = () => {
  const currentResult = useSelector((state) => state.result.currentResult);
  const dispatch = useDispatch();
  const [nSize, setNSize] = useState("8");

  const handleChange = (e) => {
    setNSize(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewResult(currentResult);
    solveNQueen(Number(nSize), dispatch);
  };

  const setNewResult = (result) => {
    if (result.length !== 0) dispatch(resetResult());
  };

  return (
    <div className={styles.container}>
      <span className={styles.span}>
        The n-queens puzzle is the problem of placing n queens on an n x n
        chessboard such that no two queens attack each other.{" "}
      </span>

      <span className={styles.span}>
        Given an integer n, return all distinct solutions to the n-queens
        puzzle.
      </span>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          n ={" "}
          <select id="nSize" name="nSize" onChange={handleChange}>
            <option value="8">8</option>
            <option value="7">7</option>
            <option value="6">6</option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>
        </label>
        <div className={styles.buttonContianer}>
          <button className={styles.button}>Visualize!</button>
        </div>
      </form>

      <span className={styles.span}>
        Solved with the
        <a
          href="https://www.geeksforgeeks.org/n-queen-problem-backtracking-3/"
          target="blank"
        >
          {" "}
          Backtracking Algorithm
        </a>
      </span>
    </div>
  );
};

export default ControlPanel;
