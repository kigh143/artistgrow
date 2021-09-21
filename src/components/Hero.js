import React, { Component } from "react";

export class Hero extends Component {
  render() {
    return (
      <div
        style={{ height: "70vh", width: "100%" }}
        className="bg-green-100 flex justify-center items-center flew-col"
      >
        <div className="text-center">
          <h1 className="text-5xl uppercase font-bold">
            Be a true fan of your <br />
            favorite artist.
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
  }
}

export default Hero;
