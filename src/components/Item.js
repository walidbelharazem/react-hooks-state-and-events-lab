import React from "react";
import { useState } from "react";

export default function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  const toggleCartStatus = () => {setIsInCart(!isInCart); };

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCartStatus}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}
