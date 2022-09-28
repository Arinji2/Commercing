import React, { Component } from "react";
import logo from "../assets/logo.png";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <div
          className="bg-neutral-900 text-white text-3xl pr-3 pl-3 fixed top-0 w-screen"
          id="navbar"
        >
          <ul className="sticky flex flex-col md:flex-row md:justify-between items-start md:items-center p-2">
            <li className="bg-neutral-900 flex items-center h-24 w-24">
              <img
                src={logo}
                alt={logo}
                className="hover:scale-100 md:scale-75 transition-all ease-in-out duration-300 hover:cursor-pointer"
              ></img>
            </li>
            <li className="hover:text-yellow-400 transition-all ease-in-out duration-300 hover:scale-100 md:scale-75  hover:cursor-pointer">
              About
            </li>
            <li className="hover:text-yellow-400 transition-all ease-in-out duration-300 hover:scale-100 md:scale-75  hover: hover:cursor-pointer">
              Downloads
            </li>
            <li className="hover:text-yellow-400 transition-all ease-in-out duration-300 hover:scale-100 md:scale-75  hover: hover:cursor-pointer">
              Team
            </li>
            <li className="hover:text-yellow-400 transition-all ease-in-out duration-300 hover:scale-100 md:scale-75  hover: hover:cursor-pointer mr-10  pr-3">
              Contact
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
