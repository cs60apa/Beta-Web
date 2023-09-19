import React from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function Layout({ children }) {
  return (
    <div>
      <div className=" bg-gradient-to-b from-[#a960ee] to-[#ffcb57] w-full h-20">
        <Navbar />
      </div>
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
