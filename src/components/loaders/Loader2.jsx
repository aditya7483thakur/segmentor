import React from "react";
import "./Loader2.css";

const Loader2 = () => {
  return (
    <div className="pyramid-loader">
      <div className="wrapper">
        <span className="side side1"></span>
        <span className="side side2"></span>
        <span className="side side3"></span>
        <span className="side side4"></span>
        <span className="shadow"></span>
      </div>
    </div>
  );
};

export { Loader2 };
