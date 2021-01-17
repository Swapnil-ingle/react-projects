import React from "react";

const ErrorExample = () => {
  const title = "Random Title";

  const changeTitle = () => {
    title = "New Title";
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button className="btn" onClick={changeTitle}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
