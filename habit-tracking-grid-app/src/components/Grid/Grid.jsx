import React from 'react'
import "./Grid.css";

const Grid = ({startDate, doneTasksOn}) => {
    const gridBoxesMatrix = [7][52];

    let endDate = new Date(startDate).getFullYear() + "-12-31";
    // console.log(generateGridDateArray(startDate, endDate));

    // 1. Calculate remaining days (EOY) from startDate
    const totalDays = dateDiff(new Date(startDate), new Date("12/31/" + new Date(startDate).getFullYear()));
    // 2. Create that many grids
    // 3. For calculating month legend

    // const gridBoxes = new Array(totalDays + (8) + Math.ceil(totalDays / 7)).fill(null);
    const gridBoxes = generateGridDateArray(startDate, endDate);
    let gridBoxId = 0;
    let markingGridBoxId = 0;
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
                    markingGridBoxId++;
                    return (<div className="grid-box"><small>{markingGridBoxId}</small></div>)
                } else {
                    gridBoxColId++;
                    gridBoxRowId++;

                    if (gridBoxRowId % 5 == 0) {
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

// Accepts string date "YYYY-MM-DD"
const generateGridDateArray = (startDate, endDate) => {
    console.log("Generating Grid Array");
    startDate = new Date(startDate).getTime();
    endDate = new Date(endDate).getTime();

    let gridDateArr = [];
    let dateItem = startDate; 
    let gridBoxColId = 0;

    for (let i=0; i<=7; i++) {
        // Pushing empty dates for day legends (Mon, Wed, Fri)
        gridDateArr.push(null);
    }

    while (dateItem <= endDate) {
        gridBoxColId = gridBoxColId >= 8 ? 0 : (gridBoxColId + 1);

        if (gridBoxColId === 0) {
            gridDateArr.push(null); // Pushing null for month legends
            continue;
        }

        let temp = new Date(dateItem);
        gridDateArr.push(temp.getFullYear() + '-' + (temp.getMonth() + 1) + '-' + temp.getDate());
        dateItem += (24 * 60 * 60 * 1000); // add one day
    }

    console.log("Finished The Grid Array");
    return gridDateArr;
}

const dateDiff = (first, second) => {
    return Math.round((second-first)/(1000*60*60*24));
}

export default Grid
