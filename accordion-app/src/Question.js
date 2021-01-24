import React, { useState } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const Question = ({ question, answer }) => {
  const [showAns, setShowAns] = useState(false);

  return (
    <>
      <h3>{question}</h3>
      {showAns && <p>{answer}</p>}
      <button className="max-min-btn" onClick={() => setShowAns(!showAns)}>
        {showAns ? (
          <AiFillMinusCircle />
        ) : (
          <AiFillPlusCircle className="green-btn" />
        )}
      </button>
    </>
  );
};

export default Question;
