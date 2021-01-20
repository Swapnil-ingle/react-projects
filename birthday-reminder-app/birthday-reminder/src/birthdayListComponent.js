import React from "react";

const birthdayListComponent = ({ birthdays }) => {
  return (
    <div className="btday-list-container">
      {birthdays.map((birthday) => {
        const { id, picURL, age, name } = birthday;

        return (
          <article key={id} className="birthday">
            <img src={picURL} alt="" />
            <section>
              <h3>{name}</h3>
              <p>{age} Years Old</p>
            </section>
          </article>
        );
      })}
    </div>
  );
};

export default birthdayListComponent;
