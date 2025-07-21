// // src/components/Cart/CartSection.jsx
// import { useState } from "react";
// import OrderSummary from "./CartSummary";

// export default function CartSection({ title, cartItems, onRemove }) {
//   const [quantities, setQuantities] = useState(
//     cartItems.reduce((acc, item) => {
//       acc[item.id] = 1;
//       return acc;
//     }, {})
//   );

//   const handleIncrement = (id) => {
//     setQuantities((prev) => ({
//       ...prev,
//       [id]: prev[id] + 1,
//     }));
//   };

//   const handleDecrement = (id) => {
//     setQuantities((prev) => ({
//       ...prev,
//       [id]: prev[id] > 1 ? prev[id] - 1 : 1,
//     }));
//   };

//   const calculateSubtotal = () => {
//     return cartItems.reduce((total, item) => {
//       const qty = quantities[item.id] || 1;
//       return total + item.price * qty;
//     }, 0);
//   };

//   const subtotal = calculateSubtotal();
//   const discount = subtotal * 0.2;
//   const deliveryFee = 15;
//   const total = subtotal - discount + deliveryFee;

//   return (
//     <div className="lg:col-span-1">
//       <div className="bg-white rounded-lg p-6 border border-gray-200">
//         <h2 className="text-2xl font-bold mb-6">{title}</h2>

//         {cartItems.map((item) => (
//           <div
//             key={item.id}
//             className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4"
//           >
//             <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="h-full w-auto object-cover"
//               />
//             </div>
//             <div className="flex-grow">
//               <div className="flex justify-between">
//                 <h3 className="font-medium">{item.name}</h3>
//                 <span
//                   className="text-red-500 text-sm cursor-pointer"
//                   onClick={() => onRemove(item.id)}
//                 >
//                   ×
//                 </span>
//               </div>
//               <p className="text-sm text-gray-500">Size: Large</p>
//               <p className="text-sm text-gray-500">Color: White</p>
//               <div className="flex justify-between items-center mt-2">
//                 <p className="font-bold">${item.price}</p>
//                 <div className="flex items-center space-x-2">
//                   <button
//                     onClick={() => handleDecrement(item.id)}
//                     className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
//                   >
//                     −
//                   </button>
//                   <span className="text-sm">{quantities[item.id]}</span>
//                   <button
//                     onClick={() => handleIncrement(item.id)}
//                     className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}

//         <OrderSummary
//           subtotal={subtotal}
//           discount={discount}
//           deliveryFee={deliveryFee}
//           total={total}
//         />
//       </div>
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import OrderSummary from "./CartSummary";

export default function CartSection({ title, cartItems, onRemove }) {
  const [quantities, setQuantities] = useState({});

  // Initialize quantity for each cart item
  useEffect(() => {
    const initialQuantities = {};
    cartItems.forEach((item) => {
      initialQuantities[item.id] = 1;
    });
    setQuantities(initialQuantities);
  }, [cartItems]);

  // Increase quantity
  const increaseQty = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  // Decrease quantity (not less than 1)
  const decreaseQty = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, prev[id] - 1),
    }));
  };

  // Calculate totals
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * (quantities[item.id] || 1),
    0
  );
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4"
          >
            <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-auto object-cover"
              />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between">
                <h3 className="font-medium">{item.name}</h3>
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-red-500 text-sm"
                >
                  ×
                </button>
              </div>
              <p className="text-sm text-gray-500">Size: Large</p>
              <p className="text-sm text-gray-500">Color: White</p>

              <div className="flex justify-between items-center mt-2">
                <p className="font-bold">
                  ${item.price * (quantities[item.id] || 1)}
                </p>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="w-6 h-6 bg-gray-200 rounded"
                  >
                    −
                  </button>
                  <span>{quantities[item.id] || 1}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="w-6 h-6 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <OrderSummary
          subtotal={subtotal}
          discount={discount}
          deliveryFee={deliveryFee}
          total={total}
        />
      </div>
    </div>
  );
}
