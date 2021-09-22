import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Artist from "../components/Artist";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import How from "../components/How";
import Project from "../components/Project";

const Home = () => {
  return (
    <div className="container bg-gray-800 p-0">
      <Header />
      <Hero title="Be a true fan of your favorite artist." />
      <div className="py-10 px-10 my-10 text-white">
        <div className="my-4">
          <h1 className="text-2xl font-bold text-green-300">WHY ARTIST GROW</h1>
          <p>WHAT MAKES US DIFFERENT</p>
        </div>

        <div className="row text-white">
          <div className="col-md-4 text-center">
            <div className="p-10 bg-gray-600 m-2 shadow">
              <div
                style={{ height: 70, width: 70, borderRadius: 35 }}
                className="bg-green-200 mx-auto my-4"
              ></div>
              <h2 className="text-2xl font-bold text-green-300 my-2">
                Reward-based funding
              </h2>
              <p>
                In addition, he has released his first solo album and his first
                album as a duo. He has toured the United States, Europe and
                South America.
              </p>
            </div>
          </div>

          <div className="col-md-4 text-center">
            <div className="p-10 bg-gray-600 m-2 shadow">
              <div
                style={{ height: 70, width: 70, borderRadius: 35 }}
                className="bg-green-200 mx-auto my-4"
              ></div>
              <h2 className="text-2xl font-bold text-green-300 my-2">
                Manage access.
              </h2>
              <p>
                In addition, he has released his first solo album and his first
                album as a duo. He has toured the United States, Europe and
                South America.
              </p>
            </div>
          </div>

          <div className="col-md-4 text-center">
            <div className="p-10 bg-gray-600 m-2 shadow">
              <div
                style={{ height: 70, width: 70, borderRadius: 35 }}
                className="bg-green-200 mx-auto my-4"
              ></div>
              <h2 className="text-2xl font-bold text-green-300 my-2">
                Manage access.{" "}
              </h2>
              <p>
                In addition, he has released his first solo album and his first
                album as a duo. He has toured the United States, Europe and
                South America.
              </p>
            </div>
          </div>

          <div className="col-md-12 text-center my-10">
            <Link to="/about" className="btn btn-light btn-lg">
              Read More
            </Link>
          </div>
        </div>

        <div className="my-10">
          <hr style={{ borderColor: "#fff" }} className="my-4" />
          <h1 className="text-2xl font-bold text-green-300">HOW IT WORKS</h1>
          <p>HOW IT WORKS STEP BY STEP GUIDE ON HOW TO FUND A PROJECT.</p>
          <br />
          <br />
          <div className="row">
            {[
              {
                title: "Create an account.",
                msg: "Sign up using your email or third-party authentications",
              },
              {
                title: "Discover projects.",
                msg: "Discover projects.Sign up using your email or third-party authentications",
              },
              {
                title: "Select a project",
                msg: "Sign up using your email or third-party authentications",
              },
              {
                title: "Choose a funding option",
                msg: "Sign up using your email or third-party authentications",
              },
              {
                title: "Choose a funding option",
                msg: "Sign up using your email or third-party authentications",
              },
            ].map((how) => (
              <div className="col-md-6">
                <How key={how} how={how} />
              </div>
            ))}
          </div>
        </div>

        <div className="my-10">
          <br />
          <br />
          <br />
          <hr style={{ borderColor: "#fff" }} className="my-4" />
          <div className="flex justify-between">
            <div>
              <h1 className="text-2xl font-bold text-green-300">
                FEATURED ARTISTS
              </h1>
              <p>ARTISTS FROM ALL OVER THE WORLD</p>
            </div>
            <div>
              <Link to="/artists" className="btn btn-lg btn-light">
                View All
              </Link>
            </div>
          </div>

          <br />
          <br />
          <div className="row">
            {[1, 2, 3].map((how) => (
              <div className="col-md-4 my-4">
                <Artist />
              </div>
            ))}
          </div>
        </div>

        <div className="my-10">
          <br />
          <br />

          <hr style={{ borderColor: "#fff" }} className="my-4" />

          <div className="flex justify-between">
            <div>
              <h1 className="text-2xl font-bold text-green-300">
                FEATURED PROJECTS
              </h1>
              <p>HELP YOUR FAVORITE ARTISTS BRING THEIR PROJECT TO LIVE.</p>
            </div>
            <div>
              <Link to="/projects" className="btn btn-lg btn-light">
                View All
              </Link>
            </div>
          </div>
          <br />
          <br />
          {[1, 2].map((how) => (
            <div className="my-10">
              <Project />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
