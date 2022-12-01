import React from "react";

const Property = (prop) => {
  return (
    <div className="property">
      <div className="img">
        {console.log(prop.data[0].hotel_img)}
        <img src={prop.data[0].hotel_img} alt="" />
      </div>
    </div>
  );
};

export default Property;
