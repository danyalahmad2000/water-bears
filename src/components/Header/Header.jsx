import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import logo from "../../assets/images/water-bears.png"

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/faq",
    display: "FAQ",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/breed",
    display: "Breed",
  },
];

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header className="sticky-header">
      <div className="max-w-full  h-[100px] flex md:pr-2 lg:pr-2">
        <div className="container mx-auto flex flex-row justify-between items-center">
          <div className="w-[88px] h-[60px] flex items-center justify-center">
            <img className='w-full h-full' src={logo} alt="" />
          </div>
          <div className="hidden md:flex items-center">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className="font-[400] text-[24px] px-[56px]"
                activeClassName="font-bold"
                exact
              >
                {link.display}
              </NavLink>
            ))}
          </div>
          <div className="flex flex-row gap-[16px]">
            <div className="flex justify-center items-center size-[30px] md:size-[40px] bg-[#42bfe8] rounded-lg">
              <FaTwitter className="size-[25px]" />
            </div>
            <div className="flex justify-center items-center size-[30px] md:size-[40px] bg-[#42bfe8] rounded-lg">
              <FaDiscord className="size-[25px]" />
            </div>
            <div className="flex justify-center items-center size-[30px] md:size-[40px] bg-[#42bfe8] rounded-lg">
              <FaTelegramPlane className="size-[25px]" />
            </div>
          </div>
          <button className="md:hidden" onClick={toggleNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-auto mr-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {showNav && (
        <div className="bg-black w-full py-2 px-4 md:hidden">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className="block py-2 px-4 text-[20px] font-[400] text-center"
              activeClassName="font-bold"
              exact
              onClick={toggleNav}
            >
              {link.display}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
