import React from "react";
import "./app.css";
import birthdayList from "./data/birthday-list";

const App = () => {
  const [birthdays, setBirthdays] = React.useState(birthdayList);

  return (
    <main>
      <h2>{birthdays.length} Birthdays Today</h2>
      <div className="btday-list-container"></div>
      <button className="btn">Clear All</button>
    </main>
  );
};

export default App;
