import React from "react";
import "./property.scss";
import bed from "../../assets/bed.png";
import bath from "../../assets/bath.png";
import size from "../../assets/size.png";
import heart from "../../assets/heart.png";
import spark from "../../assets/spark.png";

const Property = (props) => {
  return (
    <div className="property">
      <div className="popular">
        <img className="icon" src={spark} alt="" />
        <span>POPULAR</span>
      </div>
      <div className="cut"></div>
      <div className="img">
        <img
          src="https://is1-2.housingcdn.com/afe3f526/1264f1fbf64cb1d23dfaa3beb33ff0ef/v2/medium.jpg.webp"
          alt=""
        />
      </div>
      <div className="details">
        <div className="heart">
          <img src={heart} alt="like" />
        </div>
        <div className="price">
          ${props.price} <span>/month</span>
        </div>
        <h2>{props.name}</h2>
        <p className="address">{props.address}</p>
        <div className="break"></div>
        <div className="room-details">
          <div className="beds icon-container">
            <img className="icon" src={bed} alt="bed icon" />
            <span>{props.beds} Beds</span>
          </div>
          <div className="bathrooms icon-container">
            <img className="icon" src={bath} alt="bath icon" />
            <span>{props.bathrooms} Bathrooms</span>
          </div>
          <div className="size icon-container">
            <img className="icon" src={size} alt="size icon" />
            <span>
              {props.length}x{props.width}m<sup>2</sup>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
