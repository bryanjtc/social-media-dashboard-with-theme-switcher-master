import React, { useContext } from "react";
import styles from "./Switch.module.css";
import { ThemeContext } from "../../context/ThemeContext";

const Switch = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const onChange = () => {
    if (darkMode) {
      theme.dispatch({ type: "LIGHTMODE" });
    } else {
      theme.dispatch({ type: "DARKMODE" });
    }
  };
  return (
    <label className={styles.switch} onChange={onChange}>
      <input type="checkbox" aria-label="toggle" />
      <span
        className={`${styles.slider} ${darkMode ? `${styles.dark}` : ""}`}
      ></span>
    </label>
  );
};

export default Switch;
