import { useState } from "react";
import Checkout from "../Cart/Checkout"; // ✅ Adjust path if necessary

export default function OrderSummary({ subtotal, discount }) {
  const [location, setLocation] = useState("inside");
  const [showModal, setShowModal] = useState(false);

  const deliveryFee = location === "inside" ? 50 : 150;
  const total = subtotal - discount + deliveryFee;

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="mt-6">
      <h3 className="font-bold text-lg mb-4">Order Summary</h3>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Delivery Location
        </label>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border rounded px-3 py-2 text-sm"
        >
          <option value="inside">Inside Dhaka (৳50)</option>
          <option value="outside">Outside Dhaka (৳150)</option>
        </select>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-red-500">
          <span>Discount (-20%)</span>
          <span>- ${discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Delivery Fee</span>
          <span className="font-medium">${deliveryFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex items-center space-x-2 mb-6">
        <input
          type="text"
          placeholder="Add promo code"
          className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm"
        />
        <button className="bg-black text-white rounded-md px-4 py-2 text-sm">
          Apply
        </button>
      </div>

      <button
        onClick={() => setShowModal(true)}
        className="w-full bg-black text-white text-center py-3 rounded-md hover:bg-gray-800 transition-colors"
      >
        Go to Checkout <span className="inline-block ml-2">→</span>
      </button>

      {/* ✅ Modal for checkout */}
      {showModal && (
        <Checkout
          total={total}
          discount={discount}
          location={location}
          deliveryFee={deliveryFee}
          onClose={handleClose}
        />
      )}
    </div>
  );
}
