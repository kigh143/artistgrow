import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Project from "../components/Project";
import { HashLink as Link } from "react-router-hash-link";


const AddReward = () => {
  const addReward =( event ) => {
      event.preventDefault();

  }
  return (
    <div className="container bg-gray-800 p-0">
      <Header />
      <div className="row my-10 text-white">
        <div className="col-md-3"></div>
        <div className="col-md-6 py-10 text-center">
          <h2 className="text-4xl font-bold">Achieve your dream project</h2>
          <div className="flex justify-between my-10">
            <span className="font-bold ">Add Artists</span>
            <span className="font-bold ">Add Project</span>
            <span className="font-bold text-green-500">Add Rewards</span>
          </div>

          <hr />
        </div>
        <div className="col-md-3"></div>

        <div className="col-md-3"></div>
        <div className="col-md-6 py-10">
          <h2 className="text-green-500 font-bold text-2xl">ARTIST DETAILS</h2>
          <p>LET US KNOW MORE ABOUT YOU</p>
        </div>
        <div className="col-md-3"></div>

        <div className="col-md-3"></div>
        <div className="col-md-6">
          <form className="g-3 p-2">
          <div className="row p-4 shadow mb-2 bg-grey-800">
          <div className="col-md-12 mb-3">
              <b className="text-green-600">Silver Package</b>
            </div>
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                AGP
              </label>
              <input type="text" className="form-control" id="inputEmail4" name="genre" />
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Tracks
              </label>
              <input type="text" className="form-control" id="inputPassword4" name="stage_name" />
            </div>
   
            <div className="col-12">
              <label for="inputAddress2" className="form-label">
                other Rewards
              </label>
              <input type="text" className="form-control" id="inputPassword4" name="stage_name" />

            </div>
          </div>

          <div className="row p-4 shadow mb-2 bg-grey-800">
            <div className="col-md-12 mb-3">
              <b className="text-green-600">Brozen Package</b>
            </div>
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                AGP
              </label>
              <input type="text" className="form-control" id="inputEmail4" name="genre" />
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Tracks
              </label>
              <input type="text" className="form-control" id="inputPassword4" name="stage_name" />
            </div>
   
            <div className="col-12">
              <label for="inputAddress2" className="form-label">
                other Rewards
              </label>
              <input type="text" className="form-control" id="inputPassword4" name="stage_name" />

            </div>
          </div>

          <div className="row p-4 shadow mb-2 bg-grey-800">
          <div className="col-md-12 mb-3">
              <b className="text-green-600">Gold Package</b>
            </div>
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                AGP
              </label>
              <input type="text" className="form-control" id="inputEmail4" name="genre" />
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Tracks
              </label>
              <input type="text" className="form-control" id="inputPassword4" name="stage_name" />
            </div>
   
            <div className="col-12">
              <label for="inputAddress2" className="form-label">
                other Rewards
              </label>
              <input type="text" className="form-control" id="inputPassword4" name="stage_name" />
            </div>
          </div>

            <div className="col-12">
              <Link to="/addProject" className="btn btn-light">
                Back
              </Link>
              <button type="submit" className="btn btn-success" onClick={addReward}>
                Apply
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
      <Footer />
    </div>
  );
};

export default AddReward;
