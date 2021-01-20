import React from "react";
import "./app.css";
import birthdayList from "./data/birthday-list";
import BirthdayListComponent from "./birthdayListComponent";

const App = () => {
  const [birthdays, setBirthdays] = React.useState(birthdayList);

  const clearAll = () => {
    setBirthdays([]);
  };

  return (
    <main>
      <h2>{birthdays.length} Birthdays Today</h2>
      <BirthdayListComponent birthdays={birthdays} />
      <button className="btn clr-all-btn" onClick={clearAll}>
        Clear All
      </button>
    </main>
  );
};

export default App;
