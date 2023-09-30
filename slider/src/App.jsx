import { useState } from "react";
import { useGlobalContext } from "./context";
import Navbar from "./navbar";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import SubMenu from "./SubMenu";

function App() {
  const { isSiderbarOpen } = useGlobalContext();

  return (
    <>
      <Navbar />
      <Hero />
      <Sidebar />
      <SubMenu />
    </>
  );
}

export default App;
