import React, { Component } from "react";
import logo from "../assets/logo.png";
import { faBars } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Navbar extends Component {
  state = {};
  handleBurgerClick() {
    let menu = document.getElementById("navbar");
    let menuParent = document.getElementById("menuParent");
    let button = document.getElementById("burger-button");
    if (menu.style.opacity !== "1") {
      menu.style.opacity = "1";
      menuParent.style.backgroundColor = "rgb(23 23 23 / var(--tw-bg-opacity))";
    } else {
      menu.style.opacity = "0";
      menuParent.style.backgroundColor = "black";
    }
    button.classList.toggle("fa-rotate-90");
  }
  render() {
    return (
      <div>
        <div
          className="bg-black md:bg-neutral-900  text-white text-2xl md:text-3xl pr-3 pl-3 fixed top-0 w-screen"
          id="menuParent"
        >
          <ul className="sticky flex flex-col md:flex-row md:justify-between items-start md:items-center p-2">
            <li id="logo" className="bg-inherit flex items-center h-24 w-24">
              <img
                src={logo}
                alt={logo}
                className="hover:scale-100 md:scale-75 transition-all ease-in-out duration-300 hover:cursor-pointer"
              ></img>
            </li>
            <div
              className="sticky flex opacity-0 md:opacity-100 md:flex flex-col md:flex-row md:justify-between items-end pr-10 md:items-center p-2 w-screen md:pl-7 transition-opacity ease-out duration-500"
              id="navbar"
            >
              <li className="hover:text-yellow-400 transition-all ease-in-out duration-300 hover:scale-100 md:scale-75  hover:cursor-pointer">
                About
              </li>
              <li className="hover:text-yellow-400 transition-all ease-in-out duration-300 hover:scale-100 md:scale-75  hover: hover:cursor-pointer">
                Downloads
              </li>
              <li className="hover:text-yellow-400 transition-all ease-in-out duration-300 hover:scale-100 md:scale-75  hover: hover:cursor-pointer">
                Team
              </li>
              <li className="hover:text-yellow-400 transition-all ease-in-out duration-300 hover:scale-100 md:scale-75  hover: hover:cursor-pointer md:mr-10  md:pr-3">
                Contact
              </li>
            </div>
          </ul>
        </div>
        <FontAwesomeIcon
          icon={faBars}
          onClick={this.handleBurgerClick}
          id="burger-button"
          className="text-white right-3 top-8 text-3xl md:hidden fixed"
        />
      </div>
    );
  }
}

export default Navbar;
