import React from "react";
import { useCart } from "../context/CartContext";

function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>${item.price}</p>

            <button onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default CartPage;