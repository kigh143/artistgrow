import React, { Component } from "react";
import { useHistory } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Project from "../components/Project";

const AddProjects = () => {
  const history = useHistory();
  const addtrack = ( event ) => {
    event.preventDefault();
    history.push('addReward');
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
            <span className="font-bold text-green-500">Add Project</span>
            <span className="font-bold">Add Rewards</span>
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
          <form className="row g-3 p-2">
           
            <div className="col-12">
              <label for="inputAddress" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                name="full_name"
              />
            </div>
            <div className="col-md-4">
              <label for="inputEmail4" className="form-label">
                Genre
              </label>
              <input type="text" className="form-control" id="inputEmail4" name="genre" />
            </div>
            <div className="col-md-4">
              <label for="inputPassword4" className="form-label">
                Number of tracks
              </label>
              <input type="text" className="form-control" id="inputPassword4" name="stage_name" />
            </div>
            <div className="col-md-4">
              <label for="inputPassword4" className="form-label">
                project type
              </label>
              <input type="text" className="form-control" id="inputPassword4" name="stage_name" />
            </div>
            <div className="col-12">
              <label for="inputAddress2" className="form-label">
                Description
              </label>
              <textarea cols={10} rows={3} className="form-control" ></textarea>
            </div>
          
            <div className="col-12">
              <button type="submit" className="btn btn-success" onClick={addtrack}>
                Register
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

export default AddProjects;
