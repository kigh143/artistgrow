import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";

export class Artist extends Component {
  render() {
    return (
      <div style={{ position: "relative" }}>
        <img src="/art.jpg" style={{ width: "100%" }} />
        <div
          className="flex justify-between items-center"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: 30,
            backgroundColor: "rgba(255,255,255,.1)",
          }}
        >
          <div>
            <h1 className="font-bold text-green-500 my-6">Ige Martins</h1>
            <a class="btn btn-light" href="#" role="button">
              <small>HIP HOP</small>
            </a>
          </div>
          <div>
            <Link to="/" class="btn btn-outline-success">
              View Project
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Artist;
