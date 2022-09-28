import React, { Component } from "react";
import Hero from "../assets/Hero.jpg";
class Home extends Component {
  state = {};
  render() {
    return (
      <div className="h-2 max-w-full  flex flex-col items-center">
        <div className="">
          <img
            src={Hero}
            alt={Hero}
            className="min-w-full max-h-full object-scale-down"
          />
        </div>
        <p className="relative top-96 pt-96 text-white">EE</p>
      </div>
    );
  }
}

export default Home;
