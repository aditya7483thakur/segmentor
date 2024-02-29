import React from "react";
import PropTypes from "prop-types";
import "./Toggle2.css";
const Toggle2 = ({ className, id, checked, onChange, ...rest }) => {
  return (
    <div className={`checkbox-wrapper2 ${className}`} {...rest}>
      <input type="checkbox" onChange={onChange} checked={checked} />
    </div>
  );
};

Toggle2.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export { Toggle2 };
