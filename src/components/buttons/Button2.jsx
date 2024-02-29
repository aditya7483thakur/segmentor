import React from "react";
import PropTypes from "prop-types";
import "./Button2.css";

const Button2 = ({ onClick, children, className, ...rest }) => {
  return (
    <button
      className={`button-2 ${className}`}
      onClick={onClick}
      {...rest}
      role="button"
    >
      {children}
    </button>
  );
};

Button2.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Button2.defaultProps = {
  children: "Button",
};

export { Button2 };
