import { Link } from "react-router-dom";

import Logo from "../../utils/images/icons/logo.jpg";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  return (
    <div
      className={`flex justify-center fixed w-full  rounded-sm ${
        scrolled ? "bg-sky-500" : ""
      } `}
    >
      <div className="navbar  px-10 xl:px-20 py-4">
        <div className="navbar-start  lg:ms-10">
          <Link to="/">
            <img src={Logo} className="w-20 h-20 rounded-full" />
          </Link>
        </div>
        <div className="navbar-end lg:flex ">
          <ul className="menu menu-horizontal px-1 flex items-center">
            <li className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300  flex  items-center mx-1 ">
              <Link
                to="/"
                className="text-sm xl:text-lg text-white hover:text-yellow-400 font-semibold  p-1.5 xl:p-4 rounded-full"
              >
                Home
              </Link>
            </li>

            <li
              id="navbar"
              className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300  flex  items-center  mx-1"
            >
              <Link
                to="/"
                className="text-sm xl:text-lg text-white hover:text-yellow-400 font-semibold  p-1.5 xl:p-4 rounded-full "
              >
                {" "}
                About Us
              </Link>
            </li>
            <li
              id="navbar"
              className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300  flex  items-center  mx-1"
            >
              <Link
                to="/"
                className="text-sm xl:text-lg text-white hover:text-yellow-400 font-semibold  p-1.5 xl:p-4 rounded-full "
              >
                Security Services
              </Link>
            </li>
            <li
              id="navbar"
              className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300  flex  items-center  mx-1"
            >
              <Link
                to="/"
                className="text-sm xl:text-lg text-white hover:text-yellow-400 font-semibold  p-1.5 xl:p-4 rounded-full "
              >
                Career
              </Link>
            </li>
            <li
              id="navbar"
              className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300  flex  items-center  mx-1"
            >
              <Link
                to="/"
                className="text-sm xl:text-lg text-white hover:text-yellow-400 font-semibold  p-1.5 xl:p-4 rounded-full "
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
