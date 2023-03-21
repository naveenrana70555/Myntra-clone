import React from "react";
import "./SortBar.css";

export function SortBar({ sortChange }) {
  return (
    <div className="sort-main">
      <div className="sort-left" style={{ fontWeight: 700 }}>
        FILTERS
      </div>
      <div className="sort-items">
        <form>
          <select style={{ width: 200, height: 30 }} onChange={sortChange}>
            <option value="" selected>
              Sort by: Recommendation
            </option>
            <option value="low">Price Low to High</option>
            <option value="high">Price High to Low</option>
          </select>
        </form>
      </div>
    </div>
  );
}
