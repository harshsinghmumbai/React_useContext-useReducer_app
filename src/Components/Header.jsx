import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCartPlus } from "react-icons/fa";
import clsx from "clsx";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [State, setState] = useState(false);
  const list = [
    { title: "Home", navlink: "/" },
    { title: "About", navlink: "about" },
    { title: "Contact", navlink: "contact" },
  ];
  return (
    <>
      <header>
        <div className="flex justify-between p-3 border shadow-lg rounded-xl">
          <div className="flex items-center space-x-2 md:space-x-8">
            <GiHamburgerMenu
              onClick={() => {
                setState(true);
              }}
              id="ham_burger"
              className="text-2xl lg:hidden"
            />
            <img
              id="Logo"
              src="Images/logo.jpg"
              alt="Images"
              className="object-cover object-center w-[5rem] h-[2.1rem] md:object-cover md:w-32 md:h-10 rounded-lg"
            />
            <div className="hidden lg:block">
              <ul className="flex space-x-6 ml-8">
                {list.map((elem, id) => {
                  const { title, navlink } = elem;
                  return (
                    <li
                      key={id}
                      className="text-xl text-gray-500 font-mono cursor-pointer"
                    >
                      <NavLink to={navlink}>{title}</NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div
            id="mobile_navbar"
            className={clsx(
              "fixed top-0 left-0 w-screen h-full bg-black/20 backdrop-blur-sm duration-300 -translate-x-full",
              State && "translate-x-0" //toggle on true//
            )}
          >
            <div className="bg-white w-[70%] h-full p-7">
              <RxCross1
                id="Cross-icon"
                onClick={() => {
                  setState(false);
                }}
                className="text-2xl mb-5 cursor-pointer "
              />
              <ul className="space-y-4 font-serif">
                {list.map((elem, i) => {
                  const { title, navlink } = elem; //destructed in react //
                  return (
                    <li key={i} className="text-lg font-bold cursor-pointer">
                      <NavLink to={navlink}> {title}</NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div
            className="flex justify-center items-center space-x-4 lg:space-x-6 md:space-x-8"
            id="user"
          >
            <FaUserCircle className="text-2xl" />
            <FaCartArrowDown className="text-2xl" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
