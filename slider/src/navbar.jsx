import React from "react";
import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";
import NavLinks from "./NavLinks";

function Navbar() {
  const { openSidebar, isSidebarOpen } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <h3 className="logo">Strapi</h3>
        <button className="btn" onClick={openSidebar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
}

export default Navbar;
