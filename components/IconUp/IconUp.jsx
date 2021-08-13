import React from "react";

const IconUp = (props) => {
  const { iconColor } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
      <path fill={iconColor} fillRule="evenodd" d="M0 4l4-4 4 4z" />
    </svg>
  );
};

export default IconUp;
