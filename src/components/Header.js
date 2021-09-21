import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  return (
    <div>
      <div className="text-center bg-green-800 py-3">
        <div>
          <b className="text-white text-3xl">ArtistGrow</b>
        </div>
      </div>
      <div className="py-3 flex justify-center shadow bg-white">
        <div className="flex items-center">
          <Link to="/" className="mx-4 font-bold uppercase">
            Home
          </Link>
          <Link to="/artists" className="mx-4 font-bold uppercase">
            Artists
          </Link>
          <Link to="/projects" className="mx-4 font-bold uppercase">
            Projects
          </Link>
          <Link to="/about" className="mx-4 font-bold uppercase">
            About
          </Link>
          <Link to="/start" className="mx-4 font-bold uppercase">
            Start Project
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
