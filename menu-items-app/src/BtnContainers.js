import React, { useEffect } from "react";

const BtnContainers = ({ categories, setActiveCategory }) => {
  return (
    <div className="btn-containers">
      <button className="btn" onClick={() => setActiveCategory("All")}>
        All
      </button>
      {categories.map((category) => {
        return (
          <button
            key={category.id}
            className="btn"
            onClick={() => setActiveCategory(category.category)}
          >
            {category.category}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainers;
