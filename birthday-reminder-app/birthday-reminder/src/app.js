import React from "react";
import "./app.css";
import birthdayList from "./data/birthday-list";

const App = () => {
  const [birthdays, setBirthdays] = React.useState(birthdayList);

  const clearAll = () => {
    setBirthdays([]);
  };

  return (
    <main>
      <h2>{birthdays.length} Birthdays Today</h2>
      <div className="btday-list-container">
        {birthdays.map((birthday) => {
          const { picURL, age, name } = birthday;

          return (
            <article className="birthday">
              <img src={picURL} alt="" />
              <section>
                <h3>{name}</h3>
                <p>{age} Years Old</p>
              </section>
            </article>
          );
        })}
      </div>
      <button className="btn clr-all-btn" onClick={clearAll}>
        Clear All
      </button>
    </main>
  );
};

export default App;
