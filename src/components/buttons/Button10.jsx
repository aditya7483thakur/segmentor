import React from "react";
import PropTypes from "prop-types";
import "./Button10.css";

const Button10 = ({ onClick, children = "Button", className, ...rest }) => {
  return (
    <button
      className={`button-10 ${className}`}
      onClick={onClick}
      {...rest}
      role="button"
    >
      {children}
    </button>
  );
};

Button10.propTypes = {
  className: PropTypes.string,
};

export { Button10 };
