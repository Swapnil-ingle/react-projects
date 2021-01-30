import React, { useEffect, useState } from "react";

const SingleColor = ({ index, rgb, weight, hex }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(", ");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [alert]);

  const copyToClipboard = (hex) => {
    setAlert(true);
    navigator.clipboard.writeText(hex);
  };

  return (
    <article
      onClick={(e) => copyToClipboard("#" + hex)}
      key={index}
      style={{ backgroundColor: `rgba(${bcg})` }}
    >
      <p className={index >= 10 ? "color-light" : null}>{weight}%</p>
      <small className={index >= 10 ? "color-light" : null}>
        #{hex.toUpperCase()}
      </small>
      {alert && (
        <p className={`alert ${index >= 10 ? "color-light" : null}`}>
          Copied to Clipboard!
        </p>
      )}
    </article>
  );
};

export default SingleColor;
