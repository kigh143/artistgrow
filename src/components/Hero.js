import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";

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
          <Link to="/projects" className="btn btn-success mr-4 btn-lg">
            FUND A PROJECT
          </Link>
          <Link to="/addPerson" className="btn btn-outline-success btn-lg">
            START A PROJECT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
