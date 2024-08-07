import React from "react";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Header = (prop) => {

    const theme = prop.theme
  return (
    <>
      <nav className="w-full bg-purple-300 h-20 flex justify-between items-center px-5">
        <div className="leftSide flex gap-10 items-center">
          <h2 className="logo text-3xl text-purple-800 font-mono font-bold">NoteMate</h2>
          <ul className="nav-links flex gap-3 text-xl text-white font-bold font-mono">
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="/aboutus"><li>AboutUs</li></NavLink>
            <NavLink to="/addnotes"><li>AddNote</li></NavLink>
          </ul>
        </div>
        <div className="rightSide mx-10 flex gap-5 items-center">
            <div className="theme text-3xl ">
                {theme == 'light' ? <MdDarkMode  className="cursor-pointer transition-all duration-200 hover:scale-125"/> : <CiLight  className="cursor-pointer transition-all duration-200 hover:scale-125"/>}
            </div>
          <div className="searchBar">
            <input type="text" placeholder="Search" className="h-11 outline-none border-2 border-purple-700 rounded-md w-64 px-2 text-xl" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
