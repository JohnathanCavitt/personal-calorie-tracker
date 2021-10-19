import "./App.css";
import React, { useState } from "react";
import Header from "./Header.js";

function App() {
  let test = [
    { food: "burger", calories: "380" },
    { food: "veal", calories: "380" },
    { food: "fries", calories: "380" },
  ];

  const [data, setData] = useState(test);

  const getData = (newData) => {
    setData(newData);
  };

  const addItem = (e, data) => {
    let obj = { food: "pizza", calories: "300" };
    let newData = [...data, obj];
    //newData.push(obj);
    console.log(data);
    getData(newData);
  };

  return (
    <div className="App">
      <button
        id="add-button"
        onClick={(e) => {
          addItem(e, data);
        }}
      >
        Add Item
      </button>
      <div className="container">
        {data.map((item, index) => {
          return (
            <Header key={index} container={item} />
            // <h1 key={index}>
            //   {item["food"]} : {item["calories"]}
            // </h1>
          );
        })}
      </div>
    </div>
  );
}

export default App;
