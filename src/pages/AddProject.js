import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Project from "../components/Project";

const AddProjects = () => {
  return (
    <div className="container bg-gray-800 p-0">
      <Header />
      <div className="row my-10 text-white">
        <div className="col-md-3"></div>
        <div className="col-md-6 py-10 text-center">
          <h2 className="text-4xl font-bold">Achieve your dream project</h2>
          <div className="flex justify-between my-10">
            <span className="font-bold">Add Artists</span>
            <span className="font-bold text-green-500">Add Project</span>
            <span className="font-bold">Add Rewards</span>
          </div>

          <hr />
        </div>
        <div className="col-md-3"></div>

        <div className="col-md-3"></div>
        <div className="col-md-6 py-10">
          <h2 className="text-green-500 font-bold text-2xl">PROJECT DETAILS</h2>
          <p>TELL US ABOUT YOUR PROJECT</p>
        </div>
        <div className="col-md-3"></div>

        <div className="col-md-3"></div>
        <div className="col-md-6">
          <form class="row g-3">
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">
                Email
              </label>
              <input type="email" class="form-control" id="inputEmail4" />
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">
                Password
              </label>
              <input type="password" class="form-control" id="inputPassword4" />
            </div>
            <div class="col-12">
              <label for="inputAddress" class="form-label">
                Address
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div class="col-12">
              <label for="inputAddress2" class="form-label">
                Address 2
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div class="col-md-6">
              <label for="inputCity" class="form-label">
                City
              </label>
              <input type="text" class="form-control" id="inputCity" />
            </div>
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                State
              </label>
              <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="col-md-2">
              <label for="inputZip" class="form-label">
                Zip
              </label>
              <input type="text" class="form-control" id="inputZip" />
            </div>
            <div class="col-12">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label class="form-check-label" for="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">
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
