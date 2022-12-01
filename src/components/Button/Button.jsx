import React from "react";
import "./button.scss";

const Button = (props) => {
  return (
    <button className={`button ${props.fill ? `fill` : "nofill"}`}>
      {props.value}
    </button>
  );
};

export default Button;
