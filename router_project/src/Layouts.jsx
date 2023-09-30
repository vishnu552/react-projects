import React from "react";
import Header from "./components/header";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer";

function Layouts() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layouts;
