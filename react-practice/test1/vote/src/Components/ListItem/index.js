import React from "react";
import "./index.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function ListItem(props) {
  return (
    <div className="ListItem">
      <div className="Counter">
        <button className="Up" onClick={props.upvote}>
          <IoIosArrowUp />
        </button>
        <p className="Votes">{props.votes}</p>
        <button className="Down" onClick={props.downvote}>
          <IoIosArrowDown />
        </button>
      </div>
      <div className="Content">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
