"use client";
import { products } from "../data/products";
import React, { useState } from "react";
import Image from "next/image";

export default function Store() {
  const [cart, setCart] = useState([]);
  const [isCheckoutOpen, setCheckoutOpen] = useState(false);

  // helper functions
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // totals
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-24 mt-10 py-16">
      {/* Header with Cart Button */}
      <div className="pb-8 flex justify-between items-center">
        <div>
          <p className="text-sm uppercase mb-2 tracking-widest text-white/50">
            /// shop
          </p>
          <p className="text-lg uppercase font-extrabold">Stop by the store</p>
        </div>

        <button
          onClick={() => setCheckoutOpen(true)}
          className="relative flex items-center gap-2 bg-orange-600 text-sm text-white px-4 py-2 rounded-full"
        >
          <Image src="/icons/cart.svg" alt="Cart" width={18} height={18} />
          {cartCount > 0 && (
            <span className="text-xs font-bold px-2 py-0.5 bg-white/20 rounded-full">
              {cartCount}
            </span>
          )}
          Item
        </button>
      </div>

      {/* Product Grid (inside one white container, no gaps) */}
      <div className="bg-white grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 divide-x divide-y divide-gray-200 text-black">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col p-4 items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-contain mb-3"
            />

            <p className="text-sm font-medium text-left w-full min-h-[20px]">
              {product.name}
            </p>

            <div className="flex-1" />

            <div className="flex justify-between items-center w-full mt-3">
              <p className="text-gray-500 text-sm font-medium">
                ₦{product.price.toLocaleString()}
              </p>
              <button
                onClick={() => addToCart(product)}
                className="flex items-center justify-center w-6 h-6 rounded-full border border-black"
              >
                <Image
                  src="/icons/plus.svg"
                  width={12}
                  height={12}
                  alt="add to cart"
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Visit shop footer */}
      <div className="text-center flex items-center justify-center gap-2 capitalize text-sm mt-6 font-medium cursor-pointer hover:underline">
        <p>Visit shop</p>
        <Image src="/icons/right.svg" width={20} height={20} alt="visit shop" />
      </div>

      {/* Checkout Modal */}
      {isCheckoutOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
          onClick={() => setCheckoutOpen(false)}
        >
          <div
            className="bg-white text-black p-6 rounded-lg w-full max-w-lg max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4">Checkout</h2>

            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                <ul className="space-y-4">
                  {cart.map((item) => (
                    <li
                      key={item.id}
                      className="flex justify-between items-center border-b pb-2"
                    >
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-gray-500">
                          ₦{item.price.toLocaleString()}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="px-2 py-1 border rounded"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => addToCart(item)}
                          className="px-2 py-1 border rounded"
                        >
                          +
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between items-center mt-6">
                  <p className="font-bold">Total:</p>
                  <p className="font-bold">₦{totalAmount.toLocaleString()}</p>
                </div>

                <div className="mt-6 flex justify-end gap-4">
                  <button
                    onClick={() => setCheckoutOpen(false)}
                    className="px-4 py-2 border rounded"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => alert("Proceed to payment (to be added)")}
                    className="px-4 py-2 bg-orange-600 text-white rounded"
                  >
                    Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
