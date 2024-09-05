import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";


const Layout = () => {
  const theme  = useSelector((state) => state.theme.value);
  return (
    <>
      <div className={`w-full min-h-screen relative ${theme?"bg-gunmetal bg-opacity-20":"bg-darkNavy"}`}>
        <Navbar />
        <Outlet />
        <Footer />
        <ToastContainer />
      </div>
    </>
  );
};

export default Layout;
