import React from "react";
import { Link, NavLink } from "react-router";
import logoImage from '../assets/logo.png'
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-9 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/apps'>Apps</NavLink>
            </li>
            <li>
              <NavLink to='/installation'>Installation</NavLink>
            </li>
          </ul>
        </div>
        <Link to='/' className=" flex items-center">
        <img src={logoImage} className="w-[48px]" alt="" />
        <h1 className=" text-xl uppercase font-semibold bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Hero.IO</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="text-gray-700 font-bold text-md " to='/'>Home</Link>
          </li>
          <li>
            <Link className="text-gray-700 font-bold text-md " to='/apps'>Apps</Link>
          </li>
          <li>
            <Link className="text-gray-700 font-bold text-md " to='/installation'>Installation</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a href="https://github.com/TalhaJubair35" target="blank" className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] py-3 px-4 rounded text-gray-700 font-bold text-md ">Contribute</a>
      </div>
    </div>
  );
};

export default Navbar;
