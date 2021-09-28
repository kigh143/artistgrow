import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";

export class Artist extends Component {
  render() {
    return (
      <div style={{ position: "relative" }}>
        <img src="/art.jpg" style={{ width: "100%" }} />
        <div
          className="flex justify-between items-end"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: 10,
            backgroundColor: "rgba(255,255,255,.1)",
          }}
        >
          <div>
            <h1 className="font-bold text-green-500 my-6">Ige Martins</h1>
            <a className="btn btn-light" href="#" role="button">
              <small>Hip Hop</small>
            </a>
          </div>
          <div>
            <Link to="/" className="btn btn-success">
              <small>View Project</small>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Artist;
