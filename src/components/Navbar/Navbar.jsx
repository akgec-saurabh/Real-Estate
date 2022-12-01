import React from "react";
import "./navbar.scss";
import logo from "../../assets/logo.svg";
import { ExpandMore } from "@mui/icons-material";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logoContainer">
        <img className="logo" src={logo} alt="Logo" />
        <h1>Estatery</h1>
      </div>
      <div className="nav">
        <ul className="menu">
          <li>Rent</li>
          <li>Buy</li>
          <li>Sell</li>
          <li>
            Manage Property
            <ExpandMore />
          </li>
          <li>
            Resources
            <ExpandMore />
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
