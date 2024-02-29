import React from "react";
import PropTypes from "prop-types";
import "./Button9.css";

const Button9 = ({ onClick, children, className, ...rest }) => {
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
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Button9.defaultProps = {
  children: "Button",
};

export { Button9 };
