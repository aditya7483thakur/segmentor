import React from "react";
import PropTypes from "prop-types";
import "./Card3.css";

const Card3 = ({ imageurl, altText = "Image..", className, ...rest }) => {
  return (
    <div className={`container3 ${className}`} {...rest}>
      <div className="card3_box">
        <span></span>
        <img src={imageurl} alt={altText} />
      </div>
    </div>
  );
};

Card3.propTypes = {
  imageurl: PropTypes.string,
  altText: PropTypes.string,
  className: PropTypes.string,
};

export { Card3 };
