import React from "react";
import PropTypes from "prop-types";
import "./Button6.css";

const Button6 = ({ onClick, children, className, ...rest }) => {
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
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Button6.defaultProps = {
  children: "Button",
};

export { Button6 };
