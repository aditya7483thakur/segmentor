import React from "react";
import PropTypes from "prop-types";
import "./Toggle3.css";
const Toggle3 = ({ className, id, checked, onChange, ...rest }) => {
  return (
    <>
      <label className={`rocker3 rocker-small3 ${className}`} {...rest}>
        <input type="checkbox" onChange={onChange} checked={checked} />
        <span className="switch-left3">Yes</span>
        <span className="switch-right3">No</span>
      </label>
    </>
  );
};

Toggle3.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export { Toggle3 };
