import { useState, useMemo } from "react";

export default function useSortedProducts(products) {
  const [sortOption, setSortOption] = useState("popular");

  const sortedProducts = useMemo(() => {
    const sorted = [...products].sort((a, b) => {
      if (sortOption === "lowToHigh") return a.price - b.price;
      if (sortOption === "highToLow") return b.price - a.price;
      if (sortOption === "newest") return b.id - a.id;
      return 0; // Most popular (default)
    });
    return sorted;
  }, [products, sortOption]);

  return { sortedProducts, sortOption, setSortOption };
}
