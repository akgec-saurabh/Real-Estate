import React from "react";
import "./property.scss";
import bed from "../../assets/bed.png";
import bath from "../../assets/bath.png";
import size from "../../assets/size.png";
import heart from "../../assets/heart.png";
import spark from "../../assets/spark.png";

const Property = (prop) => {
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
          $2,095 <span>/month</span>
        </div>
        <h2>Palm Harbor</h2>
        <p className="address">2699 Green Valley, Highland Lake, FL</p>
        <div className="break"></div>
        <div className="room-details">
          <div className="beds icon-container">
            <img className="icon" src={bed} alt="bed icon" />
            <span>3 Beds</span>
          </div>
          <div className="bathrooms icon-container">
            <img className="icon" src={bath} alt="bath icon" />
            <span>2 Bathrooms</span>
          </div>
          <div className="size icon-container">
            <img className="icon" src={size} alt="size icon" />
            <span>
              5x7m<sup>2</sup>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
