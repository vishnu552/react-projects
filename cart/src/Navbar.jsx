import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { useGlobalContext } from "./context";
const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <h3>useReducer</h3>
        <div className="nav-container">
          <FaCartPlus className="cart-icon" />
          <div className="amount-container">
            <p className="total-amount">3</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
