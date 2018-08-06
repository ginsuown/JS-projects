import React from "react";
import "./index.css";

export default function ListItem(props) {
  return (
    <div onClick={props.details} className="ListItem">
      <img className="ListItem-img" src={props.img} alt="User" />
      <h2 className="ListItem-id">{props.id}</h2>
      <p className="ListItem-username">{props.userName}</p>
    </div>
  );
}
