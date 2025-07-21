// src/components/ProductCard/ProductList.jsx
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { ProductsData } from "../../Data/ProductsData";
import ProductHeader from "./ProductHeader";

export default function ProductList({ cartItems, onAdd, onRemove }) {
  const [sortOption, setSortOption] = useState("popular");

  const handleSortChange = (value) => {
    setSortOption(value);
  };

  const sortedProducts = [...ProductsData].sort((a, b) => {
    if (sortOption === "lowToHigh") return a.price - b.price;
    if (sortOption === "highToLow") return b.price - a.price;
    if (sortOption === "newest") return b.id - a.id; // Assuming ID indicates newness
    return 0; // Most Popular (default)
  });

  return (
    <div className="lg:col-span-2">
      <ProductHeader
        title="Your Products"
        sortOption={sortOption}
        onSortChange={handleSortChange}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isInCart={cartItems.some(item => item.id === product.id)}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
}
