import React from "react";
import styles from "./ControlPanel.module.css";

const ControlPanel = () => {
  return (
    <div className={styles.container}>
      ControlPanel
      <form>
        <input type="text" name="boardsize" list="sizenumber" />
        <datalist id="sizenumber">
          <option value="1" />
          <option value="2" />
          <option value="3" />
          <option value="4" />
          <option value="5" />
          <option value="6" />
          <option value="7" />
          <option value="8" />
          <option value="9" />
        </datalist>
        <button>Visualize!</button>
      </form>
    </div>
  );
};

export default ControlPanel;
