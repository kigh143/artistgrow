import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  return (
    <div>
      <div
        style={{ height: 200, position: "relative" }}
        className="bg-gray-800 border-t"
      >
        <div className="m-auto w-1/2 justify-center items-center">
          <div
            style={{
              padding: 20,
              borderRadius: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ height: 10 }}></div>
            <h1 className="text-green-400 text-center text-4xl font-bold">
              Join our mailing list
            </h1>
            <p className="text-white text-center">
              Subtribe to our newsletter to receive weekly new and <br />
              article on your favorite artists
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#fff",
              padding: 20,
              borderRadius: 20,
              flexDirection: "row",
              alignItems: "center",
              position: "absolute",
              bottom: -40,
              width: "50%",
            }}
          >
            <div class="input-group py-1">
              <input
                type="text"
                class="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ height: 250 }}
        className="bg-green-700 py-10 px-10 flex justify-center items-center"
      >
        <div
          className="flex py-10 mx-auto"
          style={{ borderBottomColor: "#f1f1f1", borderBottomWidth: 0.5 }}
        >
          <Link to="/" className="mx-3 text-white uppercase font-bold">
            <small>Home</small>
          </Link>
          <Link to="/artists" className="mx-3 text-white uppercase font-bold">
            <small>Artists</small>
          </Link>
          <Link to="/projects" className="mx-3 text-white uppercase font-bold">
            <small>Projects</small>
          </Link>
          <Link
            to="/start_project"
            className="mx-3 text-white uppercase font-bold"
          >
            <small>Start Project</small>
          </Link>
          <Link
            to="/fund_project"
            className="mx-3 text-white uppercase font-bold"
          >
            <small>Fund a Project</small>
          </Link>
          <Link to="/account" className="mx-3 text-white uppercase font-bold">
            <small>My Account</small>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
