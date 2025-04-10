import React from "react";

function Filter({ current, setFilter }) {
  const filters = ["all", "completed", "pending"];

return (
  <div style={{ marginBottom: 16 }}>
    {filters.map((filter) => (
      <button
        key={filter}
        onClick={() => setFilter(filter)}
        disabled={current === filter}
        style={{ marginRight: 8 }}
      >
        {filter.charAt(0).toUpperCase() + filter.slice(1)}
      </button>
    ))}
  </div>
);
}

export default Filter;
