import React from "react";
import PropTypes from "prop-types";
import "./Button5.css";

const Button5 = ({ onClick, children = "Button", className, ...rest }) => {
  return (
    <button
      className={`button-5 ${className}`}
      onClick={onClick}
      {...rest}
      role="button"
    >
      {children}
    </button>
  );
};

Button5.propTypes = {
  className: PropTypes.string,
};

export { Button5 };
