import React from "react";
import { handleNumber } from "../_helpers/_helpers";

function Stats(props) {
  return (
    <div className="stats">
      {props.data.map((item, key) => {
        return (
          <div className="stats-item" key={key}>
            <div className="md-headline">{handleNumber(item.value, 0, 0)}</div>
            <div className="md-label">{item.label}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Stats;
