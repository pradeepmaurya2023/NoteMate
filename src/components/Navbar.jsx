import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../features/theme/themeSlice";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  
  const handleThemeChange = () => {
    dispatch(changeTheme());
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className={`w-full ${theme ? "bg-steelBlue" : "bg-gunmetal"} h-20 flex justify-between items-center px-5`}>
        <div className="leftSide flex gap-10 items-center">
          <h2 className="logo text-3xl text-electricBlue font-mono font-bold">
            &lt;NoteMate/&gt;
          </h2>
        </div>
        <div className="rightSide mx-10 flex gap-5 items-center">
          <div className="theme text-3xl" onClick={handleThemeChange}>
            {theme ? (
              <MdDarkMode className="cursor-pointer transition-all duration-200 hover:scale-125 text-black" />
            ) : (
              <MdLightMode className="cursor-pointer transition-all duration-200 hover:scale-125 text-white" />
            )}
          </div>

          {/* Hamburger icon for mobile */}
          <div className="hamburger md:hidden text-white text-3xl cursor-pointer" onClick={toggleMobileMenu}>
            <GiHamburgerMenu />
          </div>

          {/* Links for desktop */}
          <ul className="nav-links hidden md:flex gap-3 text-xl text-white font-bold font-mono">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${isActive
                    ? "text-teal scale-125 text-xl underline transition-all duration-500"
                    : "text-xl font-thin text-white"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutUs"
                className={({ isActive }) =>
                  `${isActive
                    ? "text-teal scale-125 text-xl underline transition-all duration-500"
                    : "text-xl font-thin text-white"
                  }`
                }
              >
                AboutUs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addNotes"
                className={({ isActive }) =>
                  `${isActive
                    ? "text-teal scale-125 text-xl underline transition-all duration-500"
                    : "text-xl font-thin text-white"
                  }`
                }
              >
                AddNote
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden w-full bg-gray-800 py-4 flex flex-col items-center gap-4 text-white">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "text-teal underline" : "text-white"}`
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/aboutUs"
            className={({ isActive }) =>
              `${isActive ? "text-teal underline" : "text-white"}`
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            AboutUs
          </NavLink>
          <NavLink
            to="/addNotes"
            className={({ isActive }) =>
              `${isActive ? "text-teal underline" : "text-white"}`
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            AddNote
          </NavLink>
        </div>
      )}
    </>
  );
};

export default Header;
