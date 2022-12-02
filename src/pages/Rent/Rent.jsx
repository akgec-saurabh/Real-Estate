import React, { useState } from "react";
import "./rent.scss";
import Filter from "../../components/Filter/Filter";
import Property from "../../components/Property/Property";
import Input from "../../components/Input/Input";

const Rent = (props) => {
  const [transformedData, setTransformedData] = useState(props.data);

  const onSearch = (filterData) => {
    console.log(filterData);
    const obj = { type: "flats", date: "2022-12-15" };

    console.log(transformedData);

    const dummy = props.data.filter((item) => {
      return (
        item.property_type === "Palaces" && item.price > 5 && item.price < 75
      );
    });
    setTransformedData(dummy);

    console.log(dummy);
  };

  return (
    <div className="rent">
      <div className="heading">
        <h2>Search properties to rent</h2>

        <Input width="15rem" data={["Search with Search Bar"]} />
      </div>
      <Filter onSearch={onSearch} />

      <div className="container">
        {transformedData.map((item) => {
          return (
            <Property
              key={item.id}
              name={item.name_type}
              price={item.price}
              address={item.location}
              beds={item.beds}
              bathrooms={item.bathrooms}
              length={item.room_length}
              width={item.room_width}
              location={item.city}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Rent;
