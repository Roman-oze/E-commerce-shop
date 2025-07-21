
import React from "react";
import ProductCard from "./ProductCard";
import ProductHeader from "./ProductHeader";
import { ProductsData } from "../../Data/ProductsData";
import useSortedProducts from "../SortDropdown/SortDropdown";

export default function ProductList({ cartItems, onAdd, onRemove }) {

  const { sortedProducts, sortOption, setSortOption } = useSortedProducts(ProductsData);

  return (
    <div className="lg:col-span-2">
      <ProductHeader
        title="Your Products"
        sortOption={sortOption}
        onSortChange={setSortOption}
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
