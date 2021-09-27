import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Project = () => {
  return (
    <div className="row">
      <div className="col-md-4">
        <img src="./art.jpg" style={{ height: 500 }} />
      </div>
      <div className="col-md-8 py-10">
        <p>
          <b>19-09-2021</b>
        </p>
        <div className="flex items-center my-2">
          <h1 className="text-3xl font-bold">Project title</h1>
          <span className="text-green-500 ml-4">by katende Hakim</span>
        </div>
        <br />
        <p>
          <span className="badge bg-success mr-2">Primary</span>
          <span className="badge bg-success mr-2">Secondary</span>
          <span className="badge bg-success mr-2">Success</span>
        </p>
        <br />
        <p className="my-4">
          Concerts are usually small affairs with a smaller audience. They are
          often held in a churchyard, usually in the late afternoon. They are
          held in a church, usually in a churchyard, or in a churchyard. They
          can be held in a churchyard or in a churchyard, but usually in a
          churchyard. They are held on the same day or in the same week.
          Concerts are usually small affairs with a smaller audience. They are
          often held in a churchyard, usually in the late afternoon. 
        </p>
        <Link to="/project/12345" className="btn btn-success btn-lg">
          Fund Project
        </Link>
      </div>
    </div>
  );
};

export default Project;
