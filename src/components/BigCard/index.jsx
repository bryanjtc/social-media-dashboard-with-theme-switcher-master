import React, { useContext } from "react";
import "./style.css";
import { ThemeContext } from "../../ThemeContext";
import IconUp from "../IconUp";

const BigCard = (props) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const {
    username,
    numbers,
    mediumTitle,
    smallText,
    smallTextColor,
    type,
    icon,
    iconText,
    iconColor,
  } = props;
  return (
    <div>
      <div
        className={`${
          darkMode ? `big-card big-card-dark ${type}` : `big-card ${type}`
        }`}
      >
        <div className="big-card-social">
          <img className="big-card-image" alt={iconText} src={icon} />
          <p className={`big-card-username ${darkMode ? "dark" : ""}`}>
            {username}
          </p>
        </div>
        <p className={`big-card-numbers ${darkMode ? "dark" : ""}`}>
          {numbers}
        </p>
        <p className={`big-card-medium-title ${darkMode ? "dark" : ""}`}>
          {mediumTitle}
        </p>
        <div className="big-card-small-text-container">
          <IconUp iconColor={iconColor} />
          <p
            className={`big-card-small-text ${smallTextColor} ${
              darkMode ? "dark" : ""
            }`}
          >
            {smallText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
