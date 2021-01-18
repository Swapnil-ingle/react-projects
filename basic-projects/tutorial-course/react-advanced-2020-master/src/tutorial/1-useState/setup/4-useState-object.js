import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    msg: "This is peter",
  });
  console.log(person);

  const changeMsg = () => {
    setPerson({ ...person, msg: "Hello World!" });
  };

  return (
    <React.Fragment>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.msg}</h3>
      <button className="btn" onClick={changeMsg}>
        Change Message
      </button>
    </React.Fragment>
  );
};

export default UseStateObject;
