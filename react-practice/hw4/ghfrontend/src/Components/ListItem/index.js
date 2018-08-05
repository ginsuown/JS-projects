import React from "react";
import "./index.css";

function ListItem(props) {
  return (
    <div className="ListItem">
      <h2 className="ListItem-id">{props.id}</h2>
      <p className="ListItem-username">{props.userName}</p>
      <img className="ListItem-img" src={props.img} alt="User Image" />
    </div>
  );
}
