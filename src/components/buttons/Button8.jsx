import React from "react";
import PropTypes from "prop-types";
import "./Button8.css";

const Button8 = ({ onClick, children, className, ...rest }) => {
  return (
    <button
      className={`button-8 ${className}`}
      onClick={onClick}
      {...rest}
      role="button"
    >
      {children}
    </button>
  );
};

Button8.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Button8.defaultProps = {
  children: "Button",
};

export { Button8 };
