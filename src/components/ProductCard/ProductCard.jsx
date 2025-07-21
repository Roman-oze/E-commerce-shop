// src/components/ProductCard/ProductCard.jsx
import React from "react";
import { ShoppingCartIcon, TrashIcon } from "@heroicons/react/24/solid";

export default function ProductCard({ product, isInCart, onAdd, onRemove }) {
  const {
    name,
    image,
    price,
    oldPrice,
    discount,
    rating,
    ratingText,
    stock,
    disabled,
  } = product;

  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
      ★
    </span>
  ));

  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <img src={image} alt={name} className="h-full w-auto object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-base mb-1">{name}</h3>
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center text-sm">
            <div className="flex">{stars}</div>
            <span className="text-xs text-gray-500 ml-1">{ratingText}</span>
          </div>
          <span className="text-xs text-gray-700">({stock} pcs left)</span>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <p className="font-bold text-lg text-gray-900">${price}</p>
          {oldPrice && (
            <p className="line-through text-sm text-gray-500">${oldPrice}</p>
          )}
          {discount && (
            <span className="text-xs bg-red-200 text-red-800 px-2 py-0.5 rounded-full font-semibold">
              -{discount}%
            </span>
          )}
        </div>

        <button
          onClick={() => (isInCart ? onRemove(product.id) : onAdd(product))}
          className={`w-full mt-2 py-2 text-sm rounded flex items-center justify-center gap-2 transition duration-300
            ${
              isInCart
                ? "bg-red-700 hover:bg-red-800"
                : "bg-green-700 hover:bg-green-800"
            }
            text-white ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={disabled}
        >
          {isInCart ? (
            <>
              <TrashIcon className="w-4 h-4" />
              Remove from Cart
            </>
          ) : (
            <>
              <ShoppingCartIcon className="w-4 h-4" />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
}
