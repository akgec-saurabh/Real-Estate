import React from "react";
import "./date.scss";

const Date = (props) => {
  const onChangeHandler = (e) => {
    props.onChange("date", e.target.value);
  };

  return (
    <div className="date">
      <input onChange={onChangeHandler} className="input-date" type="date" />
    </div>
  );
};

export default Date;
