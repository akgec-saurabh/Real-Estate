import React, { useState } from "react";
import "./navbar.scss";
import logo from "../../assets/logo.svg";
import Button from "../Button/Button";
import down from "../../assets/down.svg";
import menuRounded from "../../assets/menu-rounded.svg";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="logoContainer">
        <img className="logo" src={logo} alt="Logo" />
        <h1>Estatery</h1>
      </div>
      <div
        onClick={() => {
          setMenuOpen(!isMenuOpen);
        }}
        className="menu-icon"
      >
        <img src={menuRounded} alt="" />
      </div>
      <div
        onClick={() => {
          setMenuOpen(false);
        }}
        className={`nav ${isMenuOpen ? "" : "hideMenu"}`}
      >
        <ul className="menu">
          <li>Rent</li>
          <li>Buy</li>
          <li>Sell</li>
          <li>
            Manage Property
            {/* <ExpandMore /> */}
            <img className="icon" src={down} alt="down" />
          </li>
          <li>
            Resources
            {/* <ExpandMore /> */}
            <img className="icon" src={down} alt="down" />
          </li>
        </ul>
        <div className="buttons">
          <Button fill={false} value="Login" />
          <Button fill={true} value="Sign up" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
