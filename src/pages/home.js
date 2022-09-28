import React, { Component } from "react";
import Hero from "../assets/Hero.jpg";
import HeroMobile from "../assets/HeroMobile.jpg";
import { Link } from "react-router-dom";
class Home extends Component {
  state = {};
  render() {
    return (
      <div className="h-full max-w-full  flex flex-col items-center ">
        <div className="">
          <img
            src={Hero}
            alt={Hero}
            className="min-w-full max-h-full hidden md:block opacity-40"
          />
          <img
            src={HeroMobile}
            alt={HeroMobile}
            className="min-w-full h-screen block md:hidden opacity-40 blur-sm"
          />
          <div className="flex flex-col items-center">
            <p className="absolute md:bottom-96 top-72  text-white text-3xl md:text-7xl opacity-90 font-bold">
              Commercial Application Made{" "}
              <span className="text-yellow-400">Easier</span>
            </p>
            <Link to="/downloads" className="flex flex-col items-center">
              <p className="absolute bottom-40 text-yellow text-2xl md:text-4xl  shadow-md shadow-white p-5 rounded-lg text-yellow-400 scale-90 hover:scale-100 cursor-pointer hover:shadow-lg hover:shadow-white transition-all ease-in-out duration-300">
                Begin your Journey
              </p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
