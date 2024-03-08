import React from "react";
import PropTypes from "prop-types";
import "./Button3.css";

const Button3 = ({ onClick, children = "Button", className, ...rest }) => {
  return (
    <button
      className={`button-3 ${className}`}
      onClick={onClick}
      {...rest}
      role="button"
    >
      <span className="text">{children}</span>
    </button>
  );
};

Button3.propTypes = {
  className: PropTypes.string,
};

export { Button3 };
