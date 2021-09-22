import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Project from "../components/Project";

const About = () => {
  return (
    <div className="container bg-gray-800 p-0">
      <Header />
      <div className="my-10 px-10 text-white">
        <div className="py-10">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="my-10">
                <h1 className="text-2xl font-bold text-green-300">
                  MEET THE BRAINS
                </h1>
                <p>BEHIND THE SCENES OF ARTISTGROW</p>
              </div>
              <div>
                <p>
                  Chris Robinson is a Grammy Award-winning songwriter, rhythm
                  guitarist, and recording artist. He has a long history of
                  writing and performing music in all genres. He has been
                  described as one of the most important songwriters in rock
                  history. He has collaborated with artists such as David Bowie,
                  George Benson, and John Prine. He also collaborated with
                  Stevie Wonder, Chuck Berry, and Billy Joel.
                </p>
                <br />
                <p>
                  Singer/songwriter James Brown was born on May 8, 1962 in
                  Cincinnati, Ohio. After moving to Los Angeles and eventually
                  finding success in the music industry, he went on to release
                  five albums, including his first solo album, Soul Motown in
                  the early 1980s.{" "}
                </p>
                <br />
                <p>
                  n 1987, he released this debut album, Soul Music, which was
                  produced by his own band, Chris Robinson is a Grammy
                  Award-winning songwriter, rhythm guitarist, and recording
                  artist. He has a long history of writing and performing music
                  in all genres. He has been described as one of the m.
                </p>
              </div>

              <div className="py-10 my-10">
                <div className="row">
                  <div className="col-md-3"></div>
                  <div className="col-md-3"></div>
                  <div className="col-md-3"></div>
                  <div className="col-md-3"></div>
                </div>
              </div>

              <div className="py-10"></div>

              <div className="mb-6">
                <h1 className="text-2xl font-bold text-green-300">
                  CONTACT US
                </h1>
                <p>Reach out to us for any complaints or enquiries.</p>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      Full name
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Example textarea
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div className="py-10">
                <button className=" btn btn-success btn-lg">
                  Send Message
                </button>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
