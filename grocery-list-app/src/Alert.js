import React, { useEffect } from "react";

const Alert = ({ msg, type, removeAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`alert alert-${type}`}>
      <h3>{msg}</h3>
    </div>
  );
};

export default Alert;
