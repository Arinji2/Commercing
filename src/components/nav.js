import React, { Component } from "react";
import logo from "../assets/money.svg";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="bg-neutral-900 text-white text-3xl pr-3 pl-3">
          <ul className="flex flex-col md:flex-row  md:justify-between items-start md:items-center p-2">
            <li className="mr-10  bg-neutral-900 flex flex-row items-center h-20 w-20 hover:text-purple-400 transition-all ease-in-out duration-300">
              <img src={logo} alt={logo} className="hidden md:block"></img>
              <p className="text-purple-400 text-3xl md:text-2xl ">
                Commercing
              </p>
            </li>
            <li className="hover:text-purple-400 transition-all ease-in-out duration-300 hover:scale-100 scale-75  hover:cursor-pointer">
              About
            </li>
            <li className="hover:text-purple-400 transition-all ease-in-out duration-300 hover:scale-100 scale-75  hover: hover:cursor-pointer">
              Downloads
            </li>
            <li className="hover:text-purple-400 transition-all ease-in-out duration-300 hover:scale-100 scale-75  hover: hover:cursor-pointer">
              Team
            </li>
            <li className="hover:text-purple-400 transition-all ease-in-out duration-300 hover:scale-100 scale-75  hover: hover:cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
