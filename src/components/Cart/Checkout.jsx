import React, { useState } from "react";
import { CreditCardIcon } from "@heroicons/react/24/outline";


export default function Checkout({ total, discount, location, deliveryFee, onClose }) {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div className="fixed inset-0 backdrop-blur-md bg-opacity-40 flex justify-center items-center z-50 px-4">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl relative border border-gray-300 p-8 font-[Inter]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-xl font-bold"
        >
          ×
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6 border-b pb-3"><CreditCardIcon className="w-6 h-6 text-indigo-600" />
 Checkout Summary</h2>

        {/* Customer Info */}
        <div className="mb-6 space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <textarea
            placeholder="Delivery Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows="3"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
          />
        </div>

        {/* Order Breakdown */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6 shadow-sm border border-dashed">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-500">Delivery Location:</span>
            <span className="capitalize">{location}</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-500">Subtotal:</span>
            <span>${(total + discount - deliveryFee).toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-red-500 mb-2">
            <span>Discount (20%)</span>
            <span>- ${discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-500">Delivery Fee:</span>
            <span>${deliveryFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg font-bold border-t pt-3 mt-3">
            <span>Total Payable:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Payment Method */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Payment Method</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
          >
            <option value="card">Credit/Debit Card</option>
            <option value="cod">Cash on Delivery</option>
            <option value="mobile">Mobile Banking (bKash/Nagad)</option>
          </select>
        </div>

        {/* Confirm Button */}
        <button
          onClick={() => {
            if (!name || !address) {
              alert("Please fill in your name and address.");
              return;
            }
            alert(`✅ Payment method: ${paymentMethod}\nThank you, ${name}!`);
            onClose();
          }}
          className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-200"
        >
          Confirm & Place Order
        </button>
      </div>
    </div>
  );
}
