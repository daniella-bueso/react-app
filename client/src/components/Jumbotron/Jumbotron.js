import React from "react";
import "./Jumbotron.css";

const Jumbotron = ({ children }) => (
  <div style={{ height: 220, clear: "both" }} className="jumbotron">
    {children}
  </div>
);

export default Jumbotron;
