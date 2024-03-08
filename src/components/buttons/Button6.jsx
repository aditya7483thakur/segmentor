import React from "react";
import PropTypes from "prop-types";
import "./Button6.css";

const Button6 = ({ onClick, children = "Button", className, ...rest }) => {
  return (
    <button
      className={`button-6 ${className}`}
      onClick={onClick}
      {...rest}
      role="button"
    >
      {children}
    </button>
  );
};

Button6.propTypes = {
  className: PropTypes.string,
};

export { Button6 };
