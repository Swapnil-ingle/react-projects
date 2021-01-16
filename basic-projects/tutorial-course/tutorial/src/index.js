import React from "react";
import ReactDom from "react-dom";

const Person = () => <h2>Swapnil Ingle</h2>;
const Desc = () => <p>This is person desc!</p>;
const PersonSubHeading = () => <h3>Software Dev</h3>;

function Greeting() {
  return (
    <div>
      <Person />
      <PersonSubHeading />
      <Desc />
    </div>
  );
}

ReactDom.render(<Greeting />, document.getElementById("root"));
