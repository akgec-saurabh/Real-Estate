import React, { useState } from "react";
import "./input.scss";
import up from "../../assets/up-arrow.png";
import down from "../../assets/down.svg";

const Input = (props) => {
  const [selected, setSelected] = useState(props.data[0]);

  const [hide, setHide] = useState(true);

  const onSelectHandler = (e) => {
    setSelected(e.target.getAttribute("value"));
    setHide(true);
  };

  const onMouseEnterHandler = () => {
    console.log("visible");
    setHide(false);
  };

  const onMouseLeaveHandler = () => {
    console.log("not visible");
    setHide(true);
  };

  return (
    <div
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      className="input"
    >
      <div className="inputContainer">
        <div style={{ width: `${props.width}` }} className="name">
          {selected}
        </div>
        <div className="arrow">
          <img className="icon" src={down} alt="" />
        </div>
      </div>

      <ul className={`options ${hide ? "hide" : ""}`}>
        {props.data.map((item, i) => {
          return (
            <li key={i} value={item} onClick={onSelectHandler}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Input;
