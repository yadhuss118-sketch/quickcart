import React from "react";
import { useParams } from "react-router-dom";
import ProductList from "./ProductList";
import { useCart } from "../context/CartContext";

function CategoryPage({ products }) {
  const { category } = useParams();
  const { addToCart } = useCart();

  const filteredProducts = products.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div>
      <h2>{category} Products</h2>

      <ProductList products={filteredProducts} onAddToCart={addToCart} />
    </div>
  );
}

export default CategoryPage;
