import { formatDateObj } from "../utils/utils";

export const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_TODAY":
      const habits = state.trackedHabits.filter(
        (item) => item.id === action.payload
      );
      const currDateFormatted = formatDateObj(new Date());
      const todaysDateIdx = habits[0].doneTasksOn.indexOf(currDateFormatted);
      let newDoneTasksOn = habits[0].doneTasksOn;

      if (todaysDateIdx !== -1) {
        newDoneTasksOn.splice(todaysDateIdx, 1);
      } else {
        newDoneTasksOn.push(currDateFormatted);
      }

      return { ...state, doneTasksOn: newDoneTasksOn };
    default:
      return { ...state };
  }
};
