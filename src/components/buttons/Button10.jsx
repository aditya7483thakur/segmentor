import React from "react";
import PropTypes from "prop-types";
import "./Button10.css";

const Button10 = ({ onClick, children, className, ...rest }) => {
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
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Button10.defaultProps = {
  children: "Button",
};

export { Button10 };
