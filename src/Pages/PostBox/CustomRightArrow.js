import React from "react";

const CustomRightArrow = ({ onClick }) => {
  return <i className="custom-right-arrow" onClick={() => onClick()} />;
};

export default CustomRightArrow;
