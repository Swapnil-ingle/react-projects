import React, { useState } from "react";
import people from "./data";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
import Scroller from "./Scroller";

const Review = () => {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const currPerson = people[index];

  if (loading) {
    return (
      <>
        <h3>Loading...</h3>
      </>
    );
  }

  return (
    <>
      <div className="img-container">
        <span className="quote img-left-quote">
          <FaQuoteLeft />
        </span>
        <img src={currPerson.image} alt={currPerson.name} />
        <span className="quote img-right-quote">
          <FaQuoteRight />
        </span>
      </div>
      <h3>{currPerson.name}</h3>
      <span id="person-job">{currPerson.job.toUpperCase()}</span>
      <p>{currPerson.text}</p>
      <Scroller
        index={index}
        peopleDataLen={people.length}
        setIndex={setIndex}
        setLoading={setLoading}
      />
    </>
  );
};

export default Review;
