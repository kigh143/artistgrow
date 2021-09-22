import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Project from "../components/Project";

const Projects = () => {
  return (
    <div className="container bg-gray-800 p-0">
      <Header />
      <div className="my-10 px-10 text-white">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((how) => (
          <div className="my-10">
            <Project />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
