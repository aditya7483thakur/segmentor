import React from "react";
import PropTypes from "prop-types";
import "./Toggle5.css";
const Toggle5 = ({ className, id, checked, onChange, ...rest }) => {
  return (
    <>
      <label className={`switch5 ${className}`} {...rest}>
        <input
          type="checkbox"
          onChange={onChange}
          checked={checked}
          className="toggle5"
        />
        <span className="slider5"></span>
        <span className="card-side5"></span>
      </label>
    </>
  );
};

Toggle5.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export { Toggle5 };
