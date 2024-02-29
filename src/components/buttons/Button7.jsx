import React from "react";
import PropTypes from "prop-types";
import "./Button7.css";

const Button7 = ({ onClick, children, className, ...rest }) => {
  return (
    <button
      className={`button-7 ${className}`}
      onClick={onClick}
      {...rest}
      role="button"
    >
      {children}
    </button>
  );
};

Button7.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Button7.defaultProps = {
  children: "Button",
};

export { Button7 };
