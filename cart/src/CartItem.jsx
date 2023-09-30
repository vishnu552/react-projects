import React from "react";
import { useGlobalContext } from "./context";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
const CartItem = ({ id, img, title, price, amount }) => {
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button
          className="remove-btn"
          onClick={() => console.log("remove item")}
        >
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={() => console.log("increase")}>
          <FaChevronUp />
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button className="amount-btn" onClick={() => console.log("decrease")}>
          <FaChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
