import React, { useReducer } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Date from "../Input/Date/Date";
import "./filter.scss";

import { filterReducer, INITIAL_STATE } from "../../filterReducer";

const Filter = (props) => {
  const [state, dispatch] = useReducer(filterReducer, INITIAL_STATE);

  const onSearch = () => {
    props.onSearch(state);
  };

  const onChangeHandler = (name, value) => {
    console.log(name, value);

    //dipatch to Filter Reducer

    dispatch({ type: "CHANGE", payload: { name, value } });
  };

  console.log(state);

  return (
    <div className="filter">
      <div className="location box">
        <div className="center">
          <h4>Location</h4>
          <Input
            onChange={onChangeHandler}
            name="location"
            width="10rem"
            data={[
              "All of USA",
              "Washington DC",
              "Los Angeles",
              "New York",
              "Seattle",
              "Las Vegas",
              "Boston",
              "Houston",
            ]}
          />
        </div>
      </div>
      <div className="date box">
        <div className="center">
          <h4>When to Move</h4>
          <Date onChange={onChangeHandler} />
        </div>
      </div>
      <div className="price box">
        <div className="center">
          <h4>Price</h4>
          <Input
            name="price"
            onChange={onChangeHandler}
            width="10rem"
            data={[
              "Above $500",
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
            name="type"
            onChange={onChangeHandler}
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
