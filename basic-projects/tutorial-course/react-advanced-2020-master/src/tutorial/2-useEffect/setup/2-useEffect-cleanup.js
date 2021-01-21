import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  console.log("Everything is compiled!");
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("Cleaning Up...");
      window.removeEventListener("resize", checkSize);
    };
  }, [size]);

  return (
    <>
      <h1>window</h1>
      <h2>{size} Pixels</h2>
    </>
  );
};

export default UseEffectCleanup;
