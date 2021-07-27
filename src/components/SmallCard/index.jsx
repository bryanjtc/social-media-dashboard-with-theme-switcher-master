import React from "react";
import "./style.css";

const SmallCard = (props) => {
  const { title, numbers, smallText, smallTextColor, icon, iconText } = props;
  return (
    <div className="small-card">
      <div className="small-card-left">
        <p className="small-card-title">{title}</p>
        <p className="small-card-numbers">{numbers}</p>
      </div>
      <div className="small-card-right">
        <img className="small-card-image" alt={iconText} src={icon} />
        <p className={`small-card-small-text ${smallTextColor}`}>{smallText}</p>
      </div>
    </div>
  );
};

export default SmallCard;
