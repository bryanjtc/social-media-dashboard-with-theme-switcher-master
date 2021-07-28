import React, { useContext } from "react";
import "./style.css";
import { ThemeContext } from "../../ThemeContext";
import IconUp from "../IconUp";

const SmallCard = (props) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const {
    title,
    numbers,
    smallText,
    smallTextColor,
    icon,
    iconText,
    iconColor,
  } = props;
  return (
    <div className={`small-card ${darkMode ? "dark" : ""}`}>
      <div className="small-card-left">
        <p className={`small-card-title ${darkMode ? "dark" : ""}`}>{title}</p>
        <p className={`small-card-numbers ${darkMode ? "dark" : ""}`}>
          {numbers}
        </p>
      </div>
      <div className="small-card-right">
        <img className="small-card-image" alt={iconText} src={icon} />
        <div className="small-card-small-text-container">
          <IconUp iconColor={iconColor} />
          <p className={`small-card-small-text ${smallTextColor}`}>
            {smallText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
