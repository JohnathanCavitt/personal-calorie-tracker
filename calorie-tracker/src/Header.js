import React from "react";
import "./Header.css";

const Header = (props) => {
  return <h1>{JSON.stringify(props.container)}</h1>;
};

export default Header;
