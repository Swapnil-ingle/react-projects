import React from "react";
import "./Grid.css";
import {
  formatDateObj,
  generateGridDateArray,
  resolveDayLegendDiv,
  resolveMonthNumeralToSpell,
} from "../../utils/utils";
import ToolTip from "@material-ui/core/Tooltip";
import GridBox from "./GridBox/GridBox";

const Grid = ({ startDate, doneTasksOn }) => {
  let endDate = new Date(startDate).getFullYear() + "-12-31"; // End of the year
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
          let isTaskDone = doneTasksOn.indexOf(item) !== -1;
          let taskNotDoneForToday = null;

          if (!isTaskDone) {
            const temp = formatDateObj(new Date());
            taskNotDoneForToday =
              new Date(item).getTime() === new Date(temp).getTime();
          }

          if (new Date(item).getTime() < new Date(startDate).getTime()) {
            return <GridBox key={gridBoxId} id={gridBoxId} isEmpty={true} />;
          }

          return (
            <ToolTip key={gridBoxId} title={getToolTipCaption(item)} arrow>
              <>
                <GridBox id={gridBoxId} isTaskDone={isTaskDone} />
              </>
              {/* <div
                className={`grid-box ${
                  taskNotDoneForToday
                    ? ""
                    : isTaskDone
                    ? "active"
                    : new Date(item) < new Date()
                    ? "missed"
                    : ""
                }`}
              ></div> */}
            </ToolTip>
          );
        } else {
          gridBoxColId++;
          gridBoxRowId++;

          if (gridBoxRowId % 4 === 0 || gridBoxRowId < 2) {
            return (
              <GridBox
                key={gridBoxId}
                id={gridBoxId}
                isEmpty={true}
                caption={resolveMonthNumeralToSpell(
                  new Date(item).getMonth() + 1
                )}
              />
            );
          } else {
            return <GridBox key={gridBoxId} id={gridBoxId} isEmpty={true} />;
          }
        }
      })}
    </div>
  );
};

const getToolTipCaption = (strDate) => {
  const d = new Date(strDate);

  const year = d.getFullYear();
  const mon = resolveMonthNumeralToSpell(d.getMonth() + 1);
  let date = String(d.getDate());
  date = date.length <= 1 ? "0" + date : date;

  const fullDate = date + "-" + mon + "-" + year;

  return fullDate;
};

export default Grid;
