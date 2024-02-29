import React from "react";
import PropTypes from "prop-types";
import "./Toggle4.css";
const Toggle4 = ({ className, id, checked, onChange, ...rest }) => {
  return (
    <>
      <label className={`switch4 ${className}`} {...rest}>
        <input type="checkbox" onChange={onChange} checked={checked} />
        <span className="slider4"></span>
      </label>
    </>
  );
};

Toggle4.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export { Toggle4 };
