import React from "react";

const BtnContainers = ({ categories, setActiveCategory }) => {
  let i = 0;

  return (
    <div className="btn-containers">
      <button className="btn" onClick={() => setActiveCategory("All")}>
        All
      </button>
      {categories.map((category) => {
        i++;
        return (
          <button
            key={i}
            className="btn"
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainers;
