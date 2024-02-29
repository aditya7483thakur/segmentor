import React from "react";
import PropTypes from "prop-types";
import "./Toggle1.css";

const Toggle1 = ({ className, id, checked, onChange, ...rest }) => {
  return (
    <div className={`toggle1 ${className}`} {...rest}>
      <input
        className="yep"
        id="toggle-apple1"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor="toggle-apple1"></label>
    </div>
  );
};

Toggle1.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export { Toggle1 };
