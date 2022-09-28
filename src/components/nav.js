import React, { Component } from "react";
import logo from "../assets/logo.png";
import { faBars } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Downloads from "../pages/downloads";
import Team from "../pages/team";
import Contact from "../pages/contact";

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
      menuParent.style.backgroundColor = "transparent";
    }
    button.classList.toggle("fa-spin");
    if (menuParent.style.backgroundColor === "transparent") {
      setTimeout(() => {
        button.classList.toggle("fa-spin");
        button.classList.toggle("fa-rotate-90");
      }, 1000);
    } else {
      setTimeout(() => {
        button.classList.toggle("fa-spin");

        button.classList.toggle("fa-rotate-90");
      }, 500);
    }
  }
  render() {
    return (
      <div>
        <Router>
          <div
            className="bg-transparent  text-white text-2xl md:text-3xl pr-3 pl-3 fixed top-0 w-screen z-10"
            id="menuParent"
          >
            <ul className="sticky flex flex-col md:flex-row md:justify-between items-start md:items-center p-2">
              <Link to="/">
                <li
                  id="logo"
                  className="bg-inherit flex items-center h-24 w-24"
                >
                  <img
                    src={logo}
                    alt={logo}
                    className="hover:scale-100 md:scale-75 transition-all ease-in-out duration-300 hover:cursor-pointer"
                  ></img>
                </li>
              </Link>
              <div
                className="sticky flex opacity-0 md:opacity-100 md:flex flex-col md:flex-row md:justify-between items-end pl-20 pr-10 md:items-center p-2 w-screen transition-opacity ease-out duration-500"
                id="navbar"
              >
                <Link to="/about">
                  <li
                    onClick={() => {}}
                    className="hover:text-yellow-400 transition-all ease-in-out duration-300 hover:scale-100 md:scale-75  hover:cursor-pointer"
                  >
                    About
                  </li>
                </Link>
                <Link to="/downloads">
                  <li className="hover:text-yellow-400 transition-all ease-in-out duration-300 hover:scale-100 md:scale-75  hover: hover:cursor-pointer">
                    Downloads
                  </li>
                </Link>
                <Link to="/team">
                  <li className="hover:text-yellow-400 transition-all ease-in-out duration-300 hover:scale-100 md:scale-75  hover: hover:cursor-pointer">
                    Team
                  </li>
                </Link>
                <Link to="/contact">
                  <li className="hover:text-yellow-400 transition-all ease-in-out duration-300 hover:scale-100 md:scale-75  hover: hover:cursor-pointer ">
                    Contact
                  </li>
                </Link>
              </div>
            </ul>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
        <FontAwesomeIcon
          icon={faBars}
          onClick={this.handleBurgerClick}
          id="burger-button"
          className="text-white right-3 top-8 text-3xl md:hidden fixed z-10"
        />
      </div>
    );
  }
}

export default Navbar;
