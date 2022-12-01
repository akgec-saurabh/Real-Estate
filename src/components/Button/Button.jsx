import React from "react";
import "./button.scss";

const Button = (props) => {
  const onClickHandler = () => {
    props.onClick();
  };

  return (
    <button
      onClick={onClickHandler}
      className={`button ${props.fill ? `fill` : "nofill"}`}
    >
      {props.value}
    </button>
  );
};

export default Button;
