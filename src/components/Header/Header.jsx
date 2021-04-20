import React from "react";
import styles from "./Header.module.css";
import Logo from "../../assets/Iconsmind-Outline-Queen.png";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>
        <img src={Logo} className={styles.logo} alt="logo" /> N-Queens
        Visualizer
      </h1>
    </div>
  );
};

export default Header;
