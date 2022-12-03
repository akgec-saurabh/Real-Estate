import React, { useState } from "react";
import "./property.scss";
import bed from "../../assets/bed.svg";
import bath from "../../assets/bath.svg";
import size from "../../assets/size.svg";
import heart from "../../assets/heart.svg";
import like from "../../assets/like.svg";
import spark from "../../assets/spark.png";

const Property = (props) => {
  const [liked, setLiked] = useState(true);

  console.log(props.popular);
  return (
    <div className={`property ${props.opacity ? "hide" : ""}`}>
      <div className={`popular ${props.popular ? "" : "hidePopular"}`}>
        <img className="icon" src={spark} alt="" />
        <span>POPULAR</span>
      </div>
      <div className={`cut ${props.popular ? "" : "hidePopular"}`}></div>
      <div className="img">
        <img
          // src="https://is1-2.housingcdn.com/afe3f526/1264f1fbf64cb1d23dfaa3beb33ff0ef/v2/medium.jpg.webp"
          src={props.url}
          alt=""
        />
      </div>
      <div className="details">
        <div
          onClick={() => {
            setLiked(!liked);
          }}
          className="heart"
        >
          <img src={liked ? heart : like} alt="like" />
        </div>
        <div className="price">
          ${props.price} <span>/month</span>
        </div>
        <h2>{props.name}</h2>
        <p className="address">
          {props.address} ,{props.location} <br />
          <span className="span">
            (Availability from <em>{props.dateString})</em>
          </span>
        </p>
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
