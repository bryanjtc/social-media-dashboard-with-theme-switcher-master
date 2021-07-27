import React from "react";
import "./style.css";

const BigCard = (props) => {
  const {
    username,
    numbers,
    mediumTitle,
    smallText,
    smallTextColor,
    type,
    icon,
    iconText,
  } = props;
  return (
    <div>
      <div className={`big-card ${type}`}>
        <div className="big-card-social">
          <img className="big-card-image" alt={iconText} src={icon} />
          <p className="big-card-username">{username}</p>
        </div>
        <p className="big-card-numbers">{numbers}</p>
        <p className="big-card-medium-title">{mediumTitle}</p>
        <p className={`big-card-small-text ${smallTextColor}`}>{smallText}</p>
      </div>
    </div>
  );
};

export default BigCard;
