import React, { Component } from "react";
import Hero from "../assets/Hero.jpg";
import HeroMobile from "../assets/HeroMobile.jpg";

import { Link } from "react-router-dom";
class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Herosection />
        <p className="p-20"></p>
        <Whyus />
      </React.Fragment>
    );
  }
}

export default Home;

function Herosection() {
  return (
    <div className="h-full max-w-full  flex flex-col overflow-hidden">
      <div className="flex flex-col items-center justify-center">
        <img
          src={Hero}
          alt={Hero}
          className="min-w-full max-h-full hidden md:block opacity-40 relative"
          loading="eager"
        />

        <img
          src={HeroMobile}
          alt={HeroMobile}
          className="h-screen max-w-6xl block md:hidden opacity-40"
        />

        <p className="absolute pb-40 text-white text-3xl md:text-7xl opacity-90 font-bold">
          Commercial Application Made{" "}
          <span className="text-yellow-400">Easier</span>
        </p>
        <Link to="/downloads" className="absolute pt-40">
          <p className="text-yellow text-2xl md:text-4xl  shadow-md shadow-white p-5 rounded-lg text-yellow-400 scale-90 hover:scale-100 cursor-pointer hover:shadow-lg hover:shadow-white transition-all ease-in-out duration-300">
            Begin your Journey
          </p>
        </Link>
      </div>
    </div>
  );
}

function Whyus() {
  return (
    <div className="flex flex-col items-center m-2 rounded-lg bg-neutral-800 p-5 h-fit md:h-96">
      <h1 className="text-yellow-400 text-6xl">What are We</h1>
      <div className="flex  flex-col h-full w-full relative">
        <div className="text-gray-600 text-center  md:absolute md:left-0 md:top-0 md:w-2/5 group hover:cursor-pointer">
          <h1 className="text-5xl pb-4 md:scale-75 group-hover:scale-100 transition-all ease-in-out duration-200">
            Built for <br />
            Commercial
          </h1>
          <p className="text-white md:text-neutral-800 group-hover:text-white md:group-hover:text-xl transition-all ease-in-out duration-200 mb-8 md:mb-0 border-b-2 border-white md:border-b-0">
            Commercing is built by Commercial Students, and hence all the
            material is student friendly.
          </p>
        </div>

        <div className="text-gray-600 text-center  md:absolute md:right-0 md:top-0 md:w-2/5 group hover:cursor-pointer">
          <h1 className="text-5xl pb-4 md:scale-75 group-hover:scale-100 transition-all ease-in-out duration-200">
            Formed for <br />
            Syllabus
          </h1>
          <p className="text-white md:text-neutral-800 group-hover:text-white md:group-hover:text-xl transition-all ease-in-out duration-200 mb-8 md:mb-0 border-b-2 border-white md:border-b-0">
            Commercing adheres to the latest Syllabus, use it without worrying
            about doing extra.
          </p>
        </div>
        <div className="text-gray-600 text-center  md:absolute md:bottom-0 md:right-0 md:left-0 md:ml-auto md:mr-auto md:w-2/5 group hover:cursor-pointer">
          <h1 className="text-5xl pb-4 md:scale-75 group-hover:scale-100 transition-all ease-in-out duration-200">
            Made for Speed
          </h1>
          <p className="text-white md:text-neutral-800 group-hover:text-white md:group-hover:text-xl transition-all ease-in-out duration-200 mb-8 md:mb-0 border-b-2 border-white md:border-b-0">
            The Community is extremely speed, so always expect new material
            constantly.
          </p>
        </div>
      </div>
    </div>
  );
}
