import React from 'react'
import "./Grid.css";

const Grid = () => {
    const gridBoxesMatrix = [7][52];
    const gridBoxes = new Array(365).fill(null);
    let gridBoxId = 0;
    let gridBoxColId = 0;
    let gridBoxRowId = 0;

    return (
        <div className="grid scrollbar-hidden">
            {/* This should be generated automatically */}
            {gridBoxes.map((index) => {
                gridBoxId++;
                gridBoxColId = gridBoxColId >= 8 ? 0 : (gridBoxColId + 1);

                if (gridBoxId <= 8) {
                    switch (gridBoxId) {
                        case 3:
                            return <div className="grid-box-empty"><small>Mon</small></div>
                        case 5:
                            return <div className="grid-box-empty"><small>Wed</small></div>
                        case 7:
                            return <div className="grid-box-empty"><small>Fri</small></div>
                        default:
                            return <div className="grid-box-empty"></div>
                    }
                }

                if (gridBoxColId !== 0) {
                    return (<div className="grid-box"></div>)
                } else {
                    gridBoxColId++;
                    gridBoxRowId++;

                    if (gridBoxRowId % 4 == 0) {
                        return <div className="grid-box-empty"><small>Jan</small>
                    </div>
                    } else {
                        return <div className="grid-box-empty"></div>
                    }
                }
            })}
        </div>
    )
}

export default Grid
