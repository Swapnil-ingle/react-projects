import React from "react";
import "./Grid.css";

const Grid = ({ startDate, doneTasksOn }) => {
  let endDate = new Date(startDate).getFullYear() + "-12-31";
  const gridBoxes = generateGridDateArray(startDate, endDate);

  let gridBoxId = 0;
  let gridBoxColId = 0;
  let gridBoxRowId = 0;

  return (
    <div className="grid scrollbar-hidden">
      {gridBoxes.map((item) => {
        gridBoxId++;
        gridBoxColId = gridBoxColId >= 8 ? 0 : gridBoxColId + 1;

        if (gridBoxId <= 8) {
          return resolveDayLegendDiv(gridBoxId);
        }

        if (gridBoxColId !== 0) {
          return <div key={gridBoxId} className="grid-box"></div>;
        } else {
          gridBoxColId++;
          gridBoxRowId++;

          if (gridBoxRowId % 4 === 0 || gridBoxRowId < 2) {
            return (
              <div key={gridBoxId} className="grid-box-empty">
                <small>
                  {resolveMonthNumeralToSpell(new Date(item).getMonth() + 1)}
                </small>
              </div>
            );
          } else {
            return <div key={gridBoxId} className="grid-box-empty"></div>;
          }
        }
      })}
    </div>
  );
};

// Accepts string date "YYYY-MM-DD"
const generateGridDateArray = (startDate, endDate) => {
  console.log("Generating Grid Array");
  startDate = ensureStartDateIsStartOfWeek(startDate).getTime();
  console.log("StartDate is: ", new Date(startDate));
  endDate = new Date(endDate).getTime();

  let gridDateArr = [];
  let dateItem = startDate;
  let gridBoxColId = 0;

  for (let i = 0; i <= 7; i++) {
    // Pushing empty dates for day legends (Mon, Wed, Fri)
    gridDateArr.push(null);
  }

  while (dateItem <= endDate) {
    let temp = new Date(dateItem);
    const currDate =
      temp.getFullYear() + "-" + (temp.getMonth() + 1) + "-" + temp.getDate();
    gridBoxColId = gridBoxColId >= 8 ? 0 : gridBoxColId + 1;

    if (gridBoxColId === 0) {
      gridDateArr.push(currDate);
      continue;
    }

    gridDateArr.push(currDate);
    dateItem += 24 * 60 * 60 * 1000; // add one day
  }

  console.log("Finished The Grid Array");
  return gridDateArr;
};

const ensureStartDateIsStartOfWeek = (startDate) => {
  const dayOfWeek = new Date(startDate).getDay();
  if (dayOfWeek !== 0) {
    let tempDate = new Date(startDate);
    tempDate.setDate(tempDate.getDate() - dayOfWeek);
    return tempDate;
  }

  return startDate;
};

const resolveMonthNumeralToSpell = (monthInt) => {
  switch (monthInt) {
    case 1:
      return "Jan";
    case 2:
      return "Feb";
    case 3:
      return "Mar";
    case 4:
      return "Apr";
    case 5:
      return "May";
    case 6:
      return "Jun";
    case 7:
      return "Jul";
    case 8:
      return "Aug";
    case 9:
      return "Sep";
    case 10:
      return "Oct";
    case 11:
      return "Nov";
    case 12:
      return "Dec";
    default:
      return "NaN";
  }
};

const resolveDayLegendDiv = (cellNo) => {
  return (
    <div key={cellNo} className="grid-box-empty">
      <small>{resolveDayNumberToDayName(cellNo)}</small>
    </div>
  );

  //   switch (gridBoxId) {
  //     case 3:
  //       return (
  //         <div key={gridBoxId} className="grid-box-empty">
  //           <small>Mon</small>
  //         </div>
  //       );
  //     case 5:
  //       return (
  //         <div key={gridBoxId} className="grid-box-empty">
  //           <small>Wed</small>
  //         </div>
  //       );
  //     case 7:
  //       return (
  //         <div key={gridBoxId} className="grid-box-empty">
  //           <small>Fri</small>
  //         </div>
  //       );
  //     default:
  //       return <div key={gridBoxId} className="grid-box-empty"></div>;
  //   }
};

const resolveDayNumberToDayName = (dayNum) => {
  switch (dayNum) {
    case 3:
      return "Mon";
    case 5:
      return "Wed";
    case 7:
      return "Fri";
    default:
      return "";
  }
};

export default Grid;
