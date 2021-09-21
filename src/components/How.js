import React, { Component } from "react";

const How = ({ how }) => {
  return (
    <div
      className="flex items-center p-10 my-4"
      style={{ borderColor: "#fff", borderWidth: 1 }}
    >
      <div
        style={{ height: 70, width: 70, borderRadius: 35 }}
        className="mr-4 bg-green-400"
      ></div>
      <div>
        <h3 className="font-bold text-2xl">{how.title}</h3>
        <p>{how.msg}</p>
      </div>
    </div>
  );
};

export default How;
