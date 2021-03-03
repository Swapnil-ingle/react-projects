import React from "react";
import "./GridBox.css";

const GridBox = ({ id, isEmpty, isTaskDone, caption }) => {
  return (
    <div
      key={id}
      className={`grid-box${isEmpty ? "-empty" : ""} ${
        isEmpty ? "" : isTaskDone ? "active" : "missed"
      }"`}
    >
      {caption && <small>{caption}</small>}
    </div>
  );
};

export default GridBox;
