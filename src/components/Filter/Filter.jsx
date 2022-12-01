import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./filter.scss";

const Filter = (props) => {
  const onSearch = () => {
    props.onSearch();
  };

  return (
    <div className="filter">
      <div className="location box">
        <div className="center">
          <h4>Location</h4>
          <Input
            width="10rem"
            data={[
              "Washington DC, USA",
              "Los Angeles, USA",
              "New York, USA",
              "Seattle, USA",
              "Las Vegas, USA",
              "Boston, USA",
              "Houston, USA",
            ]}
          />
        </div>
      </div>
      <div className="date box">
        <div className="center">
          <h4>When</h4>
          <input type="text" />
        </div>
      </div>
      <div className="price box">
        <div className="center">
          <h4>Price</h4>
          <Input
            width="10rem"
            data={[
              "$500-$2,500",
              "$2,500-$5,000",
              "$7,500-$10,000",
              "$10,000-$12,500",
            ]}
          />
        </div>
      </div>
      <div className="type box">
        <div className="center">
          <h4>Property Type</h4>
          <Input
            width="8rem"
            data={[
              "All",
              "Houses",
              "Bunglows",
              "Palaces",
              "Flats",
              "Apartments",
            ]}
          />
        </div>
      </div>

      <div className="btn box">
        <Button onClick={onSearch} fill={true} value="Search" />
      </div>
    </div>
  );
};

export default Filter;
