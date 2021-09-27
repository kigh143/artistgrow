import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  return (
    <div>
      <div className="text-center bg-green-800 py-10">
        <div>
          <b className="text-white text-3xl">ArtistGrow</b>
        </div>
      </div>
      <div className="py-3 flex justify-center shadow bg-white">
        <div className="flex items-center">
          <Link to="/home" className="mx-4 font-bold uppercase">
            <small>Home</small>
          </Link>
          <Link to="/artists" className="mx-4 font-bold uppercase">
            <small>Artists</small>
          </Link>
          <Link to="/projects" className="mx-4 font-bold uppercase">
            <small>Projects</small>
          </Link>
          <Link to="/about" className="mx-4 font-bold uppercase">
            <small>About</small>
          </Link>
          <Link to="/start" className="mx-4 font-bold uppercase">
            <small>Start Project</small>
          </Link>
          <div className="px-10">
            <div className="h-10 w-10 bg-green-700 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
