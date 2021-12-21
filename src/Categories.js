import React from "react";

const Categories = ({ filterItems, categories }) => {
  return (
    <div className="btn-container">
      {categories.map((catg, index) => {
        return (
          <button
            key={index}
            className="filter-btn"
            onClick={() => filterItems(catg)}
          >
            {catg}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
