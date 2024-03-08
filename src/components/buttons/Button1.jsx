import React from "react";
import PropTypes from "prop-types";
import "./Button1.css";

const Button1 = ({ onClick, children = "Button", className, ...rest }) => {
  return (
    <button
      className={`button1-pushable ${className}`}
      onClick={onClick}
      {...rest}
      role="button"
    >
      <span className="button1-shadow"></span>
      <span className="button1-edge"></span>
      <span className="button1-front text">{children}</span>
    </button>
  );
};

Button1.propTypes = {
  className: PropTypes.string,
};

export { Button1 };
