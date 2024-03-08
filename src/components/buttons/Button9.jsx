import React from "react";
import PropTypes from "prop-types";
import "./Button9.css";

const Button9 = ({ onClick, children = "Button", className, ...rest }) => {
  return (
    <button
      className={`button-9 ${className}`}
      onClick={onClick}
      {...rest}
      role="button"
    >
      {children}
    </button>
  );
};

Button9.propTypes = {
  className: PropTypes.string,
};

export { Button9 };
