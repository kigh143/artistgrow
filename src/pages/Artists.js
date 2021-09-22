import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Artist from "../components/Artist";

const Artists = () => {
  return (
    <div className="container bg-gray-800 p-0">
      <Header />
      <div className="my-10 px-10 text-white">
        <div className="row">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((how) => (
            <div className="col-md-4 my-4">
              <Artist />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Artists;
