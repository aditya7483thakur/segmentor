import React from "react";
import PropTypes from "prop-types";
import "./Button5.css";

const Button5 = ({ onClick, children, className, ...rest }) => {
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
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Button5.defaultProps = {
  children: "Button",
};

export { Button5 };
