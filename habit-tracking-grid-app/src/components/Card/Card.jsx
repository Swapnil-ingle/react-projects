import React from "react";
import Grid from "../Grid/Grid";
import "./Card.css";
import { useGlobalContext } from "../../context/context";
import { formatDateObj } from "../../utils/utils";

const Card = ({ id, name, startDate, doneTasksOn }) => {
  const { toggleToday } = useGlobalContext();
  return (
    <div className="card">
      <h2>{name}</h2>
      <Grid startDate={startDate} doneTasksOn={doneTasksOn} />
      <button onClick={() => toggleToday(id)}>
        {`${
          doneTasksOn.indexOf(formatDateObj(new Date())) !== -1
            ? "Undo"
            : "Mark Today"
        }`}
      </button>
    </div>
  );
};

export default Card;
