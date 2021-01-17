import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("Hello World!");

  const handleClick = () => {
    if (text == "Hello World!") {
      setText("Alternate Title!");
    } else {
      setText("Hello World!");
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
