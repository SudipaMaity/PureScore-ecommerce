import React, { useState } from "react";
import Logo from "../../assets/Logo/PureScoreLogo.svg";
import Cart from "../../assets/icons/cart.svg";
import { Link } from "react-router-dom";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { useDispatch } from "react-redux";
import { setCartModal } from "../../Store/Products/productsSlice";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch()
  const handleOpen =()=>{
   dispatch(setCartModal())
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickAway = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <nav className="bg-primary border-gray-200 dark:bg-gray-900 dark:border-gray-700 font-atype">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-12" alt="PureScore Logo" />
          </Link>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`md:block md:w-auto ${
              isMenuOpen
                ? "absolute top-full left-0 right-0 z-50 bg-white w-[90%] m-auto rounded-xl"
                : "hidden"
            }`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col md:items-center sm:items-start font-medium p-4 md:p-0 mt-4 md:mt-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-4 rtl:space-x-reverse md:border-0 md:bg-primary dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/products"
                  className="block py-2 px-4  md:text-white sm:text-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  to="/myproducts"
                  className="block py-2 px-4  md:text-white sm:text-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0"
                >
                  My Products
                </Link>
              </li>
              <li>
                <Link
                  to="/addProduct"
                  className="block py-2 px-4  md:text-white sm:text-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0"
                >
                 Add Products
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-4  md:text-white sm:text-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0"
                >
                  About
                </Link>
              </li>
              <li className="relative">
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center  mr-auto w-full py-2 px-4 md:text-white  sm:text-primary rounded md:hover:bg-transparent md:border-0 md:p-0 md:w-auto"
                  onClick={toggleDropdown}
                >
                  Explore More{" "}
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdownNavbar"
                  className={`absolute left-0 z-10 ${
                    isDropdownOpen ? "block" : "hidden"
                  } font-normal bg-white divide-y divide-gray-100  sm:text-primary rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
                >
                  <ul
                    className="py-2 text-sm  dark:text-gray-400"
                    aria-labelledby="dropdownNavbarLink"
                  >
                    <li>
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 text-primary hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 px-4  md:text-white sm:text-primary  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0"
                >
                  Contact
                </Link>
              </li>
              <li>
                <button className=" py-2 px-4 text-primary  bg-white  rounded flex gap-2 items-center " onClick={()=>handleOpen()}>
                  <img src={Cart} alt="cart" />
                  <span>Cart</span>
                </button>
              </li>
              <li>
                <Link
                  to={"/login"}
                  className=" py-2 px-4 text-primary font-semibold bg-white  rounded-full flex gap-2 items-center hover:bg-transparent hover:border hover:border-white hover:text-white transition"
                >
                  <span>Sign up</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </ClickAwayListener>
  );
};

export default Navbar;