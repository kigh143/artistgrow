import React, { Component } from "react";

const Hero = ({ title }) => {
  return (
    <div
      style={{ height: "70vh", width: "100%" }}
      className="bg-green-100 flex justify-center items-center flew-col"
    >
      <div className="text-center">
        <h1 className="text-5xl uppercase font-bold w-1/2 text-center mx-auto">
          {title}
        </h1>
        <div className="py-10">
          <button className="btn btn-success mr-4 btn-lg">
            FUND A PROJECT
          </button>
          <button className="btn btn-outline-success btn-lg">
            START A PROJECT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
