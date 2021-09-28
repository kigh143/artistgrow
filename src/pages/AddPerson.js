import React, { useState} from "react";
import { useHistory } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Project from "../components/Project";

const AddPerson = () => {

  const [full_name, setFull_name] = useState("");
  const [genre, setGenre] = useState("");
  const [spotify_profile, setSpotify_profile] = useState("");
  const [gender, setGender] = useState("");

  const history  = useHistory();

  const addUser = (event) =>{
    event.preventDefault();

    const payload = {
      full_name, genre, spotify_profile, gender
    } 
  console.log(payload)
    history.push("/addProject")
    

  }

  return (
    <div className="container bg-gray-800 p-0">
      <Header />
      <div className="row my-10 text-white">
        <div className="col-md-3"></div>
        <div className="col-md-6 py-10 text-center">
          <h2 className="text-4xl font-bold">Achieve your dream project</h2>
          <div className="flex justify-between my-10">
            <span className="font-bold text-green-500">Add Artists</span>
            <span className="font-bold">Add Project</span>
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
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                name="full_name"
                onChange={(e) => setFull_name(e.target.value)}

              />
            </div>
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Genre
              </label>
              <input type="text" className="form-control" id="inputEmail4" name="genre" 
                onChange={(e) => setGenre(e.target.value)}
                />
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Gender
              </label>
              <input type="text" className="form-control" id="inputPassword4" name="stage_name" 
                onChange={(e) => setGender(e.target.value)}
                />
            </div>
            <div className="col-12">
              <label for="inputAddress2" className="form-label">
                Spotify profile
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                name="spotify_profile"
                onChange={(e) => setSpotify_profile(e.target.value)}

              />
            </div>
          
            <div className="col-12">
              <button type="submit" className="btn btn-success" onClick={addUser}>
                Next
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

export default AddPerson;
