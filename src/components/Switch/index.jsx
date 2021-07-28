import React, { useContext } from "react";
import "./style.css";
import { ThemeContext } from "../../ThemeContext";

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
    <label className="switch" onChange={onChange}>
      <input type="checkbox" />
      <span className={`slider ${darkMode ? "dark" : ""}`}></span>
    </label>
  );
};

export default Switch;
