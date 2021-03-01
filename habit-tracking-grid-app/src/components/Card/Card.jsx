import React from 'react'
import Grid from '../Grid/Grid'
import "./Card.css";

const Card = () => {
    return (
        <div className="card">
            <h2>Card Title</h2>
            <Grid/>
            <button>Mark Today</button>
        </div>
    )
}

export default Card
