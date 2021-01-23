import React from "react";
import { FaChevronLeft, FaChevronRight, FaRandom } from "react-icons/fa";

const Scroller = ({ index, peopleDataLen, setIndex, setLoading }) => {
  const navigate = async (navTo) => {
    setLoading(true);

    // Enable this to simulate slow-loading
    // await wait(2000);

    if (navTo === -1) {
      let newIdx = index - 1;
      newIdx = newIdx <= 0 ? peopleDataLen - 1 : newIdx;
      setIndex(newIdx);
    } else if (navTo === 0) {
      let newIdx = Math.floor(Math.random() * peopleDataLen);
      setIndex(newIdx);
    } else {
      let newIdx = index + 1;
      newIdx = newIdx >= peopleDataLen ? 0 : newIdx;
      setIndex(newIdx);
    }
    setLoading(false);
  };

  return (
    <div className="scrollbar">
      <span className="quote scroll-btn">
        <button onClick={() => navigate(-1)}>
          <FaChevronLeft />
        </button>
      </span>
      <span className="quote scroll-btn">
        <button onClick={() => navigate(0)}>
          <FaRandom />
        </button>
      </span>
      <span className="quote scroll-btn">
        <button onClick={() => navigate(1)}>
          <FaChevronRight />
        </button>
      </span>
    </div>
  );
};

function wait(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

export default Scroller;
