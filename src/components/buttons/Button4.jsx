import React from "react";
import PropTypes from "prop-types";
import "./Button4.css";

const Button4 = ({ onClick, children = "Button", className, ...rest }) => {
  return (
    <button
      className={`button-4 ${className}`}
      onClick={onClick}
      {...rest}
      role="button"
    >
      {children}
    </button>
  );
};

Button4.propTypes = {
  className: PropTypes.string,
};

export { Button4 };
