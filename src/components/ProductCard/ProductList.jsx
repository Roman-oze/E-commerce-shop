// src/components/ProductCard/ProductList.jsx
import React from "react";
import ProductCard from "./ProductCard";
import { ProductsData } from "../../Data/ProductsData";
import ProductHeader from "./ProductHeader";

export default function ProductList() {
  return (
    <>
      {/* Products Section (2/3 width on large screens)  */}
      <div class="lg:col-span-2">
        {/* This is product header */}
        <ProductHeader title="Your Products" />

        {/* This is product List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ProductsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
