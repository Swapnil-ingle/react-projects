import React from "react";
import Grid from "../Grid/Grid";
import "./Card.css";
import { useGlobalContext } from "../../context/context";
import { formatDateObj } from "../../utils/utils";
import DeleteCardBtn from "./DeleteCardBtn/DeleteCardBtn";

const Card = ({ id, name, description, startDate, doneTasksOn }) => {
  const { toggleToday, deleteHabit } = useGlobalContext();
  const doneToday = doneTasksOn.indexOf(formatDateObj(new Date())) !== -1;

  const handleCardDelete = (e) => {
    e.preventDefault();
    deleteHabit(id);
  };

  return (
    <div className="card">
      {/* <button onClick={(e) => handleCardDelete(e)} id="remove-card"> */}
      <DeleteCardBtn id={id} />
      {/* <CancelIcon style={{ fontSize: 40 }} /> */}
      {/* </button> */}
      <div className="card-header">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <Grid startDate={startDate} doneTasksOn={doneTasksOn} />
      <button
        id={`${doneToday ? "undo-btn" : ""}`}
        onClick={() => toggleToday(id)}
      >
        {`${doneToday ? "Undo" : "Mark Today"}`}
      </button>
    </div>
  );
};

export default Card;
