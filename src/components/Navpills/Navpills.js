import React from "react";
import "./Navpills.css";

const Navpills = props => (
  <div>
    <ul className="nav nav-pills nav-justified">
      <li>
        <a href="/">Dog Clicky Game</a>
      </li>
      <li>{props.message}</li>
      <li>
        Score: <span style={{ color: "yellow" }}>{props.curScore}</span> | Top
        Score: {props.topScore}
      </li>
    </ul>
  </div>
);

export default Navpills;
