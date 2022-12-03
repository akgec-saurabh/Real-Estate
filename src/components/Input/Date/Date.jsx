import React, { useState } from "react";
import "./date.scss";

const Date = (props) => {
  const [value, setValue] = useState("2023-12-31");

  const onChangeHandler = (e) => {
    props.onChange("date", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className="date">
      <input
        value={value}
        onChange={onChangeHandler}
        className="input-date"
        type="date"
      />
    </div>
  );
};

export default Date;
