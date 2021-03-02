import React from 'react'
import Grid from '../Grid/Grid'
import "./Card.css";

const Card = ({name, startDate, doneTasksOn}) => {
    return (
        <div className="card">
            <h2>{name}</h2>
            <Grid startDate={startDate} doneTasksOn={doneTasksOn}/>
            <button>Mark Today</button>
        </div>
    )
}

export default Card
