import "./App.css";
import React, { useState } from "react";
import Header from "./Header.js";

function App() {
  let test = JSON.parse(localStorage.getItem("foodList"));
  if (test === null) {
    test = [];
  }
  console.log(test);
  // let test = [
  //   { food: "burger", calories: "380" },
  //   { food: "veal", calories: "380" },
  //   { food: "fries", calories: "380" },
  // ];

  const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState(test);
  const [foodName, setFoodName] = useState("");
  const [calorieAmount, setCalorieAmount] = useState("");

  const getData = (newData) => {
    setData(newData);
  };

  const formToggle = (e) => {
    if (showForm === false) {
      setShowForm(true);
    } else if (showForm === true) {
      setShowForm(false);
    }
  };

  const handleSubmit = (food = "", calories = "") => {
    let obj = { food: food, calories: calories };
    let newList = [...data, obj];
    setData(newList);
    console.log(newList);
    localStorage.setItem("foodList", JSON.stringify(newList));
    formToggle();
  };
  let totalCalories = 0;
  for (let i = 0; i < data.length; i++) {
    let calCurr = data[i]["calories"];
    calCurr = parseInt(calCurr, 10);
    isNaN(calCurr) ? (calCurr = 0) : (totalCalories += calCurr);
  }

  const handleClear = () => {
    setData([]);
    localStorage.clear();
  };

  return (
    <div className="App">
      <button
        id="add-button"
        onClick={(e) => {
          formToggle(e);
        }}
      >
        Add Item
      </button>
      {showForm ? (
        <div id="form-container">
          <form id="input-form">
            <div className="input-bar">
              <input
                type="text"
                placeholder="Enter food name"
                className="input-field"
                onChange={(e) => setFoodName(e.target.value)}
              />
            </div>
            <div className="input-bar">
              <input
                type="text"
                placeholder="Enter calorie amount"
                className="input-field"
                onChange={(e) => setCalorieAmount(e.target.value)}
              />
            </div>
            <input
              type="submit"
              id="submit-button"
              onClick={(e) => handleSubmit(foodName, calorieAmount)}
            />
          </form>
        </div>
      ) : null}
      <div className="container">
        {data.map((item, index) => {
          return (
            <Header key={index} container={item} data={getData} />
            // <h1 key={index}>
            //   {item["food"]} : {item["calories"]}
            // </h1>
          );
        })}
        <p>total calories = {totalCalories}</p>
        <button id="clear" onClick={handleClear}>
          clear items
        </button>
      </div>
    </div>
  );
}

export default App;
