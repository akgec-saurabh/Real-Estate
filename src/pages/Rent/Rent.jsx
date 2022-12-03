import React, { useState } from "react";
import "./rent.scss";
import Filter from "../../components/Filter/Filter";
import Property from "../../components/Property/Property";
import Input from "../../components/Input/Input";
import { isContentEditable } from "@testing-library/user-event/dist/utils";

const Rent = (props) => {
  const [transformedData, setTransformedData] = useState(props.data);

  const onSearch = (filterData) => {
    console.log(filterData);

    const dummy = props.data.filter((item) => {
      let isLocationFilter = true;
      let isTypeFilter = true;
      let isDateFilter = true;
      let isPriceFilter = true;

      //for location
      if (filterData.location === "" || filterData.location === "All of USA") {
        isLocationFilter = true;
      } else {
        isLocationFilter = item.city === filterData.location;
      }

      //for property Type

      if (filterData.type === "" || filterData.type === "All") {
        isTypeFilter = true;
      } else {
        isTypeFilter = item.property_type === filterData.type;
      }

      //for All Price Above $

      if (filterData.price === "" || filterData.price === "Above $500") {
        isPriceFilter = true;
      } else {
        /* 
        
        "$500-$2,500",
        "$2,500-$5,000",
        "$7,500-$10,000",
        "$10,000-$12,500",
        
        */

        switch (filterData.price) {
          case "$500-$2,500":
            if (item.price > 500 && item.price < 2500) isPriceFilter = true;
            else isPriceFilter = false;
            break;
          case "$2,500-$5,000":
            if (item.price > 2500 && item.price < 5000) isPriceFilter = true;
            else isPriceFilter = false;

            break;
          case "$7,500-$10,000":
            if (item.price > 7500 && item.price < 10000) isPriceFilter = true;
            else isPriceFilter = false;

            break;
          case "$10,000-$12,500":
            if (item.price > 10000 && item.price < 12500) isPriceFilter = true;
            else isPriceFilter = false;
            break;
          default:
            isPriceFilter = false;
            break;
        }
      }

      //for Date
      if (filterData.date === "") {
        isDateFilter = true;
      } else {
        isDateFilter = new Date(item.date) <= new Date(filterData.date);
      }

      return isLocationFilter && isDateFilter && isPriceFilter && isTypeFilter;
    });
    setTransformedData(dummy);

    console.log(dummy);
  };

  return (
    <div className="rent">
      <div className="heading">
        <h2>Search properties to rent</h2>

        <Input width="15rem" data={["Search with Search Bar", "Do Nothing"]} />
      </div>
      <Filter onSearch={onSearch} />

      <div className="container">
        {transformedData.map((item) => {
          return (
            <Property
              key={item.id}
              name={item.name_type}
              price={item.price}
              address={item.address}
              beds={item.beds}
              bathrooms={item.bathrooms}
              length={item.room_length}
              width={item.room_width}
              location={item.city}
              date={item.date}
              dateString={new Date(item.date).toDateString()}
            />
          );
        })}
        <Property opacity={true} />
      </div>
    </div>
  );
};

export default Rent;
