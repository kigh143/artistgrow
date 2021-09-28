import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Project from "../components/Project";

const ProjectDetails = () => {
  return (
    <div className="container bg-gray-800 p-0">
      <Header />

      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="my-10 text-white">
            <img src="./project.jpg" style={{ width: "100%", height: 250 }} />
            <br />
            <div className="flex justify-between items-center">
              <div>
                <div className="flex items-center">
                  <h1 className="text-3xl font-bold">Project title</h1>
                  <span className="text-green-500 ml-4">by katende Hakim</span>
                </div>
                <br />
                <p>
                  <span className="badge bg-success mr-2">Primary</span>
                  <span className="badge bg-success mr-2">Secondary</span>
                  <span className="badge bg-success mr-2">Success</span>
                  <span className="badge bg-success mr-2">Danger</span>
                </p>
              </div>
              <div></div>
            </div>
          </div>
          <div>
            <p className="my-4 text-white">
              Concerts are usually small affairs with a smaller audience. They
              are often held in a churchyard, usually in the late afternoon.
              They are held in a church, usually in a churchyard, or in a
              churchyard. They can be held in a churchyard or in a churchyard,
              but usually in a churchyard. They are held on the same day or in
              the same week. Concerts are usually small affairs with a smaller
              audience. They are often held in a churchyard, usually in the late
              afternoon. They are held in a church, usually in a churchyard, or
              in a churchyard. They can be held in a churchyard or in a
              churchyard, but usually in a churchyard. They are held on the same
              day or in the same week.
            </p>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="p-2 m-2 bg-white">
                <h3>Silver</h3>
                <p>
                  <small>Get 200 artist-grow points</small>
                </p>
                <p>
                  <small>Access to 2 tracks on the album </small>
                </p>
                <h1 className="font-bold">
                $50 - $500 
                </h1>
              </div>
            </div>
            <div className="col-md-4">
            <div className="p-2 m-2 bg-white">
                <h3>Brozen</h3>
                <p>
                  <small>Get 500 artist-grow points</small>
                </p>
                <p>
                  <small>Access to  6 tracks on the album </small>
                </p>
                <h1 className="font-bold">
                $501 - $1000 
                </h1>
              </div>
            </div>
            <div className="col-md-4">
            <div className="p-2 m-2 bg-white">
                <h3>Gold</h3>
                <p>
                  <small>Get 1000 artist-grow points</small>
                </p>
                <p>
                  <small>Access to all tracks on the album  </small>
                </p>
                <h1 className="font-bold">
                $1000 - $3000
                </h1>
              </div>
            </div>
            <div className="col-md-12 my-10 text-center">
              <button className="btn btn-light btn-lg">
                <small className="text-green-400">PROCEED TO PAYMENT</small>
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
