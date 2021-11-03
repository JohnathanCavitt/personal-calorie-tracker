import React from "react";
import "./Header.css";

const Header = (props) => {
  const handleRemove = () => {
    let retData = JSON.parse(localStorage.getItem("foodList"));
    for (let i = 0; i < retData.length; i++) {
      if (
        retData[i]["food"] === props.container["food"] &&
        retData[i]["calories"] === props.container["calories"]
      ) {
        retData.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("foodList", JSON.stringify(retData));
    props.data(retData);
  };
  return (
    <div className="items">
      <button className="remove" onClick={handleRemove}>
        -
      </button>
      <h1>
        {props.container["food"]} : {props.container["calories"]}
      </h1>
    </div>
  );
};

export default Header;
