import React from "react";
import { Link } from "react-router-dom";

const MenuItems = (props) => {
  return (
    <li className="" key={props.index}>
      <Link
        to={props.item.url}
        className={`${props.item.url === "/account" ? "ml-6" : ""}`}
      >
        {props.item.title}
      </Link>
    </li>
  );
};

export default MenuItems;
