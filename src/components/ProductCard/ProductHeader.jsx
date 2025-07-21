// src/components/ProductCard/ProductHeader.jsx
import React from "react";

export default function ProductHeader({ title, sortOption, onSortChange }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="flex items-center space-x-2">
        <span className="text-sm">Sort by:</span>
        <select
          value={sortOption}
          onChange={(e) => onSortChange(e.target.value)}
          className="border rounded-md px-2 py-1 text-sm"
        >
          <option value="popular">Most Popular</option>
          <option value="newest">Newest</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
}
