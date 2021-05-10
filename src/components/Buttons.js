import React from "react";

export const GreenButton = ({ title, className, onClick }) => {
  return (
    <button onClick={onClick} className={`${className} green-button`}>
      {title}
    </button>
  );
};

export const OrangeButton = ({ title, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} green-button orange-button`}
    >
      {title}
    </button>
  );
};
