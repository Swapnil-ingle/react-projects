import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeThis = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <React.Fragment>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button className="btn" onClick={() => removeThis(id)}>
              Remove This
            </button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Remove All
      </button>
      {/* <button className="btn" onClick={}></button>
      <button className="btn" onClick={}></button> */}
    </React.Fragment>
  );
};

export default UseStateArray;
